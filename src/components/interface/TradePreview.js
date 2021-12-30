import React from 'react';
import Moment from 'react-moment';

const TradePreview = ({ data, previewTrade }) => {
  const {
    createdBy,
    action,
    type,
    typeOther,
    risk,
    riskOther,
    symbol,
    timePosted,
    summary
  } = data;
  return (
    <div className="w-full md:w-3/6 mt-4 md:mt-0">
      <h2 className="ml-4 mb-4">{`Trade card preview ${
        previewTrade ? '' : 'will show here'
      }`}</h2>
      {previewTrade && (
        <>
          <div
            className={`
        ${action === 'open' ? 'bg-green-200' : 'bg-blue-100'} 
        ${action === 'closed' ? 'bg-red-200' : 'bg-blue-100'}
        ${action === 'update' ? 'bg-blue-200' : 'bg-blue-100'}
        'border border-2 border-blue-900 rounded-lg p-4  mx-4 text-blue-900'`}
          >
            {/* user info and date - time */}
            <div className="flex justify-between mb-4">
              <span className="font-bold mr-2">{createdBy}</span>{' '}
              <Moment format="D MMM YYYY">{Date()}</Moment> {timePosted}
            </div>
            <div className="bg-white border border-blue-900 p-2 rounded-lg flex items-center justify-around">
              <span className="font-bold mr-2">{action}</span>
              <span className="font-bold mr-2">
                {type === 'Other' ? typeOther : type}
              </span>
              <span className="font-bold mr-2">
                {risk === 'Other' ? riskOther : risk}
              </span>
              <span className="font-bold mr-2">{symbol}</span>
            </div>
            <div className="pt-4">
              <p>{summary}</p>
            </div>
          </div>
          <div className="p-4">
            <sup>
              After sending the trade you will be redirected to the trades list
              page where you can edit, delete or post to the webinar as needed.
            </sup>
          </div>
        </>
      )}
    </div>
  );
};

export default TradePreview;
