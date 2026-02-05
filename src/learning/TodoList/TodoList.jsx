import ListItem from "./ListItem";


function TodoList({list}){

  return(
    <ul>
      {
        list.map((item, index)=>{
          return <ListItem key={index} item={item}/>
        })
      }
    </ul>
  );
}

export default TodoList;
