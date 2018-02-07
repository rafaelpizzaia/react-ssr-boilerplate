// Action Type
const TODO = 'TODO';

const INITIAL_STATE = {
  todos: [],
};

// Reducer
export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case TODO:
      return { ...state, ...action.payload };

    default:
      return state;
  }
}

// Action Creator
// eslint-disable-next-line no-unused-vars
export const fetchTodos = () => async (dispatch, getState, api) => {
  dispatch({
    type: TODO,
    payload: {
      todos: ['todo_1', 'todo_2'],
    },
  });
  // try {
  //   const { data } = await api.get('/api/bla');

  //   dispatch({
  //     type: TODO,
  //     payload: {
  //       todos: data.todos,
  //     },
  //   });
  // } catch (e) {
  //   console.log('fetchData', e);
  // }
};
