/* eslint-disable*/
import { accountMetadata } from "./entities/Account";
import { activitypartyMetadata } from "./entities/ActivityParty";
import { contactMetadata } from "./entities/Contact";
import { incidentMetadata } from "./entities/Incident";
import { letterMetadata } from "./entities/Letter";
import { opportunityMetadata } from "./entities/Opportunity";
import { opportunitycloseMetadata } from "./entities/OpportunityClose";
import { WinOpportunityMetadata } from "./actions/WinOpportunity";
import { CalculateRollupFieldMetadata } from "./functions/CalculateRollupField";
import { CalculateTotalTimeIncidentMetadata } from "./functions/CalculateTotalTimeIncident";
import { RetrieveMetadataChangesMetadata } from "./functions/RetrieveMetadataChanges";

export const Entities = {
  Account: "account",
  ActivityParty: "activityparty",
  Contact: "contact",
  Incident: "incident",
  Letter: "letter",
  Opportunity: "opportunity",
  OpportunityClose: "opportunityclose",
};

// Setup Metadata
// Usage: setMetadataCache(metadataCache);
export const metadataCache = {
  entities: {
    account: accountMetadata,
    activityparty: activitypartyMetadata,
    contact: contactMetadata,
    incident: incidentMetadata,
    letter: letterMetadata,
    opportunity: opportunityMetadata,
    opportunityclose: opportunitycloseMetadata,
  },
  actions: {
    WinOpportunity: WinOpportunityMetadata,
    CalculateRollupField: CalculateRollupFieldMetadata,
    CalculateTotalTimeIncident: CalculateTotalTimeIncidentMetadata,
    RetrieveMetadataChanges: RetrieveMetadataChangesMetadata,
  }
};