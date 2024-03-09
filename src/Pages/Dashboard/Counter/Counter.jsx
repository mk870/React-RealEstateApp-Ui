import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Counter = ({ amount, speed }) => {
  const [value, setValue] = useState(0);
  let countInterval;
  const autoCount = () => {
    countInterval = setInterval(() => {
      setValue((value) => value + 1);
    }, speed);
  };
  useEffect(() => {
    if (value < amount) {
      autoCount();
    }
    return () => clearInterval(countInterval);
  }, [value, amount]);
  return <>{value}</>;
};

export default Counter;
