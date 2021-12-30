import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FirebaseContext } from '../../context/firebase';
import { UIContext } from '../../context/ui';
import { AuthContext } from '../../context/auth';
import { ACTION, TYPE, RISK } from '../../trade-data/data';
import TradePreview from '../interface/TradePreview';

const WebinarTradePostForm = () => {
  const navigate = useNavigate();

  const { firebase } = useContext(FirebaseContext);
  const { auth } = useContext(AuthContext);
  const { errorHandling } = useContext(UIContext);
  const [previewTrade, setPreviewTrade] = useState(false);
  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  const [data, setData] = useState({
    createdBy: auth.name,
    action: '',
    symbol: '',
    type: '',
    typeOther: '',
    risk: '',
    riskOther: '',
    summary: '',
    datePosted: new Date(),
    timePosted: formatAMPM(new Date()),
    dateUpdated: '',
    timeUpdated: ''
  });

  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
    setPreviewTrade(true);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    try {
      setError(false);
      const { action, symbol, type, risk, summary } = data;
      if (
        action === '' ||
        symbol === '' ||
        type === '' ||
        risk === '' ||
        summary === ''
      ) {
        return setError(true);
      }

      firebase.db.collection('WebinarTradePost').add(data);

      setData({
        createdBy: auth.name,
        action: '',
        symbol: '',
        type: '',
        typeOther: '',
        risk: '',
        riskOther: '',
        summary: '',
        datePosted: '',
        timePosted: '',
        dateUpdated: '',
        timeUpdated: ''
      });

      navigate('/admin/trades');
    } catch (error) {
      console.error(`Error ${error}`);
    }
  };
  return (
    <>
      <h1 className="mx-8 mt-8">Webinar Trade Form</h1>
      <div className="flex flex-wrap items-start p-4">
        <form
          className="text-white w-full md:w-3/6 mx-4 border border-2 border-black rounded-lg p-4 bg-blue-800"
          onSubmit={handleSubmitForm}
        >
          <div className="flex items-center justify-between">
            <div className="flex flex-col mb-4 w-full md:w-3/6 mr-2">
              <label htmlFor="action">Trade Action</label>
              <select
                className="text-black w-full p-2 rounded-sm"
                id="action"
                name="action"
                onChange={handleInputChange}
              >
                <option>Select an action</option>
                {ACTION.map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col mb-4 w-full md:w-3/6 ml-2">
              <label htmlFor="symbol">Stock Symbol</label>
              <input
                className="border border-2 border-black p-2 rounded-sm text-black"
                type="text"
                id="symbol"
                name="symbol"
                onChange={handleInputChange}
                value={data.symbol}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col mb-4 w-full md:w-3/6 mr-2">
              <label htmlFor="type">Trade Type</label>
              <select
                className="text-black w-full p-2 rounded-sm"
                id="type"
                name="type"
                onChange={handleInputChange}
              >
                <option>Select an action</option>
                {TYPE.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {data.type === 'Other' && (
              <div className="flex flex-col mb-4 w-full md:w-3/6 ml-2">
                <label htmlFor="typeOther">Trade Type - Other</label>
                <input
                  className="border border-2 border-black p-2 text-black"
                  type="text"
                  id="typeOther"
                  name="typeOther"
                  onChange={handleInputChange}
                  value={data.typeOther}
                />
              </div>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col mb-4 w-full md:w-3/6 mr-2">
              <label htmlFor="risk">Trade Risk</label>
              <select
                className="text-black w-full p-2 rounded-sm"
                id="risk"
                name="risk"
                onChange={handleInputChange}
              >
                <option>Select an action</option>
                {RISK.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            {data.risk === 'Other' && (
              <div className="flex flex-col mb-4 w-full md:w-3/6 ml-2">
                <label htmlFor="riskOther">Risk Type - Other</label>
                <input
                  className="border border-2 border-black p-2 text-black"
                  type="text"
                  id="riskOther"
                  name="riskOther"
                  onChange={handleInputChange}
                  value={data.riskOther}
                />
              </div>
            )}
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="text">Summary</label>
            <textarea
              className="border border-2 border-black p-2 text-black"
              id="summary"
              name="summary"
              placeholder="Your summary"
              onChange={handleInputChange}
              value={data.summary}
            />
          </div>

          {error &&
            errorHandling(
              'flex items-center bg-yellow-100 p-2 border border-yellow-900 text-black',
              'fas fa-exclamation-triangle text-yellow-900 mr-2',
              'All fields are required'
            )}

          <div className="mt-6 w-full">
            <input
              className="
              cursor-pointer bg-green-800 text-white font-bold uppercase p-2 rounded-md w-full 
              hover:bg-white hover:text-green-800 hover:border-green-800 hover:border-2 transition-all
            "
              type="submit"
              value="Save trade"
            />
          </div>
        </form>
        <TradePreview data={data} previewTrade={previewTrade} />
      </div>
    </>
  );
};

export default WebinarTradePostForm;
