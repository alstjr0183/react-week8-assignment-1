import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

import { get } from './utils';

export default function RestaurantsContainer({ onClickRestaurant }) {
  const restaurants = useSelector(get('restaurants'));

  function handleClick(restaurant) {
    return (event) => {
      event.preventDefault();
      onClickRestaurant(restaurant);
    };
  }

  return (
    <MenuList>
      {restaurants.map((restaurant) => (
        <MenuItem key={restaurant.id}>
          <a href="/restaurants/1" onClick={handleClick(restaurant)}>
            {restaurant.name}
          </a>
        </MenuItem>
      ))}
    </MenuList>
  );
}

const MenuList = styled.ul({
  display: 'flex',
  flexDirection: 'column',
  borderTop: '1px solid skyblue',
  padding: '30px 0',
  margin: '0',
  listStyle: 'none',
});

const MenuItem = styled.li(() => ({
  borderRadius: '10px',
  background: 'skyblue',
  marginBottom: '10px',
  padding: '10px',
  '& a': {
    textDecoration: 'none',
    color: 'white',
  },
}));
