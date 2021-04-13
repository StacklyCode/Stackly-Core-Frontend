import { FC } from "react";
import styled from "@emotion/styled";

export type IndexProps = {
  text?: string;
  type?: "Primary" | "Secondary";
};

const ButtonStyled = styled.div<IndexProps>`
  width: max-content;
  height: 50px;
  border-radius: 10px;
  padding: 0px 25px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ type }) =>
    type === "Primary" ? "#4560ce" : "  #ce456e"};
  span {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 500;
    line-height: 24px;
    font-size: 18px;
    color: white;
  }
`;

const Index: FC<IndexProps> = ({ text, type }) => {
  return (
    <ButtonStyled type={type}>
      <span>{text || "Default"}</span>
    </ButtonStyled>
  );
};

export default Index;
