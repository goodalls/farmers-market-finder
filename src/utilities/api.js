export const fetchParse = async url => {
  try {
    const initialFetch = await fetch(url);
    const response = await initialFetch.json();
    return response;
  } catch (error) {
    // throw new error('fetchParse error');
    return 'fetchParse error';
  }
};

export const marketDetails = async id => {
  try {
    const initialFetch = await fetchParse(`https://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=${id}`);
    return initialFetch;
  } catch (error) {
    return 'marketDetails error';
  }
};
