import React from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import styled from "styled-components";

export default function Card({
  icon = <IoCloudUploadOutline size={24} color="#ffffff" />,
  title,
  text,
  iconColor,
}) {
  const styles = iconColor
    ? {
        backgroundColor: iconColor,
      }
    : {
        backgroundColor: "#3f75fe",
      };
  return (
    <div className="card">
      <div className="container">
        <div className="brand-icon" style={styles}>
          {icon}
        </div>
        <H3>{title}</H3>
        <P>{text}</P>
      </div>
    </div>
  );
}

const H3 = styled.h3`
  margin-top: 3em;
  margin-bottom: 1.5em;
  color: #111827;
  text-align: center;
  font-family: Inter;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
`;

const P = styled.p`
  color: #6b7280;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;
