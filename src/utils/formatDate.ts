

export const formatDate = (dateString: string) => {
    const date = new Date(dateString);
  
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
  
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
  
    return formattedDate.replace(/,/g, '');
  };
  