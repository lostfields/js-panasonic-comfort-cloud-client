import { ServiceError } from './ServiceError'

export class AdapterCommunicationError extends ServiceError {
  constructor(message: string, code: number, httpCode: number) {
    super(message, code, httpCode)
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
