/* eslint-disable*/
import { IEntity } from "dataverse-ify";
// Entity ActivityParty
export const activitypartyMetadata = {
  typeName: "mscrm.activityparty",
  logicalName: "activityparty",
  collectionName: "activityparties",
  primaryIdAttribute: "activitypartyid",
  attributeTypes: {
    // Numeric Types
    addressusedemailcolumnnumber: "Integer",
    versionnumber: "BigInt",
    effort: "Double",
    // Optionsets
    instancetypecode: "Optionset",
    participationtypemask: "Optionset",
    // Date Formats
    scheduledend: "DateOnly:UserLocal",
    scheduledstart: "DateOnly:UserLocal",
  },
  navigation: {
    resourcespecid: ["mscrm.resourcespec"],
    partyid: ["account","bulkoperation","campaign","campaignactivity","contact","contract","entitlement","equipment","incident","invoice","knowledgearticle","lead","opportunity","queue","quote","salesorder","systemuser"],
    activityid: ["activitypointer"],
  },
};

// Attribute constants
export enum ActivityPartyAttributes {
  IsPartyDeleted = "ispartydeleted",
  DoNotEmail = "donotemail",
  ResourceSpecId = "resourcespecid",
  OwnerId = "ownerid",
  PartyObjectTypeCode = "partyobjecttypecode",
  PartyIdName = "partyidname",
  OwnerIdType = "owneridtype",
  ScheduledEnd = "scheduledend",
  PartyId = "partyid",
  DoNotPostalMail = "donotpostalmail",
  OwningUser = "owninguser",
  AddressUsedEmailColumnNumber = "addressusedemailcolumnnumber",
  ActivityPartyId = "activitypartyid",
  DoNotFax = "donotfax",
  AddressUsed = "addressused",
  VersionNumber = "versionnumber",
  ResourceSpecIdName = "resourcespecidname",
  ActivityId = "activityid",
  DoNotPhone = "donotphone",
  ExchangeEntryId = "exchangeentryid",
  ScheduledStart = "scheduledstart",
  InstanceTypeCode = "instancetypecode",
  Effort = "effort",
  ParticipationTypeMask = "participationtypemask",
  OwningBusinessUnit = "owningbusinessunit",
}

// Early Bound Interface
export interface ActivityParty extends IEntity {
  // Is Party Deleted BooleanType Information about whether the underlying entity record is deleted.
  ispartydeleted?: boolean | null;
  // Do not allow Emails BooleanType Information about whether to allow sending email to the activity party.
  donotemail?: boolean | null;
  // Resource Specification LookupType Unique identifier of the resource specification for the activity party.
  resourcespecid?: import("dataverse-ify").EntityReference | null;
  // Owner [Required] OwnerType Unique identifier of the user or team who owns the activity_party.
  ownerid?: import("dataverse-ify").EntityReference;
  //  EntityNameType
  partyobjecttypecode?: string | null;
  //  StringType
  partyidname?: string | null;
  //  EntityNameType
  owneridtype?: string | null;
  // Scheduled End DateTimeType Scheduled end time of the activity. DateOnly:UserLocal
  scheduledend?: Date | null;
  // Party LookupType Unique identifier of the party associated with the activity.
  partyid?: import("dataverse-ify").EntityReference | null;
  // Do not allow Postal Mails BooleanType Information about whether to allow sending postal mail to the lead.
  donotpostalmail?: boolean | null;
  //  UniqueidentifierType
  owninguser?: import("dataverse-ify").Guid | null;
  // Email column number of party IntegerType Email address column number from associated party.
  addressusedemailcolumnnumber?: number | null;
  // Activity Party UniqueidentifierType Unique identifier of the activity party.
  activitypartyid?: import("dataverse-ify").Guid | null;
  // Do not allow Faxes BooleanType Information about whether to allow sending faxes to the activity party.
  donotfax?: boolean | null;
  // Address  StringType Email address to which an email is delivered, and which is associated with the target entity.
  addressused?: string | null;
  //  BigIntType
  versionnumber?: number | null;
  //  StringType
  resourcespecidname?: string | null;
  // Activity LookupType Unique identifier of the activity associated with the activity party. (A "party" is any person who is associated with an activity.)
  activityid?: import("dataverse-ify").EntityReference | null;
  // Do not allow Phone Calls BooleanType Information about whether to allow phone calls to the lead.
  donotphone?: boolean | null;
  // Exchange Entry StringType For internal use only.
  exchangeentryid?: string | null;
  // Scheduled Start DateTimeType Scheduled start time of the activity. DateOnly:UserLocal
  scheduledstart?: Date | null;
  // Appointment Type activityparty_activityparty_instancetypecode Type of instance of a recurring series.
  instancetypecode?: import("../enums/activityparty_activityparty_instancetypecode").activityparty_activityparty_instancetypecode | null;
  // Effort DoubleType Amount of effort used by the resource in a service appointment activity.
  effort?: number | null;
  // Participation Type activityparty_activityparty_participationtypemask Role of the person in the activity, such as sender, to, cc, bcc, required, optional, organizer, regarding, or owner.
  participationtypemask?: import("../enums/activityparty_activityparty_participationtypemask").activityparty_activityparty_participationtypemask | null;
  //  UniqueidentifierType
  owningbusinessunit?: import("dataverse-ify").Guid | null;
}
