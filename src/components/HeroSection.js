import React from 'react'
import { Button, Col, Image, Row, Typography } from 'antd'
import boyImage from "../images/boys-image.png"
import { ArrowDownOutlined } from '@ant-design/icons'


const HeroSection = () => {
    return (
        <>

            <Row id="home"
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    background: 'linear-gradient(to right, #3264f5 2%, #7004bc 82%)',
                    height: "100vh"

                }}>
                <Col
                    xxl={{ span: 12 }}
                    xl={{ span: 12 }}
                    lg={{ span: 12 }}
                    md={{ span: 12 }}
                    sm={{ span: 12 }}
                    xs={{ span: 10 }}
                    style={{
                        justifyContent: "center",
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center"

                    }}
                >
                    <Image
                        src={boyImage}
                        width={350}
                        preview={false}
                        style={{
                            maxWidth: '100%',
                            width: '75%',
                            '@media screen and (max-width: 480px)': {
                                width: '150px',
                            },
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center"
                        }}
                    />
                </Col>
                <Col

                    xxl={{ span: 6 }}
                    xl={{ span: 6 }}
                    lg={{ span: 12 }}
                    md={{ span: 12 }}
                    sm={{ span: 12 }}
                    xs={{ span: 14 }}

                    style={{

                        justifyContent: "start",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",

                    }}
                >
                    <Typography style={{
                        color: "#f033b5",
                        fontSize: "33px",
                        fontFamily: "sans-serif",
                        fontWeight: 800,
                        paddingTop: "50px",
                        textAlign: "center",
                    }}>
                        Creative
                    </Typography>

                    <Typography
                        style={{
                            fontWeight: 800,
                            color: "#fff",
                            fontSize: "37px",
                            lineHeight: "30px",
                            textAlign: "center",

                        }}>
                        Digital Agency
                    </Typography>
                    <Typography style={{
                        fontFamily: "sans-serif",
                        fontSize: "12px",
                        paddingTop: "20px",
                        color: "#fff",
                        paddingBottom: "15px",
                        fontSize: "8px",
                        textAlign: "center",
                        // lineHeight: "20px"
                    }}>
                        In publishing and graphic design,
                        Lorem ipsum <br /> publishing and graphic design, Lorem
                        In publishing <br />and graphic design,
                        Lorem .
                    </Typography>
                    <Button style={{
                        backgroundColor: "#03a9f5",
                        border: "none",
                        color: "#fff",
                        padding: "20px 35px",
                        borderRadius: "20px",
                        fontSize: "14px",

                        marginTop: "15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        Learn More
                    </Button>
                </Col>


                <Col
                    Col span={12}
                    style={{
                        justifyContent: "center",
                        display: "flex", textAlign: "center"
                    }}>
                    <Typography
                        style={{
                            color: "#fff",
                            cursor: "pointer",
                            fontSize: "10px",
                            // paddingTop: "72px",

                        }}>
                        Scroll Down <ArrowDownOutlined
                            style={{ color: "#fff" }} />
                    </Typography>
                </Col>

                <Col span={11} style={{ display: 'flex', justifyContent: 'flex-end', }}>
                    <ArrowDownOutlined style={{
                        alignSelf: 'flex-end', color: "#fff", fontSize: "30px",
                        cursor: "pointer"



                    }} smooth={true} duration={500} />
                </Col>

            </Row>
            {/* <Row > */}
            {/* </Row> */}
        </>
    )
}

export default HeroSection
