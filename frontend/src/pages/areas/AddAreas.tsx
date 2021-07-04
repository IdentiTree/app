import BaseLayout from "../../layout/BaseLayout";
import Map from "../../components/Map";
import { Box, Button, Drawer, makeStyles } from "@material-ui/core";
import { Theme } from '../../theme/types';
import { useState } from "react";
import type { LatLngExpression } from 'leaflet';
import AreaTypes from '../../components/areas/AreaTypes';


export default function AddArea() {
    const classes = useStyles();
    const [newArea, setNewArea] = useState<LatLngExpression[]>([]); 
    const [openDrawer, setOpenDrawer] = useState<boolean>(false); 

    return (
        <BaseLayout>
            <Box className={classes.mapBox}  display="flex" flexDirection="column" height="75vh">
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
                    <AreaTypes
                        types={[
                            { type: 'Lorem', id: 0 },
                            { type: 'Ipsum', id: 1 },
                            { type: 'Dolor', id: 2 },
                        ]}
                        onChange={(area) => console.log(area)}
                    />
                    <Button
                        color="primary"
                        size="large"
                        variant="contained"
                        onClick={() => console.log('TODO')}>
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
    }
}));