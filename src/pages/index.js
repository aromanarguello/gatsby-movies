import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  flex-direction: column;
`

const Item = styled.li``

const IndexPage = () => {
  const [movies, setMovies] = React.useState([])

  React.useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d3b25ee456f5215bfcc51aa849aad377'
    )
      .then(res => res.json())
      .then(resolved => setMovies(resolved))
  }, [])
  console.log(movies.results)
  return (
    <Layout>
      <SEO title="Home" />
      <h2>Top 20 movies:</h2>
      <List>
        {movies.results && movies.results.map(x => <Item>{x.title}</Item>)}
      </List>
    </Layout>
  )
}
export default IndexPage
