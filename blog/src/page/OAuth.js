import {useParams, useLocation} from "react-router-dom";
import axios from 'axios';

export default function Login() {
  const path = useParams();
  const param = new URLSearchParams(useLocation().search);
  if (path.platform === "github") {
    axios.post(
      "/api/members/sign-in",
      { oauthPlatform : "GITHUB", authorizationCode : param.get("code")},
      {withCredentials: true})
      .then(res => res.data)
      .then(data => {
        console.log(data);
        if(data.successful) {
          window.location.href = "/";
        }
      });
  }

  return (
    <>
      <h1>로그인 중...</h1>
    </>
  );
}