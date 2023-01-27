import Content from '../component/Content';
export default function Login(props) {
  return (
    <>
      <LoginContent/>
    </>
  );
}
//http://localhost:3000/login/oauth2/code/github
function LoginContent() {
  return (
    <>
      <h1>로그인</h1>
      <a href="https://github.com/login/oauth/authorize?client_id=6a5ea0dfd6893cf7bbf9&redirect_uri=http://localhost:3000/login/oauth2/code/github">깃허브로 로그인</a>
    </>
  );
}

/**
 *             redirect-uri: http://localhost:10000/login/oauth2/code/github
 *             client-id: 6a5ea0dfd6893cf7bbf9
 *             client-secret: 1761c0cf53ccf6bdf1061f6ea4e989f0293681d1
 */