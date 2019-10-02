import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'
import useFetch from '../hooks/useFetch'

const List = styled.ul`
  display: flex;
  flex-direction: column;
`

const Item = styled.li``

const IndexPage = () => {
  const response = useFetch(
    'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d3b25ee456f5215bfcc51aa849aad377',
    {}
  )

  return (
    <Layout>
      <SEO title="Home" />
      <h2>Top 20 movies:</h2>
      <List></List>
    </Layout>
  )
}
export default IndexPage
