import {Box, Typography} from "@material-ui/core";
import Map from "../../components/Map";
import BaseLayout from "../../layout/BaseLayout";

export default function MapTree() {
    return (
        <BaseLayout>
            <h1>Map</h1>
            <Typography variant="h6">Add trees</Typography>
            <Box display="flex" flexDirection="column" height="80vh">
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
        </BaseLayout>
    )
}
