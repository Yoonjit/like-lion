import React from "react";
import styled from "styled-components";

function Hello() {
  const StyledButton = styled.button`
    color: red;
    background-color: aqua;
  `;

  return <StyledButton>내가 만든 버튼~~~</StyledButton>;
}
export default Hello;
