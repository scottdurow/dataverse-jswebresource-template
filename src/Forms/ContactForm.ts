import { setMetadataCache, Entity, ActivityParty, DataverseClient, XrmContextDataverseClient } from "dataverse-ify";
import { Account, accountMetadata } from "../dataverse-gen/entities/Account";
import { metadataCache } from "../dataverse-gen/metadata";
import { opportunityMetadata, Opportunity } from "../dataverse-gen/entities/Opportunity";
import { opportunitycloseMetadata } from "../dataverse-gen/entities/OpportunityClose";
import { WinOpportunityRequest, WinOpportunityMetadata } from "../dataverse-gen/actions/WinOpportunity";
import { RetrieveMetadataChangesRequest } from "../dataverse-gen/functions/RetrieveMetadataChanges";
import { LogicalOperator } from "../dataverse-gen/enums/LogicalOperator";
import { MetadataConditionOperator } from "../dataverse-gen/enums/MetadataConditionOperator";
import { RetrieveMetadataChangesResponse } from "../dataverse-gen/complextypes/RetrieveMetadataChangesResponse";
import {
  CalculateRollupFieldMetadata,
  CalculateRollupFieldRequest,
} from "../dataverse-gen/functions/CalculateRollupField";
import { Letter, LetterAttributes } from "../dataverse-gen/entities/Letter";

export class ContactForm {
  static async getMetadata(cdsServiceClient: DataverseClient): Promise<void> {
    const metadataQuery = {
      logicalName: "RetrieveMetadataChanges",
      Query: {
        Criteria: {
          Conditions: [
            {
              PropertyName: "LogicalName",
              ConditionOperator: MetadataConditionOperator.Equals,
              Value: {
                Value: "account",
                Type: "System.String",
              },
            },
          ],
          FilterOperator: LogicalOperator.And,
        },
        Properties: {
          PropertyNames: ["Attributes", "SchemaName", "EntitySetName"],
        },
        AttributeQuery: {
          Properties: {
            PropertyNames: [
              "SchemaName",
              "LogicalName",
              "OptionSet",
              "RequiredLevel",
              "AttributeType",
              "AttributeTypeName",
              "SourceType",
              "IsLogical",
              "AttributeOf",
              "Targets",
              "Description",
              "DateTimeBehavior",
              "Format",
              "DisplayName",
            ],
          },
        },
      },
    } as RetrieveMetadataChangesRequest;
    const entityResponse = (await cdsServiceClient.execute(metadataQuery)) as RetrieveMetadataChangesResponse;
    console.log(entityResponse.EntityMetadata && entityResponse.EntityMetadata[0].LogicalName);
  }

  static async calculateRollup(cdsServiceClient: DataverseClient): Promise<void> {
    debugger;
    const account1 = {
      logicalName: accountMetadata.logicalName,
      name: "Account 1",
    } as Account;

    try {
      // Create Account
      account1.id = await cdsServiceClient.create(account1);

      // Calculate Rollup field openddeals
      const request = {
        logicalName: CalculateRollupFieldMetadata.operationName,
        FieldName: "opendeals",
        Target: Entity.toEntityReference(account1),
      } as CalculateRollupFieldRequest;

      const response = await cdsServiceClient.execute(request);
      console.log(response);
    } catch (ex) {
      console.error(ex);
    } finally {
      if (account1.id) {
        // Tidy up
        await cdsServiceClient.delete(account1);
      }
    }
  }

  static async winOpportunity(cdsServiceClient: DataverseClient): Promise<void> {
    // Create opportunity
    const opportunity1 = {
      logicalName: opportunityMetadata.logicalName,
      name: "Opportunity 1",
    } as Opportunity;
    // Create account
    const account1 = {
      logicalName: accountMetadata.logicalName,
      name: "Account 1",
    } as Account;
    try {
      account1.id = await cdsServiceClient.create(account1);

      opportunity1.customerid = Entity.toEntityReference(account1);
      opportunity1.id = await cdsServiceClient.create(opportunity1);

      // WinOpportunity
      const winRequest = {
        logicalName: WinOpportunityMetadata.operationName,
        Status: 3,
        OpportunityClose: {
          logicalName: opportunitycloseMetadata.logicalName,
          description: "Sample Opportunity Close",
          subject: "Sample",
          opportunityid: Entity.toEntityReference(opportunity1),
        },
      } as WinOpportunityRequest;
      const winResponse = await cdsServiceClient.execute(winRequest);

      const opportunityRetreived = (await cdsServiceClient.retrieve(opportunity1.logicalName, opportunity1.id, [
        "customerid",
      ])) as Opportunity;

      console.log(opportunityRetreived.customerid?.id);

      console.log(winResponse);
    } catch (ex) {
      console.error(ex);
    } finally {
      if (opportunity1.id) {
        // Tidy up
        await cdsServiceClient.delete(opportunity1);
      }
      if (account1.id) {
        // Tidy up
        await cdsServiceClient.delete(account1);
      }
    }
  }

  static async createActivity(cdsServiceClient: DataverseClient): Promise<void> {
    const account1 = {
      logicalName: "account",
      name: "Account 1",
    } as Account;
    const letter1 = {
      logicalName: "letter",
      subject: `Sample Letter ${new Date().toUTCString()}`,
    } as Letter;

    try {
      // Create
      account1.id = await cdsServiceClient.create(account1);
      const account1Ref = Entity.toEntityReference(account1);
      letter1.regardingobjectid = account1Ref;
      letter1.to = [{ logicalName: "activityparty", partyid: account1Ref } as ActivityParty];
      if (account1.id) {
        letter1.id = await cdsServiceClient.create(letter1);
      }

      // Add bcc
      letter1.bcc = [{ logicalName: "activityparty", partyid: account1Ref } as ActivityParty];
      await cdsServiceClient.update(letter1);

      // Retrieve again to check bcc
      if (letter1.id) {
        const letterRetrieved = (await cdsServiceClient.retrieve("letter", letter1.id, [
          LetterAttributes.Subject,
          LetterAttributes.to,
        ])) as Letter;
        console.log(letterRetrieved.bcc && letterRetrieved.bcc[0].partyid);
        console.log(letterRetrieved.to && letterRetrieved.to[0].partyid);
      }
    } catch (ex) {
      fail(ex);
    } finally {
      if (letter1.id) {
        // Tidy up
        await cdsServiceClient.delete(letter1);
      }
      if (account1.id) {
        // Tidy up
        await cdsServiceClient.delete(account1);
      }
    }
  }

  static async onLoad(): Promise<void> {
    console.log("ContactForm onload");
    setMetadataCache(metadataCache);

    const cdsServiceClient = new XrmContextDataverseClient(Xrm.WebApi);
    await ContactForm.calculateRollup(cdsServiceClient);
    await ContactForm.winOpportunity(cdsServiceClient);
    await ContactForm.getMetadata(cdsServiceClient);
    await ContactForm.createActivity(cdsServiceClient);
  }
}

export function foo123(): void {
  // test tree shaking
  //bar;
}
