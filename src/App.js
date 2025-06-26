import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("call an api");

  return (
    <div>
      <h1 className={styles.title}>{value}</h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default App;
