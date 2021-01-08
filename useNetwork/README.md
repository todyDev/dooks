# useNetwork

## 사용법
```node
export default function App() {
  const handleNetworkChange = (online) =>
    console.log(online ? "just Online" : "ff offline");
  useNetwork(handleNetworkChange);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}
```