import { algoliasearch } from "algoliasearch";
import { cards } from "../data/cards";
import { useEffect } from "react";

// const response = await client.saveObject({ indexName: 'cards', body: { objectID: 'id', test: 'val' } });

export default function Algolia() {
  const appId = process.env.REACT_APP_ALGOLIA_SEARCH_APP_ID ?? "";
  const apiKey = process.env.REACT_APP_ALGOLIA_SEARCH_API_KEY ?? "";
  const client = algoliasearch(appId, apiKey);

  const processRecords = async (method: "partialUpdateObjects" | "saveObjects") => {
    const objCards = cards.map((card) => {
      return {
        objectID: card.id,
        id: card.id,
        name: card.name,
        collection: card.collection.name,
        number: card.number,
        cardType: card.cardType,
        image: card.images[0],
      };
    });
    // return await client.saveObjects({ indexName: "cards", objects: objCards });
    console.log(objCards);

    return await client[method]({ indexName: "cards", objects: objCards });
  };

  const handleButtonClick1 = () => {
    processRecords("partialUpdateObjects");
  };
  const handleButtonClick2 = () => {
    processRecords("saveObjects");
  };

  return (
    <>
      <button className="text-white p-4" onClick={handleButtonClick1}>
        partialUpdateObjects
      </button>
      <button className="text-white p-4" onClick={handleButtonClick2}>
        saveObjects
      </button>
    </>
  );
}
