import React from 'react'
import { Button, Col, Row, Typography, Image } from 'antd'
import boyWithLaptop from "../images/boyWithLaptop.png"
import { BookOutlined, GroupOutlined, SettingOutlined, TeamOutlined, UserOutlined, UserSwitchOutlined } from '@ant-design/icons'

const AboutUsTwo = () => {
    return (
        <Row style={{
            display: "flex",
            justifyContent: "center",
            paddingBlock: "150px",
            backgroundColor: "#03a9f5"
        }}>
            <Col span={10}>
                <Image src={boyWithLaptop}
                    width={540} preview={false} />
            </Col>
            <Col span={10}>
                <Typography
                    style={{
                        color: "#fff",
                        fontSize: "18px",

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
                    fontWeight: 600
                }}>
                    We have done some<br /> great idea.
                </Typography>
                <Typography
                    style={{
                        color: "#fff",
                        paddingBottom: "25px",
                        fontSize: "16px"
                    }}>
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form, by injected.
                </Typography>

                <Row>
                    <Col span={20} style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>
                            <TeamOutlined style={{ color: "#fff", fontSize: "40px", fontWeight: 600 }} />
                            <Typography style={{ color: "#fff", fontSize: "32px", fontWeight: 600 }}>500+</Typography>
                            <Typography style={{ color: "#fff", fontSize: "16px" }}>Happy Clients</Typography>

                        </div>
                        <div>
                            <BookOutlined style={{ color: "#fff", fontSize: "40px", fontWeight: 600 }} />
                            <Typography style={{ color: "#fff", fontSize: "32px", fontWeight: 600 }}>1074+</Typography>
                            <Typography style={{ color: "#fff", fontSize: "16px" }}>Lines Of Code</Typography>

                        </div> <div>
                            <SettingOutlined style={{ color: "#fff", fontSize: "40px", fontWeight: 600 }} />
                            <Typography style={{ color: "#fff", fontSize: "32px", fontWeight: 600 }}>600+</Typography>
                            <Typography style={{ color: "#fff", fontSize: "16px" }}>Projected Completed</Typography>

                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default AboutUsTwo
