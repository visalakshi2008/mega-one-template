import { FacebookFilled, GooglePlusCircleFilled, InstagramOutlined, LinkedinOutlined, PrinterOutlined, TwitterOutlined } from '@ant-design/icons'
import { Col, Row, Typography } from 'antd'
import React from 'react'

const CustomFooter = () => {
    return (
        <Row>
            <Col
                span={12} style={{ justifyContent: "center", display: "flex" }}>
                <div style={{ display: "flex", gap: "40px" }}>

                    <FacebookFilled />
                    <TwitterOutlined />
                    <GooglePlusCircleFilled />
                    <LinkedinOutlined />
                    <InstagramOutlined />
                    <PrinterOutlined />
                </div>

            </Col>

            <Col span={8} style={{ textAlign: 'end' }}>
                <Typography>
                    © 2023 MegaOne. Made With Love By Themesindustry
                </Typography>
            </Col>


        </Row>
    )
}

export default CustomFooter
