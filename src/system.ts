import * as sdk from '@zerospin/sdk';

import { listAggregateV1 } from './listAggregateV1';

export const system = sdk.makeSystem({
  name: 'list-system',
  aggregates: {
    list: { releases: { 1: listAggregateV1 }, canonical: 1 },
  },
});
