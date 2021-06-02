import firebase from "firebase/app";
import auth from "../../config/firebase";
import {
  LOAD_PROFILE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
} from "../constants/actionTypes";

export const login = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");

    const res = await auth.signInWithPopup(provider);
    /* console.log(res) */

    //accessing credentials from res
    const accessToken = res.credential.accessToken;
    const profile = {
      name: res.additionalUserInfo.profile.name,
      photo: res.additionalUserInfo.profile.picture,
    };

    sessionStorage.setItem("fz-tube-accessToken", accessToken);
    sessionStorage.setItem("fz-tube-userProfile", JSON.stringify(profile));

    dispatch({
      type: LOGIN_SUCCESS,
      payload: accessToken,
    });
    dispatch({
      type: LOAD_PROFILE,
      payload: profile,
    });
  } catch (error) {
    console.log(error.message);

    dispatch({
      type: LOG_OUT,
      payload: error.message,
    });
  }
};

//logout action
export const logout = () => async (dispatch) => {
  await auth.signOut();

  dispatch({
    type: LOG_OUT,
  });

  sessionStorage.removeItem("fz-tube-accessToken");
  sessionStorage.removeItem("fz-tube-userProfile");
};
