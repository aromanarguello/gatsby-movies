import React from 'react'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

const theme = {}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

Theme.propTypes = {
  children: PropTypes.node,
}

export default Theme
