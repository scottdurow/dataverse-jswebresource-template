/* eslint-disable*/
import { WebApiExecuteRequest } from "dataverse-ify";
import { StructuralProperty } from "dataverse-ify";
import { OperationType } from "dataverse-ify";

// Action CalculateTotalTimeIncident
export const CalculateTotalTimeIncidentMetadata = {
  boundParameter: "entity",
  parameterTypes: {
    "entity": {
      typeName: "mscrm.incident",
      structuralProperty: StructuralProperty.EntityType
      },		
  
  },
  operationType: OperationType.Function,
  operationName: "CalculateTotalTimeIncident"
};

export interface CalculateTotalTimeIncidentRequest extends WebApiExecuteRequest {
  entity?: import("dataverse-ify").EntityReference | import("../entities/Incident").Incident;
}