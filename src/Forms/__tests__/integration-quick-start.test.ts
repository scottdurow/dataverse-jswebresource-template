import { Entity, setMetadataCache, XrmContextDataverseClient } from "dataverse-ify";
import { SetupGlobalContextIfUndefined } from "dataverse-ify/lib/webapi/node";
import {
  Account,
  AccountAttributes,
  accountMetadata,
  Contact,
  contactMetadata,
  metadataCache,
} from "../../dataverse-gen";

test("integration-quick-start", async () => {
  await SetupGlobalContextIfUndefined();
  setMetadataCache(metadataCache);
  const serviceClient = new XrmContextDataverseClient(Xrm.WebApi);

  const contact1 = {
    logicalName: contactMetadata.logicalName,
    firstname: "Jazzy",
    lastname: "Jeff",
  } as Contact;

  // Create contact
  contact1.id = await serviceClient.create(contact1);

  // Create Account - notice primarycontactid is a simple EntityReference
  const account1 = {
    logicalName: accountMetadata.logicalName,
    name: "Contoso",
    primarycontactid: Entity.toEntityReference(contact1),
  } as Account;

  account1.id = await serviceClient.create(account1);

  // Retrieve Account (notice enum AccountAttributes)
  const accountRetrieved = await serviceClient.retrieve<Account>(accountMetadata.logicalName, account1.id, [
    AccountAttributes.PrimaryContactId,
  ]);

  console.log(accountRetrieved);
});
