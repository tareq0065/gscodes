import React, {Component} from 'react'
import { Card, Row, Col } from 'antd';
const { Meta } = Card;

class Home extends Component {

    render() {
        return (
            <div>
                <Row>
                    <Col xs={24} lg={6}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta
                                title="Europe Street beat"
                                description="www.instagram.com"
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }

}

export default Home