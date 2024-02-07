const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  };
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-US", options);

  // Split the formatted date by space and rearrange day and month
  const [month, day, year] = formattedDate.split(" ");
  return `${day} ${month} ${year}`;
};
export default formatDate;
