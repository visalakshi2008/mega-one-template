import React from 'react'
import { Col, Image, Row, Typography } from 'antd'
import team1 from "../images/team1.png"
import team2 from "../images/team2.png"
import team3 from "../images/team3.png"
import { FacebookFilled, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons'

const AboutUsThree = () => {
    return (

        <Row style={{ paddingBlock: "120px" }}>
            <Col
                xxl={{ span: 24 }}
                xl={{ span: 24 }}
                lg={{ span: 24 }}
                md={{ span: 24 }}
                sm={{ span: 24 }}
                style={{
                    display: 'flex',
                    justifyContent: 'center',

                }}>
                <div style={{ textAlign: 'center' }}>
                    <Typography style={{ fontSize: '18px', color: '#696969' }}>
                        We are megaone company
                    </Typography>
                    <Typography style={{ fontSize: '40px', color: '#404854', fontWeight: 600, padding: '15px 0px 25px' }}>
                        We have some ideal talented staff
                    </Typography>
                    <Typography style={{ fontSize: '16px', color: '#696969', paddingBottom: '40px' }}>
                        There are many variations of passages of Lorem Ipsum available,<br />
                        but the majority have suffered alteration in some form, by injected.
                    </Typography>
                </div>
            </Col>

            <Col
                xxl={{ span: 14 }}
                xl={{ span: 14 }}
                lg={{ span: 14 }}
                md={{ span: 24 }}
                sm={{ span: 24 }}
                xs={{ span: 24 }}
                style={{
                    display: 'flex',

                    margin: "auto",
                    justifyContent: "space-between",

                }}>
                <div style={{ textAlign: 'center', }}>
                    <Image src={team1} preview={false} width={160} style={{ paddingBottom: "40px" }} />
                    <Typography style={{ fontSize: "24px", fontFamily: "sans-serif", paddingBlock: "8px" }}>Visala</Typography>
                    <Typography style={{ fontSize: "16px", paddingBlock: "12px", color: "#696969" }}>Director</Typography>
                    <div style={{ display: "flex", gap: "30px", justifyContent: "center", paddingBlock: "8px" }}>
                        <FacebookFilled />
                        <LinkedinOutlined />
                        <TwitterOutlined />
                    </div>
                </div>
                <div style={{ textAlign: 'center', }}>
                    <Image src={team2} preview={false} width={160} style={{ paddingBottom: "40px" }} />
                    <Typography style={{ fontSize: "24px", fontFamily: "sans-serif", paddingBlock: "8px" }}>Natalie Roy</Typography>
                    <Typography style={{ fontSize: "16px", paddingBlock: "12px", color: "#696969" }}>Director</Typography>
                    <div style={{ display: "flex", gap: "30px", justifyContent: "center", paddingBlock: "8px" }}>
                        <FacebookFilled />
                        <LinkedinOutlined />
                        <TwitterOutlined />
                    </div>
                </div>
                <div style={{ textAlign: 'center', }}>
                    <Image src={team3} preview={false} width={160} style={{ paddingBottom: "40px" }} />
                    <Typography style={{ fontSize: "24px", fontFamily: "sans-serif", paddingBlock: "8px" }}>John work</Typography>
                    <Typography style={{ fontSize: "16px", paddingBlock: "12px", color: "#696969" }}>Director</Typography>
                    <div style={{ display: "flex", gap: "30px", justifyContent: "center", paddingBlock: "8px" }}>
                        <FacebookFilled />
                        <LinkedinOutlined />
                        <TwitterOutlined />
                    </div>
                </div>
            </Col>


        </Row>

    )
}

export default AboutUsThree
