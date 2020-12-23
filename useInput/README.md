# useInput
validation 검증을 하는 input의 역할이다.

## 사용법
``` node
export default function App() {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Ms.", maxLen);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="name" {...name} />
    </div>
  );
}
```
`{...name}` 으로 간단히 써도 되지만 `value={name.value} onChange={name.onChange} />` 이렇게 풀어써도 상관없다.