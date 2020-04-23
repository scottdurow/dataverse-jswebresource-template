/* eslint-disable @typescript-eslint/no-unused-vars */
import { CdsServiceClient, IEntity, Guid } from "cdsify";

export class MockCdsServiceClient implements CdsServiceClient {
  create(_entity: import("cdsify").IEntity): Promise<string> {
    throw new Error("Method not implemented.");
  }
  update(_entity: import("cdsify").IEntity): Promise<void> {
    throw new Error("Method not implemented.");
  }
  delete(_entityName: string | IEntity, _id?: Guid): Promise<void> {
    throw new Error("Method not implemented.");
  }
  retrieve<T extends import("cdsify").IEntity>(
    _entityName: string,
    _id: string,
    _columnSet: boolean | string[],
  ): Promise<T> {
    throw new Error("Method not implemented.");
  }
  retrieveMultiple<T extends import("cdsify").IEntity>(
    _fetchxml: string,
  ): Promise<import("cdsify").EntityCollection<T>> {
    throw new Error("Method not implemented.");
  }
  associate(
    _entityName: string,
    _entityId: string,
    _relationship: string,
    _relatedEntities: Promise<import("cdsify").EntityReference[]>,
  ): Promise<void> {
    throw new Error("Method not implemented.");
  }
  disassociate(
    _entityName: string,
    _entityId: string,
    _relationship: string,
    _relatedEntities: import("cdsify").EntityReference[],
  ): Promise<void> {
    throw new Error("Method not implemented.");
  }
  execute(_request: import("cdsify").WebApiExecuteRequest): Promise<unknown> {
    throw new Error("Method not implemented.");
  }
}
