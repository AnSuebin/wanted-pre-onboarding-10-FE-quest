"use client";

import React, { ChangeEvent, FC, useState } from "react";
import styled from "styled-components";

interface Props {
  label: string;
}

const BasicInput: FC<Props> = ({ label }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <InputWrapper>
      <Label id={label}>{label}</Label>
      <Input onChange={handleChange} value={inputValue} name={label} />
    </InputWrapper>
  );
};

export default BasicInput;

const InputWrapper = styled.div`
  margin: auto;
  width: 300px;
`;

const Input = styled.input``;

const Label = styled.label``;
