# useAxios

## 사용법
```node
export default function App() {
  const { loading, data, error, refetch } = useAxios({
    url:
      "https://cors-anywhere.herokuapp.com/https://yts.am/api/v2/list_movies.json"
  });
  return (
    <div className="App">
      <h1>{loading && "Loading..."}</h1>
      <h3>{error && error}</h3>
      <button onClick={refetch}>retry</button>
    </div>
  );
}
```