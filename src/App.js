import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [value, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);

  console.log("i run all the time");

  const iRunOnlyOnce = () => {
    console.log("i run only once.");
  };

  useEffect(() => {
    console.log("CALL THE API....");
  }, []);

  return (
    <div>
      <h1 className={styles.title}>{value}</h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default App;
