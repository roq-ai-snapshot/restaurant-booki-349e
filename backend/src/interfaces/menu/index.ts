import { OrderInterface } from 'interfaces/order';
import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface MenuInterface {
  id?: string;
  restaurant_id: string;
  name: string;
  description?: string;
  price: number;
  category: string;
  created_at?: any;
  updated_at?: any;
  order?: OrderInterface[];
  restaurant?: RestaurantInterface;
  _count?: {
    order?: number;
  };
}

export interface MenuGetQueryInterface extends GetQueryInterface {
  id?: string;
  restaurant_id?: string;
  name?: string;
  description?: string;
  category?: string;
}
