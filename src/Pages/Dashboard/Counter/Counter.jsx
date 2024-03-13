import React from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";

const Counter = ({ amount, speed }) => {
  const [value, setValue] = useState(0);
  let countInterval;
  const autoCount = useCallback(() => {
    countInterval = setInterval(() => {
      setValue((value) => value + 1);
    }, speed);
  },[value])
  useEffect(() => {
    if (value < amount) {
      autoCount();
    }
    return () => clearInterval(countInterval);
  }, [value, amount, autoCount, countInterval]);
  return <>{value}</>;
};

export default Counter;
