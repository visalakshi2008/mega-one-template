import React, { useState } from 'react';
import { Button, Col, Image, Row, Drawer, } from 'antd';
import { Link } from 'react-scroll';
import logo from "../images/logo.png";
import { FacebookFilled, InstagramFilled, MenuOutlined, TwitterSquareFilled } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';

const CustomHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 756 });

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Row
        style={{
          position: 'fixed',
          top: "0",
          width: '100%',
          height: "64px",
          zIndex: 100,
          background: 'linear-gradient(to right, #3264f5 2%, #7004bc 82%)',
        }}
      >
        <Col
          xs={{ span: 6 }}
          sm={{ span: 6 }}
          md={{ span: 6 }}
          lg={{ span: 4 }}
          xl={{ span: 5 }}
          xxl={{ span: 4 }}
          style={{

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ display: 'flex', gap: "10px" }}>
            <MenuOutlined style={{ color: "#fff", fontSize: "20px", paddingLeft: "10px" }} onClick={handleMenuClick} />
            <Image src={logo} preview={false} />
          </div>
        </Col>

        {!isSmallScreen && (
          <Col
            xxl={{ span: 12 }}
            xl={{ span: 16 }}
            lg={{ span: 18, offset: 2 }}
            md={{ span: 19, offset: 1 }}
            sm={{ span: 15, offset: 1 }}
            style={{
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <Link to="home" smooth={true} duration={500} style={{ color: '#fff', fontFamily: 'sans-serif' }}>
                Home
              </Link>
              <Link to="about" smooth={true} duration={500} style={{ color: '#fff', fontFamily: 'sans-serif' }}>
                About Us
              </Link>
              <Link to="ourWork" smooth={true} duration={500} style={{ color: '#fff', fontFamily: 'sans-serif' }}>
                Our Work
              </Link>
              <Link to="clients" smooth={true} duration={500} style={{ color: '#fff', fontFamily: 'sans-serif' }}>
                Clients
              </Link>
              <Link to="ourBlog" smooth={true} duration={500} style={{ color: '#fff', fontFamily: 'sans-serif' }}>
                Our Blog
              </Link>
              <Link to="contactUs" smooth={true} duration={500} style={{ color: '#fff', fontFamily: 'sans-serif' }}>
                Contact Us
              </Link>
              <Button
                style={{
                  backgroundColor: 'transparent',
                  color: '#fff',
                  fontFamily: 'sans-serif',
                  borderRadius: '20px',
                  padding: '5px 20px',
                }}
              >
                Get A Quote
              </Button>
              <FacebookFilled style={{ color: "#fff", fontFamily: "sans-serif" }} />
              <InstagramFilled style={{ color: "#fff", fontFamily: "sans-serif" }} />
              <TwitterSquareFilled style={{ color: "#fff", fontFamily: "sans-serif" }} />
            </div>
          </Col>
        )}

      </Row>

      <Drawer
        title="Menu"
        placement="left"
        onClose={() => setIsMenuOpen(false)}
        visible={isMenuOpen}
        width={200}
      >
        <div>
          <div style={{ padding: '10px 0' }}>
            <Link to="home" smooth={true} duration={500} style={{ color: "red", fontFamily: 'sans-serif', display: 'block' }}>
              Home
            </Link>
          </div>
          <div style={{ padding: '10px 0' }}>
            <Link to="about" smooth={true} duration={500} style={{ color: "red", fontFamily: 'sans-serif', display: 'block' }}>
              About Us
            </Link>
          </div>
          <div style={{ padding: '10px 0' }}>
            <Link to="ourWork" smooth={true} duration={500} style={{ color: "red", fontFamily: 'sans-serif', display: 'block' }}>
              Our Work
            </Link>
          </div>
          <div style={{ padding: '10px 0' }}>
            <Link to="clients" smooth={true} duration={500} style={{ color: "red", fontFamily: 'sans-serif', display: 'block' }}>
              Clients
            </Link>
          </div>
          <div style={{ padding: '10px 0' }}>
            <Link to="ourBlog" smooth={true} duration={500} style={{ color: "red", fontFamily: 'sans-serif', display: 'block' }}>
              Our Blog
            </Link>
          </div>
          <div style={{ padding: '10px 0' }}>
            <Link to="contactUs" smooth={true} duration={500} style={{ color: "red", fontFamily: 'sans-serif', display: 'block' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default CustomHeader;
