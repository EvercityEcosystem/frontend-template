import { Button, Result } from "@evercityecosystem/evercity-ui";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Error404Page = () => {
  const navigate = useNavigate();
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={() => navigate("/")}>
          Back Home
        </Button>
      }
    />
  );
};
