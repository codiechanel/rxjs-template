import * as React from "react";

import ui from "../common/UI";

import { navigate } from "@reach/router";
import * as PropTypes from "prop-types";
import { Empty } from "antd";
import { Spin } from "antd";
import List1 from "./List1";
import api from "../common/api";

NewsList.propTypes = {
  path: PropTypes.string,
  default: PropTypes.bool
};
function NewsList() {
  return (
    <ui.Panel flexDirection="column">
      {!api.isScreenSmall() && (
        <ui.Button
          onClick={() => {
            window.history.back();
            // window.history.go(-1);
          }}
        >
          Back
        </ui.Button>
      )}
      <h2>News</h2>
      <List1 keyword="google" />
    </ui.Panel>
  );
}

export default NewsList;
