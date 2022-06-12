import React,{ useState } from 'react'
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercices from '../components/SearchExercices';
import Exercices from '../components/Excercices';

const Home = () => {
  return (
    <Box>
        <HeroBanner />
        <SearchExercices />
        <Exercices />
    </Box>
  )
}

export default Home