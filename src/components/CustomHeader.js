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
          xxl={{ span: 4 }}
          xl={{ span: 6 }}
          lg={{ span: 4 }}
          md={{ span: 3 }}
          sm={{ span: 12 }}
          xs={{ span: 8 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",


          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%'
            }}>
            <MenuOutlined
              style={{
                color: "#fff",
                fontSize: "20px",
                paddingLeft: "10px",
              }}
              onClick={handleMenuClick} />
            <Image src={logo} preview={false} />
          </div>
        </Col>

        {!isSmallScreen && (
          <Col
            xxl={{ span: 16 }}
            xl={{ span: 15 }}
            lg={{ span: 19, }}
            md={{ span: 24 }}
            sm={{ span: 16 }}
            style={{
              justifyContent: "space-between",
              // backgroundColor: "yellow"
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'center',
                height: '100%',
                gap: "30px"

              }}
            >
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
        width={250}

        style={{ background: 'linear-gradient(to right, #3264f5 2%, #7004bc 82%)' }}
      >
        <div >
          <div style={{ padding: '10px 0' }}>
            <Link to="home" smooth={true} duration={500} style={{ color: "#fff", fontFamily: 'sans-serif', display: 'block' }}>
              Home
            </Link>
          </div>
          <div style={{ padding: '10px 0' }}>
            <Link to="about" smooth={true} duration={500} style={{ color: "#fff", fontFamily: 'sans-serif', display: 'block' }}>
              About Us
            </Link>
          </div>
          <div style={{ padding: '10px 0' }}>
            <Link to="ourWork" smooth={true} duration={500} style={{ color: "#fff", fontFamily: 'sans-serif', display: 'block' }}>
              Our Work
            </Link>
          </div>
          <div style={{ padding: '10px 0' }}>
            <Link to="clients" smooth={true} duration={500} style={{ color: "#fff", fontFamily: 'sans-serif', display: 'block' }}>
              Clients
            </Link>
          </div>
          <div style={{ padding: '10px 0' }}>
            <Link to="ourBlog" smooth={true} duration={500} style={{ color: "#fff", fontFamily: 'sans-serif', display: 'block' }}>
              Our Blog
            </Link>
          </div>
          <div style={{ padding: '10px 0' }}>
            <Link to="contactUs" smooth={true} duration={500} style={{ color: "#fff", fontFamily: 'sans-serif', display: 'block' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </Drawer >
    </>
  );
};

export default CustomHeader;
