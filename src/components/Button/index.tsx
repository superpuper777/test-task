import React, { useEffect, useRef, useState } from 'react';
import './styles.css';

type Props = {
  circleVisible: boolean;
  setCircleVisible: (arg: boolean) => void;
};
const Button: React.FC<Props> = ({ circleVisible, setCircleVisible }) => {
  const [num, setNum] = useState(9);
  let intervalRef = useRef<ReturnType<typeof setInterval>>();
  const [isDisabled, setIsDisabled] = useState(false);

  const decreaseNum = () => setNum((prev) => prev - 1);

  function handleClick() {
    if (num === 0) {
      setNum(9);
      setCircleVisible(!circleVisible);
    }
    setIsDisabled((prev) => !prev);
    setCircleVisible(!circleVisible);
  }

  useEffect(() => {
    if (num > 0) {
      intervalRef.current = setInterval(decreaseNum, 1000);
    } else {
      clearInterval(intervalRef.current);
      setIsDisabled((prev) => !prev);
      setCircleVisible(false);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [num, setIsDisabled]);

  return (
    <button className="button" onClick={handleClick} disabled={isDisabled}>
      {isDisabled ? num : 'start'}
    </button>
  );
};

export default Button;
