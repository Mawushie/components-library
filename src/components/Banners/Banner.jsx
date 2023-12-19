import React from "react";
import Success from "./Success";
import Warning from "./Warning";
import Error from "./Error";
import Neutral from "./Neutral";

export default function Banner({ status, ...rest }) {
  return (
    <>
      {status === "success" && <Success info={rest} status={status} />}
      {status === "warning" && <Warning info={rest} status={status} />}
      {status === "error" && <Error info={rest} status={status} />}
      {status === "neutral" && <Neutral info={rest} status={status} />}
    </>
  );
}
