import BaseLayout from "../layout/BaseLayout"
import Map from "../components/Map"
import { Box } from "@material-ui/core"

function Home() {
  return (
    <BaseLayout>
      <Box display="flex" flexDirection="column" height="100vh">
      <h1>Home</h1>
      <Box flexGrow="1">
        <Map
          mode="draw"
          center={[51.505, -0.09]}
          onAreaCreate={(area) => console.log(area)}
        />
      </Box>
      <Box flexGrow="1">
      <Map
        mode="place"
        center={[51.505, -0.09]}
        overlays={[
          {polygon: [
            [51.515, -0.09],
            [51.52, -0.1],
            [51.52, -0.12],
          ], options: { fillColor: 'lime' }}
        ]}
        markers={[{position: [51.519, -0.10]}]}
        onPlace={(pos) => console.log(pos)}
        onMarkerSelect={(marker) => console.log(marker)}
      />
      </Box>
      </Box>
    </BaseLayout>
  )
}

export default Home
