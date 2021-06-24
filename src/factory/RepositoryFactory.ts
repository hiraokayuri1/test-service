import { RequestDocumentRepositoryImpl } from "../infrastructure/repositories/RequestDocumentRepositoryImpl";

export class RepositoryFactory {
  private theRequestDocumentRepositoryImpl: RequestDocumentRepositoryImpl;

  constructor() {
    this.theRequestDocumentRepositoryImpl = new RequestDocumentRepositoryImpl();
  }

  requestDocumentRepository(): RequestDocumentRepositoryImpl {
    return this.theRequestDocumentRepositoryImpl;
  }
}