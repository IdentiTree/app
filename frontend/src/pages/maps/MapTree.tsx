import React from 'react';
import { Box, makeStyles, Drawer, Typography, Button, TextField, Select, MenuItem } from "@material-ui/core";
import { Theme } from '../../theme/types';
import Map from "../../components/Map";
import BaseLayout from "../../layout/BaseLayout";
import { Area } from '../../../../types/common/Area';
import { useEffect, useState } from "react";
import { Tree } from "../../../../types/common/Tree";

const treeTypes = ['Type 1', 'Type 2', 'Type 3']

export default function MapTree() {
    const classes = useStyles()
    const [areas, setAreas] = useState<Area[]>([]);
    const [trees, setTrees] = useState<Tree[]>([]);

    useEffect(() => {
        fetch('/api/area')
            .then(response => response.json())
            .then(data => setAreas(data));
    }, []);

    useEffect(() => {
        fetch('/api/trees')
            .then(response => response.json())
            .then(data => setAreas(data));
    }, []);
    const [type, setType] = React.useState<string>(treeTypes[0])
    const [circumference, setCircumference] = React.useState<number>(0)
    const [height, setHeight] = React.useState<number>(0)
    const [openDrawer, setOpenDrawer] = React.useState<boolean>(true);
    
    const handleType = (event: React.ChangeEvent<{ value: unknown }>) => { setType(event.target.value as string); };

    const handleCircumference = (event: React.ChangeEvent<{ value: unknown }>) => {
        setCircumference(event.target.value as number)
    }

    const handleHeight = (event: React.ChangeEvent<{ value: unknown }>) => {
        setHeight(event.target.value as number)
    }

    const handleSubmit = () => {
        console.log('TODO')
    }

    return (
        <BaseLayout>
            <Box className={classes.mapBox} display="flex" flexDirection="column">
                <Box flexGrow="1" margin={"1rem"}>
                    <Map
                        mode="place"
                        center={[51.505, -0.09]}
                        overlays={[
                            {
                                polygon: [
                                    [51.515, -0.09],
                                    [51.52, -0.1],
                                    [51.52, -0.12],
                                ], options: {fillColor: 'lime'}
                            }
                        ]}
                        markers={[
                            {position: [51.519, -0.10], type: "quest"},
                            {position: [51.519, -0.11], type: "entity"}]
                        }
                        onPlace={(pos) => console.log(pos)}
                        onMarkerSelect={(marker) => console.log(marker)}
                    />
                </Box>
            </Box>
            <Drawer anchor={'bottom'} open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <Box className={classes.overlay}>
                    <Typography variant="h4">Add a tree</Typography>
                    <Select
                        className={classes.select}
                        label="Type"
                        variant="filled"
                        value={type}
                        onChange={handleType}
                    >
                        {treeTypes.map((treeType) => (
                            <MenuItem value={treeType}>
                                {treeType}
                            </MenuItem>
                        ))}
                    </Select>
                    <TextField
                        className={classes.textField}
                        id='tree-circumference'
                        type='number'
                        label="Circumference"
                        variant="filled"
                        value={circumference}
                        onChange={handleCircumference}
                    />
                    <TextField
                        className={classes.textField}
                        id='tree-height'
                        type='number'
                        label="Height"
                        variant="filled"
                        value={height}
                        onChange={handleHeight}
                    />
                    <Button
                        style={{marginTop: 16}}
                        color="primary"
                        size="large"
                        variant="contained"
                        onClick={handleSubmit}>
                        Submit Tree
                    </Button>
                </Box>
            </Drawer>
        </BaseLayout>
    )
}


const useStyles = makeStyles((theme: Theme) => ({
    mapBox: {
        height: 'calc(100vh - 130px)',
    },
    overlay: {
        padding: theme.spacing(5),
    },
    textField: {
        width: '100%',
    },
    select: {
        width: '100%',
    },
}));
