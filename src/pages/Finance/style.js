import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Wrapper = styled.View`
  background: #000;
  flex: 1;
`;

//rolagem da pagina
export const Container = styled.ScrollView`
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
  font-size: 17px;
`;


export const FormsPay = styled.View`
  padding: 1px 16px 1px 16px;
  margin-top: 20px;
`;

export const FormsPayTitle = styled.Text`
  text-transform: uppercase;
  color: #8E8E93; 
  font-weight: bold;
  font-size: 16px;
`;

export const Card = styled.View`
  border-radius: 8px;
  padding: 10px;
  margin-top: 10px;
  background: #1E232A;
`;

export const CardBody = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CardTitle = styled.Text`
  color: white;
  font-size: 18px;
`; 

export const CardLabel = styled.Text`
  color: #1AB563;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin-left: 10px;
`;

export const CardDetails = styled.View`
  flex: 1;
`;

export const CardInfo = styled.Text`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 1px;
`;

export const Img = styled.Image`
 width: 50px;
 margin-left: 6px;
 margin-right: 15px;
`;

export const AddLabel = styled.Text`
  color: #1AB563;
  margin-left: 10px;
`;

export const AddButton = styled.TouchableOpacity`
  margin: 1px 0 0 6px;
  align-items: center;
  flex-direction: row;
`;

export const AddButton2 = styled.TouchableOpacity`
  margin: 10px 6px 10px 6px;
  align-items: center;
  flex-direction: row;
`;