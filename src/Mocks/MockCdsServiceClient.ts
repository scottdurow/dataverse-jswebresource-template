/* eslint-disable @typescript-eslint/no-unused-vars */
import { DataverseClient, IEntity, Guid } from "dataverse-ify";

export class MockDataverseClient implements DataverseClient {
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
  retrieveMultiple<T extends import("dataverse-ify").IEntity>(
    _fetchxml: string,
  ): Promise<import("dataverse-ify").EntityCollection<T>> {
    throw new Error("Method not implemented.");
  }
  associate(
    _entityName: string,
    _entityId: string,
    _relationship: string,
    _relatedEntities: Promise<import("dataverse-ify").EntityReference[]>,
  ): Promise<void> {
    throw new Error("Method not implemented.");
  }
  disassociate(
    _entityName: string,
    _entityId: string,
    _relationship: string,
    _relatedEntities: import("dataverse-ify").EntityReference[],
  ): Promise<void> {
    throw new Error("Method not implemented.");
  }
  execute(_request: import("dataverse-ify").WebApiExecuteRequest): Promise<unknown> {
    throw new Error("Method not implemented.");
  }
}
