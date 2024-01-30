import React from 'react';
import { Button, Col, Image, Row, Typography, } from 'antd';
import { Link } from 'react-scroll';
import logo from "../images/logo.png";
import { FacebookFilled, InstagramFilled, MenuOutlined, TwitterSquareFilled } from '@ant-design/icons';


const CustomHeader = () => {
  return (
    <>
      <Row
        style={{
          position: 'fixed', width: '100%',
          height: "64px",
          zIndex: 100,
          background: 'linear-gradient(to right, #3264f5 2%, #7004bc 82%)',
          padding: "0px 0px"

        }}>
        <Col
          xxl={{ span: 6 }}
          xl={{ span: 5 }}
          lg={{ span: 4 }}
          md={{ span: 4 }}
          sm={{ span: 2 }}
        // style={{ backgroundColor: "red" }}
        >
          <div style={{ display: 'flex', gap: "10px" }}>
            <MenuOutlined style={{ color: "#fff", fontSize: "30px" }} />
            <Image src={logo} />
          </div>
        </Col>

        <Col
          xxl={{ span: 12, }}
          xl={{ span: 16, }}
          lg={{
            span: 18,
            offset: 2
          }}
          md={{
            span: 19,
            offset: 1
          }}
          sm={{
            span: 22,
            // offset: 1
          }}
          style={{
            // backgroundColor: "yellow",
            justifyContent: "center",

            // display: "flex"
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center', height: '100%'
            }}>
            <Link to="home" smooth={true} duration={500}
              style={{ color: '#fff', fontFamily: 'sans-serif' }}>
              Home
            </Link>
            <Link to="about" smooth={true} duration={500}
              style={{ color: '#fff', fontFamily: 'sans-serif' }}>
              About Us
            </Link>

            <Link to="ourWork" smooth={true} duration={500}
              style={{ color: '#fff', fontFamily: 'sans-serif' }}>
              Our Work
            </Link>
            <Link to="clients" smooth={true} duration={500}
              style={{ color: '#fff', fontFamily: 'sans-serif' }}>
              Clients
            </Link>
            <Link to="ourBlog" smooth={true} duration={500}
              style={{ color: '#fff', fontFamily: 'sans-serif' }}>
              Our Blog
            </Link>
            <Link to="contactUs" smooth={true} duration={500}
              style={{ color: '#fff', fontFamily: 'sans-serif' }}>
              Contact Us
            </Link>
            <Button
              style={{
                backgroundColor: 'transparent',
                color: '#fff', fontFamily: 'sans-serif',
                borderRadius: '20px', padding: '5px 20px'
              }}>
              Get A Quote
            </Button>
            <FacebookFilled
              style=
              {{
                color: "#fff",
                fontFamily: "sans-serif"
              }} />
            <InstagramFilled style=
              {{
                color: "#fff",
                fontFamily: "sans-serif"
              }} />
            <TwitterSquareFilled style=
              {{
                color: "#fff",
                fontFamily: "sans-serif"
              }} />
          </div>
        </Col>
      </Row>

    </>
  );
};

export default CustomHeader;
