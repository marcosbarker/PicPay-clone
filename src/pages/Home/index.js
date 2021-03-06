import React from 'react';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'
import { Wrapper, Header, Balance, BalanceTitle, BalanceContainer, Container } from './style';
import Suggestions from '../../components/Suggestions';
import Publi from '../../components/Publi';
import Services from '../../components/Services';
import Activities from '../../components/Activities';

export default function Home() {
  return (
    <Wrapper>
      <Container>
          <Header>
            <MaterialCommunityIcons
              name="qrcode-scan"
              size={30}
              color="#10c86c"
            />
            <BalanceContainer>
              <BalanceTitle>Meu Saldo</BalanceTitle>
              <Balance>R$ 228.000,00</Balance>
            </BalanceContainer>

            <AntDesign
              name="gift"
              size={30}
              color="#10c86c"
            />
        </Header>

        <Suggestions />
        <Activities />
        <Publi />
        <Services />

      </Container>
    </Wrapper>
  );
}