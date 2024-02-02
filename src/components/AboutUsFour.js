import React, { useEffect } from 'react'
import { Button, Col, Image, Row, Typography } from 'antd'
import girlAndBoy from "../images/girlAndBoy.png"
import AOS from 'aos'
import "aos/dist/aos.css"

const AboutUsFour = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-in-out" })
    }, [])
    return (
        <>
            <Row style={{ paddingBlock: "120px", display: "flex", justifyContent: "center", }}>
                <Col
                    xxl={{ span: 10 }}
                    xl={{ span: 10 }}
                    lg={{ span: 9 }}
                    md={{ span: 10 }}

                    sm={{ span: 22 }}
                    xs={{ span: 22 }}
                    data-aos="fade-right"
                >
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
                            marginTop: "35px",

                        }}>
                        Learn More
                    </Button>
                </Col>

                <Col
                    xxl={{ span: 10 }}
                    xl={{ span: 10 }}
                    lg={{ span: 14 }}
                    md={{ span: 13 }}
                    sm={{ span: 22 }}
                    xs={{ span: 22 }}
                    style={{

                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingTop: "40px"
                    }}
                    data-aos="fade-left"
                >
                    <Image src={girlAndBoy} width={500} preview={false} />
                </Col>


            </Row>
        </>
    )
}

export default AboutUsFour
