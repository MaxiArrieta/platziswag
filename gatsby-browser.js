const React = require('react')
const Layout = require('./src/components/Layout/Layout').default
const { GlobalStyles } = require('./src/styles')
const { CartProvider } = require('./src/context')

exports.wrapRootElement = ({ element }) => (
  <CartProvider>
    <GlobalStyles />
    <Layout>
      {element}
    </Layout>
  </CartProvider>
)
