import React from 'react';
import Moment from 'react-moment';

const TradesItem = ({ trades }) => {
  return (
    <>
      {trades.map((t) => (
        <div key={t.id} className="flex flex-wrap">
          <div
            className={`
          ${t.action === 'open' ? 'bg-green-200' : 'bg-blue-100'} 
          ${t.action === 'closed' ? 'bg-red-200' : 'bg-blue-100'}
          ${t.action === 'update' ? 'bg-blue-200' : 'bg-blue-100'}
          border border-2 border-blue-900 rounded-lg p-4  mx-4 text-blue-900 mb-4 w-full lg:w-2/4`}
            key={t.id}
          >
            <div className="mb-4">
              <span className="mr-2">Created by {t.createdBy} on</span>
              <Moment format="D MMM YYYY">{t.datePosted.toDate()}</Moment>
              <span className="ml-2">at {t.timePosted}</span>
            </div>
            <div className="bg-white border border-blue-900 p-2 rounded-lg flex items-center justify-around">
              <span className="font-bold mr-2">{t.action}</span>
              <span className="font-bold mr-2">
                {t.type === 'Other' ? t.typeOther : t.type}
              </span>
              <span className="font-bold mr-2">
                {t.risk === 'Other' ? t.riskOther : t.risk}
              </span>
              <span className="font-bold mr-2">{t.symbol}</span>
            </div>
            <div className="pt-4">
              <p>{t.summary}</p>
            </div>
          </div>
          <div className="flex lg:flex-col items-start justify-center mb-4 w-full lg:w-2/6 text-white">
            <button className="w-24 p-2 uppercase bg-yellow-600 border border-yellow-900">
              Edit
            </button>
            <button className="w-24 p-2 mx-2 lg:mx-0 lg:my-2 uppercase bg-red-600 border border-red-900">
              Delete
            </button>
            <button className="w-24 p-2 uppercase bg-green-600 border border-green-900">
              Send
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default TradesItem;
