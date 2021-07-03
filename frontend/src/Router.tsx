import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './pages/Home'

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/market" />
        <Route component={Home} path="/market/bid" />
        <Route component={Home} path="/market/sell" />

        <Route component={Home} path="/areas" />
        <Route component={Home} path="/areas/:slug" />
        <Route component={Home} path="/create-area" />
        
        <Route component={Home} path="/map" />

        <Route component={Home} path="/login" />
        
        <Route component={Home} path="/" />
      </Switch>
    </BrowserRouter>
  )
}

export default Router