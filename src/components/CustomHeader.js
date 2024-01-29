// import React from "react";
// import { Button, Col, Flex, Image, Row, Space, Typography } from "antd";
// import { Link } from 'react-scroll';
// import logo from "../images/logo.png"

// import {
//   FacebookFilled,
//   FacebookOutlined,
//   InstagramFilled,
//   InstagramOutlined,
//   MenuOutlined,
//   TwitterCircleFilled,
//   TwitterOutlined
// } from "@ant-design/icons";



// function App() {

//   return (
//     <>
//       <Row>
//         <Col
//           xxl={{ span: 6 }}
//           xl={{ span: 8 }}
//           lg={{ span: 10 }}
//           md={{ span: 12 }}
//         >
//           <Flex style={{ justifyContent: "space-between" }}>
//             <Image src={logo} />
//           </Flex>
//         </Col>

//         <Col
//           xxl={{ span: 14, offset: 4 }}
//           xl={{ span: 12, offset: 4 }}
//           lg={{ span: 11, offset: 3 }}
//           md={{ span: 10, offset: 2 }}
//         >
//           <Flex
//             style={{
//               justifyContent: "space-between",
//               alignItems: "center",
//               height: "100%",

//             }}
//           >
//             <Link to="home" smooth={true} duration={500} style=
//               {{
//                 color: "#fff",
//                 fontFamily: "sans-serif"
//               }}>
//               Home
//             </Link>
//             {/* <Typography >
//               Home</Typography> */}
//             <Typography style=
//               {{
//                 color: "#fff",
//                 fontFamily: "sans-serif"
//               }}>
//               About Us</Typography>
//             <Typography style=
//               {{
//                 color: "#fff",
//                 fontFamily: "sans-serif"
//               }}>
//               Our Work</Typography>
//             <Typography
//               style=
//               {{
//                 color: "#fff",
//                 fontFamily: "sans-serif"
//               }}>
//               Clients</Typography>
//             <Typography style={{
//               color: "#fff",
//               fontFamily: "sans-serif"
//             }}>
//               Our Blog</Typography>
//             <Typography style=
//               {{
//                 color: "#fff",
//                 fontFamily: "sans-serif"
//               }}>
//               Contact Us</Typography>
//             <Button style={{
//               backgroundColor: "transparent",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               // height: "100%",
//               paddingRight: "15px",
//               paddingLeft: "15px",
//               // paddingBlock: "5px",
//               textAlign: "center",
//               color: "#fff",
//               borderRadius: "20px",
//               paddingBlock: "20px"
//             }}>
//               Get A Quote
//             </Button>
//             <FacebookFilled
//               style=
//               {{
//                 color: "#fff",
//                 fontFamily: "sans-serif"
//               }} />
//             <InstagramFilled style=
//               {{
//                 color: "#fff",
//                 fontFamily: "sans-serif"
//               }} />
//             <TwitterCircleFilled style=
//               {{
//                 color: "#fff",
//                 fontFamily: "sans-serif"
//               }} />
//           </Flex>
//         </Col>

//       </Row >

//     </>
//   );
// }

// export default App;
// CustomHeader.js

import React from 'react';
import { Button, Col, Image, Row, Typography } from 'antd';
import { Link } from 'react-scroll';
import logo from "../images/logo.png";
import { FacebookFilled, InstagramFilled, TwitterSquareFilled } from '@ant-design/icons';


const CustomHeader = () => {
  return (
    <Row>
      <Col
        xxl={{ span: 6 }}
        xl={{ span: 8 }}
        lg={{ span: 10 }}
        md={{ span: 12 }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Image src={logo} />
        </div>
      </Col>

      <Col
        xxl={{ span: 14, offset: 4 }}
        xl={{ span: 12, offset: 4 }}
        lg={{ span: 11, offset: 3 }}
        md={{ span: 10, offset: 2 }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
          <Link to="home" smooth={true} duration={500} style={{ color: '#fff', fontFamily: 'sans-serif' }}>
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} style={{ color: '#fff', fontFamily: 'sans-serif' }}>
            About Us
          </Link>
          {/* Add links for other sections */}
          <Link to="ourWork" smooth={true} duration={500} style={{ color: '#fff', fontFamily: 'sans-serif' }}>
            Our Work
          </Link>
          <Link to="clients" smooth={true} duration={500} style={{ color: '#fff', fontFamily: 'sans-serif' }}>
            Clients
          </Link>
          <Link to="ourBlog" smooth={true} duration={500} style={{ color: '#fff', fontFamily: 'sans-serif' }}>
            Our Blog
          </Link>
          <Link to="contactUs" smooth={true} duration={500} style={{ color: '#fff', fontFamily: 'sans-serif' }}>
            Contact Us
          </Link>
          <Button style={{ backgroundColor: 'transparent', color: '#fff', fontFamily: 'sans-serif', borderRadius: '20px', padding: '5px 20px' }}>
            Get A Quote
          </Button>
          <FacebookFilled
            style=
            {{
              color: "#fff",
              fontFamily: "sans-serif"
            }} />
          <InstagramFilled style=
            {{
              color: "#fff",
              fontFamily: "sans-serif"
            }} />
          <TwitterSquareFilled style=
            {{
              color: "#fff",
              fontFamily: "sans-serif"
            }} />
        </div>
      </Col>
    </Row>
  );
};

export default CustomHeader;
