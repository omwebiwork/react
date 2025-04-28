export const timeFormatter = <T>(epoch?: T):string => {
    if (!epoch) return "";
    const date = new Date(epoch as string);
    return date.toLocaleString("en-US", {
    //   year: "numeric",
    //   month: "short",
    //   day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: '2-digit',
      hour12: true,
    });
  };