# useBeforeLeave
사용자가 page를 벗어나는 시점에 실행.

## 사용법
```node
export default function App() {
  const beforeLeave = () => console.log("plz dont leave");
  useBeforeLeave(beforeLeave);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}
```
