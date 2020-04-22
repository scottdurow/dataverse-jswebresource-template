/* eslint-disable*/
import { WebApiExecuteRequest } from "cdsify";
import { StructuralProperty } from "cdsify";
import { OperationType } from "cdsify";

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