// import React, { useState } from 'react';


// const Sleepdata = () => {
//   const [bedTime, setbedTime] = useState('');
//   const [wakeUpTime, setwakeUpTime] = useState('');
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//    // const formData = { bedTime, wakeUpTime };

//     const response = await fetch('http://localhost:3000/sleepdata', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         query: `
//         mutation ($bedTime: Number!, $wakeUpTime: Number!) {
//           createSleepData(bedTime: $bedtime, wakeUpTime: $wakeUpTime) {
//             id
//             bedTime
//             wakeUpTime
//           }
//         }
//       `,
//       variables: { bedTime, wakeUpTime },
//       })
//     });
//     const data = await response.json();
//     console.log(data);
//      }
//   return (
//     <div>
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="bedTime">Bedtime:</label>
//       <input type="time" id="bedTime" name="bedTime" value={bedTime} onChange={(e) => setbedTime(e.target.value)} />

//       <label htmlFor="wakeUpTime">Wake-up time:</label>
//       <input type="time" id="wakeUpTime" name="wakeUpTime" value={wakeUpTime} onChange={(e) => setwakeUpTime(e.target.value)} />

//       <button type="submit">Save</button>
//     </form>
//     </div>
//   )




// }



// export default Sleepdata;


import { useState } from 'react';
import { useMutation } from '@apollo/client';
import {SLEEP_DATA} from "../utils/mutations";


function SleepbedTime(){
  const [bedTime, setBedtime] = useState('');
  const [wakeUpTime, setWakeuptime] = useState('');

  const [sleepinfo] = useMutation(SLEEP_DATA);
  const handleSubmit = (event) => {
    event.preventDefault();
    sleepinfo({ variables: { bedTime, wakeUpTime } });
    setBedtime('');
    setWakeuptime('');
};
return (
  <form onSubmit={handleSubmit}>
    <label>
      Bedtime:
      <input type="text" value={bedTime} onChange={(e) => setBedtime(e.target.value)} />
    </label>
    <label>
      Wakeuptime:
      <input type="text" value={wakeUpTime} onChange={(e) => setWakeuptime(e.target.value)} />
    </label>
    <button type="submit">Submit</button>
  </form>
);


}


export default SleepbedTime;