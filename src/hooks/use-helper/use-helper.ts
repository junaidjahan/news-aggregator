export const useHelper = () => {
  const serializeQuery = (filter: any) => {
      const queryArray = Object.entries(filter).map(([key, value]) => {
          return value ? `${key}=${value}` : null;
      });

      const queryString = queryArray?.reduce((acc, curr) => {
          if (curr) {
              return `${acc}${curr}&`;
          }
          return acc;
      }, '');

      const query = queryString?.slice(0, queryString.length - 1);

      return query;
  };

  const textEllipsis = (text:string, length:number) => {
    if (text.length > length) {
      return `${text.slice(0, length)}...`;
    }
  };

  const openUrl = (url:string) => {
      window.open(url, '_blank')
  }

  return {
      serializeQuery,
      textEllipsis,
      openUrl
  };
};
