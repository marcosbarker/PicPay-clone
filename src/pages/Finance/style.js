import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Wrapper = styled.View`
  background: #000;
  flex: 1;
`;

export const Header = styled(LinearGradient)`
  height: 300px;
`;

export const HeaderContainer = styled.SafeAreaView`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const Value = styled.Text`
  color: white;
  font-size: 40px;
  font-weight: 100;
`;

export const BalanceContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 12px;
  margin-left: 0px;
  margin-right: 0px;
`;

export const SecretButton = styled.TouchableOpacity`
  margin-left: 15px;
`;

export const Info = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 15px;
`;

export const Action = styled.TouchableOpacity`
  height: 50px;
  border-radius: 30px;
  width: 180px;
  border: solid 1px;
  border-color: white;
  margin: 0 10px 0 10px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Actions = styled.View`
  margin-top: 45px;
  flex-direction: row;
`;

export const ActionLabel = styled.Text`
  color: white;
  font-size: 18px;
  margin-left: 6px;
`;

export const UseBalance = styled.View`
  height: 65px;
  flex-direction: row;
  padding: 1px 16px 1px 16px;
  align-items: center;
  justify-content: space-between;
  background: #1C1C1E;
`;

export const UseBalanceTitle = styled.Text`
  color: white;
  font-size: 18px;
`;
