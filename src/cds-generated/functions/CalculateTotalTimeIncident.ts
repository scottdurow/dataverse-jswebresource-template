/* eslint-disable*/
import { WebApiExecuteRequest } from "cdsify";
import { StructuralProperty } from "cdsify";
import { OperationType } from "cdsify";

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
  entity?: import("cdsify").EntityReference | import("../entities/Incident").Incident;
}