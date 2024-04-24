import React from 'react'
import Header from './Header'
import Futurebooks from './Futurebooks'
import { Box, styled } from '@mui/material'
import { Anime ,featuredBooksData } from '../Data/data'
import Popularbook from './Popularbook'

const Component =styled(Box)`
  width:100%;
  background:#0D3340;
`
function Home() {
  return (
    <Component>
      <Header/>
      <Futurebooks products={Anime} title="Anime Book"/>
      <Futurebooks products={featuredBooksData}title="Romantic Book"/>
      <Futurebooks products={Anime} title="Motivation Book"/>
      <Futurebooks products={Anime} title="Top rated Book"/>
      <Popularbook/>
      <p>helloooo</p>

    </Component>
  )
}

export default Home
