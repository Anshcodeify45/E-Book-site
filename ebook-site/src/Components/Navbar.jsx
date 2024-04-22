import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Typography ,styled ,Toolbar, Box} from '@mui/material';
import {Link} from 'react-router-dom'
import Logo from '../Assets/logo.png'


const Nav = styled(AppBar)`
    display:flex;
    background:gray;
    
`
const Tool = styled(Toolbar)`
    & > div{
      text-align:start;
      margin-right:28%;
    }
`
const Tabs = styled(Typography)`
    font-size:20px;
    margin-right:30px;
`

function Navbar() {
  return (
    <Nav position='static'>
        <Tool>
        <Box>
        <Link to={'/'}>
          <img src={Logo} alt="logo" style={{width:75}}/>
        </Link>
        </Box>
        <Tabs>Home</Tabs>
        <Tabs>About</Tabs>
        <Tabs>Pages</Tabs>
        <Tabs>Shope</Tabs>
        <Tabs>Artcles</Tabs>
        <Tabs>Contact</Tabs>
        </Tool>
    </Nav>
  )
}

export default Navbar
