import TaskList from './TaskList';

export default function QuestionTwo(){
    const tasks = [
    { id: 101, title: "Setup project" },
    { id: 102, title: "Learn JSX" },
    { id: 103, title: "Understand Props" },
    { id: 104, title: "Render Lists" }
  ];

  return (
    <>
      <h2>Question 02 Output</h2>
      <TaskList tasks = {tasks}/>
    </>
  );
}
