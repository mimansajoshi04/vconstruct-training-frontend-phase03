import TaskItem from "./TaskItem";

export default function TaskList({tasks}){
    return(
        <ul>
            {
                tasks.map(item => {
                    return <TaskItem key={item.id} item = {item}/>
                })
            }
        </ul>
    );
}
