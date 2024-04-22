import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Typography ,styled ,Toolbar} from '@mui/material';



const Nav = styled(AppBar)`
    background:gray;
    text-align:center;
`
const Tool = styled(Toolbar)`
    margin-left:30%;
`
const Tabs = styled(Typography)`
    font-size:20px;
    margin-right:30px;
    
`
function Navbar() {
  return (
    <Nav position='static'>
    <Tool>
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
