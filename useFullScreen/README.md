# useFullScreen

## 사용법
```node
export default function App() {
  const onFulls = (isFull) => console.log(isFull ? "full" : "samll");
  const { element, triggerFull, exitFull } = useFullScreen(onFulls);
  return (
    <div className="App">
      <div ref={element}>
        <img src="https://ssl.pstatic.net/mimgnews/image/609/2020/12/15/202012151216417410_2_20201215122557962.jpg?type=w540" />
        <button onClick={exitFull}>exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>fullscreen</button>
    </div>
  );
}
```