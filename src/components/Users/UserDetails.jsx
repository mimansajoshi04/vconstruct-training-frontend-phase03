import UserCard from "./UserCard";

export default function UserDetails(){
  // Generated users data using chatgpt
  const users = [
    { id:1, name: "Krishna", role: "Developer", isOnline: true },
    { id:2, name: "Ankit", role: "Intern", isOnline: false },
    { id:3, name: "Sara", role: "Designer", isOnline: true },
    { id:4, name: "Rohit", role: "Product Manager", isOnline: false },
    { id:5, name: "Neha", role: "QA Engineer", isOnline: true },
    { id:6, name: "Aman", role: "DevOps Engineer", isOnline: false },
  ];

  return (
    <>
      {
        users.length>0 && users.map( // use of && operator checks if there are users or not
          user => <UserCard 
            key= {user?.id} // here we get the id because i am assuming that we get the id with the data
            // if we consider that the id isnt there then we can generate uuid here, but that is not suggested.
            // code to get uuid -> key = {user?.id ?? crypto.randomUUID()} // but it creates a uuid every time 
            user = {user}
          />
        )
      }
    </>
  );
}
