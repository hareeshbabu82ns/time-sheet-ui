export default function keducer(
  prefix,
  actionMutationMap = {},
  defaultState = {}
) {
  return (state = defaultState, action) => {
    return actionMutationMap[action.type]
      ? actionMutationMap[action.type](state, action.payload)
      : action.type.indexOf(`${prefix}.`) === 0
        ? { ...state, ...action.payload }
        : state;
  };
}
