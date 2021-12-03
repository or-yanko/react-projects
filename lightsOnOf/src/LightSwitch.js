import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  position: absolute;
  left: ${props => (props.position === 'left' ? '20px' : '380px')};
  bottom: 20px;
  background: white;
  color: black;
  border: 1px solid black;
  border-radius: 10px;
  width: 100px;
  height: 50px;
  cursor: pointer;
`;

const LightSwitch = ({ callback, position, switchOn }) => (
  <Button onClick={callback} position={position}>
    {switchOn ? 'Yes' : 'No'}
  </Button>
);

export default LightSwitch;


/*import React from 'react';
import styled from 'styled-components';

const Button = styled.Button`
  position: absolute;
  left: ${props => (props.position === 'left' ? '20px' : '380px')};
  bottom: 20px;
  backgroud: white;
  color: black;
  border: 1px black;
  border-radius: 10px;
  width: 100px;
  height: 50px;
  cursor: pointer;
`;

const Ls =({callback, position, switchOn}) => (
    <Button onClick={callback} position={position}>
        {switchOn ? "On" : "Off"}
    </Button>
);

export default Ls;
*/