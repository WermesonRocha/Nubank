import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import QRCode from 'react-native-qrcode-svg';
import {
  Container,
  Code,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText,
} from './styles';

export default function Menu({translateY}) {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1],
        }),
      }}>
      <Code>
        <QRCode
          value="Wermeson Rocha da Silva"
          size={80}
          color="#8b10ae"
          backgroundColor="#FFF"
        />
      </Code>
      <Nav>
        <NavItem>
          <Icon name="help-outline" size={25} color="#FFF" />
          <NavText>Me ajuda</NavText>
          <Icon
            name="keyboard-arrow-right"
            size={20}
            color="#FFF"
            style={{marginLeft: 160}}
          />
        </NavItem>
        <NavItem>
          <Icon name="credit-card" size={25} color="#FFF" />
          <NavText>Pedir função débito</NavText>
          <Icon
            name="keyboard-arrow-right"
            size={20}
            color="#FFF"
            style={{marginLeft: 90}}
          />
        </NavItem>
        <NavItem>
          <Icon name="person-outline" size={25} color="#FFF" />
          <NavText>Perfil</NavText>
          <Icon
            name="keyboard-arrow-right"
            size={20}
            color="#FFF"
            style={{marginLeft: 184}}
          />
        </NavItem>
        <NavItem>
          <Icon name="attach-money" size={25} color="#FFF" />
          <NavText>Configurar conta</NavText>
          <Icon
            name="keyboard-arrow-right"
            size={20}
            color="#FFF"
            style={{marginLeft: 107}}
          />
        </NavItem>
        <NavItem>
          <Icon name="credit-card" size={25} color="#FFF" />
          <NavText>Configurar cartão</NavText>
          <Icon
            name="keyboard-arrow-right"
            size={20}
            color="#FFF"
            style={{marginLeft: 102}}
          />
        </NavItem>
        <NavItem>
          <Icon name="store" size={25} color="#FFF" />
          <NavText>Pedir conta PJ</NavText>
          <Icon
            name="keyboard-arrow-right"
            size={20}
            color="#FFF"
            style={{marginLeft: 125}}
          />
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={25} color="#FFF" />
          <NavText>Configurações do app</NavText>
          <Icon
            name="keyboard-arrow-right"
            size={20}
            color="#FFF"
            style={{marginLeft: 73}}
          />
        </NavItem>
      </Nav>
      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
