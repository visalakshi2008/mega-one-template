import React from 'react'
import { Button, Col, Image, Row, Typography } from 'antd'
import officeImage from "../images/officer-image.png"
import { CodeOutlined, EditOutlined, FolderOutlined, SettingOutlined } from '@ant-design/icons'

const AboutUs = () => {
    return (
        <>
            <Row
                id="about"
                style={{
                    display: "flex", justifyContent: "center",

                    paddingTop: "150px"
                }}>

                <Col
                    xl={{ span: 10 }}
                    lg={{ span: 10 }}
                    md={{ span: 10 }}
                    sm={{ span: 24 }}
                    xs={{ span: 22 }}

                    style={{

                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                    }}
                >
                    <Typography
                        style={{
                            color: "#696969",
                            fontSize: "18px",
                        }}
                    >
                        We are megaone company
                    </Typography>
                    <Typography
                        style={{
                            fontSize: "40px",
                            paddingTop: "15px",
                            paddingBottom: "25px",
                            color: "#404854",
                            fontWeight: 600,
                        }}
                    >
                        We are making design
                        <br /> better for everyone
                    </Typography>
                    <Typography
                        style={{
                            color: "#696969",
                            paddingBottom: "25px",
                        }}
                    >
                        There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration in some form,
                        by injected humour,
                        or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.
                    </Typography>
                    <Button
                        style={{
                            backgroundColor: "#f023b6",
                            border: "none",
                            color: "#fff",
                            padding: "20px 35px",
                            justifyContent: "center",
                            display: "flex",
                            alignItems: "center",
                            borderRadius: "20px",
                            fontSize: "14px",
                            marginTop: "65px",
                        }}
                    >
                        Learn More
                    </Button>
                </Col>

                <Col
                    // span={10}
                    xl={{ span: 10 }}
                    lg={{ span: 10 }}
                    md={{ span: 13 }}
                    sm={{ span: 24 }}
                    xs={{ span: 22 }}

                    style={{

                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        paddingTop: "40px"
                    }}
                >
                    <Image src={officeImage}
                        width={400} preview={false} />
                </Col>
                <Col
                    xl={{ span: 20 }}
                    lg={{ span: 20 }}
                    md={{ span: 20 }}
                    sm={{ span: 22 }}

                    style={{
                        justifyContent: "center",
                        display: "flex",
                        gap: "10%",
                        paddingBlock: "120px"

                    }}>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}
                        >
                            <FolderOutlined
                                style={{
                                    color: '#fff',
                                    fontSize: '30px',
                                    backgroundColor: '#03a9f5',
                                    padding: '30px',
                                    borderRadius: '50px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            />
                            <div style={{ textAlign: 'center' }}>
                                <Typography style={{
                                    padding: "20px 0px  8px",
                                    color: "#404854", fontSize: "17px",
                                    fontFamily: "sans-serif"

                                }}>
                                    World leader in consulting <br />and finance
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}
                        >
                            <CodeOutlined
                                style={{
                                    color: '#fff',
                                    fontSize: '30px',
                                    backgroundColor: '#41526b',
                                    padding: '30px',
                                    borderRadius: '50px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            />
                            <div style={{ textAlign: 'center' }}>
                                <Typography
                                    style={{
                                        padding: "20px 0px  8px",
                                        color: "#404854", fontSize: "17px",
                                        fontFamily: "sans-serif"

                                    }}>
                                    World leader in consulting <br />and finance
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}
                        >
                            <SettingOutlined
                                style={{
                                    color: '#fff',
                                    fontSize: '30px',
                                    backgroundColor: '#9556f5',
                                    padding: '30px',
                                    borderRadius: '50px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            />
                            <div style={{ textAlign: 'center' }}>
                                <Typography style={{
                                    padding: "20px 0px  8px",
                                    color: "#404854", fontSize: "17px",
                                    fontFamily: "sans-serif"

                                }}>
                                    World leader in consulting <br />and finance
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}
                        >
                            <EditOutlined
                                style={{
                                    color: '#fff',
                                    fontSize: '30px',
                                    backgroundColor: '#5021b6',
                                    padding: '30px',
                                    borderRadius: '50px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            />
                            <div style={{ textAlign: 'center' }}>
                                <Typography style={{
                                    padding: "20px 0px  8px",
                                    color: "#404854", fontSize: "17px",
                                    fontFamily: "sans-serif"

                                }}>
                                    World leader in consulting <br />and finance
                                </Typography>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row >
        </>
    )
}

export default AboutUs
