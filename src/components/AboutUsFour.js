import React from 'react'
import { Button, Col, Image, Row, Typography } from 'antd'
import girlAndBoy from "../images/girlAndBoy.png"

const AboutUsFour = () => {
    return (
        <>
            <Row style={{ paddingBlock: "120px", display: "flex", justifyContent: "center" }}>
                <Col span={10} >
                    <Typography
                        style={{
                            color: "#696969",
                            fontSize: "18px",

                        }}>

                        We are megaone company
                    </Typography>
                    <Typography style={{
                        fontSize: "10px",
                        fontSize: "40px",
                        paddingTop: "15px",
                        paddingBottom: "25px",
                        color: "#404854",
                        fontWeight: 600
                    }}>
                        Robust Design and <br />
                        Development Solutions
                    </Typography>
                    <Typography
                        style={{
                            color: "#696969",
                            paddingBottom: "25px"
                        }}>
                        There are many variations of passages of Lorem Ipsum available, but the
                        majority have suffered alteration in some form, by injected humour, or
                        randomised words which don't look even slightly believable. If you are
                        going to use a passage of Lorem Ipsum.
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
                            marginTop: "35px"
                        }}>
                        Learn More
                    </Button>
                </Col>
                <Col span={10}>
                    <Image src={girlAndBoy}
                        width={540} preview={false} />
                </Col>
            </Row>
        </>
    )
}

export default AboutUsFour
