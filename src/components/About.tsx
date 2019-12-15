import * as React from "react";
import ui, { FlexColumn, MembersPanel } from "../common/UI";
import List1 from "./List1";
import * as PropTypes from "prop-types";
import { navigate } from "@reach/router";
import styled from "@emotion/styled";

export default class About extends React.Component {
  static propTypes = {
    path: PropTypes.string
  };
  render() {
    return (
      <ui.Panel flexDirection="column">
        <ui.Button
          onClick={() => {
            navigate(`/`);
          }}
        >
          Back
        </ui.Button>
        <div>About</div>
      </ui.Panel>
    );
  }
}
