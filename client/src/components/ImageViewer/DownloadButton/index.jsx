import React from 'react'

const DownloadButton = ({ image }) => {
  return (
    <div className='flex items-center gap-2'>
      <a className='btn btn-primary btn-sm capitalize' href={image} download target='_blank' rel='noreferrer'>Download</a>
    </div>
  )
}

export default DownloadButton
