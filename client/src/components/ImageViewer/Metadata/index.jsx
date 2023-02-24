import React from 'react'
import { Helmet } from 'react-helmet-async'

const Metadata = ({ image, modelo, name }) => {
  return (
    <Helmet>
      <title>{name}</title>
      <meta property='og:url' content={window.location.href} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={name} />
      <meta property='og:description' content={`Image created by AI ${modelo}`} />
      <meta property='og:image' content={image} />
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:title' content={name} />
      <meta property='twitter:description' content={`Image created by AI ${modelo}`} />
      <meta property='twitter:image' content={image} />
    </Helmet>
  )
}

export default Metadata
