import { setMetadataCache, XrmContextCdsServiceClient, Entity, ActivityParty } from "cdsify";
import { Account, accountMetadata } from "../cds-generated/entities/Account";
import { metadataCache } from "../cds-generated/metadata";
import { opportunityMetadata, Opportunity } from "../cds-generated/entities/Opportunity";
import { opportunitycloseMetadata } from "../cds-generated/entities/OpportunityClose";
import { WinOpportunityRequest } from "../cds-generated/actions/WinOpportunity";
import { RetrieveMetadataChangesRequest } from "../cds-generated/functions/RetrieveMetadataChanges";
import { LogicalOperator } from "../cds-generated/enums/LogicalOperator";
import { MetadataConditionOperator } from "../cds-generated/enums/MetadataConditionOperator";
import { RetrieveMetadataChangesResponse } from "../cds-generated/complextypes/RetrieveMetadataChangesResponse";
import {
  CalculateRollupFieldMetadata,
  CalculateRollupFieldRequest,
} from "../cds-generated/functions/CalculateRollupField";
import { Letter } from "../cds-generated/entities/Letter";

async function getMetadata(cdsServiceClient: XrmContextCdsServiceClient): Promise<void> {
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

async function calculateRollup(cdsServiceClient: XrmContextCdsServiceClient): Promise<void> {
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

async function winOpportunity(cdsServiceClient: XrmContextCdsServiceClient): Promise<void> {
  debugger;
  const account1 = {
    logicalName: accountMetadata.logicalName,
    name: "Account 1",
  } as Account;
  const opportunity1 = {
    logicalName: opportunityMetadata.logicalName,
    name: "Opportunity 1",
  } as Opportunity;
  try {
    // Create account
    account1.id = await cdsServiceClient.create(account1);
    // Assign parent customer
    opportunity1.customerid = Entity.toEntityReference(account1);
    // Create opportunity
    opportunity1.id = await cdsServiceClient.create(opportunity1);
    // WinOpportunity
    const winRequest = {
      logicalName: "WinOpportunity",
      Status: 3,
      OpportunityClose: {
        logicalName: opportunitycloseMetadata.logicalName,
        description: "Sample Opportunity Close",
        subject: "Sample",
        opportunityid: Entity.toEntityReference(opportunity1),
      },
    } as WinOpportunityRequest;
    const winResponse = await cdsServiceClient.execute(winRequest);
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

async function createActivity(cdsServiceClient: XrmContextCdsServiceClient): Promise<void> {
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
      const letterRetrieved = (await cdsServiceClient.retrieve("letter", letter1.id, ["subject", "to"])) as Letter;
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

export async function onLoad(): Promise<void> {
  console.log("ContactForm onload");
  setMetadataCache(metadataCache);

  const cdsServiceClient = new XrmContextCdsServiceClient(Xrm.WebApi);
  await calculateRollup(cdsServiceClient);
  await winOpportunity(cdsServiceClient);
  await getMetadata(cdsServiceClient);
  await createActivity(cdsServiceClient);
}
