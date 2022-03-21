import { useEffect, useState } from "react";

export const GameLead = ({
  time = 3,
  callback,
}: {
  time?: number;
  callback?: () => void;
}) => {
  const [counter, setCounter] = useState(time);
  useEffect(() => {
    if (!callback) return;
    const interval = setInterval(() => {
      setCounter(counter - 1);
      if (counter === 0) {
        clearInterval(interval);
        callback && callback();
      }
    }, 1000);
    return;
  }, [counter, setCounter, callback]);
  return (
    <>
      <h2>Lorem ipsum game lead tekst...</h2>
    </>
  );
};
