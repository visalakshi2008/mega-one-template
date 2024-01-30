import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/CustomHeader';
import reportWebVitals from './reportWebVitals';
import { Layout } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import CustomHeader from './components/CustomHeader';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import AboutUsTwo from './components/AboutUsTwo';
import AboutUsThree from './components/AboutUsThree';
import AboutUsFour from './components/AboutUsFour';
import OurWork from './components/OurWork';
import OurClients from './components/OurClients';
import OurBlog from './components/OurBlog';
import MapSection from './components/MapSection';
import ContactUs from './components/ContactUs';
import CustomFooter from './components/CustomFooter';

ReactDOM.render(
  <React.StrictMode>

    <Layout >

      <CustomHeader />
      <div style={{ paddingTop: "64px" }}>

        <HeroSection />
        <AboutUs />
        <AboutUsTwo />
        <AboutUsThree />
        <AboutUsFour />
        <OurWork />
        <OurClients />
        <OurBlog />
        <MapSection />
        <ContactUs />
        <CustomFooter />
      </div>
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
