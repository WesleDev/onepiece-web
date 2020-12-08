import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10;
  margin-top: 10px;

  section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
    margin-top: 10px;
  }

  div {
    width: 266px;
    height: 400px;

    border-radius: 30px;
    margin-top: 60px;
    border: 1px solid #ccc;
    box-shadow: 26px 10px 44px #000;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      transform: translateX(-10px);
    }
  }

  img {
    height: 100%;
    padding: 15px;
    margin: 0 10px;
  }

  span {
    height: 304px;
    position: absolute;
    left: 538px;
    top: 400px;
    right: 0;
  }
`;
