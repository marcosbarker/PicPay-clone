import styled from 'styled-components/native';

//scrollView apos header, exibe os servicos
//funcao attrs retorna um objeto, para passar configs
export const Container = styled.ScrollView.attrs(() => ({
  //tira barra de rolagem
  showsHorizontalScrollIndicator: false,
  //rolagem horizontal
  horizontal: true,
  contentContainerStyle: {
    paddingLeft: 16, //por padrao a grandeza é pixel
    alignItems: 'center',
  },
}))`
  background: #1e222b;
  height: 130px;
`;


export const Label = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-top: 8px;
  font-size: 14px;
`;

export const Option = styled.TouchableOpacity`
  width: 80px;
  margin-right: 16px;
  align-items: center;
`;

export const Img = styled.Image`
`;