import React from 'react'
import { Button, Col, Image, Row, Typography } from 'antd'
import boyImage from "../images/boys-image.png"
import { ColorFactory } from 'antd/es/color-picker/color'
import { ArrowDownOutlined } from '@ant-design/icons'


const HeroSection = () => {
    return (
        <div>
            <Row>
                <Col
                    span={12}
                    style={{
                        justifyContent: "end",
                        textAlign: "center",
                        display: "flex-end"

                    }}
                >
                    <Image
                        src={boyImage}

                        preview={false}

                    />
                </Col>
                <Col span={12} style={{
                    // display: "flex",
                    justifyContent: "center",
                    textAlign: "left"
                }}>
                    <Typography style={{
                        color: "#f033b5",
                        fontSize: "27px",
                        fontFamily: "sans-serif",
                        fontWeight: 800,
                        paddingTop: "50px"
                    }}>
                        Creative
                    </Typography>
                    <Typography
                        style={{
                            fontWeight: 800,
                            color: "#fff",
                            fontSize: "27px",
                            lineHeight: "20px",
                            letterSpacing: "3px"
                        }}>
                        Digital Agency
                    </Typography>
                    <Typography style={{
                        fontFamily: "sans-serif",
                        fontSize: "12px",
                        lineHeight: "15px",
                        paddingTop: "10px",
                        color: "#fff",
                        paddingBottom: "15px",
                        fontSize: "8px"
                    }}>
                        In publishing and graphic design,
                        Lorem ipsum <br /> publishing and graphic design,Lorem
                        In publishing <br />and graphic design,
                        Lorem .
                    </Typography>
                    <Button style={{
                        backgroundColor: "#03a9f5",
                        border: "none",
                        color: "#fff",
                        padding: "20px 35px",
                        justifyContent: "center",
                        display: "flex",
                        alignItems: "center",
                        borderRadius: "20px",
                        fontSize: "14px",
                    }}>Learn More
                    </Button>
                </Col>
                <Col span={24}
                    style={{
                        justifyContent: "center",
                        display: "flex", textAlign: "center"
                    }}>
                    <Typography
                        style={{
                            color: "#fff",
                            cursor: "pointer",
                            fontSize: "10px",
                            paddingTop: "80px"
                        }}>
                        Scroll Down <ArrowDownOutlined
                            style={{ color: "#fff" }} />
                    </Typography>
                </Col>
            </Row>
        </div >
    )
}

export default HeroSection
