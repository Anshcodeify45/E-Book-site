import { Box ,Button,Typography ,styled} from '@mui/material'
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
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

const Component =styled(Box)`
  width:100%;
  background:rgba(0, 0, 0, 0.6);

`
const Image = styled('img')({
  width:'auto',
  height:250,
  cursor:'pointer',
  marginTop:20
})

const Container = styled(Box)`
height:420px
`

function Futurebooks({  products ,title }) {
  return (
    <Component>
    <Typography variant='h2' style={{textAlign:'center',color:'#dfe8f1',background:'rgba(0, 0, 0, 0.6)'}}>{title}</Typography>
    <Carousel  responsive={responsive}
    swipeable={false}
    draggable={false}
    showDots={false} 
    autoPlay={true}
    infinite={true}
    autoPlaySpeed={4000}
    centerMode={true}>
      {
          products.map(data =>(
            <Container style={{textAlign:'center',color:'#dfe8f1'}}>
              <Box>
                  <Image src={data.url} alt="" />
              </Box>
              <Box >
                <Typography variant='h5'>{data.name}</Typography>
                <Typography variant='h6'>{data.writer}</Typography>
                <Typography variant='p'>{data.price}</Typography>
              </Box>
              <Button  variant="contained" color="success">Add to Cart</Button>
            </Container>            
          ))
      }
      </Carousel>
    </Component>
    
  )
}

export default Futurebooks
