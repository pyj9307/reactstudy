import './App.css';
import { BrowserRouter, Routes, Route, Link, NavLink, Outlet, useParams } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home화면 입니다.
    </div>
  );
}

// Topics의 항목을 반복문을 활용하여 생성하기 위한 데이터 준비
const contents=[
  {id:1, title:'HTML', desc:'HTML is Hyper Text Markup Language.'},
  {id:2, title:'JS', desc:'JS is ....'},
  {id:3, title:'React', desc:'React is....'}
];

function Topics() {
  const list=[];
  for(let i=0; i<contents.length; i++){
    list.push(
      <li key={contents[i].id}><NavLink to={`/topics/${contents[i].id}`}>{contents[i].title}</NavLink></li>
    )
  }
  return (
    <div>
      <h2>Topics</h2>
      Topics화면입니다.
      <ul>
        {/* 상대경로로 요청 : 현재 주소값/요청하는 주소값
        <li><NavLink to='1'>HTML</NavLink></li>
        <li><NavLink to='2'>JS</NavLink></li>
        {/* 절대경로로 요청 : /topics -> 기본주소/topics
        <li><NavLink to='/topics/3'>React</NavLink></li> */}

        {/* 반복문을 이용해 list배열변수에 링크태그를 저장해놓고 출력하도록 수정 */}
        {list}
      </ul>
      <Outlet></Outlet>
    </div>
  )
}

// Topics의 하위 컴포넌트
// /topics/1과 같이 요청하면 1번 topic이 화면에 출력된다. 
function Topic() {
  // useParams() : 해당 컴포넌트로 요청이 들어올때 url의 파라미터 데이터를 가져올 수 있다.
  // ex) 요청주소가 /topics/1 이면 1이 파라미터가 된다. 즉, 1아리는 데이터를 가져올 수 있다.
  const {id} = useParams();
  // Contents변수를 활용한 상세페이지로 수정
  let selected_topic = {
    title : '죄송합니다.',
    desc : '원하는 페이지가 없습니다.(404)'
  }

  // 향상된 for문 : for(순회할 변수명 of 타겟 배열){변수명 그대로 배열을 순회한다.}
  for(const topic of contents){
    if(topic.id === Number(id)){
      // selected_topic의 title과 desc값을 id값이 일치하는 항목의 title과 desc값으로 대체한다.
      selected_topic = topic;
      break;
    }
  }
  return (
    <div>
      세부 Topic화면 입니다. {id}번째 topic입니다.
      <h3>{selected_topic.title}</h3>
      {selected_topic.desc}
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

function Login(){
  // localhost:3000/login/result/아이디값/비밀번호값
  return(
    <div>
      <h1>로그인 페이지</h1>
      <form action='/create_process' method='post'
                onSubmit={function(e){
                    e.preventDefault();
                    // form 태그 내부의 태그에 name을 할당해주면 e.target.네임값.value로 해당 태그의 value값을 읽어올 수 있다.
                    const id = e.target.id.value;
                    // console.log('title : '+title);
                    const password = e.target.password.value;
                    this.props.onSubmit(id,password);
                }}>
      <input type='text' name='id' placeholder='아이디'/>
      <input type='password' name='password' placeholder='비밀번호'/>
      <button type='submit'>submit</button>
      <br/>
      <NavLink>로그인</NavLink>
      </form>
    </div>
  )
}

function LoginResult(){
  let loginresult;
  loginresult =<Login onSubmit={function (id,password){
    loginresult.push({
      id: id,
      password: password
    })
  }} />
  return(
    <div>
      <p>아이디 : ${LoginResult.id}</p>
      <p>비밀번호 : ${LoginResult.password}</p>
    </div>
  )
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
          <li><NavLink to='/login'>Login</NavLink></li>
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
          {/* path에 명시된 주소로 요청을 보내면 element속성에 명시된 컴포넌트가 출력된다 */}
          <Route path='/' element={<Home/>} />
          {/* 하위주소를 입력받을 때  */}
          <Route path='/topics' element={<Topics/>}>
            <Route path=':id' element={<Topic/>}></Route>
            {/* <Route path='1' element={<Topic/>}></Route>
            <Route path='2' element={<Topic/>}></Route>
            <Route path='3' element={<Topic/>}></Route> */}
          </Route>
          <Route path='/contact' element={<Contact />} />
          {/* react-router-dom을 활용하여 로그인 기능 구현
              1. 주소에 localhost:3000/login으로 요청이 왔을 때
              2. 아이디, 비밀번호 입력창 그리고 로그인 버튼 생성
              3. 아이디 비밀번호 입력 후 로그인 버튼 클릭하면 /login/result 로 주소 요청
              4. 아이디, 비밀번호가 출력되도록 loginResut페이지 작성
              path에서 경로파라미터가 여러개일때 -> id/:pw와 같이 /로 구분하도록 한다. */}
              <Route path='/login' element={<Login/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// 웹에서 href속성과 같이 특정 url요청할 때 절대경로, 상대경로
// 절대경로 : 유일무이한 주소
// ex) https://www.naver.com, 
// /topics -> 기본주소/topics

// 상대경로 : 현재 주소값에서 특정주소를 붙여서 요청을 함
// ex) topics -> 현재 주소값/topics
// 현재 주소값 : localhost:3000 => localhost3000/topics
// 현재 주소값 : localhost:3000/home => localhost3000/home/topics