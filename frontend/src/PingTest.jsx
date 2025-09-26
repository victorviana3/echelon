function PingTest() {
  const url = "http://localhost:3001/ping";
  let result = "";
  return (
    <>
      <button onClick={() => (result = test())}>Ping Test</button>
      <h1>O resultado é: {result}</h1>
    </>
  );
  async function test() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response ${response.status}`);
      }
      const result = response.json();
      console.log(result);
    } catch (e) {
      console.error(e);
    }
    return response.text();
  }
}

export default PingTest;
