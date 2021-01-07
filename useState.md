# useState

```
import React, { useState } from "react";

function App() {
   const [item, setItem] = useState(0);
   const incrementItem = () => setItem(item + 1);
   const decrementItem = () => setItem(item - 1);
   return {
      <div className="App">
         <h1>Hello {item}</h1>
         <button onClick={incrementItem}>Increment</button>
         <button onClick={decrementItem}>Decrement</button>
      </div>
   }
}
```
useState는 Array를 return한다. 위의 코드로 보면 첫번째 요소는 item, 두번째 요소는 setItem 이다.
만약 item 하나만 사용하고 싶으면 `const item = useState(0)[0];` 이런식으로 사용하면 된다.
참고로 변수명 item, setItem은 지정된 값이 없고 원하는 이름으로 사용하면 된다.

useState hook을 사용하기 전의 코드는 어땠는 지 한번 확인해보자.
hook가 생기기전에 state는 함수형 componenet에서 사용할 수 없었기에 class Component 형태로 만들어줘야 했다.
```
class AppUgly extends React.Component {
   state = {
      item: 1
   }
   render() {
      const { item } = this.state;
      return {
         <div className="App">
            <h1>Hello {item}</h1>
            <button onClick={this.incrementItem}>Increment</button>
            <button onClick={this.decrementItem}>Decrement</button>
         </div>
      }
      incrementItem = () => {
         this.setState(state => {
            item: state.item + 1
         }
      }
      decrementItem = () => {
         this.setState(state => {
            item: state.item - 1
         }
      }
   }
}
```
hook을 사용했을 때 보다 코드 길이도 많아지고 가독성도 떨어진다.
