"use client";

import React, { FC, ReactElement } from "react";
import styled from "styled-components";

interface Props {
  Id: ReactElement;
  Password: ReactElement;
  SubmitButton: ReactElement;
}

const HomeTemplate: FC<Props> = ({ Id, Password, SubmitButton }) => {
  return (
    <HomeWrapper>
      <LoginWrapper>
        {Id}
        {Password}
        {SubmitButton}
      </LoginWrapper>
    </HomeWrapper>
  );
};

export default HomeTemplate;

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

const LoginWrapper = styled.div`
  margin: auto;
`;
