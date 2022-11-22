import { setMetadataCache } from "dataverse-ify";
import { SetupGlobalContextIfUndefined } from "dataverse-ify/lib/webapi/node";
import { metadataCache } from "../../dataverse-gen";

test("retrieveMultipleRecords", async () => {
  await SetupGlobalContextIfUndefined();
  const fetch = `<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="false">
  <entity name="account">
    <attribute name="name" />
  </entity>
</fetch>`;
  const response = await Xrm.WebApi.retrieveMultipleRecords("account", "?fetchXml=" + encodeURIComponent(fetch));
  console.log(response);
});

/*
Demonstrates how to integration test form logic with a connection to dataverse
provided by the dataverse-ify implementation of Xrm.WebApi
*/
describe("webapi service", () => {
  it("creates accounts and retrieveMultiple by id", async () => {
    await SetupGlobalContextIfUndefined();
    setMetadataCache(metadataCache);

    const webApiService = Xrm.WebApi;

    const account1Id = (
      await webApiService.createRecord("account", {
        name: "Account 1",
      })
    ).id;

    const account2Id = (
      await webApiService.createRecord("account", {
        name: "Account 2",
      })
    ).id;

    const accountIds = `'${account1Id}','${account2Id}'`;
    const accounts = await webApiService.retrieveMultipleRecords(
      "account",
      `?$select=name&$orderby=createdon asc&$filter=(Microsoft.Dynamics.CRM.In(PropertyName=%27accountid%27,PropertyValues=[${encodeURIComponent(
        accountIds,
      )}]))`,
    );

    expect(accounts).toBeDefined();
    expect(accounts.entities).toBeDefined();
    expect(accounts.entities).toHaveLength(2);
    expect(accounts.entities[0]).toMatchObject({
      accountid: account1Id,
      name: "Account 1",
    });
  }, 30000);
});
