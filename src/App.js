import React,{ Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import home from "./Componentes/home";
import NEWPAG from "./Componentes/NEWPAG";
class App extends Component {

    render() {
        return(

        <BrowserRouter>
            <Switch>
                <Route exact path="host=jd-libre.herokuapp.com"
                       component={home}/>
                <Route
                    exact
                    path="host=jd-libre.herokuapp.com"
                    render={() => <home/>} />
                <Route
                    exact
                    path="/NUEVO"
                    render={() => <NEWPAG></NEWPAG>} />
                <Route component={home} />
            </Switch>
        </BrowserRouter>
        );
    }


}

export default App;
