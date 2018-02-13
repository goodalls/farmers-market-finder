export const fetchParse = async url => {
  try {
    const initialFetch = await fetch(url);
    const response = await initialFetch.json();
    return response;
  } catch (error) {
    throw new error('fetchParse error');
  }
};
