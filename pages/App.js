import GanttChart from "@/components/GanttChart";
import ChangeMonth from "@/components/ChangeMonth";

import React from "react";
import { Provider } from "react-redux";
import store from "../store/store";

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <GanttChart />
      <ChangeMonth />
    </Provider>
  );
}

export default App;
