import React from 'react';
import { Avatar, Card, Col, Image, Row, Typography } from 'antd';
import webDesign from "../images/webDesign.jpg";
import colourImage from "../images/colourImage.jpg";
import digitalImage from "../images/digitalmage.jpg";
import avatar1 from "../images/avatar1.png";

const { Meta } = Card;
const { Title } = Typography;

const App = () => (
    <Row
        id="ourBlog"
        style={{
            paddingBlock: "120px",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
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

const OurBlogCards = () => (
    <Row justify="center">
        <Col xxl={7} xl={7} lg={7} md={7} sm={18} xs={10}>
            <Card
                hoverable
                style={{ width: '100%' }}
                cover={<img alt="example" src={webDesign} />}
            >
                <Meta title="Web design is fun" description="Lorem ipsum dolor sit amet consectetur adipiscing elit ipsum dolor sit am..." />
                <div style={{ display: "flex", alignItems: "center", gap: "10px", paddingTop: "20px" }}>
                    <Avatar src={avatar1} />
                    <Typography>Hena Sword</Typography>
                </div>
            </Card>
        </Col>
        <Col xxl={7} xl={7} lg={7} md={7} sm={18} xs={10}>
            <Card
                hoverable
                style={{ width: '100%' }}
                cover={<img alt="example" src={colourImage} />}
            >
                <Meta title="Web design is fun" description="Lorem ipsum dolor sit amet consectetur adipiscing elit ipsum dolor sit am..." />
                <div style={{ display: "flex", alignItems: "center", gap: "10px", paddingTop: "20px" }}>
                    <Avatar src={avatar1} />
                    <Typography>Hena Sword</Typography>
                </div>
            </Card>
        </Col>
        <Col xxl={7} xl={7} lg={7} md={7} sm={18} xs={10}>
            <Card
                hoverable
                style={{ width: '100%' }}
                cover={<img alt="example" src={digitalImage} />}
            >
                <Meta title="Web design is fun" description="Lorem ipsum dolor sit amet consectetur adipiscing elit ipsum dolor sit am..." />
                <div style={{ display: "flex", alignItems: "center", gap: "10px", paddingTop: "20px" }}>
                    <Avatar src={avatar1} />
                    <Typography>Hena Sword</Typography>
                </div>
            </Card>
        </Col>
    </Row>
);

export default App;
