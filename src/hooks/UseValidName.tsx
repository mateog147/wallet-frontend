const useValidName = () => {
  const isValidName = (txt: string): boolean => {
    let flag = true;
    flag = !txt.includes('@');
    return flag;
  };
  return {isValidName};
};

export default useValidName;
