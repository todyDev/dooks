# @dooks/use-notification

## 설치 방법
### npm
```
npm i @dooks/use-notification
```
### yarn
```
yarn add @dooks/use-notification
```

## 사용 방법
```node
import useNotification from "@dooks/use-notification"
useNotification(title, options)
```
### Arguments
| 변수 | 타입 | 설명 | 필수 |
|:---|:---|:---|:--:|
| title | String | 알림에 사용될 제목 | N |
| options | Obejct | [Notification](https://developer.mozilla.org/ko/docs/Web/API/notification)의 인스턴스 | N |

### Example
```node
import React from "react";
import useNotification from "@dooks/use-notification";

export default function App() {
  const triggerNotifi = useNotification("hi", { body: "Good!" });
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={triggerNotifi}>click notification</button>
    </div>
  );
}
```
