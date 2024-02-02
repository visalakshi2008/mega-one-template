import React, { useEffect } from 'react';
import { Avatar, Card, Col, Row, Typography } from 'antd';
import webDesign from "../images/webDesign.jpg";
import colourImage from "../images/colourImage.jpg";
import digitalImage from "../images/digitalmage.jpg";
import avatar1 from "../images/avatar1.png";
import AOS from "aos";
import "aos/dist/aos.css";

const { Meta } = Card;
const { Title } = Typography;

const App = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-in-out" });
    }, []);

    return (
        <Row
            id="ourBlog"
            style={{
                padding: "120px 0",
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                overflowX: "hidden",
            }}
        >
            <Col
                xxl={{ span: 24 }}
                xl={{ span: 24 }}
                lg={{ span: 24 }}
                md={{ span: 24 }}
            >
                <Title style={{ color: "#696969" }}>We are megaone company</Title>
                <Title style={{ color: "#404854", paddingTop: "10px", paddingBottom: "48px" }}>
                    Our latest blogs will keep <br />everyone updated
                </Title>
            </Col>
            <OurBlogCards />
        </Row>
    );
};

const OurBlogCards = () => (
    <Row justify="center" gutter={[16, 16]}>
        <Col xxl={7} xl={6} lg={7} md={7} sm={18} xs={24} data-aos="fade-right">
            <Card
                hoverable
                style={{ width: '100%' }}
                cover={<img alt="example" src={webDesign} />}
            >
                <Typography style={{ color: "#F033B5", textAlign: "left" }}>
                    October 29, 2020
                </Typography>
                <Meta
                    title={<Title level={3} style={{ fontSize: "30px" }}>
                        Web design is fun
                    </Title>}
                    description="Lorem ipsum dolor sit amet consectetur adipiscing elit ipsum dolor sit am..."
                    style={{ textAlign: "left" }}
                />
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        paddingTop: "20px"
                    }}>
                    <Avatar src={avatar1} />
                    <Typography style={{ fontSize: "20px" }}>Hena Sword</Typography>
                </div>
            </Card>
        </Col>

        <Col xxl={7} xl={6} lg={7} md={7} sm={18} xs={24} data-aos="fade-up">
            <Card
                hoverable
                style={{ width: '100%' }}
                cover={<img alt="example" src={colourImage} />}
            >
                <Typography style={{ color: "#F033B5", textAlign: "left" }}>
                    October 29, 2020
                </Typography>
                <Meta
                    title={<Title level={3} style={{ fontSize: "30px" }}>
                        Web design is fun
                    </Title>}
                    description="Lorem ipsum dolor sit amet consectetur adipiscing elit ipsum dolor sit am..."
                    style={{ textAlign: "left" }}
                />
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        paddingTop: "20px"
                    }}>
                    <Avatar src={avatar1} />
                    <Typography style={{ fontSize: "20px" }}>Hena Sword</Typography>
                </div>
            </Card>
        </Col>
        <Col xxl={7} xl={6} lg={7} md={7} sm={18} xs={24} data-aos="fade-left">
            <Card
                hoverable
                style={{ width: '100%' }}
                cover={<img alt="example" src={digitalImage} />}
            >
                <Typography style={{ color: "#F033B5", textAlign: "left" }}>
                    October 29, 2020
                </Typography>
                <Meta
                    title={<Title level={3} style={{ fontSize: "30px" }}>
                        Web design is fun
                    </Title>}
                    description="Lorem ipsum dolor sit amet consectetur adipiscing elit ipsum dolor sit am..."
                    style={{ textAlign: "left" }}
                />
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        paddingTop: "20px"
                    }}>
                    <Avatar src={avatar1} />
                    <Typography style={{ fontSize: "20px" }}>Hena Sword</Typography>
                </div>
            </Card>
        </Col>
    </Row>
);

export default App;
