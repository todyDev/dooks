# useEffect
useEffect는 `componentWillUnmount`와 `componentDidMount`, `componentWillUpdate`의 역할을 한다.

### useEffect 사용
useEffect는 2개의 인자를 받는다.
1. effect
function을 return 받는다.
```
const sayHello = () => console.log("Hello");
useEffect(sayHello);
```
- component가 mount 될 때 sayHello function 을 실행. (componentDidMount)
- 무엇인가 업데이트될 때 sayHello function 실행. (componentWillUpdate)

`useEffect(() => sayHello();)` 이렇게 해줘도 실행이 된다.

2. deps (dependency)
deps 가 있다면 deps 값의 상태가 변할 때 function을 실행한다.
```
const sayHello = () => console.log("Hello");
const [number, setNumber] = useState(0);
const [anumber, setAnumber] = useState(0);
useEffect(sayHello, [number]);
```
- component가 mount 될 때 sayHello function 실행. (componentDidMount)
- number 에 업데이트가 있을 때 sayHello function 실행. (componentWillUpdate)
- anumber 이 업데이트 될 때는 실행되지 않는다.

만약 component가 mount 될 때만 실행하고 싶다면, 빈 deps를 전달하면 된다. `useEffect(sayHello, []);`


### componentWillUnmount
이벤트가 발생한 뒤 정리할 필요가 있다. function을 return 해줘야 한다.
```
useEffect(() => {
   if(element.current) {
      element.current.addEventListener("click", onClick");
   }
   return () => {
      if(element.current) {
         element.current.removeEventListener("click", onClick");
      }
   }
});
```
mount 될 때, update 되었을 때는 function을 호출하고,  unmount 될 때는 function을 return을 한다.
