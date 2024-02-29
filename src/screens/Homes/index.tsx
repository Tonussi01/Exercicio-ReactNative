import React from "react";
import { View, Text } from "react-native";
import { Container,Content, Header, Title} from "./styles";
import { Input } from "../../Components/Inputs";
import coverImg from "../../assets/cover.png";
import { Card } from "../../Components/Card";

export function Home() {
  return (
    <Container>
      <Header source={coverImg}>
        <Input placeholder="Pesquisar..."/>
      </Header>
      <Content>
        <Card></Card>
      </Content>
    </Container>
  );
}
