import React from 'react';
import styled from "styled-components";

export interface IMyComponentNameProps {}

const MyComponentName = ({}: IMyComponentNameProps) => {
  return <Container>Hello, I am a MyComponentName component.</Container>;
};

export default MyComponentName;

const Container = styled.div`
  width: 100%;
  color: rebeccapurple;
`;
