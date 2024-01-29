import React from 'react';
import { Button, Col, Form, Input, Row, Typography } from 'antd';
import { FacebookFilled, FacebookOutlined, GooglePlusCircleFilled, HomeOutlined, InstagramFilled, LinkedinFilled, MailOutlined, PhoneOutlined, PrinterFilled, TwitterOutlined } from '@ant-design/icons';
// import TextArea from 'antd/es/input/TextArea';
const { TextArea } = Input;

const ContactUs = () => {
    return (
        <Row gutter={[16, 16]}
            style={{ display: "flex", justifyContent: "center", paddingBottom: "180px" }}>

            <Col span={10} style={{ paddingTop: "120px" }}>
                <Form layout='vertical'>
                    <Typography style={{
                        paddingBottom: "25px",
                        fontSize: "40px", fontWeight: 700
                    }}>
                        Get In Touch
                    </Typography>

                    <div style={{ display: "flex" }}>
                        <div style={{ width: "50%", marginRight: "10px" }}>
                            <Form.Item>
                                <Input
                                    type='text'
                                    placeholder='Name'
                                    style={{
                                        width: '100%',
                                        paddingBlock: "12px"
                                    }}
                                />
                            </Form.Item>
                            <Form.Item>
                                <Input
                                    type='text'
                                    placeholder='Email'
                                    style={{
                                        width: '100%',
                                        paddingBlock: "12px"
                                    }}
                                />
                            </Form.Item>
                            <Form.Item>
                                <Input
                                    type='text'
                                    placeholder='Subject'
                                    style={{
                                        width: '100%',
                                        paddingBlock: "12px"
                                    }}
                                />
                            </Form.Item>

                        </div>

                        <div style={{ width: "50%" }}>
                            <Form.Item>
                                <TextArea rows={8} placeholder="maxLength is 6" maxLength={6} />
                            </Form.Item>

                        </div>
                    </div>
                    <div>
                        <Button
                            style={{

                                width: "100%",
                                paddingBlock: "20px",
                                justifyContent: "center",
                                display: "flex",
                                alignItems: "center",
                                backgroundColor: "blue",
                                color: "#fff",
                                borderRadius: "30px"
                            }}>Send Message</Button>
                    </div>
                </Form>
            </Col>


            <Col span={7} style={{ paddingTop: "120px" }}>
                <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
                    <Typography style={{
                        paddingBottom: "25px",
                        fontSize: "40px", fontWeight: 700,
                        paddingBottom: "25px"
                    }}>
                        Our Location</Typography>

                    <Typography style={{ paddingBottom: "48px" }}>
                        There are many variations of passages of
                        Lorem Ipsum available,
                        <br /> but the majority have suffered .
                    </Typography>
                    <Typography style={{ paddingBottom: "25px", }}>
                        <HomeOutlined style={{
                            color: '#3264f5',
                            fontSize: "30px",
                            paddingRight: "20px"
                        }} /> 123 Park Avenue, New York,United States
                    </Typography>
                    <Typography style={{ paddingBottom: "30px" }}>
                        <PhoneOutlined style={{
                            color: '#3264f5',

                            fontSize: "30px",
                            paddingRight: "20px"

                        }} />

                        +1 631 1234 5678+1 631 1234 5678
                    </Typography>
                    <Typography style={{ paddingBottom: "30px", color: "#039af5" }}>
                        <MailOutlined style={{
                            color: '#3264f5',
                            fontSize: "30px",
                            paddingRight: "20px"

                        }} />
                        email@website.comabc ,     @website.com

                    </Typography>
                </div>
            </Col>


        </Row >
    );
};

export default ContactUs;
