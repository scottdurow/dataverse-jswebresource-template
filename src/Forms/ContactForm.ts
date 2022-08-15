import { setMetadataCache, Entity, ActivityParty, DataverseClient, XrmContextDataverseClient } from "dataverse-ify";
import {
  Account,
  accountMetadata,
  CalculateRollupFieldMetadata,
  CalculateRollupFieldRequest,
  Letter,
  LetterAttributes,
  LogicalOperator,
  metadataCache,
  MetadataConditionOperator,
  Opportunity,
  opportunitycloseMetadata,
  opportunityMetadata,
  RetrieveMetadataChangesRequest,
  RetrieveMetadataChangesResponse,
  WinOpportunityMetadata,
  WinOpportunityRequest,
} from "../dataverse-gen";

export class ContactForm {
  static async getMetadata(cdsServiceClient: DataverseClient): Promise<RetrieveMetadataChangesResponse> {
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
    return (await cdsServiceClient.execute(metadataQuery)) as RetrieveMetadataChangesResponse;
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

      await cdsServiceClient.execute(request);
    } catch (ex) {
      console.error(ex);
    } finally {
      if (account1.id) {
        // Tidy up
        await cdsServiceClient.delete(account1);
      }
    }
  }

  static async winOpportunity(cdsServiceClient: DataverseClient): Promise<Opportunity> {
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
      await cdsServiceClient.execute(winRequest);

      return (await cdsServiceClient.retrieve(opportunity1.logicalName, opportunity1.id, [
        "customerid",
      ])) as Opportunity;
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

  static async createActivity(cdsServiceClient: DataverseClient): Promise<Letter> {
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
        return (await cdsServiceClient.retrieve("letter", letter1.id, [
          LetterAttributes.Subject,
          LetterAttributes.to,
        ])) as Letter;
      } else throw "Letter not created";
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
