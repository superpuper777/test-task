import React from 'react';
import './styles.css';

type Props = {
  circleVisible: boolean;
};
const Circle: React.FC<Props> = ({ circleVisible }) => {
  return <div>{circleVisible && <div className="circle"></div>}</div>;
};

export default Circle;
