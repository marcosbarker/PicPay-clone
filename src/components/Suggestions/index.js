import React from 'react';
import { Container, Option, Label, Img } from './style';

import img1 from '../../assets/images/01.png';

export default function Suggestions() {
  return (
    <Container>
      <Option>
        <Img source={img1} />
        <Label>Doações</Label>
      </Option>
    </Container>
  );
}