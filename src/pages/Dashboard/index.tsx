import React, { useState, useEffect } from 'react';

import { Header, Title, Cards } from './styles';
import logo from '../../assets/logo.png';
import api from '../../services/api';
import Loading from './Loading';

interface Repository {
  id: number;
  image: string;
  name: string;
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    api.get('characters').then(res => {
      const cards = res.data.results;
      setRepositories(cards.slice(0, 10));
      setDone(true);
    });
  }, []);

  return (
    <>
      <Header>
        <img src={logo} alt="one piece" />
      </Header>
      <Title>Tripulação</Title>
      <Cards>
        {done === false ? (
          <Loading />
        ) : (
          <section>
            {repositories.map(repository => (
              <div key={repository.id}>
                <img
                  src={repository.image}
                  alt={repository.name}
                  title={repository.name}
                />
              </div>
            ))}
          </section>
        )}
      </Cards>
    </>
  );
};

export default Dashboard;
