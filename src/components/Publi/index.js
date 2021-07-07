import React from 'react';
import img8 from '../../assets/images/08.png';
import img9 from '../../assets/images/09.png';
import img10 from '../../assets/images/10.png';
import img11 from '../../assets/images/11.png';
import img12 from '../../assets/images/12.png';
import { Container, Img, Option, Title } from './style';

const items = [
  {
    ke: String(Math.random()),
    img: img8,
    title: 'Cadastre sua chave Pix no PicPay',
    bgColor: '#172c4a' 
  },
  {
    ke: String(Math.random()),
    img: img9,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#6a0159' 
  },
  {
    ke: String(Math.random()),
    img: img10,
    title: 'Peça agora seu Empréstimo Pessoal!',
    bgColor: '#4139c8' 
  },
  {
    ke: String(Math.random()),
    img: img11,
    title: 'Convide um amigo',
    bgColor: '#00ab4b' 
  },
  {
    ke: String(Math.random()),
    img: img12,
    title: 'Aqui o Auxílio Emergencial é na hora!',
    bgColor: '#ba2f76' 
  }
];

export default function Publi() {
  return (
    <Container>
      {items.map((item) => (
        <Option 
          key={item.key}
          bgColor={item.bgColor} >
        <Title>{item.title}</Title>
        <Img source={item.img} />
      </Option>
      ))}
    </Container>
  );
}