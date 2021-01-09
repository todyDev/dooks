# useNotification

## 사용법
```node
export default function App() {
  const triggerNotifi = useNotification("hi", { body: "Good!" });
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={triggerNotifi}>click notification</button>
    </div>
  );
}
```
[Notification MDN](https://developer.mozilla.org/ko/docs/Web/API/notification) 참고