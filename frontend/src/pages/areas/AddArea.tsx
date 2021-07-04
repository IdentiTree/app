import BaseLayout from "../../layout/BaseLayout";
import Map from "../../components/Map";
import {Box, Button, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles({
    saveButton: {
        display: "flex",
        justifyContent: "center"
    }
});

export default function AddArea() {
    const classes = useStyles();

    return (
        <BaseLayout>
            <h1>Map</h1>
            <Typography variant="h6">Draw an area</Typography>
            <Box display="flex" flexDirection="column" height="75vh">
                <Box flexGrow="1" margin={"1rem"}>
                    <Map
                        mode="draw"
                        center={[51.505, -0.09]}
                        onAreaCreate={(area) => console.log(area)}
                    />
                </Box>
            </Box>
            <div className={classes.saveButton}>
                <Button variant="contained" color="primary" disabled={true}>Add area</Button>
            </div>
        </BaseLayout>
    )
}
