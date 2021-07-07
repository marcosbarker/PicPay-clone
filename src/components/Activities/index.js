import React from 'react';
import {Option, OptionLabel, Actions, Divider, CardFooter, Value, Details, Container, Header, Card, CardHeader, 
        Title, Avatar, Description, Date, Bold, CardBody, UserName} from './style';
import { Feather, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';        
import avatar from '../../assets/images/avatar1.png'

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
            <Bold>Você</Bold> pagou a <Bold>@Drª. Zyra Hunter</Bold>
          </Description>
        </CardHeader>

        <CardBody>
        <UserName>Cornelius McDowall</UserName>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>R$ 387,00</Value>

            <Divider />

            <Feather name="lock" color="white" size={17} />
            <Date>há <Bold>3</Bold> dias</Date>
          </Details>
          <Actions>
            <Option>
              <MaterialCommunityIcons 
                size={20} 
                color="white" 
                name="comment-outline"
              />
              <OptionLabel>8</OptionLabel>
            </Option>
            <Option>
              <AntDesign 
                size={20} 
                color="white" 
                name="hearto"
              />
              <OptionLabel>4</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
}