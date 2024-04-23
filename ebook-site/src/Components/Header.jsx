import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { headerBooks } from '../Data/data';
import { Typography ,Box , styled , Button} from '@mui/material';
//books.png
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
        };

        const Component = styled(Box)`
            width:100%;
            height:400px;
            display:flex;
            justify-content: space-evenly;
            background:#0D3340;
            color:white;
            
        `

    const Image = styled('img')({
        width:'100%',
        height:350,
        marginTop:20,
    })


    const Para = styled(Typography)`
    width: 600px; 
    margin:30 0 65 0;
    `
    const Btn =styled(Button)`
        margin-top:25px;
    `
function Header() {
  return (

    <Carousel responsive={responsive}
    swipeable={false}
    draggable={false}
    showDots={true} 
    autoPlay={true}
    infinite={true}> 
    {
        headerBooks.map(data => (
            <Component>
            <Box>
                <Image src={data.url} alt=""/>
            </Box>
            <Box>
                <Typography variant='h2' style={{marginTop:25}}>{data.title}</Typography>
                <Para>{data.info}</Para>
                <Btn>{data.btnLink}</Btn>
            </Box>              
            </Component>
            
        ))
    }
    </Carousel>

  )
}

export default Header
