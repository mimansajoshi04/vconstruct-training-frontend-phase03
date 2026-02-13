import "./App.css";
import Button from "./learning/Button";
import Reconcilation from "./learning/Reconcilation";
import Rerenders from "./learning/Rerenders";
import ParentComponent from "./learning/ClassComponent";
import Hooks from "./learning/Hooks";
import Ref from "./learning/Ref";
import Stopwatch from "./learning/Stopwatch";
import InputDisplay from "./learning/LiftState";
import TaskManager from "./learning/taskmanager/TaskManager";
import Form from "./learning/Form/Form";

import { ChildComponentThemeCheck } from "./learning/ContextAPI/Providers/ThemeProvider";
import { ChildComponentNoThemeCheck } from "./learning/ContextAPI/Providers/ThemeProvider";
import ThemeProvider from "./learning/ContextAPI/Providers/ThemeProvider";
import AuthProvider from "./learning/ContextAPI/Providers/AuthProvider";
import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App2() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/stopwatch/:id" element={<Stopwatch />} />
        <Route path="/stopwatch/button" element={<Button />} />
        <Route path="/form/:id">
          <Route index element={<Form />} />
          <Route path="task?:name" element={<TaskManager />} />
          <Route path="hooks" element={<Hooks />} />
        </Route>
        <Route path="*" element={<Button />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App2;
