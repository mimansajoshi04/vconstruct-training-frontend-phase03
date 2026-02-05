
function ListItem({item}){
  return (
      <li>
        {item.name} - {item.cost} - {item.manufacturer}
      </li>
  );
}

export default ListItem;
