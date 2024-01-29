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

const headerStyle = {
  color: '#000',
  height: "100vh",
  paddingInline: 48,
  background: 'linear-gradient(to right, #3264f5 2%, #7004bc 82%)',
  paddingTop: "30px",

};

const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};



ReactDOM.render(
  <React.StrictMode>

    <Layout >
      <Header style={headerStyle}>
        <CustomHeader />
        <HeroSection />
      </Header>
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
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
