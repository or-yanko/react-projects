import React, { useState } from 'react';
import styled from 'styled-components';
// Components
import Lamp from './Lamp';
import LightSwitch from './LightSwitch';

const Room = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  border: 10px solid black;
  margin: 0 auto;
`;

function App() {
  // Lamp one
  const [isLampOneOn, setIsLampOneOn] = useState(false);
  // Lamp two
  const [isLampTwoOn, setIsLampTwoOn] = useState(true);

  const handleLightSwitchOne = () => setIsLampOneOn(prev => !prev);
  const handleLightSwitchTwo = () => setIsLampTwoOn(prev => !prev);

  return (
    <Room>
      <Lamp lampOn={isLampOneOn} position='left' />
      <Lamp lampOn={isLampTwoOn} position='right' />
      <LightSwitch
        name='one'
        callback={handleLightSwitchOne}
        switchOn={isLampOneOn}
        position='left'
      />
      <LightSwitch
        name='two'
        callback={handleLightSwitchTwo}
        switchOn={isLampTwoOn}
        position='right'
      />
    </Room>
  );
}

export default App;


/* 
mport React, {useState} from 'react';
import styled from 'styled-components';

import Lamp from './Lamp'
import Ls from './Ls'

const Room = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  border: 10px solid black;
  margin: 0 auto;
`;

function App() {

  //lamb one
  const [isLamp1On, setLamp1On] = useState(false);
  //lamb two
  const [isLamp2On, setLamp2On] = useState(true);

  //handlers
  const handleLightSwitch1 = () => setLamp1On(prev => !prev);
  const handleLightSwitch2 = () => setLamp2On(prev => !prev);

  return (
  <Room>
    <Lamp lampOn={isLamp1On} position='left'/>
    <Lamp lampOn={isLamp2On} position='right'/>
    <Ls
      name='one'
      callback={handleLightSwitch1}
      switchOn={isLamp1On}
      position='left'
    />
    <Ls
      name='two'
      callback={handleLightSwitch2}
      switchOn={isLamp2On}
      position='right'
    />
  </Room>
  );
}

export default App;
*/