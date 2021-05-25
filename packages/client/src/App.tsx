import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import styled from "styled-components/macro";

import { Login, SignUp, Home, Room } from "~pages";
import { PrivateRoute } from "~components";

const StyledContainer = styled(Container)`
  padding: 0;
`;

export const App: React.FC = () => {
  return (
    <StyledContainer fluid>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <PrivateRoute exact path="/room/:id" component={Room} />
          <PrivateRoute exact path="/" component={Home} />
        </Switch>
      </Router>
    </StyledContainer>
  );
};
