# useTabs

## 사용법
``` node
const content = [
  {
    id: 1,
    tab: "Section 1",
    content: "It's Section 1"
  },
  {
    id: 2,
    tab: "Section 2",
    content: "It's Section 2"
  }
];

export default function App() {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      <h1>Hello</h1>
      <div>
        {content.map((e, index) => (
          <button onClick={() => changeItem(index)}>{e.tab}</button>
        ))}
        <div>{currentItem.content}</div>
      </div>
    </div>
  );
}
```
