import React, { useRef, useEffect } from 'react';
import '../../App.css';
import './styles.css';

const Block1: React.FC = () => {
  let ref = useRef<HTMLInputElement>(null);

  const isDisabled = true;
  useEffect(() => {
    const rect = ref?.current?.getBoundingClientRect();
  });

  return (
    <div ref={ref} className={`block ${isDisabled ? `block1` : ''}`}>
      1
    </div>
  );
};

export default Block1;
