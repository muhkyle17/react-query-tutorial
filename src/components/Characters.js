import React, { useState } from 'react'
import { useQuery } from 'react-query'

import Character from './Character'

const Characters = () => {
  const [page, setPage] = useState(1)

  const fetchCharacters = async ({ queryKey }) => {
    console.log(queryKey)
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    )
    return response.json()
  }

  // Consists of setting a unique key for react query important internal functions
  // Consists of giving a function that is going to do the fetching and return the data
  const { data, status } = useQuery(['characters', page], fetchCharacters)
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
      <div>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Previous
        </button>
        <button
          disabled={data.info.next === null}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Characters
