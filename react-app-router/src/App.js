import './App.css';
import {BrowserRouter, Routes, Route, Link, NavLink, Outlet} from 'react-router-dom'

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home화면 입니다.
    </div>
  );
}

function Topics() {
  return (
    <div>
    <h2>Topics</h2>
    Topics화면입니다.
    <ul>
      <li><NavLink to='topics/1'>HTML</NavLink></li>
      <li><NavLink to='topics/2'>JS</NavLink></li>
      <li><NavLink to='topics/3'>React</NavLink></li>
    </ul>
    <Outlet></Outlet>
    세부 Topic화면 입니다.
    </div>
  )
}


function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
    <div>
      <h1>React Router DOM Example</h1>

      <ul>
        {/* SPA(Single Page Application) NavLink 
        1. a태그로 변경되고, to 속성은 href 속성으로 변환된다 . 
        2. 새로고침을 안한다. 
        3. 상태값(state)이 유지된다. 
        4. 클릭된 항목에만 active라는 class가 추가됨 
        5. 그 외의 항목들은 active클래스가 제거된다. */}
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/topics'>Topics</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul>

      {/* <ul>
        {/* SPA(Single Page Application) Link 
        1. a태그로 변경되고, to속성을 href속성으로 변환된다. 
        2. 새로고침을 안한다. 
        3. 상태값(state)이 유지된다.
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/topics'>Topics</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul> */}

      {/* <ul>
        {/* a태그의 href속성은 페이지를 이동시킬때 새로고침을 하게된다. 따라서, 상태값(state)이 초기화되고, 속도도 저하되는 문제가 있다.
        <li><a href='/'>Home</a></li>
        <li><a href='/topics'>Topics</a></li>
        <li><a href='/contact'>Contact</a></li>
      </ul> */}

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/topics' element={<Topics></Topics>}>
        <Route path='1' element={<Topics></Topics>}></Route>
        <Route path='2' element={<Topics></Topics>}></Route>
        <Route path='3' element={<Topics></Topics>}></Route>
        </Route>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
