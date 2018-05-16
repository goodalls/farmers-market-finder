

export const fetchParse = async url => {
  try {
    const initialFetch = await fetch(url);
    const response = await initialFetch.json();
    return response;
  } catch (err) {
    return 'fetchParse error '+ err;
  }
};

export const additionalFetch = async details => {
  const marketURL = `https://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=${details}`;/* eslint-disable-line */
  const geocodeURL = `https://.com`;/* eslint-disable-line */
  const url = details.length === 7 ? marketURL : geocodeURL;
  try {
    const initialFetch = await fetchParse(url);
    return initialFetch;
  } catch (err) {
    return 'AdditionalFetch error '+ err;
  }
};
