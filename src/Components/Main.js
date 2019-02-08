import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Grid from '@material-ui/core/Grid'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Header from './Header';
import NavBar from './NavBar';
import Bio from './Bio';
import Issues from './Issues';
import Experience from './Experience';
import Interests from './Interests';
import Endorsements from './Endorsements';
import Footer from './Footer';
import theme from './theme';

const muiTheme = createMuiTheme(theme)

const App = () => (
    <div className="app">
        <MuiThemeProvider theme={muiTheme}>
            {/* <NavBar/> */}
            <Router>
                <div className="app">
                    <NavBar />
                    <Header />
                    <Grid container spacing={8} justify="center" alignItems="flex-start">

                        <Grid container item xs={8}>
                            <Switch>
                                <Route path="/bio" component={Bio} />
                                <Route path="/issues" component={Issues} />
                                <Route path="/experience" component={Experience} />
                                <Route path="/interest" component={Interests} />
                                <Route path="/endorsements" component={Endorsements} />
                            </Switch>
                        </Grid>
                    </Grid>
                </div>
            </Router>
            <Footer />
        </MuiThemeProvider>
    </div>
);


export default App;