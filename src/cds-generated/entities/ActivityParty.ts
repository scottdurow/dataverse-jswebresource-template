/* eslint-disable*/
import { IEntity } from "cdsify";
// Entity ActivityParty
export const activitypartyMetadata = {
  typeName: "mscrm.activityparty",
  logicalName: "activityparty",
  collectionName: "activityparties",
  primaryIdAttribute: "activitypartyid",
  attributeTypes: {
    // Numeric Types
    versionnumber: "BigInt",
    addressusedemailcolumnnumber: "Integer",
    effort: "Double",
    // Optionsets
    instancetypecode: "Optionset",
    participationtypemask: "Optionset",
    // Date Formats
    scheduledstart: "DateOnly:UserLocal",
    scheduledend: "DateOnly:UserLocal",
  },
  navigation: {
    resourcespecid: ["mscrm.resourcespec"],
    activityid: ["activitypointer"],
    partyid: ["account","bulkoperation","campaign","campaignactivity","contact","contract","entitlement","equipment","incident","invoice","knowledgearticle","lead","opportunity","queue","quote","salesorder","systemuser"],
  },
};

// Attribute constants
export enum ActivityPartyAttributes {
  DoNotFax = "donotfax",
  OwningUser = "owninguser",
  AddressUsed = "addressused",
  VersionNumber = "versionnumber",
  ActivityPartyId = "activitypartyid",
  DoNotEmail = "donotemail",
  ResourceSpecIdName = "resourcespecidname",
  OwnerId = "ownerid",
  DoNotPhone = "donotphone",
  OwnerIdType = "owneridtype",
  AddressUsedEmailColumnNumber = "addressusedemailcolumnnumber",
  IsPartyDeleted = "ispartydeleted",
  ExchangeEntryId = "exchangeentryid",
  ActivityId = "activityid",
  InstanceTypeCode = "instancetypecode",
  ScheduledStart = "scheduledstart",
  PartyObjectTypeCode = "partyobjecttypecode",
  OwningBusinessUnit = "owningbusinessunit",
  Effort = "effort",
  ParticipationTypeMask = "participationtypemask",
  PartyId = "partyid",
  ScheduledEnd = "scheduledend",
  ResourceSpecId = "resourcespecid",
  PartyIdName = "partyidname",
  DoNotPostalMail = "donotpostalmail",
}

// Early Bound Interface
export interface ActivityParty extends IEntity {
  // Do not allow Faxes BooleanType Information about whether to allow sending faxes to the activity party.
  donotfax?: boolean;
  //  UniqueidentifierType
  owninguser?: import("cdsify").Guid;
  // Address  StringType Email address to which an email is delivered, and which is associated with the target entity.
  addressused?: string;
  //  BigIntType
  versionnumber?: number;
  // Activity Party UniqueidentifierType Unique identifier of the activity party.
  activitypartyid?: import("cdsify").Guid;
  // Do not allow Emails BooleanType Information about whether to allow sending email to the activity party.
  donotemail?: boolean;
  //  StringType
  resourcespecidname?: string;
  // Owner [Required] OwnerType Unique identifier of the user or team who owns the activity_party.
  ownerid?: import("cdsify").EntityReference;
  // Do not allow Phone Calls BooleanType Information about whether to allow phone calls to the lead.
  donotphone?: boolean;
  //  EntityNameType
  owneridtype?: string;
  // Email column number of party IntegerType Email address column number from associated party.
  addressusedemailcolumnnumber?: number;
  // Is Party Deleted BooleanType Information about whether the underlying entity record is deleted.
  ispartydeleted?: boolean;
  // Exchange Entry StringType For internal use only.
  exchangeentryid?: string;
  // Activity LookupType Unique identifier of the activity associated with the activity party. (A "party" is any person who is associated with an activity.)
  activityid?: import("cdsify").EntityReference;
  // Appointment Type activityparty_activityparty_instancetypecode Type of instance of a recurring series.
  instancetypecode?: import("../enums/activityparty_activityparty_instancetypecode").activityparty_activityparty_instancetypecode;
  // Scheduled Start DateTimeType Scheduled start time of the activity. DateOnly:UserLocal
  scheduledstart?: Date;
  //  EntityNameType
  partyobjecttypecode?: string;
  //  UniqueidentifierType
  owningbusinessunit?: import("cdsify").Guid;
  // Effort DoubleType Amount of effort used by the resource in a service appointment activity.
  effort?: number;
  // Participation Type activityparty_activityparty_participationtypemask Role of the person in the activity, such as sender, to, cc, bcc, required, optional, organizer, regarding, or owner.
  participationtypemask?: import("../enums/activityparty_activityparty_participationtypemask").activityparty_activityparty_participationtypemask;
  // Party LookupType Unique identifier of the party associated with the activity.
  partyid?: import("cdsify").EntityReference;
  // Scheduled End DateTimeType Scheduled end time of the activity. DateOnly:UserLocal
  scheduledend?: Date;
  // Resource Specification LookupType Unique identifier of the resource specification for the activity party.
  resourcespecid?: import("cdsify").EntityReference;
  //  StringType
  partyidname?: string;
  // Do not allow Postal Mails BooleanType Information about whether to allow sending postal mail to the lead.
  donotpostalmail?: boolean;
}
