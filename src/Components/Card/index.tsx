import React from 'react';

import { Container, Foundation, Image, Title } from './styles';

import unitedImg from "../../assets/united.png";

export function Card() {
  return (
    <Container animation="rubberBand" duration={2000}>

    <Image 
    source = {unitedImg}
    resizeMode="contain"
    animation="pulse"
    delay={100}
    duration={500}
    direction="alternate"
    interationCount="infinite"
    />

    <Title>Manchester United</Title>
    <Foundation>1978</Foundation>
    </Container>

  );
}