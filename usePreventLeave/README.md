# @dooks/use-prevent-leave

## 설치 방법
### npm
```
npm i @dooks/use-prevent-leave
```
### yarn
```
yarn add @dooks/use-prevent-leave
```

## 사용 방법
```node
import usePreventLeave from "@dooks/use-prevent-leave"
usePreventLeave()
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
import usePreventLeave from "@dooks/use-prevent-leave";

export default function App() {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  );
}
```
