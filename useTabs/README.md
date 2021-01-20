# @dooks/use-tabs

## 설치 방법
### npm
```
npm i @dooks/use-tabs
```
### yarn
```
yarn add @dooks/use-tabs
```

## 사용 방법
``` node
import useTabs from "@dooks/use-tabs"
useTabs(initialTab, allTabs)
```
### Argument
| 변수 | 타입 | 설명 | 필수 |
|:---|:---|:---|:---:|
| initialTab | Number | 처음 보여줄 탭 데이터의 index 값 | Y |
| allTabs | Array | 탭에 이용될 데이터 | Y | 

### Return
| 값 | 타입 | 설명 | 기본값 | 
|:---|:---|:---|:---|
| currentItem | Object | 현재 선택된 index의 탭 데이터 | null |
| changeItem | Number | 변경할 탭의 index 설정 | null |

### Example
``` node
import React from "react";
import useTabs from "@dooks/use-tabs";

const content = [
  {
    id: 1,
    tab: "Section 1",
    content: "It's Section 1"
  },
  {
    id: 2,
    tab: "Section 2",
    content: "It's Section 2"
  }
];

export default function App() {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      <h1>Hello</h1>
      <div>
        {content.map((e, index) => (
          <button key={e.id} onClick={() => changeItem(index)}>{e.tab}</button>
        ))}
        <div>{currentItem.content}</div>
      </div>
    </div>
  );
}
```
