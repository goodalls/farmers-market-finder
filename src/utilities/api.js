import { key } from '../key';

export const fetchParse = async url => {
  try {
    const initialFetch = await fetch(url);
    const response = await initialFetch.json();
    return response;
  } catch (err) {
    throw new Error(err);
  }
};

export const marketDetails = async id => {
  try {
    const initialFetch = await fetchParse(
      // eslint-disable-next-line
      `https://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=${id}`
    );
    return initialFetch;
  } catch (err) {
    throw new Error(err);
  }
};

export const geoCoding = async address => {
  try {
    // eslint-disable-next-line
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`;
    const fetching = await fetch(url);
    const response = await fetching.json();
    return response;
  } catch (err) {
    throw new Error(err);
  }
};

export const additionalFetch = async details => {
  const marketURL = `https://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=${details}`;
  const geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${details}&key=${key}`;
  const url = details.length > 7 ? marketURL : geocodeURL;
  try {
    const initialFetch = await fetchParse(url);
    return initialFetch;
  } catch (err) {
    throw new Error(err);
  }
};
