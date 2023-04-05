import { Button, Result } from "@evercityecosystem/evercity-ui";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Error500Page = () => {
  const navigate = useNavigate();
  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={
        <Button type="primary" onClick={() => navigate("/")}>
          Back Home
        </Button>
      }
    />
  );
};
