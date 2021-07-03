import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './pages/Home'
import Areas from "./components/areas/Areas";
import Map from "./components/map/Map";
import Market from "./components/market/Market";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Areas} path="/areas" />
        <Route component={Areas} path="/areas/:slug" />
        <Route component={Areas} path="/create-area" />
        
        <Route component={Map} path="/map" />

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
