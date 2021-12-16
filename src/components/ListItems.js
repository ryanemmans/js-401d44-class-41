import React, { useState } from 'react';
import { ListView, ListViewHidden, ItemText, ItemDate, HiddenButton, SwipedItemText, colors } from '../styles/appStyles';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Feather } from '@expo/vector-icons';

const ListItems = ({ items, setItems }) => {

  const [swipedRow, setSwipedRow] = useState(null);

  const handleDeleteItem = (rowMap, rowKey) => {
    const newItems = [...items];
    const itemIndex = items.findIndex((item) => item.key === rowKey);
    newItems.splice(itemIndex, 1);
    setItems(newItems);
  }

  return (
    <SwipeListView
      data={items}
      renderItem={(data) => {
        const RowText = data.item.key === swipedRow ? SwipedItemText : ItemText;
        return (
          <ListView
            underlayColor={colors.dark}
            onPress={() => {

            }}
          >
            <>
              <RowText>{data.item.title}</RowText>
              <ItemDate>{data.item.date}</ItemDate>
            </>
          </ListView>
        )
      }}
      renderHiddenItem={(data, rowMap) => {
        return (
          <ListViewHidden>
            <HiddenButton onPress={() => handleDeleteItem(rowMap, data.item.key)}>
              <Feather name="check-circle" size={20} color={colors.darkgray} />
            </HiddenButton>
          </ListViewHidden>
        )
      }}
      leftOpenValue={80}
      previewRowKey={'1'}
      previewOpenValue={80}
      previewOpenDelay={3000}
      disableLeftSwipe={true}
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1, paddingBottom: 30, marginBottom: 40
      }}
      onRowOpen={(rowKey) => {
        setSwipedRow(rowKey);
      }}
      onRowClose={() => {
        setSwipedRow(null);
      }}
    />
  );
}

export default ListItems;
