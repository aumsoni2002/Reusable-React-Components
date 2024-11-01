import { useEffect, useState } from "react";

function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return {
    count: count,
    incrementCount: incrementCount,
  };
}

export default useCounter;
