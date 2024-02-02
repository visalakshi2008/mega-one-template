import React, { useState } from 'react';
import { Button, Col, Image, Row, Drawer, Modal, Typography, Input, Form, Checkbox } from 'antd';
import { Link } from 'react-scroll';
import logo from "../images/logo.png";
import { FacebookFilled, InstagramFilled, MenuOutlined, TwitterSquareFilled } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';
import TextArea from 'antd/es/input/TextArea';

const CustomHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 756 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { TextArea } = Input;
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const closeIcon = (
    <div
      style={{
        backgroundColor: '#f023b6',
        borderRadius: '50%',
        padding: "8px",

        cursor: 'pointer'
      }}>
      <Typography
        style={{
          justifyContent: "center",
          color: "#fff",
          fontSize: "15px"
        }}>X</Typography>
    </div>
  );

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

              <Button onClick={showModal}
                style={{
                  backgroundColor: 'transparent',
                  color: '#fff',
                  fontFamily: 'sans-serif',
                  borderRadius: '20px',
                  padding: '5px 20px',
                }}>
                Get A Quote
              </Button>

              <Modal
                visible={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                closeIcon={closeIcon}
                width={1200}
              >

                <Row gutter={[16, 16]} justify="center">
                  <Col
                    span={24}
                    style={{ textAlign: 'center' }}>
                    <Typography style={{ color: '#696969', fontSize: '18px' }}>We are megaone company</Typography>
                    <Typography style={{ color: '#404854', fontSize: '40px' }}>Let's Start Your Website</Typography>
                  </Col>
                  <Col span={10}
                    // xxl={24}
                    // xl={24}
                    // lg={24}
                    // md={24}
                    // sm={24}
                    // xs={24}
                    justify="center">
                    <Form layout="vertical">
                      <Form.Item >
                        <Input
                          placeholder="Name"
                          style={{
                            borderLeft: 'none',
                            borderRight: 'none',
                            borderTop: 'none',
                          }}
                        />
                      </Form.Item>
                    </Form>
                  </Col>
                  <Col span={10} justify="center">
                    <Form layout="vertical">
                      <Form.Item >
                        <Input
                          placeholder="Email"
                          style={{
                            borderLeft: 'none',
                            borderRight: 'none',
                            borderTop: 'none',
                          }}
                        />
                      </Form.Item>
                    </Form>
                  </Col>
                  <Col span={10} justify="center">
                    <Form layout="vertical">
                      <Form.Item >
                        <Input
                          placeholder="Contact#"
                          style={{
                            borderLeft: 'none',
                            borderRight: 'none',
                            borderTop: 'none',
                          }}
                        />
                      </Form.Item>
                    </Form>
                  </Col>
                  <Col span={10} justify="center">
                    <Form layout="vertical">
                      <Form.Item >
                        <Input
                          placeholder="City/Company"
                          style={{
                            borderLeft: 'none',
                            borderRight: 'none',
                            borderTop: 'none',
                          }}
                        />
                      </Form.Item>
                    </Form>
                  </Col>
                  <Col span={10} justify="center">
                    <Form layout="vertical">
                      <Form.Item >
                        <Input
                          placeholder="Project Type"
                          style={{
                            borderLeft: 'none',
                            borderRight: 'none',
                            borderTop: 'none',
                          }}
                        />
                      </Form.Item>
                    </Form>
                  </Col>
                  <Col span={10} justify="center">
                    <Form layout="vertical">
                      <Form.Item >
                        <Input
                          placeholder="Budget"
                          style={{
                            borderLeft: 'none',
                            borderRight: 'none',
                            borderTop: 'none',
                          }}
                        />
                      </Form.Item>
                    </Form>
                  </Col>
                  <Col span={20} justify="center">
                    <TextArea placeholder='textarea' />
                  </Col>
                  <Col span={20} align="center">
                    <Checkbox onChange={onChange}>Contact by hone ins preffered</Checkbox>
                  </Col>
                  <Col span={20} align="center">
                    <Button type='primary'
                      style={{
                        paddingBlock: "25px",
                        justifyContent: "center",
                        display: "flex",
                        alignItems: "center",
                        borderRadius: "30px",
                        paddingLeft: "40px",
                        paddingRight: "40px"
                      }}>Send Message</Button>
                  </Col>
                </Row>

              </Modal>

              <FacebookFilled style={{ color: "#fff", fontFamily: "sans-serif" }} />
              <InstagramFilled style={{ color: "#fff", fontFamily: "sans-serif" }} />
              <TwitterSquareFilled style={{ color: "#fff", fontFamily: "sans-serif" }} />
            </div>
          </Col>
        )}

      </Row >

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
