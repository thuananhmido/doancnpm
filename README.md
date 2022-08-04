# frontend-training-ncc
### ReactJS
### Các khái niệm
### Jsx 
-    Là cú pháp mở rộng của JS
-   syntax :
```jsx
    const name = 'Josh Perez';
    const element = <h1>Hello, {name}</h1>;
```
-   Tên cấc thuộc tính theo chuẩn camelCase : className
### Redering Element
-   Element là các thành phần nhỏ nhất trong ứng dụng.
```jsx
    const element = <h1>Hello, world</h1>;
```
-   Để render một React element vào bên trong một  (node) DOM gốc, truyền tất cả vào ReactDOM.render():
```jsx
    ReactDOM.render(element, document.getElementById('root'));
```
### Component and Props
-   có 2 loại : Fucntion Components và Class Component
```jsx
    function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
        }
    //class cpn
    class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
    }
```
### Rendering-component
```jsx
    function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
    }
    const element = <Welcome name="Sara" />;
    ReactDOM.render(
    element,
    document.getElementById('root')
    );
```
### Props :thuộc tính của component
-   cho phép truyền vào input
-   chỉ dùng để đọc và không thay đổi
-   children Property : truyền giữa opening và closing tags
```jsx
    // components/person/Person.js
    const Person = (props) => {
    return (
        <div>
        <p>I am {props.name}!</p>
        <p>{props.children}</p>
        </div>
    );
    };
    // App.js
    <Person name="Iron man">Love you 3000!</Person>
```
### State and lifiCycle
### State : 
-   khi cần 1 biến nội bộ trong component và biến đó đucợ quản lý hoàn toàn bởi component đó (Không thể sử dụng props)
-   Stateless và Statefull
-   Staless : các component không có internal state (nên sử dụng)
```jsx
    // stateless
    const Person = (props) => {
    return (
        <div>
        <p>I am {props.name}!</p>
        <p>{props.children}</p>
        </div>
    );
    };
```
-   Statefull các component có chứa state bên trong
### handleEvents
-   JSX sử dụng hàm để bắt sự kiện
```jsx
    <button onClick={activateLasers}>
    Activate Lasers
    </button>
```
-   Ngăn chặn hành vi mặc định : preventDefault();
### Conditional Rendering
-   Ví dụ như đăng nhập thì rendering trang chủ , còn chưa thì rendering trang login
```jsx
    function Greeting(props) {
        const isLoggedIn = props.isLoggedIn;
        if (isLoggedIn) {
            return <UserGreeting />;
        }
        return <GuestGreeting />;
        }

        ReactDOM.render(
        // Thử thay đổi prop isLoggedIn={true}:
        <Greeting isLoggedIn={false} />,
        document.getElementById('root')
        );
```
-   Gán giá trị của element vào 1 biến : render có điều kiện 1 phần tròn khi các phần khác sẽ không thay đổi
-    Thay thế toán tử if bằng &&
```jsx
    function Mailbox(props) {
        const unreadMessages = props.unreadMessages;
        return (
            <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 &&
                <h2>
                You have {unreadMessages.length} unread messages.
                </h2>
            }
            </div>
        );
        }
        const messages = ['React', 'Re: React', 'Re:Re: React'];
        ReactDOM.render(
        <Mailbox unreadMessages={messages} />,
        document.getElementById('root')
        );
```
-   Nếu điều kiện trước && thỏa thì block code sau && sẽ được thực hiện ,nếu fasle sẽ bỏ qua
-   Thay if else bằng toán tử ba ngôi
```jsx
    render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
        <div>
        {isLoggedIn
            ? <LogoutButton onClick={this.handleLogoutClick} />
            : <LoginButton onClick={this.handleLoginClick} />
        }
        </div>
    );
    }
```
-   nếu isLoggedIn trả về true thì render logout
-   return Null nếu muốn ngăn chặn coponent thực hiện render bởi 1 component khác
### Lists and Keys
-   Render nhiều component
```jsx
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
    <li>{number}</li>
    );
    ReactDOM.render(
        <ul>{listItems}</ul>,
        document.getElementById('root')
        );
```
-   Dùng map duyệt hết mảng component sau đó get được listItems và dùng render
-   Key : xác định được phần tử nào sẽ tahy đổi, thêm hoặc xóa, thông thường nên sử dụng ID , bởi ID là duy nhất 
### Forms
-   Controlled Components :sử dụng funct JS xử lý quá trình submit dữ liệu của form
-------------------------
### Hook : là các method , các funct đucợ viết bởi ReactJS
 -  useState
 -  useEffect
 -  useLayoutEffect
 -  useRef
 -  useCallBack
 -  useMemo
 -  useReducer
 -  useContext
 -  useImpreativeHandle
 -  useDebugValue
*** Chỉ dùng cho fucnt component
 ### useState : Trạng thái của dữ liệu
-   Dữ liệu thay đổi gì , giao diện re-render ở đó
    ```jsx
    import {useState} from 'react';
    const [state, setState] = useState (initState);
    ```
    + initSate : giá trị khởi tạo
    +   state : lưu giá trị của state(đơn,mảng,object...)
    +   setState : thay đổi giá trị state khi thay đổi
    ```jsx
        function Counter({initialCount}) {
            const [count, setCount] = useState(initialCount);
            return (
                <>
                Bộ đếm: {count}
                <button onClick={() => setCount(initialCount)}>Chạy lại</button>
                <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
                <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
                </>
            );
            }
            ```
-   Các nút + ,- sẽ thay đổi với giá trị trước đó đã chạy
-   nút init sẽ chạy lại với giá trị ban đầu
###   LAZY INITIAL STATE
-   Khi có phép toán phức tạp nên dùng hàm callback để làm tham số khởi tạo cho useState 
-   Bỏ qua việc cập nhật state nhiều lần , nó chỉ chạy lần đầu tiên và lấy luôn giá trị
```jsx
    const [state, setState] = useState(() => {
    const initialState = someExpensiveComputation(props);
    return initialState;
    });
```
### two-way binding : ràng buộc 2 chiều
-   Thay đổi bên giao diện thì setState cũng thay đổi và ngược lại
-   ứng dụng khi dùng form , sẽ lấy được giá trị input mà ko cần get value

---------------------------------------------------------------
### useEffect :Xác định fucnt có side effect hay không
```jsx
    useEffect(handlerFunction, paramsArray?)
```
-   handlerFuction : Thực thi coogn việc khi useEffect chạy
-   paramsArray : mảng để các theo dõi tham số , khi có thay đổi thì userEffect mới chạy
-   side-effect : khi tác động  làm cho dữ liệu bị thay đổi
-   ex : Submit thông tin lên server và nhận thông tin trả về
        Hiển thị trạng thái thành công (chuyển từ redirect sang Dashboard) hoặc thất bại (Error và giải thích lỗi)  //side-effect
-   Chạy sau khi render giao diện
-   Có ba loại :
    1. useEffect(callback)
        -   Gọi callback mỗi khi component re-render 
    2. useEffect (callback,[])
        -   Chỉ gọi callback 1 lần sau khi component mounted
        -   Ví dụ như fetch API
    3. useEffect (callback,[deps])
    -   callback sẽ đucợ gọi mỗi khi depend thay đổi
    ------------------------
    -   callback luôn đc gọi sau khi component mounted
```jsx
    useEffect (callBack,[deps]);
    -   deps : biến, props truyền vào,hoặc state
```

 ### useLayoutEffects
-   giống tương tụ useEffect nhưng khi cập nhật dom , nó không render UI liền mà nó sẽ gọi callback trước , sau đó render-ui

### useRef
-   Lưu các giá trị tham chiếu bên ngoài
-   Thay đổi nó ko làm re-render component
```jsx
    const ref = useRef(99)
    console.log(ref.current)
```
-   trả về giá trị kiểu object
-   Gía trị khởi tạo chỉ dùn lần đầu, sau khi render lại giá trị nó sẽ thay đổi theo
```jsx
    const [count, setCount] = useState(60)
    const timerId = useRef()
    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prev => prev -1)
        },1000)
    }

    const handleStop = () => {
        clearInterval(timerId.current)
    }
```
-   Dùng useRef để lấy được giá trị timerId trong handleStart sau đó vào hàm stop gọi sẽ thực hiện được
-   không sử dụng useRef thì biến timerId sẽ undefined sau khi re-render 

### useCallBACK()
-   memo() : Higher Order Component
-   memo() : xử lý component để tránh render ko cần thiết
```jsx
    export default memo(App)
```
-   nhận vào component và check xem props của conponent đó có thay đổi ko, nếu không thì không re-render cpn đó
-   useCallBack () :lưu lại sự tồn tại hàm vào bộ nhớ giữa các lần render của component và chỉ thay đổi khi deps thay đổi, hạn chế tạo lại các fucntion ko cần thiết
```jsx
    // ...
    const increment = useCallback(() => {
    setCount(count + 1);
    }, [count]);

    const incrementOtherCounter = useCallback(() => {
    setOtherCounter(otherCounter + 1);
    }, [otherCounter]);
    // ...
```
-   sử dụng useCallback hàm increment chỉ tạo lại khi count thay đổi , tuowg tự incrementOtherCounter cũng vậy.

### useMemo() : Hook
-   lưu kết quả tính toán cùa 1 hàm vào bộ nhớ giữa các lần re-render
```jsx
    const total = useMemo (() => {
        const result = product.reduce((result, prod) => {
            return result + prod.price
        },0)
        return result
    },[product])
```
 -   Nếu product không thay đổi nó sẽ bỏ qua re-render , dùng useMemo () sẽ lưu lại được giá trị đã lưu trức đó , khi product  thay đổi thì sẽ trả về giá trị đã lưu và tính toán.

 ### useReducer
 -  giống useSate nhưng dùng xử lí các tình huống trong các state phức tạp , các kiểu dữ liệu lồng nhau..
 ```jsx
    // Tạo 1 hàm init động để thực hiện Lazy initialization
const init = (initialCount) => {count: initialCount}

// Khai báo 1 reducer và định nghĩa các logic thực hiện ứng với mỗi loại action
const reducer = (state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + 1}
    case 'DECREMENT':
      return {count: state.count - 1}
    case 'RESET':
    	return init(action.payload)
    default:
      throw new Error()
  }
}

const Counter = ({ initialCount }) => {
  /*
   * useReducer ở đây nhận đầu vào lần lượt 3 tham số là:
   * 1. reducer đã được định nghĩa trước đó
   * 2. Giá trị khởi tạo ban đầu initialCount
   * 3. Hàm init để trả về initialState đối với giá trị khởi tạo ban đầu
   *
   * Có thể truyền initialState trực tiếp mà không cần hàm init
   * useReducer(reducer, initialState)
   *
   * useReducer trả về 1 mảng gồm:
   * 1. state là biến chứa giá trị hiện tại của state
   * 2. dispatch là hàm kích hoạt một action nào đó trong reducer để thay đổi state
   */
  const [state, dispatch] = useReducer(reducer, initialCount, init)
  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({type: 'RESET', payload: initialCount})}
      >
        Reset
      </button>
      <button onClick={() => dispatch({type: 'DECREMENT'})}>-</button>
      <button onClick={() => dispatch({type: 'INCREMENT'})}>+</button>
    </>
  )
}
 ```
 ### useContext
 -  Chia sẻ các biến global từ cha xuống cpn con mà không cần truyền props từng nhánh một
    1.  Create context
    2.  Provider
    3.  Consumer
 
 ```jsx
    // Tạo context
    const CounterContext = React.createContext()
    export default CounterContext
    
    const value = useContext(CounterContext)
 ```
 -  value : lưu trữ giá trị context
 -  CounterContext : là reatcontext đã tạo
 ```jsx
    <CounterContext.Provider value={{ count, increase, decrease }}>
        <CounterInfo />
      </CounterContext.Provider>
 ```
 -  Bọc component muốn sử dụng `CountContext.Provider`
 
-   Vào component con chỉ cần gọi ra và sử dụng 
```jsx
    const { count, increase, decrease } = useContext(CounterContext);
```
### React Andvanced Guides
-   Fragment : là một common pattern , cho phép return nhiều element từ 1 component mà không cần sinh ra các component không cần thiết khác
```jsx
    // Component table sẽ gọi component Column
            function Table() {
                return (
                        <table>
                        <tr>
                            <Columns />
                        </tr>
                        </table>
                    );
                    }
    // component Column
    function Table() {
        return (
                <table>
                <tr>
                    <Columns />
                </tr>
                </table>
            );
            }
    // Thay thế fragment
    function Columns() {
        return (
                <React.Fragment>
                <td>Hello</td>
                <td>World</td>
                </React.Fragment>
            );
            }
```
-   Nếu không sử dụng Fragment khi render thì sẽ phá vỡ cấu trúc của table 
-   Nên Fragment sinh ra để giải quyết điều này
### React Lifecycle
-   Mounting => Updating => Unmouting
-   Mouting : Các method sau sẽ được gọi theo thứu tự khi instance của 1 component được render :
    +   contructor()
    +   static getDerivedStateFromProps
    +   render()
    +   componentDidMount()
-   Updating : Xảy ra khi có lỗi props hoặc state , các method sẽ được gọi lần lượt :
    +   static getDerivedStateFromProps()
    +   shouldComponentUpdate()
    +   render()
    +   getSnapshotBeforeUpdate()
    +   componentDidUpdate()
-   Unmounting : khi component được gỡ ra khỏi DOM
    +   componentWillUnmount()
    +   static getDerivedStateFromError()
    +   componentDidCatch()

### React Router
-   Thư viện routing trong react
-   giữ cho giao diện đồng bộ url trên trình duyệt
```jsx
    npm i react-router
```
-   Khai báo
```jsx
    import { BrowserRouter as Switch,Router, Route, Link, NavLink } from "react-router-dom";
```
-   Có 2 kiểu : BrowserRouter và HashRouter
    + BrowserRouter : dùng History API trong html5 để theo dõi lịch sử router
    + HashRouter : sử dụng hash của URL (window.location.hash) để ghi lại
-   Route : Kết nối 1 url và 1 component
```jsx
    <Router>
        <div className="App">
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
        </div>
    </Router>
```
    -   path : đường dẫn url
    -   exact : chỉ hoạt động khi url đúng tuyệt đối với thuộc tính path của nó ,khi nào url có / hoặc không có gì mới render Home
    -   component : các cpn tương ứng
-   Switch : Chạy qua lần lượt các router và check đúng thì render và dừng lại , không xét nữa
```jsx
    <Switch>
    <Route exact path="/">
        <Home />
    </Route>
    <Route path="/about">
        <About />
    </Route>
    <Route path="/:user">
        <User />
    </Route>
    <Route>
        <NoMatch />
    </Route>
    </Switch>
```
-   Link : Chuyển hướng url
```jsx
    <Link to="/about">About</Link>
```
    + to : giống như href nhưng nó ko load lại trang
-   NavLink : Tương tự như Link nhưng có thêm 2 thuộc tính activeClassName và activeStyle , check nó trùng thì style cho nó
```jsx
    <NavLink
    exact
    activeStyle={{
        backgroundColor: "white",
        color: "red",
    }}
    to="/"
    className="my-link"
    >
    Trang Chu
    </NavLink>
```
-   Redirect : điều hướng tranng đến đường dẫn mới , ghi đè đường dẫn cũ
```jsx
<Route exact path="/">
  {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />}
</Route>
<Redirect to="/somewhere/else" />
```
-   check xem biến login true hay false đúng thì redirect đến dashborrd hoặc ngược lại
