import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("mario");
  const [age, setAge] = useState(25);

  const handleCLick = () => {
    setName("luigi");
    setAge(30);
  };

  return (
    <div className="home">
      <h2>Home</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleCLick}>CLick Me</button>
    </div>
  );
};

export default Home;
