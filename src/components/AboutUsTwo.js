import React from 'react'
import { Button, Col, Row, Typography, Image } from 'antd'
import boyWithLaptop from "../images/boyWithLaptop.png"
import { BookOutlined, GroupOutlined, SettingOutlined, TeamOutlined, UserOutlined, UserSwitchOutlined } from '@ant-design/icons'

const AboutUsTwo = () => {
    return (
        <Row style={{

            justifyContent: "center",
            paddingBlock: "150px",
            backgroundColor: "#03a9f5"
        }}>

            <Col
                xxl={{ span: 10 }}
                xl={{ span: 12 }}
                lg={{ span: 10 }}
                md={{ span: 23 }}
                sm={{ span: 20 }}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",


                }}
            >
                <Image
                    data-aos="fade-left"
                    src={boyWithLaptop}

                    width={500}
                    preview={false}
                />
            </Col>

            <Col
                xxl={{ span: 14 }}
                xl={{ span: 12 }}
                lg={{ span: 12 }}
                md={{ span: 20 }}
                sm={{ span: 20 }}
                style={{

                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: "30px"

                }}
                data-aos="fade-right"
            >
                <Typography
                    style={{
                        color: "#fff",
                        fontSize: "18px",
                        textAlign: "center"

                    }}>

                    We are megaone company
                </Typography>
                <Typography style={{
                    fontSize: "32px",
                    fontSize: "40px",
                    paddingTop: "15px",
                    paddingBottom: "25px",
                    color: "#fff",
                    lineHeight: "50px",
                    fontWeight: 600,
                    textAlign: "center"
                }}>
                    We have done some<br /> great idea.
                </Typography>
                <Typography
                    style={{
                        color: "#fff",
                        paddingBottom: "25px",
                        fontSize: "16px",
                        textAlign: "center",
                        paddingLeft: "10px"

                    }}>
                    There are many variations of passages of Lorem Ipsum available,<br />
                    but the majority have suffered alteration in some form, by injected.
                </Typography>

                <Row
                    style={{

                        display: "flex",
                        justifyContent: "center"
                    }}>
                    <Col
                        xl={{ span: 15 }}
                        lg={{ span: 20 }}
                        md={{ span: 20 }}

                        style={{
                            display: "flex",
                            justifyContent: "space-between",


                        }}>
                        <div>
                            <TeamOutlined style={{ color: "#fff", fontSize: "40px", fontWeight: 600, }} />
                            <Typography style={{ color: "#fff", fontSize: "32px", fontWeight: 600, }}>500+</Typography>
                            <Typography style={{ color: "#fff", fontSize: "16px", }}>Happy Clients</Typography>

                        </div>
                        <div>
                            <BookOutlined style={{ color: "#fff", fontSize: "40px", fontWeight: 600 }} />
                            <Typography style={{ color: "#fff", fontSize: "32px", fontWeight: 600 }}>1074+</Typography>
                            <Typography style={{ color: "#fff", fontSize: "16px" }}>Lines Of Code</Typography>

                        </div> <div>
                            <SettingOutlined style={{ color: "#fff", fontSize: "40px", fontWeight: 600 }} />
                            <Typography style={{ color: "#fff", fontSize: "32px", fontWeight: 600 }}>600+</Typography>
                            <Typography style={{ color: "#fff", fontSize: "16px", textAlign: "center" }}>Projected Completed</Typography>

                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default AboutUsTwo
