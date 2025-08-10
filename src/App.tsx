import type React from "react";
import { useEffect, useState } from "react";
import { Tabbar } from "./components/Tabbar";
import "./index.css";
import { Notebook } from "./pages/Notebook";
import { Setting } from "./pages/Setting";
import { Vocab } from "./pages/Vocab";
import type { TabbarProps } from "./props";
import { _LastTimeData } from "./utilities/localStorage";

const App: React.FC = () => {
  const last_time_data_key = "tab";
  const last_selected_tab = _LastTimeData.get(last_time_data_key);
  const [selectedTab, setselectedTab] = useState(
    last_selected_tab.length > 0 ? last_selected_tab : "notebook-page",
  );

  useEffect(() => {
    _LastTimeData.set(last_time_data_key, selectedTab);
  }, [selectedTab]);

  const pages: Record<string, React.ReactNode> = {
    "setting-page": <Setting />,
    "notebook-page": <Notebook />,
    "vocab-page": <Vocab />,
  };

  const tabs: TabbarProps["tabs"] = [
    {
      name: "Notebook",
      action: () => setselectedTab("notebook-page"),
      is_selected: selectedTab === "notebook-page",
    },
    {
      name: "Vocab",
      action: () => setselectedTab("vocab-page"),
      is_selected: selectedTab === "vocab-page",
    },
    {
      name: "Setting",
      action: () => setselectedTab("setting-page"),
      is_selected: selectedTab === "setting-page",
    },
  ];

  return (
    <div className="App h-[100vh]">
      <Tabbar tabs={tabs} />
      <div className="h-[calc(100vh-3.5rem)] bg-primary">
        {pages[selectedTab]}
      </div>
    </div>
  );
};

export default App;
