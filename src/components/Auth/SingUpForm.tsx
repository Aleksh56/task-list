import React from 'react'
import { Row, Col, Button, Space, Divider, Form, Input, Checkbox } from 'antd'
import {
  GoogleOutlined,
  FacebookOutlined,
  UserOutlined,
  LockOutlined,
} from '@ant-design/icons'
import { SignInFormProps } from '../../interfaces/authInterface'

const SingUpForm: React.FC<SignInFormProps> = ({ handleChangeForm }) => {
  return (
    <div className="signInButtons">
      <Space size={20} direction="vertical" className="w-full">
        <Button
          block
          icon={<GoogleOutlined />}
          className="flex justify-center items-center"
        >
          Continue with Google
        </Button>
        <Button
          block
          icon={<FacebookOutlined />}
          className="flex justify-center items-center"
        >
          Continue with Facebook
        </Button>
        <Divider plain>OR</Divider>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          // onFinish={onFinish}
        >
          <Form.Item
            name="fullname"
            rules={[
              {
                required: true,
                message: 'Please input your Fullname!',
              },
            ]}
          >
            <Input placeholder="Your Name" />
          </Form.Item>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            name="repeatpassword"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Repeate your password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              block
              type="primary"
              className="login-form-button bg-[#1677ff]"
            >
              Register
            </Button>
          </Form.Item>
          <Form.Item className="m-0">
            <Row justify="center">
              <Col>
                Already have an account?{' '}
                <button
                  className="text-[#6358DC] font-semibold"
                  onClick={handleChangeForm}
                >
                  Login
                </button>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </Space>
    </div>
  )
}

export default SingUpForm
