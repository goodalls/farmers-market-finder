import React from 'react';
import './Why.css';

const reasons = [
  'Farm fresh: Fruits and vegetables you find at the grocery store are often several days old before they even reach the produce aisle. Before produce hits supermarket shelves, it ships in refrigerated trucks, possibly from thousands of miles away. Farmer’s market produce, on the other hand, is nearly the antithesis of grocery store fruits and vegetables. In most cases, the owner of the stand picked it just that morning, so you know the food is as fresh as you can get it outside of growing it yourself.',

  'Organic and non-GMO: Many farmers participating in local farmer’s markets use organic methods to grow their produce. Most label it as such, so you can be certain you are purchasing chemical free products. They also are more likely to use non-modified seeds. Organic farming is better for the soil, the environment, and your body.',

  'Seasonal: There’s a move in the United States towards a more seasonal style of eating where one eats what is locally available in season. Some nutritionists and scientists suggest eating seasonally available foods is better for your body, because humans ate seasonal produce for thousands of years before refrigerated shipping changed all that. Still, eating produce in season only makes sense. Lighter fruits and vegetables are available seasonally in the spring and summer, while heartier winter vegetables like squash and parsnips provide sustenance for the cooler autumn and winter months.',

  'Ripe: Offerings at the farmer’s market are generally picked at the peak of their ripeness when the plants’ natural sugars are at their peak. Eating produce when it is ripe not only tastes better, but it also provides the best nutrition possible.',

  'More nutritious: One look at the vivid colors of produce found at the farmer’s market, and you’ll be able to tell just how nutritious the fruits and vegetables are. Compare that to produce at the grocery store, and you’ll see that the supermarket fruits and vegetables pale in comparison. Vivid colors in fruits and vegetables are a reflection of the nutrients they contain. Many local farmers cultivate extremely nutritious produce through their careful farming methods.',

  'Tastes better: Try this. Buy a tomato from the supermarket and a gorgeous heirloom tomato from the farmer’s market. Now taste them side-by-side and see what you think. Produce from the farmer’s market almost always tastes better. This is because it is picked at the peak of ripeness and is incredibly fresh when it gets to you. If you start adding farmer’s market produce to your cooking, you’ll be amazed at the difference in flavor and texture.',

  'Non-industrial: Just like everything else in this country, industrialized farming has become the norm. These giant factory farms grow massive amounts of produce, shipping it all over the world. Giant corporations run industrial farms, driving local family farms out of business.' +
    'For the sake of efficiency, industrial farming favors monocultures, where a single field only grows one type of fruits or vegetables. Monocultures sap the soil of essential nutrients, leaving it barren and unplantable. Likewise, they are more susceptible to disease and pests. In general, industrial farming (both conventional and organic) is hard on the land, depletes the soil of nutrients, uses industrial chemical fertilizers and/or pesticides, and utilizes environmentally unfriendly practices that are not sustainable over the long-term.',

  'Affordable: For the sheer nutrition you get from farmer’s market produce compared to supermarket produce, it’s a really good value. Grocery stores tend to charge an arm and a leg for organic fruits and vegetables. At the farmer’s market, however, they are typically not much more expensive than conventionally grown produce, and the benefits to your health are likely to save you money on healthcare expenses over the long-term.',

  'Variety: The farmer’s market offers a dizzying array of fruits and vegetables. Industrial farms tend to grow only a few varieties of popular vegetables. Small local farms, on the other hand, tend to favor variety, offering fruits and vegetables you just won’t be able to find in the produce section of your local supermarket.',

  'Supports local economies: Most farmer’s market produce is grown within 100 miles of the market. This means that the farms are a source of local jobs and likely to spend money they make on their produce in the local economy.',

  'Supports local family farms: There’s no doubt local family farms have decreased in numbers over the years, succumbing to the high cost of running a farm and increasingly stiff competition from giant conglomerate-run farms that produce massive amounts of extremely cheap produce. Purchasing fruits and vegetables from farmer’s markets, however, supports local family farms, giving them the valuable capital they need to keep operating and providing consumers an alternative to mass-produced foods.',

  'Conserves fuel: Many supermarkets receive their produce from hundreds or thousands of miles away. This involves the significant use of fossil fuels for shipping on refrigerated trucks and rail cars. Famer’s market produce doesn’t have far to get from the farm to your table, significantly reducing the use of fossil fuels. Farmer’s markets also often operate in the open air and thus do not require electricity or heating.',

  'Better for the environment: Along with conserving fossil fuels, small family farms produce less environmental waste in the form of carbon monoxide, pesticide use, and chemical fertilizers. They are also less likely to utilize giant processing and sorting machines that contribute to environmental decay.',

  'Provenance: When you shop at the farmer’s market, you know where your food has been. You can talk with the farm stand workers to learn about the farm’s growing and processing practices. In many cases, you can even visit the farms to see how they grow and handle the produce you are serving to your family.',

  'Social: The farmer’s market is a great place to gather. Visiting is a fun family activity, and you can meet members of your community. Some farmer’s markets even offer entertainment and classes, making it a terrific way to while away a fall afternoon.'
];

const random = Math.round(Math.random() * 14);
const Why = () => {
  return (
    <div className='why'>
      {reasons[random]}

      <a href="https://www.huffingtonpost.com/kimberly-snyder/farmers-market_b_1118572.html">
        Kimberly Snyder
      </a>
    </div>
  );
};

export default Why;
