/* eslint-disable camelcase */
import { Entity, setMetadataCache, XrmContextDataverseClient } from "dataverse-ify";
import { SetupGlobalContextIfUndefined } from "dataverse-ify/lib/webapi/node";
import {
  Account,
  accountMetadata,
  Opportunity,
  OpportunityAttributes,
  opportunitycloseMetadata,
  opportunityMetadata,
  opportunity_opportunity_statecode,
  WinOpportunityMetadata,
  WinOpportunityRequest,
} from "../../dataverse-gen";

/*
Demonstrates how to integration test form logic with a connection to dataverse
provided by the dataverse-ify implementation of Xrm.WebApi
*/
describe("winOpportunity", () => {
  beforeAll(async () => {
    await SetupGlobalContextIfUndefined();
  }, 30000);
  test("WinOpportunity", async () => {
    setMetadataCache({
      entities: {
        account: accountMetadata,
        opportunity: opportunityMetadata,
        opportunityclose: opportunitycloseMetadata,
      },
      actions: { WinOpportunity: WinOpportunityMetadata },
    });

    const account1 = {
      logicalName: accountMetadata.logicalName,
      name: "Account 1",
    } as Account;

    const opportunity1 = {
      logicalName: opportunityMetadata.logicalName,
      name: "Opportunity 1",
    } as Opportunity;

    const serviceClient = new XrmContextDataverseClient(Xrm.WebApi);
    try {
      // Create account
      account1.id = await serviceClient.create(account1);

      // Assign parent customer
      opportunity1.customerid = Entity.toEntityReference(account1);

      // Create opportunity
      opportunity1.id = await serviceClient.create(opportunity1);

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

      await serviceClient.execute(winRequest);

      // Get the opportunity to check it is won
      // Retrieve Updated
      const opportunityWon = await serviceClient.retrieve<Opportunity>(
        opportunityMetadata.logicalName,
        opportunity1.id,
        [OpportunityAttributes.StateCode],
      );
      expect(opportunityWon.statecode).toBe(opportunity_opportunity_statecode.Won);
    } catch (ex) {
      fail(ex);
    } finally {
      if (opportunity1.id) {
        // Tidy up
        await serviceClient.delete(opportunity1);
      }
      if (account1.id) {
        // Tidy up
        await serviceClient.delete(account1);
      }
    }
  }, 30000);
});
