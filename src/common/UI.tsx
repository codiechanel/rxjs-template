import styled from "@emotion/styled";

export const ListItem = styled.li`
  margin-bottom: 10px;
`;
export const List = styled.ul`
  /* hide the bullet */
  list-style-type: none;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding-right: 20px;
  padding-left: 20px;
  /* firefox only */
  /* scrollbar-color: #40566f gray; */
  scrollbar-color: #40566f rgba(0, 0, 0, 0.15);
`;
export const Discover = styled.div`
  height: 100%;
  padding: 10px;
  overflow-y: auto;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 10px;
`;

export const MembersPanel = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 10px;
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  /* min-height: 0; */
  /* background-color: white; */
`;
export const DetailsPanel = styled.div`
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: white;
  min-height: 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const RightPanel = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 0;
  flex: 1;
  background-color: #2f3437;
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  /* padding-right: 20px; */
  overflow: auto;
`;

export const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
  margin: 10px;
  min-height: 0;
  /* is this needed */
  min-width: 0;

  background-color: #373c3f;
`;

type ButtonProp = {
  primary?: string;
  flexDirection: string;
};

const Panel = styled.div<ButtonProp>`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  flex: 1;

  /* margin: 100px; */

  min-height: 0;
  min-width: 0;
  /* scrollbar-color: #40566f rgba(0, 0, 0, 0.15); */
  width: 100%;
  height: 100%;
`;

// const Panel = styled.div(props: => ({
//   display: "flex",
//   flexDirection: props.column && "column"
// }));

export const Input = styled.input`
  /* color: black; */
  border: none;
  margin-left: 10px;
  margin-right: auto;
  padding-right: 10;
  background-color: inherit;
`;
export const Button = styled.button`
  margin: 10px;
  border-radius: 4px;
  border: none;
  /* background: #6100ed; */
  /* background: transparent; */
  background: rgba(0, 0, 0, 0);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
`;
const ui = {
  List,
  ListItem,
  Discover,
  FlexColumn,
  MembersPanel,
  DetailsPanel,
  LeftPanel,
  RightPanel,
  Panel,
  Input,
  Button
};

export default ui;
