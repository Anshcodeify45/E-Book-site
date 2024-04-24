import React from 'react'
import { Box ,Typography, styled } from '@mui/material'
import { sellingBooksData } from '../Data/data'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


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
        height: auto;
`
const Image = styled('img')({
    width:'100%',
    height:350,
    marginTop:20,
})

const Container =styled(Box)`
    width:100%;
    height:400px;
    display:flex;
    justify-content: space-evenly;
  `
const Para =styled(Typography)`
    width:10%;
        `

function Popularbook() {

  return (
    <Component>
        <Box>
        <Typography>Top Rated</Typography>
        </Box>
        <Box>
            <Carousel responsive={responsive}>
                {
                    sellingBooksData.map(data =>(
                        <Container>
                        <Box>
                           <Image src={data.url} alt="Banner" />
                        </Box>
                      <Box >
                      <Typography variant='h5'>{data.infoTitle}</Typography>
                      <Typography variant='h6'>{data.infoTitleTop}</Typography>
                      <Para variant='p'>{data.desc}</Para>
                      
                      </Box>
                      </Container>
                    ))
                }
            </Carousel>
        </Box>
    </Component>
  )
}

export default Popularbook
