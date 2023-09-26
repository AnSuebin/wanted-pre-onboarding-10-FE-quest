"use client";

import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  text: string;
}

const BasicButton: FC<Props> = ({ text }) => {
  return <Button onClick={() => {}}>{text}</Button>;
};

export default BasicButton;

const Button = styled.button``;
