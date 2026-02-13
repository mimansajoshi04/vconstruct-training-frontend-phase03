import { useRef } from "react";
import Task from "./Task";
import { Button } from "./Task";
import { useState, useEffect, useLayoutEffect } from "react";
import AddNewTask from "./AddNewTask";

function getLocalStorageItem(key, defaultValue) {
  let value = JSON.parse(localStorage.getItem(key));
  if (value) return value;
  return defaultValue;
}

function setLocalStorageItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export default function TaskManager() {
  const addTaskRef = useRef(null);

  const [, forceUpdate] = useState(0);
  const [showAddTask, setShowAddTask] = useState(false);

  let isDisplayHidden = true;
  let tasks = getLocalStorageItem("tasks", []);
  let idCountManager = Number.parseInt(getLocalStorageItem("idCount", 0));

  useLayoutEffect(() => {
    tasks = getLocalStorageItem("tasks", []);
  }, [showAddTask]);

  const addTask = (taskTitle) => {
    isDisplayHidden = true;
    const now = new Date(Date.now());
    let task = {
      id: `TSK${idCountManager}`,
      title: taskTitle,
      createdAt: now,
      updatedAt: now,
      isCompleted: false,
    };
    tasks.push(task);

    setLocalStorageItem("tasks", [...tasks]);
    setLocalStorageItem("idCount", idCountManager + 1);

    setShowAddTask(false);
  };

  const editTask = (id) => {
    let element = document.getElementById(`TSK-${id}`);
  };

  const deleteTask = (id) => {
    let filteredTasks = tasks.filter((task) => task.id !== id);
    setLocalStorageItem("tasks", filteredTasks);
    forceUpdate((n) => n + 1);
  };

  const markCompleted = (id) => {
    let filteredTasks = tasks.filter((task) => task.id !== id);
    let thisTask = tasks.filter((task) => task.id === id);
    thisTask[0].isCompleted = true;
    setLocalStorageItem("tasks", [...filteredTasks, ...thisTask]);
    forceUpdate((n) => n + 1);
  };

  return (
    <main>
      <section>
        <h3>My Tasks</h3>
        <Button onClick={() => setShowAddTask(true)} backgroundColor="blue">
          Add
        </Button>
        <Button
          onClick={() => {
            localStorage.clear();
            forceUpdate((n) => n + 1);
          }}
          backgroundColor="red"
        >
          Delete All Tasks
        </Button>

        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              {...task}
              editTask={editTask}
              deleteTask={deleteTask}
              markCompleted={markCompleted}
            />
          );
        })}
      </section>

      {showAddTask && <AddNewTask ref={addTaskRef} addTask={addTask} />}
    </main>
  );
}
