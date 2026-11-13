import * as sdk from '@zerospin/sdk';

import { listItemModel } from './listItemModel';

export const listItemV1 = sdk.makeModelVersion(listItemModel, {
  version: 1,
  attributes: { text: sdk.primitives.text() },
  indexes: [],
});
