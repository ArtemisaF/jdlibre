import React,{ Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import home from "./Componentes/home";
import NEWPAG from "./Componentes/NEWPAG";
class App extends Component {

    render() {
        return(

        <BrowserRouter>
            <Switch>
                <Route exact path="\"
                       component={home}/>
                <Route
                    exact
                    path="\"
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
