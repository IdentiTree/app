import BaseLayout from "../../layout/BaseLayout";
import Map from "../../components/Map";
import {Box, Button, Drawer, makeStyles, MenuItem, Select, Typography} from "@material-ui/core";
import { useEffect, useState } from "react";
import type { LatLngExpression } from 'leaflet';

const useStyles = makeStyles({
    saveButton: {
        display: "flex",
        justifyContent: "center"
    }
});

export default function AddArea() {
    const classes = useStyles();
    const [newArea, setNewArea] = useState<LatLngExpression[]>([]); 
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);
    const [types, setTypes] = useState([]);

    useEffect(() => {
        fetch('/api/areas/types')
            .then(response => response.json())
            .then(data => setTypes(data));
    }, []);

    const submitArea = async () => {
        await fetch('/api/areas', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({a: 1, b: 'Textual content'})
          });
          // TODO: go to area list
    };

    return (
        <BaseLayout>
            <h1>Map</h1>
            <Typography variant="h6">Draw an area</Typography>
            <Box display="flex" flexDirection="column" height="75vh">
                <Box flexGrow="1" margin={"1rem"}>
                    <Map
                        mode="draw"
                        center={[51.505, -0.09]}
                        onAreaCreate={(area) => setNewArea(area)}
                    />
                </Box>
            </Box>
            <div className={classes.saveButton}>
                <Button variant="contained" color="primary" disabled={!newArea.length} onClick={() => setOpenDrawer(true)}>Add area</Button>
            </div>
            <Drawer anchor={'bottom'} open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <Box height="50vh">
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={10}
                    onChange={() => undefined}
                    >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </Box>
            </Drawer>
        </BaseLayout>
    )
}
