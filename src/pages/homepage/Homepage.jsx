import React from 'react'
import Banner from '../../components/homepage/Banner'
import StateCard from '../../components/homepage/StateCard'
import YourFriends from '../../components/homepage/YourFriends'
import { useLoaderData } from 'react-router'

const Homepage = () => {
    const data = useLoaderData();
    console.log(data);
  return (
    <>
          <Banner />
          <StateCard />
          <YourFriends />
    </>
    
  )
}

export default Homepage