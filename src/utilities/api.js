import { key } from '../key';

export const fetchParse = async url => {
  try {
    const initialFetch = await fetch(url);
    const response = await initialFetch.json();
    return response;
  } catch (error) {
    return 'fetchParse error';
  }
};

export const marketDetails = async id => {
  try {
    const initialFetch = await fetchParse(
      `https://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=${id}`
    );
    return initialFetch;
  } catch (error) {
    return 'marketDetails error';
  }
};

export const geoCoding = async address => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`;
  const fetching = await fetch(url);
  const response = await fetching.json();
  return response;
};
