export const cleanMarkets = array => {
  return array
    .map(market => {
      const distance = market.marketname.substr(0, 4);
      const marketname = market.marketname.substr(4);

      return { distance, marketname, id: market.id, favorite: false };
    })
    .slice(0, 10);
};
