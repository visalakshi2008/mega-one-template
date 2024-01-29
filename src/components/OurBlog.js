import React from 'react';
import { Avatar, Card, Col, Image, Row, Typography } from 'antd';
import webDesign from "../images/webDesign.jpg";
import colourImage from "../images/colourImage.jpg";
import digitalImage from "../images/digitalmage.jpg";
import avatar1 from "../images/avatar1.png";


const { Meta } = Card;
const { Title } = Typography;

const OurBlog = () => {
    return (
        <Row
            id="ourBlog"
            style={{
                paddingBlock: "120px",
                display: "flex", justifyContent: "center", textAlign: "center"
            }}>
            <Col span={24}>
                <Title style={{ color: "#696969" }}>We are megaone company</Title>
                <Title style={{ color: "#404854", paddingTop: "10px", paddingBottom: "48px" }}>
                    Our latest blogs will keep <br />everyone updated
                </Title>
            </Col>
            <Col span={15} style={{ display: "flex", justifyContent: "center" }}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center", gap: "30px",
                        width: "100%"
                    }}>
                    <Card
                        hoverable
                        style={{ width: 300 }}
                        cover={<img alt="example" src={webDesign} />}
                    >
                        <Typography style={{ color: "#f033b5", textAlign: "left" }}>
                            October 29, 2020
                        </Typography>
                        <Typography style={{ color: "#000", fontSize: "30px", textAlign: "left" }}>
                            Web design if fun
                        </Typography>
                        <Typography style={{ textAlign: "left" }}>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit ipsum dolor sit am...
                        </Typography>
                        <div style={{
                            display: "flex",
                            alignItems: "center", gap: "10px",
                            paddingTop: "20px"
                        }}>
                            <Avatar src={avatar1} />
                            <Typography>Hena Sword</Typography>
                        </div>
                    </Card>
                    <Card
                        hoverable
                        style={{ width: 300 }}
                        cover={<img alt="example" src={colourImage} />}
                    >
                        <Typography style={{ color: "#f033b5", textAlign: "left" }}>
                            October 29, 2020
                        </Typography>
                        <Typography style={{ color: "#000", fontSize: "30px", textAlign: "left" }}>
                            Web design if fun
                        </Typography>
                        <Typography style={{ textAlign: "left" }}>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit ipsum dolor sit am...
                        </Typography>
                        <div style={{
                            display: "flex",
                            alignItems: "center", gap: "10px",
                            paddingTop: "20px"
                        }}>
                            <Avatar src={avatar1} />
                            <Typography>Hena Sword</Typography>
                        </div>
                    </Card>
                    <Card
                        hoverable
                        style={{ width: 300 }}
                        cover={<img alt="example" src={digitalImage} />}
                    >
                        <Typography style={{ color: "#f033b5", textAlign: "left" }}>
                            October 29, 2020
                        </Typography>
                        <Typography style={{ color: "#000", fontSize: "30px", textAlign: "left" }}>
                            Web design if fun
                        </Typography>
                        <Typography style={{ textAlign: "left" }}>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit ipsum dolor sit am...
                        </Typography>
                        <div style={{
                            display: "flex",
                            alignItems: "center", gap: "10px",
                            paddingTop: "20px"
                        }}>
                            <Avatar src={avatar1} />
                            <Typography>Hena Sword</Typography>
                        </div>
                    </Card>
                </div>
            </Col>
        </Row>
    );
};

export default OurBlog;
