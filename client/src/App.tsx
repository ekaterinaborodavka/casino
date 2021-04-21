import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import styled from "styled-components/macro";

import { Login, SignUp, Home } from "~pages";

const StyledContainer = styled(Container)`
  padding: 0;
`;

export const App: React.FC = () => {
  return (
    <StyledContainer fluid>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={SignUp}></Route>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </Router>
    </StyledContainer>
  );
};