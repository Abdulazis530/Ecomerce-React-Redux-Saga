import React, { Fragment } from 'react';
import Navbar from './components/Navbar'
import BoxProducts from './containers/BoxProducts'
import Footer from './components/Footer'
import './App.css';
import DetailAdds from './containers/DetailAdds';

function App() {
  return (
    <Fragment >
      <Navbar />
      <BoxProducts />
      <Footer/>
    </Fragment>
  );
}

export default App;
