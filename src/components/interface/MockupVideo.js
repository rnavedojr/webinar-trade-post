import React from 'react'

const MockupVideo = () => {
  return (
    <div className='w-full'>
      <iframe
        className='mx-auto my-8'
        width="560"
        height="315"
        src="https://www.youtube.com/embed/UFTFQEFV4x4"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
      </iframe>
    </div>
  )
}

export default MockupVideo
