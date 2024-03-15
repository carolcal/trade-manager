import { Model } from '@nozbe/watermelondb'
import { field } from '@nozbe/watermelondb/decorators'

export default class UnitModel extends Model {
  static table = 'units'

  @field('name') name!: string;

  @field('description') description: string;

  @field('address') address: string;

  @field('phone') phone: number;

  @field('user_id') user_id!: number;
}