

import React from 'react';
import { Col, Row, Carousel, Image } from 'antd';
import envanto from "../images/evantoLogo.png";
import maps from "../images/maps.jpg"

const MapSection = () => {
    const images = [envanto, envanto, envanto, envanto,];

    return (
        <>
            <Row style={{
                backgroundColor: "#03a9f5", justifyContent: "center",
                display: "flex", alignItems: "center",
                paddingBottom: "100px"
            }}>
                <Col
                    xxl={24}
                    xl={24}
                    lg={24}
                    md={24}
                    sm={24}
                    xs={24}
                    style={{
                        textAlign: 'center',
                        gap: "30px", paddingTop: "100px",
                    }}>
                    <Carousel autoplay >
                        {images.map((image, index) => (
                            <div key={index} style={{
                                display: "flex", gap: "30px",
                                justifyContent: "center",
                            }}>
                                {images.map((img, idx) => (
                                    <Image key={idx} src={img} style={{
                                        width: "100%",
                                        paddingLeft: "40px", paddingBottom: "30px"
                                    }} preview={false} />
                                ))}
                            </div>
                        ))}
                    </Carousel>

                </Col>

            </Row>
        </>
    );
}

export default MapSection;