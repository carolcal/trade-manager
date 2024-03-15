import { appSchema } from '@nozbe/watermelondb'
import { unitSchema } from './unitSchema'

export const schemas = appSchema({
    version: 1, //NÃO MUDAR!!!
    tables: [unitSchema]
})