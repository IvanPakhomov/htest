import { Base } from './Base';
import { EndpointInterface, RequestMethod, ResponseInterface } from '../interfaces/EndpointInterface';
import axois from 'axios';

export class Endpoint extends Base implements EndpointInterface {
  protected path;

  protected async request<T = void>(method: RequestMethod, resourceId: number = null, data: object = {}): Promise<ResponseInterface<T>> {
    let urlParts = [
      this.url,
      this.path
    ];
    
    if (resourceId) {
      urlParts.push(resourceId);
    }

    const url = urlParts.join('/');

    try {
      const response = await axois({
        method,
        url,
        data,
        validateStatus: status => status < 500
      });

      let payload = response.data;

      if (Object.keys(payload).length == 1) {
        payload = payload.data;
      }

      return {
        status: response.status,
        data: payload
      };
    } catch (err) {
      console.error(err);
    }

    return null;
  }
}