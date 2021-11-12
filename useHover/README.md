# @dooks/use-hover

## 설치 방법
### npm
```
npm i @dooks/use-hover
```
### yarn
```
yarn add @dooks/use-hover
```

## 사용 방법
```
import useHover from "@dooks/use-hover"
useHover(onHover)
```
### Arguments
| 변수 | 타입 | 설명 | 필수 |
|:---|:---|:---|:---|:---:|
| onHover | Function | element에 hover 이벤트가 발생되면 호출할 함수 | Y |

### Return
| 값 | 타입 | 설명 | 기본값 | 
|:---|:---|:---|:---|
| ref | React Ref | hover 이벤트를 받는 모든 요소에 React Ref 추가 | null |

### Example
```node
import React from "react";
import useHover from "@dooks/use-hover";

export default function App() {
  const sayHello = (event) => console.log("say Hello");
  const title = useHover(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hello</h1>
    </div>
  );
}
```
