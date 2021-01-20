# @dooks/use-title

## 설치 방법
### npm
```
npm i @dooks/use-title
```
### yarn
```
yarn add @dooks/use-title
``` 

## 사용 방법
``` node
import useTitle from "@dooks/use-title"
useTitle(title)
```
### Arguments
| 변수 | 타입 | 설명 | 필수 |
|:---|:---|:---|:---:|
| title | String | React Document에 설정할 title 입력 | Y |

### Example
```node
import React from "react";
import useTitle from "@dooks/use-title";

export default function App() {
  useTitle("Home");
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}
```
