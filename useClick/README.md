# @dooks/use-click

## 설치 방법
### npm
```
npm i @dooks/use-click
```
### yarn
```
yarn add @dooks/use-click
```

## 사용 방법
```
import useClick from "@dooks/use-click"
useClick(onClick)
```
### Arguments
| 변수 | 타입 | 설명 | 필수 |
|:---|:---|:---|:---|:---:|
| onClick | Function | element에 클릭 이벤트가 발생되면 호출할 함수 | Y |

### Return
| 값 | 타입 | 설명 | 기본값 | 
|:---|:---|:---|:---|
| ref | React Ref | click 이벤트를 받는 모든 요소에 React Ref 추가 | null |

### Example
```node
import React from "react";
import useClick from "@dooks/use-click";

export default function App() {
  const sayHello = (event) => console.log("say Hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hello</h1>
    </div>
  );
}
```
