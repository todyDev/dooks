# useConfirm
사용자가 무언가를 하기 전에 확인할 수 있다. 이것은 browser에 의해 만들어진다.

## 사용법
```node
export default function App() {
  const deleteThat = () => console.log("Deleted...!");
  const abort = () => console.log("Aborted...");
  const confirmDelete = useConfirm("Really Delete?", deleteThat, abort);
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={confirmDelete}>Delete</button>
    </div>
  );
}
```
확인했을 때, 취소했을 때 두 군데 모두 함수를 호출할 수 있다.
