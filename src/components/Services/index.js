import React from 'react';
import { Container, Img, Title, Details, Description } from './style';
import img13 from '../../assets/images/13.png';

export default function Services() {
  return (
    <Container>
      <Details>
        <Title>Cobre um amigo</Title>
        <Description>
          Mantenha suas parcerias em dia, use o PicPay para fazer suas cobranças
        </Description>
      </Details>
      <Img source={img13}/>
    </Container>
  );
}