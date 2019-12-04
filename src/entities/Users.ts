import { Endpoint } from '../core/Endpoint';
import { UserInterface, BasicUserInterface, CreatedUserInterface, UpdatedUserInterface } from '../interfaces/User';
import { PaginatedEntity } from '../interfaces/PaginatedEntity';

export class Users extends Endpoint {
  constructor() {
    super();

    this.path = 'users';
  }

  async list(page: number = 1) {
    return await this.request<PaginatedEntity<UserInterface>>('get', null, { page });
  }

  async get(id: number) {
    return await this.request<UserInterface>('get', id);
  }

  async create(data: BasicUserInterface) {
    return await this.request<CreatedUserInterface>('post', null, data);
  }

  async update(id: number, data: BasicUserInterface) {
    return await this.request<UpdatedUserInterface>('put', id, data);
  }

  async delete(id: number) {
    return await this.request('delete', id);
  }
}
