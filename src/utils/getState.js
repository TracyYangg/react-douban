import get from "lodash/get";

export const selector = (state, reducerName, NAME, PARENT_NAME) => {
  if (!PARENT_NAME) {
    return get(state, `${NAME}.${reducerName}`);
  }
  return get(state, `${PARENT_NAME}.${NAME}.${reducerName}`);
};
