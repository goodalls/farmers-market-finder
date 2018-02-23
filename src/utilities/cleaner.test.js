import {cleanMarkets} from './cleaner';
import {mockMarkets} from '../__mocks__/mockData';

describe('CLEANER', () => {
  it('should return array length 10', () => {
    expect(mockMarkets.length).toBeGreaterThan(10);
    expect(cleanMarkets(mockMarkets)).toHaveLength(10);
  });

  it('should return an array of objects', () => {
    const mockObject = {
      "distance": "4.1 ", 
      "id": "1005409", 
      "marketname": "Rancho Santa Margarita Farmers Market"
    };
    expect(cleanMarkets(mockMarkets)[0]).toMatchObject(mockObject);
  });
});
