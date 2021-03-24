import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Nav from "./components/Nav";
import Etc from "./pages/Etc";
import Home from "./pages/Home";
import How from "./pages/How";
import Presence from "./pages/Presence";
import Where from "./pages/Where";

function App() {

  const [presenceActive, setPresenceActive] = useState(false);

  return (
    <Wrapper>
      <MainContent>
        <Router>
          <Nav current={presenceActive} setActive={setPresenceActive} />

          <ContentWrapper>
            <AnimatePresence>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/where" component={Where} />
                <Route exact path="/how" component={How} />
                <Route exact path="/etc" component={Etc} />
                <Route exact path="/presence" component={Presence} />
              </Switch>
            </AnimatePresence>
          </ContentWrapper>
        </Router>
      </MainContent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 0;
  }
`;

const MainContent = styled(motion.div)`
  height: 100vh;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: row;
  overflow-y: auto;

  @media (max-width:850px) { 
    flex-direction: column;
    /* padding-top: 65px; */
  }
`;

const ContentWrapper = styled.div`
  margin-left: 15rem;
  padding: 2rem;
  width: 100%;
  box-sizing: border-box;
  font-size: 1rem;

  a {
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width:850px)  { 
    margin-left: 0px;
    padding-top: 65px;
  }
`;

export default App;
