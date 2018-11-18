export let logger = store => passToChain => action => {
  console.group(action.type);
  console.log("Before", store.getState());
  console.log(action);
  passToChain(action);
  console.log("After", store.getState());
  console.groupEnd();
};
