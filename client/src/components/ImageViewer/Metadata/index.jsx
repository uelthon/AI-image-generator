import React from 'react'
import { Helmet } from 'react-helmet'

const Metadata = ({ image, modelo, name }) => {
  return (
    <Helmet>
      <title>{name}</title>
      <meta property='og:url' content={window.location.href} />
      <meta property='og:title' content='Text to Image' />
      <meta property='og:description' content={`Image created by AI ${modelo}`} />
      <meta property='og:image' content={image} />
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:title' content='Text to Image' />
      <meta property='twitter:description' content={`Image created by AI ${modelo}`} />
      <meta property='twitter:image' content={image} />
    </Helmet>
  )
}

export default Metadata
