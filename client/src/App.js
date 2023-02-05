import React from "react";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => console.log(res))
      .then((data) => setData("works"));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{!data ? "" : data}</p>
      </header>
    </div>
  );
}

export default App;