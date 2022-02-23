import { useState, useEffect } from "react";

//Custom hook for return the date! used setInterval and useSate and useEffect

const useTimer = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const tick = () => {
      setDate(new Date());
    };

    let ticker = setInterval(() => tick(), 1000);
    return () => clearInterval(ticker);
  }, []);

  return date;
};

export default useTimer;