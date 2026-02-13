import { Suspense } from "react";
import { useState } from "react";
import { use } from "react";
import React from "react";

function mockFetchUser(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "Mimansa",
        email: "mimansajoshi04@gmail.com",
      });
    }, delay);
  });
}

function UserData() {
  const userData = use(mockFetchUser(5000));

  return (
    <section>
      <p>
        NAME: <em>{userData.name}</em>
      </p>
      <p>
        EMAIL: <em>{userData.email}</em>
      </p>
    </section>
  );
}

class ErrorBoundaryUser extends React.Component {}

function Loader() {
  return <h3>Loading...</h3>;
}

export default function UserComponent() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  if (isLoading) return <Loader />;

  useEffect(() => {
    setData(mockFetchUser());
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <UserData />
    </Suspense>
  );
}
