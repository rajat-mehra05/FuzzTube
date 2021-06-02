import React, { useEffect } from "react";
import { SiYoutubetv } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { login } from "../../redux/actions/authActions";
import "./_loginScreen.scss";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const accessToken = useSelector((state) => state.auth.accessToken);

  useEffect(() => {
    if (accessToken) {
      history.push("/");
    }
  }, [accessToken, history]);

  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <div className="login">
      <div className="login_container">
        <div
          className="login_logo"
          style={{ color: "rgba(54, 195, 207, 0.8)", fontSize: "2rem" }}
        >
          <SiYoutubetv style={{ color: "rgba(224, 0, 0, 0.62)" }} /> {""}
          Fuzz<span style={{ color: "rgb(223, 223, 53)" }}>Tube !</span>
        </div>
        <button onClick={handleLogin}>Sign In with Google</button>
        <p>This app consumes Youtube Data API</p>
      </div>
    </div>
  );
};

export default LoginScreen;
