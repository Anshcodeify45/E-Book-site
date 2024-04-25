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
        background:rgba(0, 0, 0, 0.6);
`
const Image = styled('img')({
    width:'100%',
    height:350,
})

  const Container =styled(Box)`
    width:100%;
    height:400px;
    display:flex;
    justify-content: space-evenly;
    color:#dfe8f1;
    align-items:center;
     `

     const Data=styled(Typography)`
     margin-top: 50px;
     text-align:start;
     `

   const Para =styled(Typography)`
      max-width: 650px;
      `
    const Title = styled(Typography)`
      text-align:center;
      color:#dfe8f1;
      background:rgba(0, 0, 0, 0.6);
    `
function Popularbook() {

  return (
    <Component>
        <Box>
        <Title variant='h3'>Deal of the Day</Title>
        </Box>
        <Box>
            <Carousel responsive={responsive}
                      swipeable={false}
                      draggable={false}
                      showDots={true} 
                      autoPlay={true}
                      infinite={true}
                      autoPlaySpeed={4000}>
                {
                    sellingBooksData.map(data =>(
                        <Container>
                        <Box>
                           <Image src={data.url} alt="Banner" />
                        </Box>
                      <Data >
                        <Typography variant='h2' >Up to 70% off </Typography>
                      <Typography variant='h5'>{data.infoTitle}</Typography>
                      <Typography variant='h6'>{data.infoTitleTop}</Typography>
                      <Para>{data.desc}</Para>
                      
                      </Data>
                      </Container>
                    ))
                }
            </Carousel>
        </Box>
    </Component>
  )
}

export default Popularbook
