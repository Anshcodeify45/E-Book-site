import React from 'react'
import Header from './Header'
import Futurebooks from './Futurebooks'
import { Box, styled } from '@mui/material'


const Component =styled(Box)`
  width:100%;
  background:#0D3340;
`
function Home() {
  return (
    <Component>
      <Header/>
      <Futurebooks/>
      <Futurebooks/>
      <Futurebooks/>
      <Futurebooks/>
      <p>helloooo</p>

    </Component>
  )
}

export default Home
