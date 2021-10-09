import { Client } from '@elastic/elasticsearch';
import type { Client as NewType, estypes } from '@elastic/elasticsearch/api/new';
import { IIndex, SearchResponse, Source } from './types';
// @ts-expect-error @elastic/elasticsearch
const client: NewType = new Client({ node: 'http://localhost:9400' });

const indecies: estypes.IndexRequest<IIndex>[] = [
  {
    index: 'game-of-thrones',
    body: {
      character: 'Ned Stark',
      quote: 'Winter is coming.',
    },
  },
  {
    index: 'game-of-thrones',
    body: {
      character: 'Ned Stark',
      quote: 'Winter is coming.',
    },
  },
  {
    index: 'game-of-thrones',
    body: {
      character: 'Daenerys Targaryen',
      quote: 'I am the blood of the dragon.',
    },
  },
  {
    index: 'game-of-thrones',
    body: {
      character: 'Tyrion Lannister',
      quote: 'A mind needs books like a sword needs a whetstone.',
    },
  },
];

const run = async () => {
  // Let's start by indexing some data
  indecies.forEach(async (index) => {
    await client.index(index);
  });
  // here we are forcing an index refresh, otherwise we will not
  // get any result in the consequent search
  await client.indices.refresh({ index: 'game-of-thrones' });
  // Complete definition of the Search response
  // Let's search!
  const { body } = await client.search<SearchResponse<Source>>({
    index: 'game-of-thrones',
    body: {
      query: {
        match: {
          quote: 'winter',
        },
      },
    },
  });

  console.log(body.hits.hits);
};

export default run;
