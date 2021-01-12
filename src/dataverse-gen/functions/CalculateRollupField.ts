/* eslint-disable*/
import { WebApiExecuteRequest } from "dataverse-ify";
import { StructuralProperty } from "dataverse-ify";
import { OperationType } from "dataverse-ify";

// Action CalculateRollupField
export const CalculateRollupFieldMetadata = {
  parameterTypes: {
    "Target": {
      typeName: "mscrm.crmbaseentity",
      structuralProperty: StructuralProperty.EntityType
      },		
      "FieldName": {
      typeName: "Edm.String",
      structuralProperty: StructuralProperty.PrimitiveType
      },		
  
  },
  operationType: OperationType.Function,
  operationName: "CalculateRollupField"
};

export interface CalculateRollupFieldRequest extends WebApiExecuteRequest {
  Target?: any;
  FieldName?: string;
}