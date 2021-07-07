import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 16px;
  margin-top: 20px;
`;

export const Header = styled.View`
`;

export const Avatar = styled.Image`
  border-radius: 100;
  width: 80px;
  height: 80px;
`;

export const CardBody = styled.View`
  margin-top: 20px;
`;

export const UserName = styled.Text`
  font-size: 20px;
  color: white;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

export const Description = styled.Text`
  color: white;
  font-size: 16px;
  margin-left: 15px;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const Card = styled.View`
  background: #1e222b;
  border-radius: 8px;
  margin-top: 20px;
  padding: 15px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CardFooter = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin-top: 15px;
`;

export const Details = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const Value = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #f75175;
`;

export const Divider = styled.View`
  background: grey;
  margin: 0 10px;
  width: 2px;
  height: 12px;  
`;

export const Date = styled.Text`
  margin-left: 7px;
  color: white;
  font-size: 14px;
`;

export const Option = styled.TouchableOpacity`
  flex-direction: row;
  margin-left: 12px;
`;

export const OptionLabel = styled.Text`
  font-size: 14px;
  color: white;
  margin-left: 3px;
`;

export const Actions = styled.View`
  flex-direction: row;
`;