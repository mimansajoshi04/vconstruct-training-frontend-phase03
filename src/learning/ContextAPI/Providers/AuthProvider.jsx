import { useContext } from "react";
import authContext from "../Contexts/AuthContext";

export default function AuthProvider({ children }) {
  const auth = useContext(authContext);
  console.log("Auth: ", auth);
  let isButtonDisabled = false;
  if (auth === "") isButtonDisabled = true;

  return (
    <section>
      <button
        disabled={isButtonDisabled}
        onClick={() => {
          console.log("Clicked this button!");
        }}
      >
        Click button
      </button>
    </section>
  );
}
