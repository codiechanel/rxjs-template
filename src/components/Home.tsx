import * as React from "react";
import ui, { FlexColumn, MembersPanel } from "../common/UI";
import List1 from "./List1";
import * as PropTypes from "prop-types";
import { navigate } from "@reach/router";
import { Tabs, Tab, Container, Col, Row } from "react-bootstrap";
import styled from "@emotion/styled";
import api from "../common/api";
Home.propTypes = {
  path: PropTypes.string,
  default: PropTypes.bool
};
function Home() {
  let small = api.isScreenSmall();
  return (
    <ui.Panel flexDirection="column">
      <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Home">
          {!small && (
            <ui.Button
              onClick={() => {
                navigate("news");
              }}
            >
              More News
            </ui.Button>
          )}
          <List1 keyword="redux" />
        </Tab>
        <Tab eventKey="profile" title="Hourly Trends">
          <List1 keyword="mobx" />
        </Tab>
        <Tab eventKey="contact" title="Daily Trends">
          <List1 keyword="react" />
        </Tab>
      </Tabs>
    </ui.Panel>
  );
}

export default Home;
