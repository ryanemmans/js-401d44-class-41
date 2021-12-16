import React, { useState } from 'react';
import { Text } from 'react-native';
import Header from './Header';
import ListItems from './ListItems';

const Home = () => {

  const initialItems = [
    {
      title: 'Groceries',
      date: '12/16/2021',
      key: '1',
    },
    {
      title: 'Laundry',
      date: '12/16/2021',
      key: '2',
    },
    {
      title: 'Haircut',
      date: '12/16/2021',
      key: '3',
    },
    {
      title: 'Gym',
      date: '12/16/2021',
      key: '4',
    },
    {
      title: 'Car Wash',
      date: '12/16/2021',
      key: '5',
    },
    {
      title: '(Adding Items Coming Soon...)',
      date: '12/16/2021',
      key: '6',
    },
    {
      title: 'Test',
      date: '12/16/2021',
      key: '7',
    },
    {
      title: 'Items',
      date: '12/16/2021',
      key: '8',
    },
    {
      title: 'For',
      date: '12/16/2021',
      key: '9',
    },
    {
      title: 'Scrolling',
      date: '12/16/2021',
      key: '10',
    },
    {
      title: 'Functionality',
      date: '12/16/2021',
      key: '11',
    },
    {
      title: 'It works.',
      date: '12/16/2021',
      key: '12',
    }
  ]

  const [items, setItems] = useState(initialItems);

  const handleClearItems = () => {
    setItems([]);
  }

  return (
    <>
      <Header handleClearItems={handleClearItems} />
      <ListItems
        items={items}
        setItems={setItems}
      />
    </>
  );
}

export default Home;