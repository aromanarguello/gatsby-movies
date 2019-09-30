import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import styled from 'styled-components'

const StyledHeader = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960;
  text-align: center;
  padding: 1.45rem 1.0875;
`
const Nav = styled.nav`
  border: 1px solid white;
`

const HeaderOne = styled.h1`
  margin: 0;
`
const List = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  height: 40px;
`
const Item = styled.li`
  list-style: none;
  margin: 0 15px 0 15px;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <HeaderContainer>
      <HeaderOne>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </HeaderOne>
    </HeaderContainer>
    <Nav>
      <List>
        <Item>
          <StyledLink to={'/'} title={'Visit the homepage'}>
            Home
          </StyledLink>
        </Item>
        <Item>
          <StyledLink to={'/page-2'}>Search</StyledLink>
        </Item>
      </List>
    </Nav>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
