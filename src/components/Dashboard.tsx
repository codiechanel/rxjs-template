import * as React from "react";
import ui, { FlexColumn, MembersPanel } from "../common/UI";
import List1 from "./List1";
import * as PropTypes from "prop-types";
import { navigate } from "@reach/router";
import styled from "@emotion/styled";

Dashboard.propTypes = {
  path: PropTypes.string,
  default: PropTypes.bool
};
export default function Dashboard() {
  return (
    <ui.Panel flexDirection="row">
      <List1 keyword="typescript" />

      <List1 keyword="javascript" />
    </ui.Panel>
  );
}
