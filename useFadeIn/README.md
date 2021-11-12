# @dooks/use-fade-in

## 설치 방법
### npm
```
npm i @dooks/use-fade-in
```
### yarn
```
yarn add @dooks/use-fade-in
```

## 사용 방법
```node
import useFadeIn from "@dooks/use-fade-in"
useFadeIn(duration, delay)
```
### Arguments
| 변수 | 타입 | 설명 | 기본값 | 필수 |
|:---|:---|:---|:---|:--:|
| duration |  |  |  |  |
| delay |  |  |  |  |

### Return
| 변수 | 타입 | 설명 | 기본값 |
|:---|:---|:---|:---:|
|  |  |  |  |

### Example
```node
import React from "react";
import useFadeIn from "@dooks/use-fade-in";

export default function App() {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 4);
  return (
    <div className="App">
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>test fade</p>
    </div>
  );
}
```