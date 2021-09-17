import * as React from "react";
import { useState } from "react";
import {
  Button,
  Card,
} from "antd";
import "./NewRequest.js";
import NewRequest from "./NewRequest.js";

const Request = () => {
  const [visible, setVisible] = useState(false);

  const handleCloseModal = () => setVisible(false);

  return (
    <>
      <Card
        title="My Request"
        extra={
          <Button
            shape="round"
            onClick={() => {
              setVisible(true);
            }}
          >
            New Request
          </Button>
        }
      />
      {visible && (
        <NewRequest
          displayModal={visible}
          onSuccess={handleCloseModal}
          onCancel={handleCloseModal}
        />
      )}
    </>
  );
};

export default Request;
