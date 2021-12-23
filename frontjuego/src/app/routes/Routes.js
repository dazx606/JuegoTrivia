import {Switch, Route} from 'react-router' 
import Game from '../pages/Game';
import Home from '../pages/Home';
import Login from '../pages/Login';

export default function Routes(){
    return (
        <Switch>
            <Route exact path={"/Login"} component={Login}></Route>
            <Route exact path={"/Game"} component={Game}></Route>
            <Route exact path={"/"} component={Home}></Route>
        </Switch>
    );
}