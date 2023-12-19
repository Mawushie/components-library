import React from "react";
import { MdCancel } from "react-icons/md";
import styled from "styled-components";

export default function Error({ status, info }) {
  const { title, text } = info;
  const className = status;
  return (
    <div className={`banner ${className}`}>
      <MdCancel color="#F87171" />
      <div className="inner">
        {title && <H3>{title}</H3>}
        {text && <P>{text}</P>}
      </div>
    </div>
  );
}

const H3 = styled.h3`
  color: #92400e;
  font-weight: 500;
`;

const P = styled.p`
  color: #b45309;
  font-weight: 400;
`;
