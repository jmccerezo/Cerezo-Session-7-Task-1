import * as actions from "./action";

const initState = {
  users: [],
};

export const reducer = (state = initState, action) => {
  console.log("ACTION", action);
  console.log("INIT STATE", initState);
  switch (action.type) {
    case actions.REGISTER_USER:
      return { ...state, users: [...state.users, action.payload.httpResponse] };

    default:
      return state;
  }
};
