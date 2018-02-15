import * as api from './api';

describe('fetchParse', () => {
  let mockUrl;
  beforeAll(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            {
              results: [{}, {}]
            }
          ])
      })
    );
    mockUrl = 'http://mock.com';
  });

  it('should call fetch with the expected params', () => {
    api.fetchParse(mockUrl);
    expect(window.fetch).toHaveBeenCalledWith(mockUrl);
  });

  it('should return a parsed data object for a given URL', () => {
    const expected = [{ results: [{}, {}] }];
    expect(api.fetchParse(mockUrl)).resolves.toEqual(expected);
  });

  it('should error if the request is rejected', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        status: 404,
        json: () => Promise.reject('fetchParse Err')
      })
    );
    const error = await api.fetchParse(mockUrl);
    expect(error).toEqual('fetchParse error');
  });
});
