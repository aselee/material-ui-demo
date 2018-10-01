import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Pic from './codebrain.jpg';
import Intro from './components/Intro';
import Mdtest from './components/Mdtest';


class Template extends React.Component {

  render () {
    return (
      <React.Fragment>
        <CssBaseline />
        {/* Header section */}
          <Header/>
        {/* Pic of me and title */}
          <main>
            <div>
              <img src={Pic}/>
            </div>
            <Intro/>
            <Mdtest/>
            
            <MainContent/>
          </main>
        {/* Adding Footer */}
          <Footer/>
        {/* End of Footer */}
      </React.Fragment>
    );
  };
};

export default Template;

// export default withStyles(styles)(Template);