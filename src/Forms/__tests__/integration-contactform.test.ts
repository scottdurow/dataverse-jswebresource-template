import { SetupGlobalContextIfUndefined } from "dataverse-ify/lib/webapi/node";
import { ContactForm } from "../..";

/*
Demonstrates how to integration test form logic with a connection to dataverse
provided by the dataverse-ify implementation of Xrm.WebApi
*/
describe("Account Form Integration Test", () => {
  beforeAll(async () => {
    await SetupGlobalContextIfUndefined();
  }, 30000);
  test("onload", async () => {
    await ContactForm.onLoad();
  }, 30000);
});
