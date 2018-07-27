import React, {Component} from 'react'
import {Layout, Row, Col, Form, Icon, Input, Button, Checkbox, Card } from 'antd';

const {Header, Content, Footer} = Layout
const FormItem = Form.Item;

class LoginWrapper extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Layout>
                <Header/>
                <Content>
                    <Row>
                        <Col xs={{ span: 24, offset: 0 }} lg={{ span: 6, offset: 10 }}>
                            <Card>
                                <Form onSubmit={this.handleSubmit} className="login-form">
                                    <FormItem>
                                        {getFieldDecorator('userName', {
                                            rules: [{ required: true, message: 'Please input your username!' }],
                                        })(
                                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                        )}
                                    </FormItem>
                                    <FormItem>
                                        {getFieldDecorator('password', {
                                            rules: [{ required: true, message: 'Please input your Password!' }],
                                        })(
                                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                        )}
                                    </FormItem>
                                    <FormItem>
                                        {getFieldDecorator('remember', {
                                            valuePropName: 'checked',
                                            initialValue: true,
                                        })(
                                            <Checkbox>Remember me</Checkbox>
                                        )}
                                        <a className="login-form-forgot" href="">Forgot password</a>
                                        <Button type="primary" htmlType="submit" className="login-form-button">
                                            Log in
                                        </Button>
                                        Or <a href="">register now!</a>
                                    </FormItem>
                                </Form>
                            </Card>

                        </Col>
                    </Row>
                </Content>
                <Footer/>
            </Layout>
        )
    }

}

const Login = Form.create()(LoginWrapper);

export default Login