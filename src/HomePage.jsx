import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export default function HomePage() {
  return (
    <div>
      <h2>Home</h2>
      <List>
        <Item>
          <Link to="/about">About</Link>
        </Item>
        <Item>
          <Link to="/login">Log in</Link>
        </Item>
        <Item>
          <Link to="/restaurants">Restaurants</Link>
        </Item>
        <Item>
          <Link to="/xxx">멸망의 길</Link>
        </Item>
      </List>
    </div>
  );
}

const List = styled.ul({
  display: 'flex',
  margin: '0',
  padding: '0',
  listStyle: 'none',
});

const Item = styled.li({
  marginRight: '1em',
  '& a': {
    color: '#B2EBF4',
    textDecoration: 'none',
    '&:hover': {
      color: '#D1B2FF',
    },
  },
});
