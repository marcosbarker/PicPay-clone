import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  background: #6882BB;
  padding: 15px;
  align-items: flex-start;
  border-radius: 8px;
  height: 120px;
  margin-top: 20px;
  margin-left: 14px;
`;

export const Img = styled.Image``;

export const Details = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: white;
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 15px;
  margin-top: 10px;
  color: white;
`;