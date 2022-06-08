const Home = () => {
  const handleCLick = () => {
    console.log("hello world");
  };

  const handleClickAgain = (name) => {
    console.log("hello " + name);
  };

  return (
    <div className="home">
      <h2>Home</h2>
      <button onClick={handleCLick}>CLick Me</button>
      <button
        onClick={() => {
          handleClickAgain("mario");
        }}
      >
        Click Me Again
      </button>
    </div>
  );
};

export default Home;
