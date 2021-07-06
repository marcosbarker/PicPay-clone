import React from 'react';
import { Container, Option, Label, Img } from './style';

import cel1 from '../../assets/cel.png'

export default function Suggestions() {
  return (
    <Container>
      <Option>
        <Img source={cel1} />
        <Label>Doações</Label>
      </Option>
    </Container>
  );
}