import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import HeroBannerImg from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: { lg: "212px", xs: "70px"},
        ml: { sm: "50px" }
    }} position="relative" p="20px">
        <Typography color="#ff2625" fontWeight="600" fontSize="26px">
            Fitness Club
        </Typography>
        <Typography fontWeight="700" sx={{
            fontSize: { lg: "44px", xs: "40px" }
        }}
        mb="23px" mt="30px">
            Sweat, Smile <br /> and Repeat
        </Typography>
        <Typography lineHeight="35px" fontSize="22px" mb={3}>
            Check out the most effective exercices
        </Typography>
        <Button href="#exercies" variant="contained" color="error">Explore Exercices</Button>
        <Typography fontWeight="600" color="#ff2625" sx={{
            opacity: 0.1,
            display: { lg: "block", xs: "none" }
        }} fontSize="200px">
            Exercice
        </Typography>
        <img src={HeroBannerImg}  alt="hero banner"  className="hero-banner-img"/>
    </Box>
  )
}

export default HeroBanner