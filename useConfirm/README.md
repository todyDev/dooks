# @dooks/use-confirm
사용자가 무언가를 하기 전에 확인할 수 있다. 이것은 browser에 의해 만들어진다.

## 설치 방법
### npm
```
npm i @dooks/use-confirm
```
### yarn
```
yarn add @dooks/use-confirm
```

## 사용 방법
``` node
import useConfirm from "@dooks/use-confirm"
useConfirm(message, onConfirm, onCancel)
```
### Arguments
| 변수 | 타입 | 설명 | 기본값 | 필수 |
|:---|:---|:---|:---|:--:|
| message | String | 사용자에게 보여질 확인 문구 | "" | Y |
| onConfirm | Function | 사용자가 확인했을 때 호출할 함수  | null | Y | 
| onCancel | Function | 사용자가 취소했을 때 호출할 함수 | null | N | 

### Return
| 변수 | 타입 | 설명 | 기본값 |
|:---|:---|:---|:---:|
| Function | Function |  | null |

### Example
```node
import React from "react";
import useConfirm from "@dooks/use-confirm";

export default function App() {
  const deleteFunction = () => console.log("삭제");
  const cancelFunction = () => console.log("취소");
  const confirmDelete = useConfirm("정말로 삭제하시겠습니까?", deleteFunction, cancelFunction);
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={confirmDelete}>Delete</button>
    </div>
  );
}
```
