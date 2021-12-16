import styled from "styled-components";
import { Text, View, TouchableOpacity, TouchableHighwhite, SafeAreaView, TextInput } from "react-native";
import Constants from "expo-constants";

// Colors
export const colors = {
  black: "#151515",
  darkgray: "#222",
  white: "#ccc",
  lightgray: "#999",
};

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.SafeAreaView`
  background-color: ${colors.black};
  padding: 20px;
  padding-bottom: 0px;
  flex: 1;
  padding-top: ${statusBarHeight}px;
`;

// Header
export const HeaderView = styled.View`
  padding-vertical: 10px;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  font-size: 30px;
  font-weight: 300;
  color: ${colors.white};
`;

export const HeaderButton = styled.TouchableOpacity`
  font-weight: bold;
  color: ${colors.white};
`;

// List
export const ListContainer = styled.View`
  margin-bottom: 30px;
  flex: 1;
  padding-bottom: 40px;
`;

export const ListView = styled.TouchableHighlight`
  background-color: ${colors.darkgray};
  min-height: 30px;
  width: 100%;
  padding: 15px;
  justify-content: space-around;
  margin-bottom: 5px;
  border-radius: 4px;
`;

export const ListViewHidden = styled.View`
  background-color: ${colors.white};
  min-height: 30px;
  width: 100%;
  padding: 21px;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 5px;
  border-radius: 5px;
`;

export const HiddenButton = styled.TouchableOpacity`
  width: 55px;
  align-items: center;
`;

export const ItemText = styled.Text`
  font-size: 16px;
  color: ${colors.white};
`;

export const ItemDate = styled.Text`
  font-size: 10px;
  letter-spacing: 1px;
  color: ${colors.lightgray};
  text-align: right;
  text-transform: uppercase;
`;

// Text for swiped Item row
export const SwipedItemText = styled(ItemText)`
  color: ${colors.lightgray};
`;

// Modal
export const ModalButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: ${colors.white};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  align-self: center;
  position: absolute;
  bottom: 15px;
`;

export const ModalContainer = styled.View`
  padding: 20px;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: ${colors.black};
`;

export const ModalView = styled.View`
  background-color: ${colors.darkgray};
  border-radius: 20px;
  padding: 35px;
`;

export const StyledInput = styled.TextInput`
  width: 300px;
  height: 50px;
  background-color: ${colors.white};
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  color: ${colors.darkgray};
  letter-spacing: 1px;
`;

export const ModalAction = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: ${(props) => props.color};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const ModalActionGroup = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 30px;
`;

export const ModalIcon = styled.View`
  align-items: center;
  margin-bottom: 30px;
`;

// font-style: italic;
// text-decoration: line-through;
