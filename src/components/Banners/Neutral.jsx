import React from "react";
import { HiMiniInformationCircle } from "react-icons/hi2";
import styled from "styled-components";

export default function Neutral({ status, info }) {
  const { title, text } = info;
  const className = status;
  return (
    <div className={`banner ${className}`}>
      <HiMiniInformationCircle color="#60A5FA" />
      <div className="inner">
        {title && <H3>{title}</H3>}
        {text && <P>{text}</P>}
      </div>
    </div>
  );
}

const H3 = styled.h3`
  color: #1e40af;
  font-weight: 500;
`;

const P = styled.p`
  color: #1c51b9;
  font-weight: 400;
`;
