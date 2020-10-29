import { ActivityParty, EntityReference, setMetadataCache, XrmContextCdsServiceClient } from "cdsify";
import { Letter, letterMetadata } from "../cds-generated/entities/Letter";
import { metadataCache } from "../cds-generated/metadata";

export class ContactRibbon {
  static async SendEmail(context: Xrm.FormContext): Promise<void> {
    await Xrm.Navigation.openConfirmDialog({
      text: "Are you sure?",
    });
    setMetadataCache(metadataCache);
    const cdsServiceClient = new XrmContextCdsServiceClient(Xrm.WebApi);

    const letter1 = {
      logicalName: letterMetadata.logicalName,
      subject: `Sample Letter ${new Date().toUTCString()}`,
    } as Letter;
    const account1Ref = context.data.entity.getEntityReference() as EntityReference;
    try {
      // Create

      letter1.regardingobjectid = account1Ref;
      letter1.to = [{ logicalName: "activityparty", partyid: account1Ref } as ActivityParty];
      if (account1Ref.id) {
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

      // Open new activity
      const pageInput = {
        pageType: "entityrecord",
        entityName: letterMetadata.logicalName,
        formType: 2,
        entityId: letter1.id,
      } as Xrm.Navigation.PageInputEntityRecord;

      const navigationOptions = {
        target: 2,
        width: { value: 80, unit: "%" },
        position: 1,
      } as Xrm.Navigation.NavigationOptions;
      Xrm.Navigation.navigateTo(pageInput, navigationOptions);
    } catch (ex) {
      context.ui.setFormNotification(ex, "INFO", "send-email");
    } finally {
    }
  }
}
