function PingTest() {
  const answer = "";
  return (
    <>
      <button onClick={(answer = fetch("http://localhost:3001/ping"))}>
        Testar API
      </button>
      <h1>{answer}</h1>
    </>
  );
}

export default PingTest;
