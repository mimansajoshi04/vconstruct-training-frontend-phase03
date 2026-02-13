const minTitleLength = 6;
import { useState, useEffect, useRef } from "react";
import { Button } from "./Task";

export default function AddNewTask({ ref, addTask }) {
  const [title, setTitle] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const add = () => {
    if (title.trim().length >= minTitleLength) addTask(title);
    else alert(`Title must be atleast ${minTitleLength} characters long!`);
  };

  return (
    <section ref={ref}>
      <h3> Add New Task</h3>
      <form action={add}>
        <fieldset>
          <legend>Task Details</legend>
          <label htmlFor="title">Task Title</label>:
          <input
            ref={inputRef}
            type="text"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
        </fieldset>
        <fieldset>
          <Button backgroundColor="orange" type="submit">
            Add
          </Button>
        </fieldset>
      </form>
    </section>
  );
}
