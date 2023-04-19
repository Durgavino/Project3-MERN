import { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import {SLEEP_DATA} from "../utils/mutations";
//import axios from 'axios';


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
   
    <label htmlFor="bedTime">Bedtime:</label>
      <input type="time" id="bedTime" name="bedTime" value={bedTime} onChange={(e) => setBedtime(e.target.value)} />
   <label htmlFor="wakeUpTime">Wake-up time:</label>
      <input type="time" id="wakeUpTime" name="wakeUpTime" value={wakeUpTime} onChange={(e) => setWakeuptime(e.target.value)} />


    <button type="submit">Submit</button>
  </form>




);

}



export default SleepbedTime;