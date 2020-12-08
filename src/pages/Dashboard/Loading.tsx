import React from 'react';
import logo from '../../assets/load.gif';

// import { Container } from './styles';

const Loading: React.FC = () => {
  return (
    <span>
      <img src={logo} alt="ss" />
    </span>
  );
};

export default Loading;
