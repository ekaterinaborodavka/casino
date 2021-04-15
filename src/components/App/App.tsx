import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import styled from "styled-components/macro";

import { Login } from "~components/Login/Login";
import { SignUp } from "~components/SignUp/SignUp";

const StyledContainer = styled(Container)`
  padding: 0;
`;

export const App: React.FC = () => {
  return (
    <StyledContainer fluid>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </StyledContainer>
  );
};
