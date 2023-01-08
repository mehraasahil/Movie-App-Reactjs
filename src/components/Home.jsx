import React  from 'react'

import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import MovieBox from './MovieBox'
const Home = () => {
  const[list ,setList] = useState()

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=3ad96fdc72036f2fe4d7aa4074d78a95&language=en-US&page=1`)
    .then(({data})=> setList(data.results))
    .catch((Error)=> console.log(Error))

  },[])

  return (
    <div>
      <div className="container">
        <div className="grid">
        {
      list && list.map((movie) => <MovieBox list={movie}/>)
      }
        </div>
      </div>
    
   
    Home
   
      
   
   
    </div>
  )
}

export default Home