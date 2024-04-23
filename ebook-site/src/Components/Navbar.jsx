import React from 'react'
import AppBar from '@mui/material/AppBar';
import { styled ,Toolbar, Box ,Button} from '@mui/material';
import {Link , NavLink} from 'react-router-dom'
import Logo from '../Assets/logo.png'
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Nav = styled(AppBar)`
    display:flex;
    background:#24252A;
    
`
const Tool = styled(Toolbar)`
    & > div{
      text-align:start;
      margin-right:25%;
    }
`
const Tabs = styled(NavLink)`
    font-size:20px;
    margin-right:30px;
    text-decoration:none;
    color:inherit;
`
      const Btn=styled(Button)`
      transition: all 0.3s ease 0s;
      background:rgba(0,136,169,1);
      `

      const Btnbox=styled(Box)`
      display:flex;
      
      & > button{
        justify-content:space-between;
        margin-left:40px;
         cursor:pointer;
      }
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
        <Tabs to={'/'}>Home</Tabs>
        <Tabs to={'/abt'}>About</Tabs>
        <Tabs to={'/page'}>Pages</Tabs>
        <Tabs to={'/shope'}>Shope</Tabs>
        <Tabs to={'/article'}>Artcles</Tabs>
        <Tabs to={'/contact'}>Contact</Tabs>
        <Btnbox>
        <Btn variant="contained">Login</Btn>
        <IconButton color="primary" aria-label="add to shopping cart" >
           <AddShoppingCartIcon/>
        </IconButton>
        </Btnbox>

        </Tool>
    </Nav>
  )
}

export default Navbar
