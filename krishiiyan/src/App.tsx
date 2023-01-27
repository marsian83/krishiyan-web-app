import React, { useState } from "react";
import "./App.css";
import Header from "./Components/layouts/Header";
import SideNav from "./Components/layouts/SideNav";
import ContentToShow from "./pages/ContentToShow";

function App() {
  const [content, setContent] = useState<any>()

  // console.log("content obj________app.tsx",content);

  const getContentToShow = (val: Object) => {
    setContent(val)
  }
  return (
    <div className="App font-roboto box-border m-0 p-0">
      <main className="h-screen w-screen grid grid-cols-[18%_auto]">
        <div className="">
          <SideNav getContentToShow={getContentToShow} />
        </div>
        <div className="">
          {/* <Header /> */}
          <ContentToShow content={content} />
        </div>
      </main>
    </div>
  );
}

export default App;
