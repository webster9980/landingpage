import React, {Fragment} from 'react';
import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import Prices from './components/prices/Prices';
import Tecnologies from './components/Tecnologies/Tecnologies';
import Footer from './components/footer/Footer'

function App() {

  return (
    <Fragment>
      <Header />
      <Banner />
      <Tecnologies />
      <Prices />
      <Footer />
    </Fragment>

  );
}

export default App;
