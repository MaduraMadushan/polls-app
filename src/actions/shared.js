import { getInitialDate } from "../utils/api";
import { receivePolls } from "./polls";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUser";

const AUTHED_ID = "tylermcginnis";

export const handleInitialData = () => {
  return dispatch => {
    return getInitialDate().then(({ users, polls }) => {
      dispatch(receiveUsers(users));
      dispatch(receivePolls(polls));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
};
