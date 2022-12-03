import React from 'react'
import { useQuery } from 'react-query'

import Character from './Character'

const Characters = () => {
  const fetchCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    return response.json()
  }

  // Consists of setting a unique key for react query important internal functions
  // Consists of giving a function that is going to do the fetching and return the data
  const { data, status } = useQuery('characters', fetchCharacters)
  console.log(data)
  console.log(status)

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (status === 'error') {
    return <div>Error...</div>
  }

  return (
    <div className='characters'>
      {data.results.map((character, index) => (
        <Character character={character} key={index} />
      ))}
    </div>
  )
}

export default Characters
