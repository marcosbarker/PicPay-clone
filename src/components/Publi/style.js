import styled from 'styled-components/native';

//scrollView apos header, exibe publicidade
//funcao attrs retorna um objeto, para passar configs
export const Container = styled.ScrollView.attrs(() => ({
  //tira barra de rolagem
  showsHorizontalScrollIndicator: false,
  //rolagem horizontal
  horizontal: true,
  contentContainerStyle: {
    paddingLeft: 16,
  }
}))`
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: white;
`;

export const Img = styled.Image`
  align-self: center;
`;

export const Option = styled.TouchableOpacity`
 justify-content: space-between;
  width: 130px;
  background: ${({bgColor}) => bgColor};
  height: 180px;
  margin-right: 10px;
  border-radius: 8px;
  padding: 15px;
`;