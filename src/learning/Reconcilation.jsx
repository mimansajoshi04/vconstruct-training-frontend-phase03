import { useState } from "react";
import { useEffect } from "react";

export default function Reconcilation() {
  console.log("rendering...");
  const [users, setUsers] = useState(["Mimansa", "Deven"]);

  return (
    <section>
      <article>
        <h2>CHILD</h2>
        <Child users={users} changeUsers={setUsers} />
      </article>

      <article>
        <h2>ITSELF</h2>
        <ChildChange users={users} changeUsers={setUsers} />
      </article>

      <article>
        {users.map((user, index) => (
          <p key={index}>{user}</p>
        ))}
      </article>
    </section>
  );
}

function ChildChange({ users, changeUsers }) {
  //   console.log(typeof users);
  //   console.log(users);
  useEffect(() => {
    changeUsers([...users, "Mangu"]);
  }, []);
  //changeUsers([...users, "Mangu"]);
  return undefined;
}

function Child({ users, changeUsers }) {
  useEffect(() => {
    changeUsers([...users, "Aai"]);
  }, []);
  return undefined;
}
