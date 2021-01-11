export interface ServiceIdentifier<T> {
  type: T;
}

export interface IInstantiationService {
  createInstance<T>(): void;

  invokeFunction(): void;
}

export class InstantiationService implements IInstantiationService {
  createInstance() {}

  invokeFunction() {}
}
