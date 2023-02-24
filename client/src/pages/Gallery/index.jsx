import React, { lazy, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

import SuspenseHook from '../../components/SuspenseHook'

const SearchGallery = lazy(() => import('../../components/ContainerGallery/SearchGallery'))
const OrderbyGallery = lazy(() => import('../../components/ContainerGallery/OrderbyGallery'))
const ContainerGallery = lazy(() => import('../../components/ContainerGallery'))
const ImageViewer = lazy(() => import('../../components/ImageViewer'))

const Gallery = () => {
  const [searchParams] = useSearchParams()
  const imageId = searchParams.get('imageId')

  useEffect(() => {
    if (!imageId) {
      return document.body.classList.remove('overflow-y-hidden')
    }
    document.body.classList.add('overflow-y-hidden')
  }, [imageId])

  return (
    <div className='flex flex-col justify-start gap-4 px-1 pt-8 pb-16 min-h-screen md:px-0'>
      <Helmet>
        <title>Gallery</title>
      </Helmet>
      <h1 className='text-3xl font-bold text-center pb-4'>Gallery</h1>
      <SuspenseHook component={<SearchGallery />} />
      <SuspenseHook component={<OrderbyGallery />} />
      <SuspenseHook component={<ContainerGallery />} />
      {imageId && <SuspenseHook component={<ImageViewer id={imageId} />} />}
    </div>
  )
}

export default Gallery
