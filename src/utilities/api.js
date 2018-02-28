import { key } from '../key';

export const fetchParse = async url => {
  try {
    const initialFetch = await fetch(url);
    const response = await initialFetch.json();
    return response;
  } catch (err) {
    return 'fetchParse error';
  }
};

export const additionalFetch = async details => {
  const marketURL = `https://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=${details}`;/* eslint-disable-line */
  const geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${details}&key=${key}`;/* eslint-disable-line */
  const url = details.length === 7 ? marketURL : geocodeURL;
  try {
    const initialFetch = await fetchParse(url);
    return initialFetch;
  } catch (err) {
    return 'AdditionalFetch error';
  }
};
