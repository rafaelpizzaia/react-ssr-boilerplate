// Action Type
const LOADING = 'LOADING';
const TODO = 'TODO';

const INITIAL_STATE = {
  loading: true,
  todos: [],
};

// Reducer
export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };

    case TODO:
      return { ...state, ...action.payload, loading: false };

    default:
      return state;
  }
}

// Action Creator
// eslint-disable-next-line no-unused-vars
export const fetchTodos = () => async (dispatch, getState, api) => {
  // ### REAL AWAY TO DO ###
  // try {
  //   const { data } = await api.get('/api/bla');

  //   dispatch({
  //     type: TODO,
  //     payload: {
  //       todos: data.todos,
  //     },
  //   });
  // } catch (error) {
  //    dispatch({
  //     type: TODO_ERROR,
  //     payload: {
  //       error,
  //     },
  //   });
  // }
  dispatch({
    type: LOADING,
  });

  return new Promise((resolve) => {
    setTimeout(() => {
      dispatch({
        type: TODO,
        payload: {
          todos: ['todo_1', 'todo_2'],
        },
      });
      resolve();
    }, 3000);
  });
};
