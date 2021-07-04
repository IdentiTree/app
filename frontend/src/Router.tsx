import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './pages/Home'
import AreasOverview from "./pages/areas/AreasOverview";
import Market from "./pages/market/Market";
import AddArea from "./pages/areas/AddArea";
import MapTree from "./pages/maps/MapTree";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={AreasOverview} path="/areas" />
        <Route component={AreasOverview} path="/areas/:slug" />
        <Route component={AddArea} path="/add-area" />
        
        <Route component={MapTree} path="/map" />

        <Route component={Market} path="/market" />
        <Route component={Market} path="/market/bid" />
        <Route component={Market} path="/market/sell" />

        <Route component={Home} path="/login" />
        
        <Route component={Home} path="/" />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
