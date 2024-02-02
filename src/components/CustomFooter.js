import { FacebookFilled, GooglePlusCircleFilled, InstagramOutlined, LinkedinOutlined, PrinterOutlined, TwitterOutlined } from '@ant-design/icons'
import { Col, Row, Typography } from 'antd'
import React from 'react'

const CustomFooter = () => {
    return (
        <Row>
            <Col
                xxl={12}
                xl={12}
                lg={11}
                md={11}
                sm={24}
                xs={24}
                style={{ justifyContent: "center", display: "flex" }}>
                <div style={{ display: "flex", gap: "20px" }}>

                    <FacebookFilled />
                    <TwitterOutlined />
                    <GooglePlusCircleFilled />
                    <LinkedinOutlined />
                    <InstagramOutlined />
                    <PrinterOutlined />
                </div>

            </Col>

            <Col
                xxl={8}
                xl={8}
                lg={11}
                md={11}
                sm={24}
                xs={24 }
                style={{ textAlign: 'center' }}>
                <Typography style={{ paddingTop: "20px" }}>
                    © 2023 MegaOne. Made With Love By Themesindustry
                </Typography>
            </Col>


        </Row>
    )
}

export default CustomFooter
