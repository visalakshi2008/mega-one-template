import React from 'react';
import { Col, Image, Tabs } from 'antd';
import image1 from "../images/cock.jpg"
import paperrocket from "../images/paperrocket.jpg"
import blackImage from "../images/blackImage.jpg"
import coffeeCup from "../images/coffeeCup.jpg"
import clock from "../images/clockImage.jpg"
import bulb from "../images/bulb.jpg"
import cupcake from "../images/cupCake.jpg"
import glass from "../images/papercup.jpg"



const { TabPane } = Tabs;

const App = () => (
    <Col span={24}
        style={{
            display: "flex", justifyContent: "center",
            paddingBottom: "100px"

        }}>
        <Tabs defaultActiveKey="graphics" centered>
            <TabPane tab="All" key="graphics">
                <Image src={image1} preview={false} />
                <Image src={coffeeCup} preview={false} />
                <div>

                    <Image src={paperrocket} preview={false} />
                    <Image src={clock} preview={false} width={300} />
                    <Image src={blackImage} />
                </div>
                <div>
                    <Image src={bulb} preview={false} width={900} />

                </div>

            </TabPane>
            <TabPane tab="Graphic Design" key="all">
                Content of Graphic Design
            </TabPane>
            <TabPane tab="Web Design" key="marketing">
                Content of Web Design
            </TabPane>
            <TabPane tab="SEO" key="design">
                Content of SEO Tab
            </TabPane>
            <TabPane tab="Marketing" key="seo">
                Content of Marketing Tab
            </TabPane>
        </Tabs>
    </Col>
);

export default App;

