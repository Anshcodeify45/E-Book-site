import { Box ,Typography ,styled} from '@mui/material'
import React from 'react'
import { featuredBooksData } from '../Data/data'
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
})



function Futurebooks() {
  return (
    <Component>
    <Typography variant='h1' style={{textAlign:'center',color:'#dfe8f1',background:'rgba(0, 0, 0, 0.6)'}}>Anime books</Typography>
    <Carousel  responsive={responsive}
    swipeable={false}
    draggable={false}
    showDots={false} 
    autoPlay={true}
    infinite={true}
    autoPlaySpeed={4000}
    centerMode={true}>
      {
          featuredBooksData.map(data =>(
            <Box style={{textAlign:'center',color:'#dfe8f1'}}>
              <Box>
                  <Image src={data.url} alt="" />
              </Box>
              <Box >
                <Typography>{data.name}</Typography>
                <Typography>{data.writer}</Typography>
                <Typography>{data.price}</Typography>
              </Box>
            </Box>            
          ))
      }
      </Carousel>
    </Component>
    
  )
}

export default Futurebooks
