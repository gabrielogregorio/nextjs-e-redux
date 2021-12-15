export const overwriteDataNormalize = (payload, state) => {
  const setItem = (item) => {
    const payloadExistsInState = state.byId[`${item.id}`];

    if (payloadExistsInState) {
      Object.assign(payloadExistsInState, item);
    } else {
      state.byId[`${item.id}`] = item;
      state.allIds.push(`${item.id}`);
    }
  };

  Object.keys(payload).forEach((key) => {
    setItem(payload[key]);
  });
};
