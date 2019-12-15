import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ui, { FlexColumn, MembersPanel } from "../common/UI";

interface ItemsProps {
  keyword?: any;
}

const List1: React.FC<ItemsProps> = ({ keyword = "redux" }) => {
  // function App() {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://hn.algolia.com/api/v1/search?query=${keyword}`
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <ui.List>
      {data.hits.map(item => (
        <ui.ListItem key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </ui.ListItem>
      ))}
    </ui.List>
  );
};
export default List1;
