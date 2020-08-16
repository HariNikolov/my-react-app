import React from "react";
import Alert from "@material-ui/lab/Alert";
import { Container } from "@material-ui/core";

export default function AlertDialog() {
  return (
    <Container>
      <Alert
        variant="filled"
        severity="error"
        style={{ marginTop: "200px", marginBottom: "425px" }}
      >
        YOU NEED TO LOGIN OR REGISTER!
      </Alert>
    </Container>
  );
}
