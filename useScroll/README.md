# @dooks/use-scroll

## 설치 방법
### npm
```
npm i @dooks/use-scroll
```
### yarn
```
yarn add @dooks/use-scroll
```

## 사용 방법
```node
import useScroll from "@dooks/use-scroll"
useScroll()
```
### Return
| 값 | 타입 | 설명 | 기본값 |
|:---|:---|:---|:---:|
| Coords | Object | 현재 스크롤 위치 x,y 좌표 | `{ x: 0, y: 0 }` |

### Example
```node
import React from "react";
import useScroll from "@dooks/use-scroll";

export default function App() {
  const { y } = useScroll();
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
        Hello
      </h1>
    </div>
  );
}
```