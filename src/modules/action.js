import { postAPI } from "./utils/services";
import axios from "axios";

export const REGISTER_USER = "REGISTER_USER";

export const onRegisterUser = (userData) => {
  return (dispatch) => {
    axios
      .post(postAPI, userData)
      .then((res) => {
        console.log("RESPONSE:", res.data);

        dispatch(
          ((data) => {
            return { type: REGISTER_USER, payload: { httpResponse: data } };
          })(res.data)
        );
      })
      .catch((err) => {
        console.log("ERROR:", err);
      });
  };
};
