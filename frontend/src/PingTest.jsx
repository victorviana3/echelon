import { useState } from "react";

function PingTest() {
  const [response, setResponse] = useState("");
  async function ping() {
    const url = "http://localhost:3001/ping";
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Response ${res.status}`);
      }
      setResponse(await res.text());
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <>
      <button onClick={ping}>Ping Test</button>
      <h1>O resultado é: {response}</h1>
    </>
  );
}

export default PingTest;
