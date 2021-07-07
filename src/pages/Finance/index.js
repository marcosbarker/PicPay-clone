import React from 'react';
import { Switch } from 'react-native';
import { Feather, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { UseBalance, UseBalanceTitle, Action, Actions, ActionLabel, Info, SecretButton, BalanceContainer, Bold, Value, Wrapper, HeaderContainer, Header, Title } from './style';

export default function Finance() {
  return (
    <Wrapper>
      <Header colors={['#52E78C', '#1AB563']}>
        <HeaderContainer>
          <Title>Saldo disponível</Title>
          <BalanceContainer>
            <Value>
              R$ <Bold>228.000,00</Bold>
            </Value>
            <SecretButton> 
              <Feather
                name="eye"
                size={28}
                color="white"
              />
            </SecretButton>
          </BalanceContainer>
          <Info>
            Seu saldo está rendendo 130% do CDI. &gt;
          </Info>
          <Actions>
            <Action>
              <FontAwesome5 
                name="piggy-bank"
                size={20}
                color="white"             
              />
            <ActionLabel>Adicionar dinheiro</ActionLabel>
            </Action>
             <Action>
              <FontAwesome
                name="bank"
                size={20}
                color="white"             
              />
            <ActionLabel>Retirar dinheiro</ActionLabel>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>
      <UseBalance>
        <UseBalanceTitle>
          Usar saldo em carteira ao pagar
        </UseBalanceTitle>
        <Switch />
      </UseBalance>
    </Wrapper>
  );
}