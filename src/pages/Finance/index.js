import React, { useState } from 'react';
import { Switch } from 'react-native';
import { UseTicketButton, Container, AddButton, AddButton2, AddLabel,
         CardBody, Img, CardInfo, CardDetails, CardLabel, CardTitle, 
         Card, FormsPayTitle, FormsPay, UseBalance, UseBalanceTitle, 
         Action, Actions, ActionLabel, Info, SecretButton, BalanceContainer,
         Bold, Value, Wrapper, HeaderContainer, Header, Title, UseTicketLabel,
         UseTicketContainer } from './style';
import credicard from '../../assets/images/credit-card.png'
import { Feather, FontAwesome5, FontAwesome, MaterialCommunityIcons,
         AntDesign } from '@expo/vector-icons';

export default function Finance() {
  const [isVisible, setVisible] = useState(true);

  //troca de estado baseado no estado atual
  function visibilityMoney() {
    setVisible((prevState) => !prevState);
  }

  return (
    <Wrapper>
      <Container>
        <Header colors={['#52E78C', '#1AB563']}>
          <HeaderContainer>
            <Title>Saldo disponível</Title>
            <BalanceContainer>
              <Value>
                R$ <Bold>{isVisible ? '228.000,00' : '-------------'}</Bold>
              </Value>
              <SecretButton onPress={visibilityMoney}> 
                <Feather
                  name={isVisible ? 'eye' : 'eye-off'}
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
        <FormsPay>
          <FormsPayTitle>
            Fomras de pagamento
          </FormsPayTitle>
          <Card>
            <CardBody>
            <Img source={credicard} resizeMode="contain"/>
            <CardDetails>
              <CardTitle>
                Visa
              </CardTitle>
              <CardInfo>
                Cartão com final ****4789
              </CardInfo>
            </CardDetails>
            </CardBody>
            <AddButton>
              <FontAwesome
                name="exclamation-circle"
                size={24}
                color="#1AB563"           
            />
            <AddLabel>
              Toque para verificar seu cartão
            </AddLabel>
            </AddButton>
          </Card>
          <Card>
            <AddButton2>
            <AntDesign 
              name="pluscircleo"
              size={24}
              color="#1AB563"
            />
            <CardLabel>
              Adicionar Cartão de crédito
            </CardLabel>
            </AddButton2>
          </Card>
          <UseTicketContainer>
                <UseTicketButton>
            <MaterialCommunityIcons 
              name="ticket-confirmation-outline"
              size={24}
              color="#1AB563"
            />
            <UseTicketLabel>
              Usar código promocional
            </UseTicketLabel>
          </UseTicketButton>
          </UseTicketContainer>
        </FormsPay>
      </Container>
    </Wrapper>
  );
}