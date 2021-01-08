# usePreventLeave
유저가 변경사항을 저장하지 않고 페이지를 벗어났을 때 확인하는 것.

## 사용법
```node
export default function App() {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  );
}
```
