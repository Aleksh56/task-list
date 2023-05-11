import React, { useState } from 'react'
import { Row, Col } from 'antd'
import Title from 'antd/es/typography/Title'
import SingInForm from './SingInForm'
import SingUpForm from './SingUpForm'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import './AuthPage.css'

const AuthPage = () => {
  const [showRegForm, setShowRegForm] = useState(false)

  const handleChangeForm = () => {
    setShowRegForm((prev) => !prev)
  }
  return (
    <div className="auth-bg bg-[#F4F4F4] w-screen h-screen">
      <div className="max-w-[1600px] mx-auto">
        <Row gutter={[8, 8]}>
          <Col span={12}>
            <img
              src={require('../../assets/images/Auth.png')}
              alt="Auth Image"
              className="max-w-[550px]"
            />
          </Col>

          <Col span={8}>
            <div className="sing__form bg-white p-9 rounded-lg shadow-sm">
              <div className="sign__title">
                <p className="text-[35px] leading-[1.05]">Welcome to</p>
                <Title style={{ color: '#6358DC', fontSize: '55px' }}>
                  Task Flow
                </Title>
              </div>
              <SwitchTransition mode="out-in">
                <CSSTransition
                  key={showRegForm ? 'register' : 'login'}
                  classNames="fade"
                  timeout={300}
                  unmountOnExit
                >
                  {showRegForm ? (
                    <SingUpForm handleChangeForm={handleChangeForm} />
                  ) : (
                    <SingInForm handleChangeForm={handleChangeForm} />
                  )}
                </CSSTransition>
              </SwitchTransition>
              {/* {showRegForm ? (
                <SingUpForm handleChangeForm={handleChangeForm} />
              ) : (
                <SingInForm handleChangeForm={handleChangeForm} />
              )} */}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default AuthPage
