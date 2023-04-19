import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Display() {
  const [sleepDisplay, setSleepData] = useState([]);


  useEffect(() => {
    axios.get('/api/sleepdisplay')
      .then(response => {
        setSleepData(response.data);
      })
      //Handle the error
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Sleep Data</h1>
      <ul>
        {sleepDisplay.map(data => (
          <li key={data._id}>
            <div>Bedtime: {data.bedTime}</div>
            <div>Wakeuptime: {data.wakeUpTime}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Display;