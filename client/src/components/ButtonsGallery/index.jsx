import React from 'react'
import useParamsGallery from '../../stores/useParamsGallery'

const ButtonsGallery = ({ total }) => {
  const { params, setParams } = useParamsGallery()

  const handleClick = {
    init: () => setParams('offset', 0),
    prev: () => setParams('offset', params.offset - params.limit),
    next: () => setParams('offset', params.offset + params.limit),
    end: () => setParams('offset', total - (total % params.limit))
  }

  return (
    <div className='btn-group'>
      <button
        onClick={handleClick.init}
        className='btn btn-primary'
        disabled={params.offset < params.limit}
      >Init
      </button>
      <button
        onClick={handleClick.prev}
        className='btn btn-primary'
        disabled={params.offset < params.limit}
      >Prev
      </button>
      <button
        onClick={handleClick.next}
        className='btn btn-primary'
        disabled={params.offset >= total - params.limit}
      >Next
      </button>
      <button
        onClick={handleClick.end}
        className='btn btn-primary'
        disabled={params.offset >= total - params.limit}
      >End
      </button>
    </div>
  )
}

export default ButtonsGallery
