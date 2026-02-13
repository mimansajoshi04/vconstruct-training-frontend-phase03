import "./App.css";
// import Button from "./learning/Button";
// import Reconcilation from "./learning/Reconcilation";
// import Rerenders from "./learning/Rerenders";
// import ParentComponent from "./learning/ClassComponent";
// import Hooks from "./learning/Hooks";
// import Ref from "./learning/Ref";
// import Stopwatch from "./learning/Stopwatch";
// import InputDisplay from "./learning/LiftState";
// import TaskManager from "./learning/taskmanager/TaskManager";
// import Form from "./learning/Form/Form";

import { ChildComponentThemeCheck } from "./learning/ContextAPI/Providers/ThemeProvider";
import { ChildComponentNoThemeCheck } from "./learning/ContextAPI/Providers/ThemeProvider";
import ThemeProvider from "./learning/ContextAPI/Providers/ThemeProvider";
import AuthProvider from "./learning/ContextAPI/Providers/AuthProvider";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");
  const [theme2, setTheme2] = useState("yellow");

  return (
    <>
      {/* <Reconcilation />  */}
      {/* <Rerenders />
      <Button /> */}
      {/* <ParentComponent /> */}
      {/* <Hooks/> */}
      {/* <Ref/> */}
      {/* <Stopwatch/> */}
      {/* <InputDisplay/> */}
      {/* <TaskManager /> */}
      {/* <Form /> */}

      <ThemeProvider
        theme={theme}
        setTheme={setTheme}
        theme2={theme2}
        setTheme2={setTheme2}
      >
        <ChildComponentThemeCheck />
        {/* <ChildComponentNoThemeCheck /> */}
        <ChildComponentThemeCheck />
        {/* 
        <ThemeProvider theme={theme2} setTheme={setTheme2}>
          <ChildComponentThemeCheck />
        </ThemeProvider> */}
      </ThemeProvider>
      <hr />
      {/* 
      <ThemeProvider theme={theme2} setTheme={setTheme2}>
        <ChildComponentThemeCheck />
      </ThemeProvider> */}

      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Toggle theme
      </button>
    </>
  );
}

export default App;
