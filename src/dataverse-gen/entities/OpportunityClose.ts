/* eslint-disable*/
import { IEntity } from "dataverse-ify";
// Entity OpportunityClose
export const opportunitycloseMetadata = {
  typeName: "mscrm.opportunityclose",
  logicalName: "opportunityclose",
  collectionName: "opportunitycloses",
  primaryIdAttribute: "activityid",
  attributeTypes: {
    // Numeric Types
    versionnumber: "BigInt",
    exchangerate: "Decimal",
    timezoneruleversionnumber: "Integer",
    actualrevenue: "Money",
    utcconversiontimezonecode: "Integer",
    scheduleddurationminutes: "Integer",
    onholdtime: "Integer",
    actualdurationminutes: "Integer",
    importsequencenumber: "Integer",
    actualrevenue_base: "Money",
    // Optionsets
    prioritycode: "Optionset",
    opportunitystatuscode: "Optionset",
    statecode: "Optionset",
    community: "Optionset",
    instancetypecode: "Optionset",
    deliveryprioritycode: "Optionset",
    statuscode: "Optionset",
    opportunitystatecode: "Optionset",
    // Date Formats
    createdon: "DateAndTime:UserLocal",
    deliverylastattemptedon: "DateAndTime:UserLocal",
    overriddencreatedon: "DateOnly:UserLocal",
    scheduledstart: "DateOnly:UserLocal",
    actualstart: "DateOnly:UserLocal",
    modifiedon: "DateAndTime:UserLocal",
    postponeactivityprocessinguntil: "DateAndTime:UserLocal",
    sortdate: "DateAndTime:UserLocal",
    lastonholdtime: "DateAndTime:UserLocal",
    actualend: "DateOnly:UserLocal",
    senton: "DateAndTime:UserLocal",
    scheduledend: "DateOnly:UserLocal",
  },
  navigation: {
    sla_activitypointer_sla_opportunityclose: ["mscrm.sla"],
    ownerid_opportunityclose: ["mscrm.principal"],
    opportunityid: ["mscrm.opportunity"],
    competitorid: ["mscrm.competitor"],
    activityid_activitypointer: ["mscrm.activitypointer"],
    createdonbehalfby: ["systemuser"],
    sendermailboxid: ["mailbox"],
    regardingobjectid: ["account","bookableresourcebooking","bookableresourcebookingheader","bulkoperation","campaign","campaignactivity","entitlement","entitlementtemplate","incident","interactionforemail","knowledgearticle","knowledgebaserecord","lead","opportunity","site"],
    modifiedby: ["systemuser"],
    slainvokedid: ["sla"],
    owningbusinessunit: ["businessunit"],
    transactioncurrencyid: ["transactioncurrency"],
    owningteam: ["team"],
    createdby: ["systemuser"],
    serviceid: ["service"],
    owninguser: ["systemuser"],
    modifiedonbehalfby: ["systemuser"],
  },
};

// Attribute constants
export enum OpportunityCloseAttributes {
  ModifiedByExternalPartyYomiName = "modifiedbyexternalpartyyominame",
  VersionNumber = "versionnumber",
  CreatedOn = "createdon",
  ModifiedOnBehalfByYomiName = "modifiedonbehalfbyyominame",
  From = "from",
  SeriesId = "seriesid",
  TraversedPath = "traversedpath",
  IsWorkflowCreated = "isworkflowcreated",
  ModifiedByYomiName = "modifiedbyyominame",
  OpportunityIdName = "opportunityidname",
  OwnerIdType = "owneridtype",
  Customers = "customers",
  CreatedOnBehalfBy = "createdonbehalfby",
  DeliveryLastAttemptedOn = "deliverylastattemptedon",
  OwnerId = "ownerid",
  Partners = "partners",
  Resources = "resources",
  SenderMailboxIdName = "sendermailboxidname",
  RegardingObjectIdYomiName = "regardingobjectidyominame",
  OwnerIdName = "owneridname",
  PriorityCode = "prioritycode",
  OverriddenCreatedOn = "overriddencreatedon",
  SLAInvokedIdName = "slainvokedidname",
  ModifiedByExternalPartyName = "modifiedbyexternalpartyname",
  ExchangeItemId = "exchangeitemid",
  OpportunityStatusCode = "opportunitystatuscode",
  ScheduledStart = "scheduledstart",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  SLAName = "slaname",
  ExchangeRate = "exchangerate",
  Subcategory = "subcategory",
  CreatedByExternalPartyName = "createdbyexternalpartyname",
  SenderMailboxId = "sendermailboxid",
  RegardingObjectId = "regardingobjectid",
  StateCode = "statecode",
  TimeZoneRuleVersionNumber = "timezoneruleversionnumber",
  CC = "cc",
  BCC = "bcc",
  OpportunityId = "opportunityid",
  ModifiedBy = "modifiedby",
  Community = "community",
  CompetitorIdYomiName = "competitoridyominame",
  RegardingObjectIdName = "regardingobjectidname",
  ActivityAdditionalParams = "activityadditionalparams",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  ActualRevenue = "actualrevenue",
  ActualStart = "actualstart",
  IsBilled = "isbilled",
  ActivityTypeCode = "activitytypecode",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  ScheduledDurationMinutes = "scheduleddurationminutes",
  SLAInvokedId = "slainvokedid",
  InstanceTypeCode = "instancetypecode",
  ModifiedOn = "modifiedon",
  PostponeActivityProcessingUntil = "postponeactivityprocessinguntil",
  OwnerIdYomiName = "owneridyominame",
  OnHoldTime = "onholdtime",
  OwningBusinessUnit = "owningbusinessunit",
  ProcessId = "processid",
  Description = "description",
  DeliveryPriorityCode = "deliveryprioritycode",
  CompetitorIdName = "competitoridname",
  CreatedByName = "createdbyname",
  RegardingObjectTypeCode = "regardingobjecttypecode",
  SortDate = "sortdate",
  IsMapiPrivate = "ismapiprivate",
  RequiredAttendees = "requiredattendees",
  LastOnHoldTime = "lastonholdtime",
  StageId = "stageid",
  OptionalAttendees = "optionalattendees",
  LeftVoiceMail = "leftvoicemail",
  TransactionCurrencyId = "transactioncurrencyid",
  CompetitorId = "competitorid",
  OwningTeam = "owningteam",
  CreatedBy = "createdby",
  Category = "category",
  Organizer = "organizer",
  ServiceIdName = "serviceidname",
  ServiceId = "serviceid",
  CreatedByYomiName = "createdbyyominame",
  OwningUser = "owninguser",
  TransactionCurrencyIdName = "transactioncurrencyidname",
  ModifiedByExternalParty = "modifiedbyexternalparty",
  ActualEnd = "actualend",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  CreatedByExternalParty = "createdbyexternalparty",
  ActivityId = "activityid",
  To = "to",
  IsRegularActivity = "isregularactivity",
  ModifiedOnBehalfByName = "modifiedonbehalfbyname",
  OpportunityIdType = "opportunityidtype",
  ExchangeWebLink = "exchangeweblink",
  SentOn = "senton",
  ScheduledEnd = "scheduledend",
  StatusCode = "statuscode",
  ModifiedByName = "modifiedbyname",
  OpportunityStateCode = "opportunitystatecode",
  CreatedByExternalPartyYomiName = "createdbyexternalpartyyominame",
  ActualDurationMinutes = "actualdurationminutes",
  SLAId = "slaid",
  Subject = "subject",
  ImportSequenceNumber = "importsequencenumber",
  ActualRevenue_Base = "actualrevenue_base",
}

// Early Bound Interface
export interface OpportunityClose extends IEntity {
  //  StringType
  modifiedbyexternalpartyyominame?: string | null;
  // Version Number BigIntType Version number of the activity.
  versionnumber?: number | null;
  // Created On DateTimeType Date and time when the opportunity close activity was created. DateAndTime:UserLocal
  createdon?: Date | null;
  //  StringType
  modifiedonbehalfbyyominame?: string | null;
  // From PartyListType Person who the activity is from.
  from?: import("dataverse-ify").ActivityParty[] | null;
  // Series Id UniqueidentifierType Uniqueidentifier specifying the id of recurring series of an instance.
  seriesid?: import("dataverse-ify").Guid | null;
  // Traversed Path StringType For internal use only.
  traversedpath?: string | null;
  // Is Workflow Created BooleanType Information that specifies if the opportunity close activity was created from a workflow rule.
  isworkflowcreated?: boolean | null;
  //  StringType
  modifiedbyyominame?: string | null;
  //  StringType
  opportunityidname?: string | null;
  //  EntityNameType
  owneridtype?: string | null;
  // Customers PartyListType Customer with which the activity is associated.
  customers?: import("dataverse-ify").ActivityParty[] | null;
  // Created By (Delegate) LookupType Unique identifier of the delegate user who created the opportunityclose.
  createdonbehalfby?: import("dataverse-ify").EntityReference | null;
  // Date Delivery Last Attempted DateTimeType Date and time when the delivery of the activity was last attempted. DateAndTime:UserLocal
  deliverylastattemptedon?: Date | null;
  // Owner OwnerType Unique identifier of the user or team who owns the activity.
  ownerid?: import("dataverse-ify").EntityReference | null;
  // Outsource Vendors PartyListType Outsource vendor with which activity is associated.
  partners?: import("dataverse-ify").ActivityParty[] | null;
  // Resources PartyListType Users or facility/equipment that are required for the activity.
  resources?: import("dataverse-ify").ActivityParty[] | null;
  //  StringType
  sendermailboxidname?: string | null;
  //  StringType
  regardingobjectidyominame?: string | null;
  //  StringType
  owneridname?: string | null;
  // Priority opportunityclose_none_opportunityclose_prioritycode Priority of the activity.
  prioritycode?: import("../enums/opportunityclose_none_opportunityclose_prioritycode").opportunityclose_none_opportunityclose_prioritycode | null;
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: Date | null;
  //  StringType
  slainvokedidname?: string | null;
  //  StringType
  modifiedbyexternalpartyname?: string | null;
  // Exchange Item ID StringType The message id of activity which is returned from Exchange Server.
  exchangeitemid?: string | null;
  // Status Reason opportunityclose_OpportunityClose_opportunity_statuscode Status reason of the opportunity.
  opportunitystatuscode?: import("../enums/opportunityclose_OpportunityClose_opportunity_statuscode").opportunityclose_OpportunityClose_opportunity_statuscode | null;
  // Scheduled Start DateTimeType Scheduled start time of the opportunity close activity. DateOnly:UserLocal
  scheduledstart?: Date | null;
  //  StringType
  createdonbehalfbyyominame?: string | null;
  //  StringType
  slaname?: string | null;
  // Exchange Rate DecimalType Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency.
  exchangerate?: number | null;
  // Sub-Category StringType Subcategory of the opportunity close activity.
  subcategory?: string | null;
  //  StringType
  createdbyexternalpartyname?: string | null;
  // Sender's Mailbox LookupType Unique identifier of the mailbox associated with the sender of the email message.
  sendermailboxid?: import("dataverse-ify").EntityReference | null;
  // Regarding LookupType Unique identifier of the object with which the activity is associated.
  regardingobjectid?: import("dataverse-ify").EntityReference | null;
  // Status opportunityclose_opportunityclose_statecode Shows whether the opportunity close activity is open, completed, or canceled.  By default, opportunity close activities are completed unless the opportunity is reactivated,  which updates them to canceled.
  statecode?: import("../enums/opportunityclose_opportunityclose_statecode").opportunityclose_opportunityclose_statecode | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  // CC PartyListType Carbon-copy (cc) recipients of the activity.
  cc?: import("dataverse-ify").ActivityParty[] | null;
  // BCC PartyListType Blind Carbon-copy (bcc) recipients of the activity.
  bcc?: import("dataverse-ify").ActivityParty[] | null;
  // Opportunity [Required] LookupType Unique identifier of the opportunity closed.
  opportunityid?: import("dataverse-ify").EntityReference;
  // Modified By LookupType Unique identifier of the user who last modified the opportunity close activity.
  modifiedby?: import("dataverse-ify").EntityReference | null;
  // Social Channel socialprofile_community Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only.
  community?: import("../enums/socialprofile_community").socialprofile_community | null;
  //  StringType
  competitoridyominame?: string | null;
  //  StringType
  regardingobjectidname?: string | null;
  // Activity Additional Parameters MemoType Additional information provided by the external application as JSON. For internal use only.
  activityadditionalparams?: string | null;
  //  StringType
  createdonbehalfbyname?: string | null;
  // Actual Revenue MoneyType Actual revenue generated for the opportunity.
  actualrevenue?: number | null;
  // Actual Start DateTimeType Actual start time of the opportunity close activity. DateOnly:UserLocal
  actualstart?: Date | null;
  // Is Billed BooleanType Information about whether the opportunity close activity was billed as part of resolving a case.
  isbilled?: boolean | null;
  // Activity Type EntityNameType Type of activity.
  activitytypecode?: string | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
  // Scheduled Duration IntegerType Scheduled duration of the opportunity close activity, specified in minutes.
  scheduleddurationminutes?: number | null;
  // Last SLA applied LookupType Last SLA that was applied to this case. This field is for internal use only.
  slainvokedid?: import("dataverse-ify").EntityReference | null;
  // Recurring Instance Type opportunityclose_none_opportunityclose_instancetypecode Type of instance of a recurring series.
  instancetypecode?: import("../enums/opportunityclose_none_opportunityclose_instancetypecode").opportunityclose_none_opportunityclose_instancetypecode | null;
  // Modified On DateTimeType Date and time when the opportunity close activity was last modified. DateAndTime:UserLocal
  modifiedon?: Date | null;
  // Delay activity processing until DateTimeType For internal use only. DateAndTime:UserLocal
  postponeactivityprocessinguntil?: Date | null;
  //  StringType
  owneridyominame?: string | null;
  // On Hold Time (Minutes) IntegerType Shows how long, in minutes, that the record was on hold.
  onholdtime?: number | null;
  // Owning Business Unit LookupType Unique identifier of the business unit that owns the activity.
  owningbusinessunit?: import("dataverse-ify").EntityReference | null;
  // Process UniqueidentifierType Unique identifier of the Process.
  processid?: import("dataverse-ify").Guid | null;
  // Description MemoType Activity that is created automatically when an opportunity is closed, containing information such as the description of the closing and actual revenue.
  description?: string | null;
  // Delivery Priority activitypointer_deliveryprioritycode Priority of delivery of the activity to the email server.
  deliveryprioritycode?: import("../enums/activitypointer_deliveryprioritycode").activitypointer_deliveryprioritycode | null;
  //  StringType
  competitoridname?: string | null;
  //  StringType
  createdbyname?: string | null;
  //  EntityNameType
  regardingobjecttypecode?: string | null;
  // Sort Date DateTimeType Shows the date and time by which the activities are sorted. DateAndTime:UserLocal
  sortdate?: Date | null;
  // Is Private BooleanType For internal use only.
  ismapiprivate?: boolean | null;
  // Required Attendees PartyListType List of required attendees for the activity.
  requiredattendees?: import("dataverse-ify").ActivityParty[] | null;
  // Last On Hold Time DateTimeType Contains the date and time stamp of the last on hold time. DateAndTime:UserLocal
  lastonholdtime?: Date | null;
  // Process Stage UniqueidentifierType Unique identifier of the Stage.
  stageid?: import("dataverse-ify").Guid | null;
  // Optional Attendees PartyListType List of optional attendees for the activity.
  optionalattendees?: import("dataverse-ify").ActivityParty[] | null;
  // Left Voice Mail BooleanType Left the voice mail
  leftvoicemail?: boolean | null;
  // Currency LookupType Choose the local currency for the record to make sure budgets are reported in the correct currency.
  transactioncurrencyid?: import("dataverse-ify").EntityReference | null;
  // Competitor LookupType Unique identifier of the competitor with which the opportunity close activity is associated.
  competitorid?: import("dataverse-ify").EntityReference | null;
  // Owning Team LookupType Unique identifier of the team that owns the activity.
  owningteam?: import("dataverse-ify").EntityReference | null;
  // Created By LookupType Unique identifier of the user who created the opportunity close activity.
  createdby?: import("dataverse-ify").EntityReference | null;
  // Category StringType Category of the opportunity close activity.
  category?: string | null;
  // Organizer PartyListType Person who organized the activity.
  organizer?: import("dataverse-ify").ActivityParty[] | null;
  //  StringType
  serviceidname?: string | null;
  // Service LookupType Unique identifier of the service with which the opportunity close activity is associated.
  serviceid?: import("dataverse-ify").EntityReference | null;
  //  StringType
  createdbyyominame?: string | null;
  // Owning User LookupType Unique identifier of the user that owns the activity.
  owninguser?: import("dataverse-ify").EntityReference | null;
  //  StringType
  transactioncurrencyidname?: string | null;
  // Modified By (External Party) LookupType Shows the external party who modified the record.
  modifiedbyexternalparty?: import("dataverse-ify").EntityReference | null;
  // Closed On DateTimeType Actual end time of the opportunity close activity. DateOnly:UserLocal
  actualend?: Date | null;
  // Modified By (Delegate) LookupType Unique identifier of the delegate user who last modified the opportunityclose.
  modifiedonbehalfby?: import("dataverse-ify").EntityReference | null;
  // Created By (External Party) LookupType Shows the external party who created the record.
  createdbyexternalparty?: import("dataverse-ify").EntityReference | null;
  // Opportunity Close UniqueidentifierType Unique identifier of the opportunity close activity.
  activityid?: import("dataverse-ify").Guid | null;
  // To PartyListType Person who is the receiver of the activity.
  to?: import("dataverse-ify").ActivityParty[] | null;
  // Is Regular Activity BooleanType Information regarding whether the activity is a regular activity type or event type.
  isregularactivity?: boolean | null;
  //  StringType
  modifiedonbehalfbyname?: string | null;
  //  EntityNameType
  opportunityidtype?: string | null;
  // Exchange WebLink StringType Shows the web link of Activity of type email.
  exchangeweblink?: string | null;
  // Date Sent DateTimeType Date and time when the activity was sent. DateAndTime:UserLocal
  senton?: Date | null;
  // Scheduled End DateTimeType Scheduled end time of the opportunity close activity. DateOnly:UserLocal
  scheduledend?: Date | null;
  // Status Reason opportunityclose_opportunityclose_statuscode Reason for the status of the opportunity close activity.
  statuscode?: import("../enums/opportunityclose_opportunityclose_statuscode").opportunityclose_opportunityclose_statuscode | null;
  //  StringType
  modifiedbyname?: string | null;
  // Status opportunityclose_OpportunityClose_opportunity_statecode Status of the opportunity.
  opportunitystatecode?: import("../enums/opportunityclose_OpportunityClose_opportunity_statecode").opportunityclose_OpportunityClose_opportunity_statecode | null;
  //  StringType
  createdbyexternalpartyyominame?: string | null;
  // Actual Duration IntegerType Actual duration of the opportunity close activity in minutes.
  actualdurationminutes?: number | null;
  // SLA LookupType Choose the service level agreement (SLA) that you want to apply to the case record.
  slaid?: import("dataverse-ify").EntityReference | null;
  // Subject StringType Subject associated with the opportunity close activity.
  subject?: string | null;
  // Import Sequence Number IntegerType Sequence number of the import that created this record.
  importsequencenumber?: number | null;
  // Actual Revenue (Base) MoneyType Value of the Actual Revenue in base currency.
  actualrevenue_base?: number | null;
}
