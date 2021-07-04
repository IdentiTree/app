import BaseLayout from "../../layout/BaseLayout";
import Map from "../../components/Map";
import { useHistory } from 'react-router';
import { Box, Button, Drawer, makeStyles, TextField, Typography } from "@material-ui/core";
import { Theme } from '../../theme/types';
import { useEffect, useState } from "react";
import type { LatLngExpression } from 'leaflet';
import AreaTypes, { AreaType } from '../../components/areas/AreaTypes';
import { polygon as turfPolygon, area as turfArea } from '@turf/turf';

export default function AddArea() {
    const classes = useStyles();
    const history = useHistory();
    const [name, setName] = useState<string>();
    const [newArea, setNewArea] = useState<LatLngExpression[]>([]); 
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);
    const [types, setTypes] = useState<[]>([]); 
    const [areaTypes, setAreaTypes] = useState<AreaType[]>([]); 
    
    useEffect(() => {
        fetch('/api/areas/types')
            .then(response => response.json())
            .then(data => setTypes(data));
    }, []);

    const submitArea = async () => {

        //@ts-ignore
        const polygon = turfPolygon([[...newArea.map(value => [value.lng, value.lat]), [newArea[0].lng, newArea[0].lat]]]);
        const area = turfArea(polygon);

        await fetch('/api/areas/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": name,
                "coordinates": [newArea],
                "area": area / 10000,
                "biomes": areaTypes,
            })
        });
        
        history.push('/areas')
    };

    return (
        <BaseLayout>
            <Box className={classes.mapBox}  display="flex" flexDirection="column">
                <Box flexGrow="1" margin={"1rem"}>
                    <Map
                        mode="draw"
                        center={[51.505, -0.09]}
                        onAreaCreate={(area) => setNewArea(area)}
                    />
                </Box>
            </Box>
            <div className={classes.saveButton}>
                <Button
                    className={classes.addButton}
                    variant="contained"
                    color="primary"
                    disabled={!newArea.length} 
                    onClick={() => setOpenDrawer(true)}
                >
                    Add area
                </Button>
            </div>
            <Drawer anchor={'bottom'} open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <Box className={classes.overlay}>
                    <Typography variant="h4">Add Area</Typography>
                    <Typography color="textSecondary" style={{marginBottom: 16}}>Please select a percentage for each type of area.</Typography>
                    <TextField
                        className={classes.textField}
                        id='area-type'
                        type='text'
                        label="Area Name"
                        variant="filled"
                        value={name}
                        onChange={({target: {value}}) => setName(value)}
                    />
                    <AreaTypes
                        types={types}
                        onChange={(areaTypes) => setAreaTypes(areaTypes)}
                    />
                    <Button
                        style={{marginTop: 16}}
                        color="primary"
                        size="large"
                        variant="contained"
                        onClick={() => submitArea()}>
                        Submit Area
                    </Button>
                </Box>
            </Drawer>
        </BaseLayout>
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    saveButton: {
        display: "flex",
        justifyContent: "center"
    },
    mapBox: {
        height: 'calc(100vh - 130px)',
    },
    overlay: {
        padding: theme.spacing(5),
    },
    addButton: {
        position: 'absolute',
        bottom: 65,
        right: 8,
        zIndex: 1000,
    },
    textField: {
        width: '100%',
        marginBottom: 16,
    },
}));
