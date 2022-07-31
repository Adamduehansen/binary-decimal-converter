function composeFunction<ComposeObjectT>(
  ...fns: ((t: ComposeObjectT) => ComposeObjectT)[]
) {
  return function (value: ComposeObjectT) {
    return fns.reduce((previousValue, fn) => {
      return fn(previousValue);
    }, value);
  };
}

export default composeFunction;
