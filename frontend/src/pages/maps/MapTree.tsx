import {Box, makeStyles} from "@material-ui/core";
import { Theme } from '../../theme/types';
import Map from "../../components/Map";
import BaseLayout from "../../layout/BaseLayout";

export default function MapTree() {
    const classes = useStyles()
    
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
        </BaseLayout>
    )
}


const useStyles = makeStyles((theme: Theme) => ({
    mapBox: {
        height: 'calc(100vh - 130px)',
    },
}));
