import React from 'react';
import { HeaderView, HeaderTitle, HeaderButton, colors } from '../styles/appStyles';
import { Feather } from '@expo/vector-icons';

const Header = ({handleClearItems}) => {
  return (
    <HeaderView>
      <HeaderTitle>To-Do List</HeaderTitle>
      <HeaderButton
        onPress={handleClearItems}
      >
        <Feather name="check-circle" size={25} color={colors.white} />
      </HeaderButton>
    </HeaderView>
  );

}

export default Header;
