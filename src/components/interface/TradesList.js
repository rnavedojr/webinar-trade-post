import React, { useEffect, useState } from 'react';
import TradesItem from './TradesItem';

const TradesList = ({ firebase }) => {
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    let getFromFirebase = true;
    firebase.db.collection('WebinarTradePost').onSnapshot((snapshot) => {
      if (getFromFirebase) {
        const tradesArr = snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setTrades(tradesArr);
      }
    });

    return () => {
      getFromFirebase = false;
    };
  }, [firebase]);

  return (
    <div className="container mx-auto p-4">
      <TradesItem trades={trades} />
    </div>
  );
};

export default TradesList;
