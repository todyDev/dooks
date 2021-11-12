# @dooks/use-fullscreen

## 설치 방법
### npm
```
npm i @dooks/use-fullscreen
```
### yarn
```
yarn add @dooks/use-fullscreen
```

## 사용 방법
```node
import useFullScreen from "@dooks/use-fullscreen"
useFullScreen(callback)
```
### Arguments
| 변수 | 타입 | 설명 | 기본값 | 필수 |
|:---|:---|:---|:---|:--:|
| callback |  |  |  |  |

### Return
| 변수 | 타입 | 설명 | 기본값 |
|:---|:---|:---|:---:|
|  |  |  |  |

### Example
```node
import React from "react";
import useFullScreen from "@dooks/use-fullscreen";

export default function App() {
  const onFulls = (isFull) => console.log(isFull ? "full" : "samll");
  const { element, triggerFull, exitFull } = useFullScreen(onFulls);
  return (
    <div className="App">
      <div ref={element}>
        <img src="https://ssl.pstatic.net/mimgnews/image/609/2020/12/15/202012151216417410_2_20201215122557962.jpg?type=w540" />
        <button onClick={exitFull}>exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>fullscreen</button>
    </div>
  );
}
```