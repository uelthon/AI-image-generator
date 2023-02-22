import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import BtnActions from './BtnActions'
import ModelsCheck from './ModelsCheck'

const Search = () => {
  const [inputSearch, setInputSearch] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/generate/${inputSearch}`)
  }

  return (
    <form
      className='flex flex-col justify-start items-center w-full gap-4'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        required
        placeholder='Describe a new scene'
        className='w-full rounded-xl outline-none p-4 bg-black bg-opacity-10 backdrop-blur-md'
        value={inputSearch}
        onChange={(e) => {
          e.preventDefault()
          setInputSearch(e.target.value)
        }}
      />
      <div className='w-full flex flex-col justify-start gap-4 items-center md:flex-row  md:justify-between'>
        <ModelsCheck />
        <BtnActions setInputSearch={setInputSearch} />
      </div>
    </form>
  )
}

export default Search
