// model/schema.js
import { tableSchema } from '@nozbe/watermelondb'

export const unitSchema = tableSchema({
      name: 'units',
      columns: [
        { name: 'name', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'address', type: 'string' },
        { name: 'phone', type: 'number' },
        { name: 'user_id', type: 'number' },
      ]
    })
    