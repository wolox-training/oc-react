export const actions = {
  ADD_MOVE: '@@GAME/ADD_MOVE',
  GO_TO_MOVE: '@@GAME/GO_TO_MOVE',
  SET_WINNER: '@@GAME/SET_WINNER'
};

export default {
  addMove: i => ({
    type: actions.ADD_MOVE,
    payload: i
  }),

  goToMove: step => ({
    type: actions.GO_TO_MOVE,
    payload: step
  })
}
