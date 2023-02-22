import React, { lazy } from 'react'
import { useMatch } from 'react-router-dom'

import SuspenseHook from '../../components/SuspenseHook'
import useSelectModels from '../../stores/useSelectModels'

import styles from './Generate.module.css'

const DalleGenerate = lazy(() => import('../../components/DalleGenerate'))
const StableDiffGenerate = lazy(() => import('../../components/StableDiffGenerate'))

const Generate = () => {
  const { models } = useSelectModels()
  const match = useMatch('/generate/:prompt')
  const prompt = match.params.prompt

  return (
    <div className='flex flex-col justify-start w-full gap-8 pt-4 pb-16 min-h-screen px-1 md:px-0'>
      <h1 className='text-3xl font-bold text-center'>Result of {prompt}</h1>
      <div className={styles.generate}>
        {
        models.includes('dalle') &&
          <SuspenseHook component={<DalleGenerate prompt={prompt} />} />
}
        {
        models.includes('stablediff') &&
          <SuspenseHook component={<StableDiffGenerate prompt={prompt} />} />
}
      </div>
    </div>
  )
}

export default Generate
