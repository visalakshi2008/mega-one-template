// import React from 'react';
// import { Avatar, Card, Col, Image, Row, Typography } from 'antd';
// import webDesign from "../images/webDesign.jpg";
// import colourImage from "../images/colourImage.jpg";
// import digitalImage from "../images/digitalmage.jpg";
// import avatar1 from "../images/avatar1.png";


// const { Meta } = Card;
// const { Title } = Typography;

// const OurBlog = () => {
//     return (
//         <Row
//             id="ourBlog"
//             style={{
//                 paddingBlock: "120px",
//                 display: "flex", justifyContent: "center", textAlign: "center"
//             }}>
//             <Col
//                 xxl={{ span: 24 }}
//                 xl={{ span: 24 }}
//                 lg={{ span: 24 }}
//                 md={{ span: 24 }}
//             >
//                 <Title style={{ color: "#696969" }}>We are megaone company</Title>
//                 <Title style={{ color: "#404854", paddingTop: "10px", paddingBottom: "48px" }}>
//                     Our latest blogs will keep <br />everyone updated
//                 </Title>
//             </Col>
//             {/* <Col
//                 xxl={{ span: 18 }}
//                 xl={{ span: 18 }}
//                 lg={{ span: 18 }}
//                 md={{ span: 22 }}
//                 sm={{ span: 24 }}

//                 style={{ display: "flex", justifyContent: "center", backgroundColor: "Red" }}>
//                 <div
//                     style={{
//                         display: "flex",
//                         justifyContent: "space-between",
//                         alignItems: "center", gap: "20px",
//                         width: "100%"
//                     }}>
//                     <Card
//                         hoverable
//                         style={{ width: 300 }}
//                         cover={<img alt="example" src={webDesign} />}
//                     >
//                         <Typography style={{ color: "#f033b5", textAlign: "left" }}>
//                             October 29, 2020
//                         </Typography>
//                         <Typography style={{ color: "#000", fontSize: "30px", textAlign: "left" }}>
//                             Web design if fun
//                         </Typography>
//                         <Typography style={{ textAlign: "left" }}>
//                             Lorem ipsum dolor sit amet consectetur adipiscing elit ipsum dolor sit am...
//                         </Typography>
//                         <div style={{
//                             display: "flex",
//                             alignItems: "center", gap: "10px",
//                             paddingTop: "20px"
//                         }}>
//                             <Avatar src={avatar1} />
//                             <Typography>Hena Sword</Typography>
//                         </div>
//                     </Card>
//                     <Card
//                         hoverable
//                         style={{ width: 300 }}
//                         cover={<img alt="example" src={colourImage} />}
//                     >
//                         <Typography style={{ color: "#f033b5", textAlign: "left" }}>
//                             October 29, 2020
//                         </Typography>
//                         <Typography style={{ color: "#000", fontSize: "30px", textAlign: "left" }}>
//                             Web design if fun
//                         </Typography>
//                         <Typography style={{ textAlign: "left" }}>
//                             Lorem ipsum dolor sit amet consectetur adipiscing elit ipsum dolor sit am...
//                         </Typography>
//                         <div style={{
//                             display: "flex",
//                             alignItems: "center", gap: "10px",
//                             paddingTop: "20px"
//                         }}>
//                             <Avatar src={avatar1} />
//                             <Typography>Hena Sword</Typography>
//                         </div>
//                     </Card>
//                     <Card
//                         hoverable
//                         style={{ width: 300 }}
//                         cover={<img alt="example" src={digitalImage} />}
//                     >
//                         <Typography style={{ color: "#f033b5", textAlign: "left" }}>
//                             October 29, 2020
//                         </Typography>
//                         <Typography style={{ color: "#000", fontSize: "30px", textAlign: "left" }}>
//                             Web design if fun
//                         </Typography>
//                         <Typography style={{ textAlign: "left" }}>
//                             Lorem ipsum dolor sit amet consectetur adipiscing elit ipsum dolor sit am...
//                         </Typography>
//                         <div style={{
//                             display: "flex",
//                             alignItems: "center", gap: "10px",
//                             paddingTop: "20px"
//                         }}>
//                             <Avatar src={avatar1} />
//                             <Typography>Hena Sword</Typography>
//                         </div>
//                     </Card>
//                 </div>
//             </Col> */}
//             import React from 'react';
//             import {Col, Card, Typography, Avatar, Row} from 'antd';
//             import webDesign from "../images/webDesign.jpg"
//             import colourImage from "../images/colourImage.jpg"
//             import digitalImage from "../images/digitalImage.jpg"
//             import avatar1 from "../images/avatar1.jpg"

//             const {Meta} = Card;

// const App = () => (
//             <Row gutter={[16, 16]} justify="center">
//                 <Col xxl={8} xl={8} lg={8} md={24} sm={24}>
//                     <Card
//                         hoverable
//                         style={{ width: '100%' }}
//                         cover={<img alt="example" src={webDesign} />}
//                     >
//                         <Meta title="Web design is fun" description="Lorem ipsum dolor sit amet consectetur adipiscing elit ipsum dolor sit am..." />
//                         <div style={{ display: "flex", alignItems: "center", gap: "10px", paddingTop: "20px" }}>
//                             <Avatar src={avatar1} />
//                             <Typography>Hena Sword</Typography>
//                         </div>
//                     </Card>
//                 </Col>
//                 <Col xxl={8} xl={8} lg={8} md={24} sm={24}>
//                     <Card
//                         hoverable
//                         style={{ width: '100%' }}
//                         cover={<img alt="example" src={colourImage} />}
//                     >
//                         <Meta title="Web design is fun" description="Lorem ipsum dolor sit amet consectetur adipiscing elit ipsum dolor sit am..." />
//                         <div style={{ display: "flex", alignItems: "center", gap: "10px", paddingTop: "20px" }}>
//                             <Avatar src={avatar1} />
//                             <Typography>Hena Sword</Typography>
//                         </div>
//                     </Card>
//                 </Col>
//                 <Col xxl={8} xl={8} lg={8} md={24} sm={24}>
//                     <Card
//                         hoverable
//                         style={{ width: '100%' }}
//                         cover={<img alt="example" src={digitalImage} />}
//                     >
//                         <Meta title="Web design is fun" description="Lorem ipsum dolor sit amet consectetur adipiscing elit ipsum dolor sit am..." />
//                         <div style={{ display: "flex", alignItems: "center", gap: "10px", paddingTop: "20px" }}>
//                             <Avatar src={avatar1} />
//                             <Typography>Hena Sword</Typography>
//                         </div>
//                     </Card>
//                 </Col>
//             </Row>
//             );

//             export default App;

//         </Row>
//     );
// };

// export default OurBlog;
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
    <Row gutter={[16, 16]} justify="center">
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
