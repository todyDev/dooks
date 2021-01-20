# @dooks/use-input

## 설치 방법
### npm
```
npm i @dooks/use-input
```
### yarn
```
yarn add @dooks/use-input
``` 

## 사용 방법
``` node
import useInput from "@dooks/use-input"
useInput(initialValue, validator)
```
### Arguments
| 변수 | 타입 | 설명 | 기본값 | 필수 |
|:---|:---|:---|:---|:---:|
| initialValue | String | input 태그에 적힐 초기값을 넣어준다. | "" | N |
| validator | Function | 값 검증이 필요할  경우 함수를 넣어준다. | null | N | 

### Return
| 값 | 타입 | 설명 | 기본값 | 
|:---|:---|:---|:---|
| value | String | input 태그의 value 값 | null | 
| onChange | String | input 태그의 변화를 감지 | null |

### Example
``` node
import React from "react";
import useInput from "@dooks/use-input";

export default function App() {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Ms.", maxLen);
  const introduction = useInput();
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="name" value={name.value} onChange={name.onChange} />
      <input placeholder="introduction" {...introduction} />
    </div>
  );
}
```
