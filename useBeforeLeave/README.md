# @dooks/use-before-leave

## 설치 방법
### npm
```
npm i @dooks/use-before-leave
```
### yarn
```
yarn add @dooks/use-before-leave
```

## 사용 방법
```node
import useBeforeLeave from "@dooks/use-before-leave"
useBeforeLeave(onBefore)
```
### Arguments
| 변수 | 타입 | 설명 | 기본값 | 필수 |
|:---|:---|:---|:---|:--:|
| onBefore | Function |  |  |  |

### Return
| 변수 | 타입 | 설명 | 기본값 |
|:---|:---|:---|:---:|
|  |  |  |  |

### Example
```node
import React from "react";
import useBeforeLeave from "@dooks/use-before-leave";

export default function App() {
  const beforeLeave = () => console.log("plz dont leave");
  useBeforeLeave(beforeLeave);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}
```
