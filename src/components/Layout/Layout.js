import React from 'react'
import PropTypes from 'prop-types'
import { Content, Footer } from '../../styles/components'
import Header from '../Header'
import './layout.css'

const Layout = ({ children }) => (
  <>
    <Header />
    <Content>
      <main>{children}</main>
      <Footer>
        Con
        <span role='img' aria-label='emoji'>
          ❤️
        </span> por Mansi
      </Footer>
    </Content>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
