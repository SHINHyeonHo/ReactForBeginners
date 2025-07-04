import { useEffect, useState } from "react";

function useEffectTest() {
  const [value, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log("I run only once.");
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [value]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder={"Search here..."}
      />
      <h1>{value}</h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default useEffectTest;
