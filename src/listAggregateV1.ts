import * as sdk from '@zerospin/sdk';

import { addListItemV1 } from './addListItemV1';
import { listItemV1 } from './listItemV1';

export const listAggregateV1 = sdk.makeAggregateRelease(
  sdk.defineAggregate({ name: 'list' }),
  {
    version: 1,
    models: { listItem: listItemV1 },
    system: { addListItem: addListItemV1 },
    actors: {},
  },
);
