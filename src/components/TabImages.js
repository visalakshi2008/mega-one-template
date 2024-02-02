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
    <Col
        xxl={{ span: 24 }}
        xl={{ span: 24 }}
        lg={{ span: 24 }}
        md={{ span: 24 }}
        sm={{ span: 24 }}
        xs={{ span: 24 }}
        style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "100px",

            textAlign: "center"

        }}>
        <Tabs defaultActiveKey="graphics" centered>
            <TabPane tab="All" key="graphics" >
                <Image src={glass} preview={false} width={300} />
                <Image src={cupcake} preview={false} />
                <Image src={coffeeCup} preview={false} width={300} />
                <Image src={blackImage} preview={false} width={300} />
                <Image src={paperrocket} preview={false} width={300} />
                <Image src={cupcake} preview={false} />

                <Image src={clock} preview={false} width={300} />
                <Image src={blackImage} preview={false} width={300} />
                <Image src={coffeeCup} preview={false} width={300} />

                <Image src={paperrocket} preview={false} width={300} />




            </TabPane>
            <TabPane tab="Graphic Design" key="all">
                <Image src={cupcake} preview={false} />
                <Image src={blackImage} preview={false} width={300} />
                <Image src={glass} preview={false} width={300} />
                <Image src={paperrocket} preview={false} width={300} />
                <Image src={coffeeCup} preview={false} width={300} />
                <Image src={clock} preview={false} width={300} />
                <Image src={cupcake} preview={false} />
                <Image src={paperrocket} preview={false} width={300} />


                <Image src={cupcake} preview={false} />
                <Image src={glass} preview={false} width={300} />
            </TabPane>
            <TabPane tab="Web Design" key="marketing">
                <Image src={coffeeCup} preview={false} width={300} />
                <Image src={glass} preview={false} width={300} />
                <Image src={blackImage} preview={false} width={300} />
                <Image src={cupcake} preview={false} />
                <Image src={clock} preview={false} width={300} />
                <Image src={paperrocket} preview={false} width={300} />
                <Image src={paperrocket} preview={false} width={300} />
                <Image src={cupcake} preview={false} />


                <Image src={cupcake} preview={false} />
                <Image src={glass} preview={false} width={300} />
            </TabPane>
            <TabPane tab="SEO" key="design">
                <Image src={cupcake} preview={false} />
                <Image src={glass} preview={false} width={300} />
                <Image src={blackImage} preview={false} width={300} />
                <Image src={coffeeCup} preview={false} width={300} />
                <Image src={cupcake} preview={false} />

                <Image src={paperrocket} preview={false} width={300} />
                <Image src={clock} preview={false} width={300} />
                <Image src={cupcake} preview={false} />
                <Image src={glass} preview={false} width={300} />
                <Image src={paperrocket} preview={false} width={300} />
            </TabPane>
            <TabPane tab="Marketing" key="seo">
                <Image src={cupcake} preview={false} />
                <Image src={coffeeCup} preview={false} width={300} />
                <Image src={glass} preview={false} width={300} />
                <Image src={paperrocket} preview={false} width={300} />
                <Image src={blackImage} preview={false} width={300} />
                <Image src={clock} preview={false} width={300} />
                <Image src={paperrocket} preview={false} width={300} />
                <Image src={cupcake} preview={false} />


                <Image src={cupcake} preview={false} />
                <Image src={glass} preview={false} width={300} />
            </TabPane>
        </Tabs>
    </Col>
);

export default App;

