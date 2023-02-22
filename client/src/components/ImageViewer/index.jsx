import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'

import useGetOnePostQuery from '../../hooks/useGetOnePostQuery'
import Loader from '../Loader'
import BodyViewer from './BodyViewer'

const ImageViewer = ({ id }) => {
  const { data, isLoading, error } = useGetOnePostQuery({ id })
  const navigate = useNavigate()

  if (!id) return null

  const handleClick = () => {
    navigate('.', { replace: true })
  }

  return (
    <div className='grid place-items-center bg-black bg-opacity-50 backdrop-blur-md fixed top-0 left-0 w-full h-screen z-[999]'>
      {error && <p>{error.message}</p>}
      {isLoading && <Loader />}
      {data &&
        <BodyViewer
          image={data.image}
          name={data.name}
          modelo={data.modelo}
          prompt={data.prompt}
          createdAt={data.createdAt}
        />}
      <button
        className='btn btn-circle btn-error absolute right-5 top-5'
        onClick={handleClick}
      >
        <AiOutlineClose size='1.25rem' />
      </button>
    </div>
  )
}

export default ImageViewer
