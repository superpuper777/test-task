import React, { useState } from 'react';
import Button from './components/Button';
import Block1 from './components/Block1';
import Block2 from './components/Block2';
import Circle from './components/Circle';

function App() {
  const [circleVisible, setCircleVisible] = useState(false);
  return (
    <div className="App">
      <Circle circleVisible={circleVisible} />
      <div className="wrapper">
        <Block1 />
        <Block2 />
      </div>
      <Button
        circleVisible={circleVisible}
        setCircleVisible={setCircleVisible}
      />
    </div>
  );
}

export default App;
