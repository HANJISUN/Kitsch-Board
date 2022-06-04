const getColor = (dataKey: string) => {
  const targetValue = {
    TODO: '#affcbc',
    INPROGRESS: '#ffc2f2',
    DONE: '#97effb',
    NOTE: '#d0bfff',
  }[dataKey];

  return targetValue;
};

const getBorderColor = (dataKey: string) => {
  const targetValue = {
    TODO: '#ffc2f2',
    INPROGRESS: '#97effb',
    DONE: '#d0bfff',
    NOTE: '#affcbc',
  }[dataKey];

  return targetValue;
};

export { getColor, getBorderColor };
