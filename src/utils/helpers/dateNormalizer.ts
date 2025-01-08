const dateNormalizer = (date: string): string => {
  const parsedDate = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return parsedDate.toLocaleDateString('en-US', options);
};

export default dateNormalizer;
