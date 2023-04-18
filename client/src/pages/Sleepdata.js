

// // // select id,BedTime,wakeUpTime,(-(BedTime-12)+(0+wakeUpTime)) as Sleepdurtion from Usersleepinfomation;
//  import React from "react";
// // import { Link } from "react-router-dom";
// //import { useMutation } from '@apollo/client';
//  //import { SLEEP_DATA } from '../utils/mutations';
// import { QUERY_ME } from "../utils/queries";
// import { useQuery } from '@apollo/react-hooks'
// //import Auth from '../utils/auth';

// //const { useMutation } = require("@apollo/client");

// const Sleepdata=()=>{

//   const { loading, error, data } = useQuery(QUERY_ME);
//   if(loading) return <p>Loading ....</p>;

//   if (error) return <p>Error: {error.message}</p>;


//   return (
//     <ul>
//        {data.users.map(user => (
//         <li key={user.id}>
//           {user.name} ({user.email})
//         </li>
//       ))}
//     </ul>
//   )
// }




// export default Sleepdata;

// // const Sleepdata=()=>{
// //   const [sleepinfo]=useMutation(SLEEP_DATA);
// //   const handleSubmit=async(event)=>{
// //     event.preventDefault();
// //     const { data } = await sleepinfo({
// //       variables:{bedTime:10,wakeUpTime:6}
// //     });
// //   }

// // }

// // export default Sleepdata;


import React, { useState } from 'react';

const Sleepdata = () => {
  const [bedTime, setbedTime] = useState('');
  const [wakeUpTime, setwakeUpTime] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
   // const formData = { bedTime, wakeUpTime };

    const response = await fetch('http://localhost:3000/sleepdata', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `
        mutation ($bedTime: Number!, $wakeUpTime: Number!) {
          createSleepData(bedTime: $bedtime, wakeUpTime: $wakeUpTime) {
            id
            bedTime
            wakeUpTime
          }
        }
      `,
      variables: { bedTime, wakeUpTime },
      })
    });
    const data = await response.json();
    console.log(data);
     }
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="bedTime">Bedtime:</label>
      <input type="time" id="bedTime" name="bedTime" value={bedTime} onChange={(e) => setbedTime(e.target.value)} />

      <label htmlFor="wakeUpTime">Wake-up time:</label>
      <input type="time" id="wakeUpTime" name="wakeUpTime" value={wakeUpTime} onChange={(e) => setwakeUpTime(e.target.value)} />

      <button type="submit">Save</button>
    </form>
    </div>
  )




}



export default Sleepdata;