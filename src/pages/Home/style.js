import styled from 'styled-components/native';

//desloca a pagina para após statusBar (area segura)
export const Wrapper = styled.SafeAreaView` 
  background: #000;
  flex: 1;
`;

//rolagem da pagina
export const Container = styled.ScrollView`
`;

export const Header = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
  padding: 0 16px;
`;

export const Balance = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: white;
`;

export const BalanceContainer = styled.View`
`;

export const BalanceTitle = styled.Text`
  font-size: 14px;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
`;