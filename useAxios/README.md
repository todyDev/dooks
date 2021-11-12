# @dooks/use-axios

## 설치 방법
### npm
```
npm i @dooks/use-axios
```
### yarn
```
yarn add @dooks/use-axios
```

## 사용 방법
```node
import useAxios from "@dooks/use-axios"
useAxios()
```
### Arguments
| 변수 | 타입 | 설명 | 기본값 | 필수 |
|:---|:---|:---|:---|:--:|
|  |  |  |  |  |

### Return
| 변수 | 타입 | 설명 | 기본값 |
|:---|:---|:---|:---:|
|  |  |  |  |

### Example
```node
import React from "react";
import useAxios from "@dooks/use-axios";

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