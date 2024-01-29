import React from "react";
import antd, { Button, Col, Flex, Image, Row, Space, Typography } from "antd";
import logo from "../images/logo.png"

import {
  FacebookFilled,
  FacebookOutlined,
  InstagramFilled,
  InstagramOutlined,
  MenuOutlined,
  TwitterCircleFilled,
  TwitterOutlined
} from "@ant-design/icons";



function App() {

  return (
    <>
      <Row>
        <Col
          xxl={{ span: 6 }}
          xl={{ span: 8 }}
          lg={{ span: 10 }}
          md={{ span: 12 }}
        >
          <Flex style={{ justifyContent: "space-between" }}>
            <Image src={logo} />
          </Flex>
        </Col>

        <Col
          xxl={{ span: 14, offset: 4 }}
          xl={{ span: 12, offset: 4 }}
          lg={{ span: 11, offset: 3 }}
          md={{ span: 10, offset: 2 }}
        >
          <Flex
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              height: "100%",

            }}
          >
            <Typography style=
              {{
                color: "#fff",
                fontFamily: "sans-serif"
              }}>
              Home</Typography>
            <Typography style=
              {{
                color: "#fff",
                fontFamily: "sans-serif"
              }}>
              About Us</Typography>
            <Typography style=
              {{
                color: "#fff",
                fontFamily: "sans-serif"
              }}>
              Our Work</Typography>
            <Typography
              style=
              {{
                color: "#fff",
                fontFamily: "sans-serif"
              }}>
              Clients</Typography>
            <Typography style={{
              color: "#fff",
              fontFamily: "sans-serif"
            }}>
              Our Blog</Typography>
            <Typography style=
              {{
                color: "#fff",
                fontFamily: "sans-serif"
              }}>
              Contact Us</Typography>
            <Button style={{
              backgroundColor: "transparent",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // height: "100%",
              paddingRight: "15px",
              paddingLeft: "15px",
              // paddingBlock: "5px",
              textAlign: "center",
              color: "#fff",
              borderRadius: "20px",
              paddingBlock: "20px"
            }}>
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
            <TwitterCircleFilled style=
              {{
                color: "#fff",
                fontFamily: "sans-serif"
              }} />
          </Flex>
        </Col>

      </Row >

    </>
  );
}

export default App;
