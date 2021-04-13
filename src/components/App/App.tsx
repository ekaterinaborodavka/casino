import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import styled from "styled-components/macro";

import Login from "~components/Login/Login";

const StyledContainer = styled(Container)`
  padding: 0;
`;

const App: React.FC = () => {
  return (
    <StyledContainer fluid>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </StyledContainer>
  );
};

export default App;
