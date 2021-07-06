import styled from 'styled-components/native';


export const Label = styled.Text`
`;

export const Option = styled.TouchableOpacity`
`;

export const Img = styled.Image`
`;

//scrollView apos header, exibe as sugestoes
//funcao attrs retorna um objeto, para passar configs
export const Container = styled.ScrollView.attrs(() => ({
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

