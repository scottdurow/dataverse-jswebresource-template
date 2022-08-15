/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { DataverseClient, IEntity, Guid, EntityCollection, EntityReference, WebApiExecuteRequest } from "dataverse-ify";
import {
  FetchRetrieveMultipleOptions,
  ODataRetrieveMultipleOptions,
} from "dataverse-ify/lib/dataverse-ify/DataverseClient/DataverseClient";

export class MockDataverseClient implements DataverseClient {
  retrieveMultiple<T extends IEntity>(
    _query: string,
    _options?: FetchRetrieveMultipleOptions | ODataRetrieveMultipleOptions | undefined,
  ): Promise<EntityCollection<T>> {
    throw new Error("Method not implemented.");
  }
  associate(
    _entityName: string,
    _entityId: string,
    _relationship: string,
    _relatedEntities: EntityReference[],
  ): Promise<void> {
    throw new Error("Method not implemented.");
  }
  disassociate(
    _entityName: string,
    _entityId: string,
    _relationship: string,
    _relatedEntities: EntityReference[],
  ): Promise<void> {
    throw new Error("Method not implemented.");
  }
  execute<T>(_request: WebApiExecuteRequest): Promise<T | undefined> {
    throw new Error("Method not implemented.");
  }
  executeMultiple<T>(_requests: WebApiExecuteRequest[]): Promise<T[] | undefined> {
    throw new Error("Method not implemented.");
  }
  create(_entity: import("dataverse-ify").IEntity): Promise<string> {
    throw new Error("Method not implemented.");
  }
  update(_entity: import("dataverse-ify").IEntity): Promise<void> {
    throw new Error("Method not implemented.");
  }
  delete(_entityName: string | IEntity, _id?: Guid): Promise<void> {
    throw new Error("Method not implemented.");
  }
  retrieve<T extends import("dataverse-ify").IEntity>(
    _entityName: string,
    _id: string,
    _columnSet: boolean | string[],
  ): Promise<T> {
    throw new Error("Method not implemented.");
  }
}
