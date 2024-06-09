import { format, parseISO } from 'date-fns';

export const formatDate = data => {
  const date = parseISO(data);
  const formattedDate = format(date, 'MMMM d, yyyy');
  return formattedDate;
};
