import { SetupGlobalContext } from "dataverse-ify/lib/webapi/node";
import { ContactForm } from "../..";
describe("Account Form Integration Test", () => {
  beforeAll(async () => {
    // Is this running inside NodeJS?
    if (typeof Xrm == "undefined") {
      try {
        // Set up the Node Xrm global context
        await SetupGlobalContext();
      } catch (ex) {
        fail(ex);
      }
    }
  }, 30000);
  test("onload", async () => {
    await ContactForm.onLoad();
  }, 30000);
});
