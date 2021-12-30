import React from 'react'
import { Helmet } from 'react-helmet'
import { TrendingUpIcon } from "@heroicons/react/solid"

const TradeSubmitSuccess = () => {
  return (
    <>
      <Helmet>
        <title>Your trade was successfully submitted!</title>
      </Helmet>
      <div className='h-96 flex flex-col items-center justify-center h-50 text-green-900'>
        <div className='p-4 border border-4 border-green-900 bg-green-100 rounded-md'>
          <TrendingUpIcon className="h-12 w-12" />
          <h1>Congratulations!</h1>
          <h2>Your trade was successfully submitted!</h2>
        </div>
      </div>
    </>
  )
}

export default TradeSubmitSuccess
