import { Col, Row, Typography } from 'antd'
import React from 'react'
import TabImages from './TabImages'

const OurWork = () => {
    return (
        <Row>

            <Col span={24} style={{ display: 'flex', justifyContent: 'center', paddingTop: "120px" }}>
                <div style={{ textAlign: 'center' }}>
                    <Typography style={{ fontSize: '18px', color: '#696969' }}>
                        We are megaone company
                    </Typography>
                    <Typography style={{ fontSize: "40px", padding: "15px 25px", fontWeight: 700, }}>
                        We have developed some <br />great projects</Typography>
                    <Typography style={{ fontSize: '16px', color: '#696969', paddingBottom: '40px' }}>
                        There are many variations of passages of Lorem Ipsum available,
                        but the <br />majority have suffered alteration in some form, by injected.
                    </Typography>
                </div>
            </Col>
            {/* <Col > */}
            <TabImages />
            {/* </Col> */}
        </Row>
    )
}

export default OurWork
