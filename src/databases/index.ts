import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

import { schemas } from './schemas'
import UnitModel from './model/unitModel'

const adapter = new SQLiteAdapter({
    schema: schemas
});

export const database = new Database({
    adapter,
    modelClasses: [UnitModel]
})