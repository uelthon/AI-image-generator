import React from 'react'
import Banner from '../../components/Banner'
import Search from '../../components/Search'

const Home = () => {
  return (
    <div
      className='flex flex-col px-4 justify-center items-center w-full sm:px-0'
      style={{
        minHeight: 'calc(100vh - 132px)'
      }}
    >
      <div className='flex flex-col w-full justify-start gap-12 sm:w-4/5 '>
        <Banner />
        <Search />
      </div>
    </div>
  )
}

export default Home
