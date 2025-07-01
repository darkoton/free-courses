import DefalutLayout from "@/layouts/Default";
import { Tabs } from "@/components/UI";
import { type ItemType } from "@/components/UI/Tabs";
import { useState } from "react";

import Main from "./components/Main";
import About from "./components/About";

const tabs: ItemType[] = [
  {
    value: "about",
    label: "About"
  },
  {
    value: "reviews",
    label: "Reviews"
  },
]

const Universty = () => {

  const [currentTab, setCurrentTab] = useState('about')
  return (
    <DefalutLayout>
      <Main />
      <div className='container'>
        <Tabs value={currentTab} onChange={setCurrentTab} items={tabs} />
      </div>
      {currentTab === 'about' && <About />}

    </DefalutLayout>
  );
};

export default Universty;
