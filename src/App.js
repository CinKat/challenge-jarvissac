import { useEffect, useState } from "react";
import { showUsers } from "./service";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    showUsers().then((mainData) => {
      const data = mainData.results.sort((a, b) => {
        return a.registered.age - b.registered.age;
      })
      setUsers(data)
    });
  }, [])


  return (
    <table>

    </table>
  );
}

export default App;
