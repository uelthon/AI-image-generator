import React from 'react'
import { useSearchParams } from 'react-router-dom'

import SavetoGallery from '../../components/SavetoGallery'
import styles from './Card.module.css'

export const CardGallery = ({ modelo, image, prompt, name, imageId }) => {
  const [, setSearchParams] = useSearchParams()

  const handleClick = () => {
    setSearchParams({ imageId })
  }

  return (
    <div
      className={`${styles.container} rounded-lg shadow-xl cursor-pointer`}
      onClick={handleClick}
    >
      <img
        className='w-full h-full object-cover rounded-lg'
        src={image} alt={`Generate image by ${modelo} with prompt ${prompt}`}
      />
      <div className={`${styles.body} bg-black bg-opacity-80 p-4 flex flex-col justify-start gap-1 absolute top-0 left-0 w-full h-full rounded-lg`}>
        <h2 className='text-xl capitalize text-primary text-opacity-90'>{name}</h2>
        <p className='text-md font-semibold  text-secondary text-opacity-90'>{modelo}</p>
        <p className='text-md capitalize font-semibold text-secondary text-opacity-90 overflow-hidden'>{prompt}</p>
      </div>
    </div>
  )
}

const Card = ({ image, prompt, model }) => {
  return (
    <div className='card card-compact shadow-xl'>
      <figure>
        <img
          src={`data:image/png;base64,${image}`} alt={`Generate image by ${model} with prompt ${prompt}`}
          className='max-h-[500px]'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{model}</h2>
        <p>{prompt}</p>
        <div className='card-actions justify-end'>
          <SavetoGallery image={image} prompt={prompt} model={model} />
        </div>
      </div>
    </div>
  )
}

export default Card
