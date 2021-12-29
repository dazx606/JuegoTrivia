import {Switch, Route} from 'react-router' 
import Game from '../pages/Game';
import Home from '../pages/Home';
import Admin from '../pages/Admin';

export default function Routes(){
    return (
        <Switch>
            <Route exact path={"/Game"} component={Game}></Route>
            <Route exact path={"/"} component={Home}></Route>
            <Route exact path={"/Admin"} component={Admin}></Route>
        </Switch>
    );
}