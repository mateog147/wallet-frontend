const useFormatDate = () => {
  const formatDate = (dateStr: string) => {
    const date: Date = new Date(dateStr.toString());
    date.setHours(date.getHours() - 5);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const res = `${hour}:${minute} ${day}/${month}/${year}`;
    return res;
  };
  return {formatDate};
};

export default useFormatDate;
