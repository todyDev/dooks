# @dooks/use-network

## 설치 방법
### npm
```
npm i @dooks/use-network
```
### yarn
```
yarn add @dooks/use-network
```

## 사용 방법
```node
import useNetwork from "@dooks/use-network"
useNetwork(onNetworkChange)
```
### Arguments
| 변수 | 타입 | 설명 | 필수 |
|:---|:---|:---|:--:|
| onNetworkChange | Function | 사용자의 network 상태가 변할 때 호출될 함수 | Y |

### Return
| 값 | 타입 | 설명 | 기본값 |
|:---|:---|:---|:---:|
| isOnline | Boolean | 사용자가 온라인 상태면 true, 아니면 false | true |

### Example
```node
import React from "react";
import useNetwork from "@dooks/use-network";

export default function App() {
  const handleNetworkChange = (isOnline) => console.log(isOnline ? "just Online" : "ff offline");
  useNetwork(handleNetworkChange);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}
```