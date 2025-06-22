import React from "react";
import "./globals.css";
import ChangeTitle from "./ChangeTitle";
import Counter from "./Counter";
import Mobile from "./Mobile";
import Info from "./Info";
import Input from "./controled.input/Input";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <>
      {/* <ChangeTitle /> */}

      {/* <Counter /> */}
      {/* <Mobile /> */}
      {/* <Info /> */}
      <Input />
      <Toaster />
    </>
  );
};

export default App;
