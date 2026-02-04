export default function UserCard({user}){
    // can omit using this if we want to and directly write it in the p tag itself.
    // or we can destructure it directly in the params itself like following:
    // function UserCard({name, role, isOnline=false}) and set isOnline as false for default.
    const name = user.name;
    const role = user.role;

    return <p>{name} - {role} - {user.isOnline ? "Online": "Offline"}</p>;
}
