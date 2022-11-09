import React, { useState } from 'react'
import Logo from "../../../logo.svg"
import { useNavigate } from 'react-router-dom'
import { Anchor, Button, Divider } from "antd"

const { Link } = Anchor

const AppHeader = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
      navigate("/betplace")
  }
  return (
      <div className="container-fluid">
          <div className="header">
              <div className="header-logo">
                  <img src={Logo} alt="logo smartcupbet" />
              </div>
              <div className="mobileHidden">
                  <Anchor affix={false} targetOffset={64}>
                      <div className="menu">
                          <Link href="#whatisit" title="What is?" />
                          <Divider className="header-divider" type="vertical" />
                          <Link href="#howitworks" title="How it Works?" />
                          <Divider className="header-divider" type="vertical" />
                          <Link href="#whoweare" title="Who we are?" />
                          <Button
                              type="primary"
                              shape="round"
                              className="bt-login"
                              onClick={handleLogin}
                          >
                              Connect
                          </Button>
                      </div>
                  </Anchor>
              </div>
              <div className="mobileVisible">
                  <Button type="primary" shape="round" className="bt-login" onClick={handleLogin}>
                      Connect
                  </Button>
              </div>
          </div>
      </div>
  )
}

export default AppHeader