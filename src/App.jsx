import React from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/heading";
import Row from "./ui/Row";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">The wild oasis</Heading>
            <Heading as="h2">Buttons which do things</Heading>
            <Button>Check in</Button>
            <Button variation="primary" size="medium">
              Check out
            </Button>
          </Row>
          <Row>
            <Heading as="h3">Checkin/Checkout details</Heading>
            <Input type="number" placeholder="Number of guests" />
          </Row>
        </Row>
      </div>
    </>
  );
}
