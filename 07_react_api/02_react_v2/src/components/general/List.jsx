import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 40px;
  margin-top: 3rem;
`;

const StyledLi = styled.li`
  min-height: 150px;
  padding: 2.2rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
  border-radius: 0.8rem;

  header {
    h2 {
      font-size: 2rem;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.info};
    }

    p {
      font-size: 1.4rem;
      font-weight: 300;
    }
  }
`;

const List = ({ data }) => (
  <StyledUl>
    {data.map((item) => (
      <StyledLi key={item[0]}>
        <header>
          <h2>{item[1].title}</h2>
        </header>
        <p>{item[1].content}</p>
        <Link to={`/posts/${item[0]}`}>Gå til post</Link>
      </StyledLi>
    ))}
  </StyledUl>
);

export default List;
