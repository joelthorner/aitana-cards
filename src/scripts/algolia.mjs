import { algoliasearch } from "algoliasearch";
import dotenv from 'dotenv';
import { cards } from '../../temp_dist/cards.js';
dotenv.config();

const appId = process.env.REACT_APP_ALGOLIA_SEARCH_APP_ID;
const apiKey = process.env.REACT_APP_ALGOLIA_SEARCH_API_KEY;
const client = algoliasearch(appId, apiKey);

// const response = await client.saveObject({ indexName: 'cards', body: { objectID: 'id', test: 'val' } });

const processRecords = async () => {
  const objCards = cards.map((card) => {
    return {
      id: card.id,
      name: card.name,
      collection: card.collection.name,
      number: card.number,
      cardType: card.cardType,
      image: card.images[0],
    };
  });
  return await client.saveObjects({ indexName: "cards", objects: objCards });
};

// processRecords()
//   .then(() => console.log("Successfully indexed objects!"))
//   .catch((err) => console.error(err));



// import { searchClient } from "@algolia/client-search";
// import { cards } from "../src/data/cards";

// const appId = process.env.REACT_APP_ALGOLIA_SEARCH_APP_ID ?? "";
// const apiKey = process.env.REACT_APP_ALGOLIA_SEARCH_API_KEY ?? "";
// const client = searchClient(appId, apiKey);

// console.log(client);

// const processRecords = async () => {
//   const movies = cards.map((card) => {
//     return { id: card.id, name: card.name, collection: card.collection.name, number: card.number, cardType: card.cardType, image: card.images[0] };
//   });
//   return await client.saveObjects({ indexName: "cards", objects: movies });
// };

// processRecords()
//   .then(() => console.log("Successfully indexed objects!"))
//   .catch((err) => console.error(err));

// console.log(
//   JSON.stringify(
//     cards.map((card) => {
//       return { id: card.id, name: card.name, collection: card.collection.name, number: card.number, cardType: card.cardType, image: card.images[0] };
//     })
//   )
// );
