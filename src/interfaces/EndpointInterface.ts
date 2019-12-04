export interface EndpointInterface {
};

export interface ResponseInterface<T> {
  status: number;
  data: T;
};

export type RequestMethod = 'get' | 'post' | 'put' | 'delete';