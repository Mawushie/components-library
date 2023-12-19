import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import styled from "styled-components";

export default function Success({ status, info }) {
  const { title, text } = info;
  const className = status;
  return (
    <div className={`banner ${className}`}>
      <FaCircleCheck color="#34D399" />
      <div className="inner">
        {title && <H3>{title}</H3>}
        {text && <P>{text}</P>}
      </div>
    </div>
  );
}

const H3 = styled.h3`
  color: #065f46;
  font-weight: 500;
`;

const P = styled.p`
  color: #047857;
  font-weight: 400;
`;
