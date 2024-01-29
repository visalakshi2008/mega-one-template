import React from 'react';
import { StarFilled, StarOutlined } from '@ant-design/icons';
import { Col, Row, Typography, Carousel, Image } from 'antd';


const { Title } = Typography;

const OurClients = () => {
    return (
        <Row id="clients">
            <Col span={24}
                style={{
                    paddingBlock: "150px",
                    background: 'linear-gradient(to right, #3264f5 2%, #7004bc 82%)',
                }}>
                <Typography style={{
                    color: '#fff',
                    textAlign: 'center', fontSize: "40px",
                    color: "#000",
                    paddingBottom: "20px",
                    fontWeight: 700,
                    color: "#fff"
                }}>
                    Some great words from our <br />clients
                </Typography>

                <Row style={{ justifyContent: "center", alignItems: "center" }}>
                    <Col span={8} style={{ textAlign: 'center' }}>
                        <Carousel autoplay>

                            <div >
                                <Typography style={{ paddingBlock: "30px", fontStyle: "italic", color: "#fff" }}>
                                    In publishing and graphic design, Lorem ipsum is a placeholder
                                    text commonly used to demonstrate the visual form of a document
                                    or a typeface without relying on meaningful content. Lorem ipsum
                                    may be used as a placeholder before final.
                                </Typography>
                                <Typography style={{ color: "pink", fontWeight: 600 }}>David Alllis</Typography>
                                <Typography style={{ marginBottom: "20px", color: "#fff" }}>Designer,Company Name</Typography>
                                <div style={{ display: "flex", gap: "20px", paddingBottom: "30px", justifyContent: "center" }}>
                                    <StarFilled style={{ color: "yellow" }} />
                                    <StarFilled style={{ color: "yellow" }} />
                                    <StarFilled style={{ color: "yellow" }} />
                                    <StarFilled style={{ color: "yellow" }} />
                                    <StarFilled style={{ color: "yellow" }} />
                                </div>
                            </div>
                            <div >
                                <Typography style={{ paddingBlock: "30px", fontStyle: "italic", color: "#fff" }}>
                                    In publishing and graphic design, Lorem ipsum is a placeholder
                                    text commonly used to demonstrate the visual form of a document
                                    or a typeface without relying on meaningful content. Lorem ipsum
                                    may be used as a placeholder before final.
                                </Typography>
                                <Typography style={{ color: "pink", fontWeight: 600 }}>David Alllis</Typography>
                                <Typography style={{ marginBottom: "20px", color: "#fff" }}>Designer,Company Name</Typography>
                                <div style={{ display: "flex", gap: "20px", paddingBottom: "30px", justifyContent: "center" }}>
                                    <StarFilled style={{ color: "yellow" }} />
                                    <StarFilled style={{ color: "yellow" }} />
                                    <StarFilled style={{ color: "yellow" }} />
                                    <StarFilled style={{ color: "yellow" }} />
                                    <StarFilled style={{ color: "yellow" }} />
                                </div>
                            </div><div >
                                <Typography style={{ paddingBlock: "30px", fontStyle: "italic", color: "#fff" }}>
                                    In publishing and graphic design, Lorem ipsum is a placeholder
                                    text commonly used to demonstrate the visual form of a document
                                    or a typeface without relying on meaningful content. Lorem ipsum
                                    may be used as a placeholder before final.
                                </Typography>
                                <Typography style={{ color: "pink", fontWeight: 600 }}>David Alllis</Typography>
                                <Typography style={{ marginBottom: "20px", color: "#fff" }}>Designer,Company Name</Typography>
                                <div style={{ display: "flex", gap: "20px", paddingBottom: "30px", justifyContent: "center" }}>
                                    <StarFilled style={{ color: "yellow" }} />
                                    <StarFilled style={{ color: "yellow" }} />
                                    <StarFilled style={{ color: "yellow" }} />
                                    <StarFilled style={{ color: "yellow" }} />
                                    <StarFilled style={{ color: "yellow" }} />
                                </div>
                            </div><div >
                                <Typography style={{ paddingBlock: "30px", fontStyle: "italic", color: "#fff" }}>
                                    In publishing and graphic design, Lorem ipsum is a placeholder
                                    text commonly used to demonstrate the visual form of a document
                                    or a typeface without relying on meaningful content. Lorem ipsum
                                    may be used as a placeholder before final.
                                </Typography>
                                <Typography style={{ color: "pink", fontWeight: 600 }}>David Alllis</Typography>
                                <Typography style={{ marginBottom: "20px", color: "#fff" }}>Designer,Company Name</Typography>
                                <div style={{ display: "flex", gap: "20px", paddingBottom: "30px", justifyContent: "center" }}>
                                    <StarFilled style={{ color: "yellow" }} />
                                    <StarFilled style={{ color: "yellow" }} />
                                    <StarFilled style={{ color: "yellow" }} />
                                    <StarFilled style={{ color: "yellow" }} />
                                    <StarFilled style={{ color: "yellow" }} />
                                </div>
                            </div>
                        </Carousel>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default OurClients;
