import React, { useState, useEffect } from 'react';

import { Header, Title, Cards } from './styles';
import logo from '../../assets/logo.png';
import api from '../../services/api';

interface Repository {
  id: number;
  image: string;
  name: string;
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    api.get('characters').then(res => {
      const cards = res.data.results;
      setRepositories(cards.slice(0, 9));
    });
  }, []);

  return (
    <>
      <Header>
        <img src={logo} alt="one piece" />
      </Header>
      <Title>Tripulação Mugiwara</Title>
      <Cards>
        {repositories.map(repository => (
          <div key={repository.id}>
            <img src={repository.image} alt={repository.name} />
          </div>
        ))}
      </Cards>
    </>
  );
};

export default Dashboard;
