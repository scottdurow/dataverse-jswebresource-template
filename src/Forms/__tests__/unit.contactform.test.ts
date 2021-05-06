import { ContactForm } from "../..";
import { MockCdsServiceClient } from "../../Mocks/MockCdsServiceClient";
import { Opportunity } from "../../dataverse-gen/entities/Opportunity";
import { EntityReference } from "dataverse-ify";

test("ContactForm onload", async () => {
  const cdsServiceClient = new MockCdsServiceClient();

  // Create account
  cdsServiceClient.create = jest.fn().mockImplementationOnce(async () => {
    return "111";
  });

  // Create opportunity
  cdsServiceClient.create = jest.fn().mockImplementationOnce(async () => {
    return "222";
  });

  // Win Opportunity
  cdsServiceClient.execute = jest.fn().mockImplementationOnce(() => {
    return {};
  });

  // Retrieve Opportunity
  cdsServiceClient.retrieve = jest.fn().mockImplementationOnce(async () => {
    return {
      opportunityid: "222",
      logicalName: "opportunity",
      customerid: new EntityReference("account", "111"),
    } as Opportunity;
  });

  // Delete
  cdsServiceClient.delete = jest.fn().mockImplementation(async () => {
    return {};
  });

  await ContactForm.winOpportunity(cdsServiceClient);
});
