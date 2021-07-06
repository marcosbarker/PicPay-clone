import React from 'react';
import {CardFooter, Value, Details, Container, Header, Card, CardHeader, 
        Title, Avatar, Description,  Bold, CardBody, UserName} from './style';

import avatar from '../../assets/images/avatar.png'

export default function Activities() {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar 
            source={avatar}
          />
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@Cornelius</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <UserName>Marcos Barker</UserName>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>R$ 387,00</Value>
          </Details>
        </CardFooter>

      </Card>
    </Container>
  );
}