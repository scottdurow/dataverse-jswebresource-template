/* eslint-disable*/
import { IEntity } from "dataverse-ify";
// Entity Letter
export const letterMetadata = {
  typeName: "mscrm.letter",
  logicalName: "letter",
  collectionName: "letters",
  primaryIdAttribute: "activityid",
  attributeTypes: {
    // Numeric Types
    actualdurationminutes: "Integer",
    onholdtime: "Integer",
    timezoneruleversionnumber: "Integer",
    versionnumber: "BigInt",
    importsequencenumber: "Integer",
    utcconversiontimezonecode: "Integer",
    scheduleddurationminutes: "Integer",
    exchangerate: "Decimal",
    // Optionsets
    statuscode: "Optionset",
    prioritycode: "Optionset",
    statecode: "Optionset",
    // Date Formats
    scheduledend: "DateAndTime:UserLocal",
    scheduledstart: "DateAndTime:UserLocal",
    overriddencreatedon: "DateOnly:UserLocal",
    modifiedon: "DateAndTime:UserLocal",
    createdon: "DateAndTime:UserLocal",
    actualend: "DateOnly:UserLocal",
    lastonholdtime: "DateAndTime:UserLocal",
    actualstart: "DateOnly:UserLocal",
    sortdate: "DateAndTime:UserLocal",
  },
  navigation: {
    stageid_processstage: ["mscrm.processstage"],
    sla_letter_sla: ["mscrm.sla"],
    ownerid_letter: ["mscrm.principal"],
    activityid_activitypointer: ["mscrm.activitypointer"],
    owningbusinessunit: ["businessunit"],
    slainvokedid: ["sla"],
    createdonbehalfby: ["systemuser"],
    serviceid: ["service"],
    transactioncurrencyid: ["transactioncurrency"],
    modifiedby: ["systemuser"],
    modifiedonbehalfby: ["systemuser"],
    owninguser: ["systemuser"],
    owningteam: ["team"],
    createdby: ["systemuser"],
    regardingobjectid: ["account","adx_ad","adx_adplacement","adx_blog","adx_blogpost","adx_casedeflection","adx_communityforumaccesspermission","adx_communityforumalert","adx_contentaccesslevel","adx_dealregistrationrequest","adx_invitation","adx_poll","adx_polloption","adx_pollplacement","adx_pollsubmission","adx_publishingstatetransitionrule","adx_redirect","adx_shortcut","adx_webpage","adx_website","bookableresourcebooking","bookableresourcebookingheader","bulkoperation","campaign","campaignactivity","contact","contract","entitlement","entitlementtemplate","incident","invoice","knowledgearticle","knowledgebaserecord","lead","msdyn_agreement","msdyn_agreementbookingdate","msdyn_agreementbookingincident","msdyn_agreementbookingproduct","msdyn_agreementbookingservice","msdyn_agreementbookingservicetask","msdyn_agreementbookingsetup","msdyn_agreementinvoicedate","msdyn_agreementinvoiceproduct","msdyn_agreementinvoicesetup","msdyn_bookingalertstatus","msdyn_bookingrule","msdyn_bookingtimestamp","msdyn_customerasset","msdyn_fieldservicesetting","msdyn_incidenttypecharacteristic","msdyn_incidenttypeproduct","msdyn_incidenttypeservice","msdyn_inventoryadjustment","msdyn_inventoryadjustmentproduct","msdyn_inventoryjournal","msdyn_inventorytransfer","msdyn_payment","msdyn_paymentdetail","msdyn_paymentmethod","msdyn_paymentterm","msdyn_playbookinstance","msdyn_postalbum","msdyn_postalcode","msdyn_processnotes","msdyn_productinventory","msdyn_projectteam","msdyn_purchaseorder","msdyn_purchaseorderbill","msdyn_purchaseorderproduct","msdyn_purchaseorderreceipt","msdyn_purchaseorderreceiptproduct","msdyn_purchaseordersubstatus","msdyn_quotebookingincident","msdyn_quotebookingproduct","msdyn_quotebookingservice","msdyn_quotebookingservicetask","msdyn_resourceterritory","msdyn_rma","msdyn_rmaproduct","msdyn_rmareceipt","msdyn_rmareceiptproduct","msdyn_rmasubstatus","msdyn_rtv","msdyn_rtvproduct","msdyn_rtvsubstatus","msdyn_shipvia","msdyn_systemuserschedulersetting","msdyn_timegroup","msdyn_timegroupdetail","msdyn_timeoffrequest","msdyn_warehouse","msdyn_workorder","msdyn_workordercharacteristic","msdyn_workorderincident","msdyn_workorderproduct","msdyn_workorderresourcerestriction","msdyn_workorderservice","msdyn_workorderservicetask","opportunity","quote","salesorder","site"],
  },
};

// Attribute constants
export enum LetterAttributes {
  ActualDurationMinutes = "actualdurationminutes",
  OnHoldTime = "onholdtime",
  OwningBusinessUnit = "owningbusinessunit",
  IsRegularActivity = "isregularactivity",
  ProcessId = "processid",
  Address = "address",
  ScheduledEnd = "scheduledend",
  IsWorkflowCreated = "isworkflowcreated",
  ScheduledStart = "scheduledstart",
  to = "to",
  ModifiedByYomiName = "modifiedbyyominame",
  OverriddenCreatedOn = "overriddencreatedon",
  OwnerId = "ownerid",
  StatusCode = "statuscode",
  ModifiedOn = "modifiedon",
  ServiceIdName = "serviceidname",
  cc = "cc",
  from = "from",
  IsBilled = "isbilled",
  SLAInvokedId = "slainvokedid",
  TimeZoneRuleVersionNumber = "timezoneruleversionnumber",
  ModifiedOnBehalfByName = "modifiedonbehalfbyname",
  ActivityTypeCode = "activitytypecode",
  VersionNumber = "versionnumber",
  TransactionCurrencyIdName = "transactioncurrencyidname",
  CreatedOnBehalfBy = "createdonbehalfby",
  PriorityCode = "prioritycode",
  CreatedByName = "createdbyname",
  SLAId = "slaid",
  RegardingObjectIdYomiName = "regardingobjectidyominame",
  RegardingObjectIdName = "regardingobjectidname",
  ServiceId = "serviceid",
  ImportSequenceNumber = "importsequencenumber",
  OwnerIdName = "owneridname",
  RegardingObjectTypeCode = "regardingobjecttypecode",
  SLAName = "slaname",
  DirectionCode = "directioncode",
  TransactionCurrencyId = "transactioncurrencyid",
  CreatedOn = "createdon",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  StageId = "stageid",
  ScheduledDurationMinutes = "scheduleddurationminutes",
  Category = "category",
  StateCode = "statecode",
  Subcategory = "subcategory",
  ActualEnd = "actualend",
  ModifiedBy = "modifiedby",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  ModifiedByName = "modifiedbyname",
  Description = "description",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  ActivityId = "activityid",
  OwningUser = "owninguser",
  OwningTeam = "owningteam",
  Subject = "subject",
  ExchangeRate = "exchangerate",
  CreatedByYomiName = "createdbyyominame",
  bcc = "bcc",
  ModifiedOnBehalfByYomiName = "modifiedonbehalfbyyominame",
  SubscriptionId = "subscriptionid",
  CreatedBy = "createdby",
  RegardingObjectId = "regardingobjectid",
  LastOnHoldTime = "lastonholdtime",
  OwnerIdType = "owneridtype",
  TraversedPath = "traversedpath",
  ActualStart = "actualstart",
  SLAInvokedIdName = "slainvokedidname",
  SortDate = "sortdate",
  OwnerIdYomiName = "owneridyominame",
}

// Early Bound Interface
export interface Letter extends IEntity {
  // Duration IntegerType Type the number of minutes spent creating and sending the letter. The duration is used in reporting.
  actualdurationminutes?: number | null;
  // On Hold Time (Minutes) IntegerType Shows how long, in minutes, that the record was on hold.
  onholdtime?: number | null;
  // Owning Business Unit LookupType Unique identifier of the business unit that owns the letter activity.
  owningbusinessunit?: import("dataverse-ify").EntityReference | null;
  // Is Regular Activity BooleanType Shows whether the activity is a regular activity type or event type.
  isregularactivity?: boolean | null;
  // Process UniqueidentifierType Shows the ID of the process.
  processid?: import("dataverse-ify").Guid | null;
  // Address StringType Type the complete recipient address for the letter to ensure timely delivery.
  address?: string | null;
  // Due Date DateTimeType Enter the expected due date and time. DateAndTime:UserLocal
  scheduledend?: Date | null;
  // Is Workflow Created BooleanType Shows whether the letter activity was created by a workflow rule.
  isworkflowcreated?: boolean | null;
  // Start Date DateTimeType Enter the expected due date and time. DateAndTime:UserLocal
  scheduledstart?: Date | null;
  // To PartyListType Enter the account, contact, lead, or user recipients for the letter.
  to?: import("dataverse-ify").ActivityParty[] | null;
  //  StringType
  modifiedbyyominame?: string | null;
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: Date | null;
  // Owner OwnerType Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user.
  ownerid?: import("dataverse-ify").EntityReference | null;
  // Status Reason letter_letter_statuscode Select the letter's status.
  statuscode?: import("../enums/letter_letter_statuscode").letter_letter_statuscode | null;
  // Modified On DateTimeType Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. DateAndTime:UserLocal
  modifiedon?: Date | null;
  //  StringType
  serviceidname?: string | null;
  // Cc PartyListType Enter the recipients that should be copied on the letter.
  cc?: import("dataverse-ify").ActivityParty[] | null;
  // From PartyListType Enter the account, contact, lead, or user who sent the letter.
  from?: import("dataverse-ify").ActivityParty[] | null;
  // Is Billed BooleanType Shows whether the letter activity was billed as part of resolving a case.
  isbilled?: boolean | null;
  // Last SLA applied LookupType Last SLA that was applied to this Letter. This field is for internal use only.
  slainvokedid?: import("dataverse-ify").EntityReference | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  //  StringType
  modifiedonbehalfbyname?: string | null;
  // Activity Type EntityNameType Shows the type of activity.
  activitytypecode?: string | null;
  // Version Number BigIntType Version number of the letter.
  versionnumber?: number | null;
  //  StringType
  transactioncurrencyidname?: string | null;
  // Created By (Delegate) LookupType Shows who created the record on behalf of another user.
  createdonbehalfby?: import("dataverse-ify").EntityReference | null;
  // Priority letter_letter_prioritycode Select the priority so that preferred customers or critical issues are handled quickly.
  prioritycode?: import("../enums/letter_letter_prioritycode").letter_letter_prioritycode | null;
  //  StringType
  createdbyname?: string | null;
  // SLA LookupType Choose the service level agreement (SLA) that you want to apply to the Letter record.
  slaid?: import("dataverse-ify").EntityReference | null;
  //  StringType
  regardingobjectidyominame?: string | null;
  //  StringType
  regardingobjectidname?: string | null;
  // Service LookupType Unique identifier for an associated service.
  serviceid?: import("dataverse-ify").EntityReference | null;
  // Import Sequence Number IntegerType Unique identifier of the data import or data migration that created this record.
  importsequencenumber?: number | null;
  //  StringType
  owneridname?: string | null;
  //  EntityNameType
  regardingobjecttypecode?: string | null;
  //  StringType
  slaname?: string | null;
  // Direction BooleanType Select the direction of the letter as incoming or outbound.
  directioncode?: boolean | null;
  // Currency LookupType Choose the local currency for the record to make sure budgets are reported in the correct currency.
  transactioncurrencyid?: import("dataverse-ify").EntityReference | null;
  // Created On DateTimeType Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. DateAndTime:UserLocal
  createdon?: Date | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
  //  StringType
  createdonbehalfbyyominame?: string | null;
  // (Deprecated) Process Stage UniqueidentifierType Shows the ID of the stage.
  stageid?: import("dataverse-ify").Guid | null;
  // Scheduled Duration IntegerType Scheduled duration of the letter activity, specified in minutes.
  scheduleddurationminutes?: number | null;
  // Category StringType Type a category to identify the letter type, such as sales offer or past due notice, to tie the letter to a business group or function.
  category?: string | null;
  // Activity Status letter_letter_statecode Shows whether the letter is open, completed, or canceled. Completed and canceled letters are read-only and can't be edited.
  statecode?: import("../enums/letter_letter_statecode").letter_letter_statecode | null;
  // Sub-Category StringType Type a subcategory to identify the letter type and relate the activity to a specific product, sales region, business group, or other function.
  subcategory?: string | null;
  // Actual End DateTimeType Enter the actual end date and time of the letter. By default, it displays the date and time when the activity was completed or canceled, but can be edited to capture the actual time to create and send the letter. DateOnly:UserLocal
  actualend?: Date | null;
  // Modified By LookupType Shows who last updated the record.
  modifiedby?: import("dataverse-ify").EntityReference | null;
  //  StringType
  createdonbehalfbyname?: string | null;
  //  StringType
  modifiedbyname?: string | null;
  // Description MemoType Type the letter body or additional information to describe the letter, such as the primary message or the products and services described.
  description?: string | null;
  // Modified By (Delegate) LookupType Shows who last updated the record on behalf of another user.
  modifiedonbehalfby?: import("dataverse-ify").EntityReference | null;
  // Letter UniqueidentifierType Unique identifier of the letter activity.
  activityid?: import("dataverse-ify").Guid | null;
  // Owning User LookupType Unique identifier of the user that owns the letter activity.
  owninguser?: import("dataverse-ify").EntityReference | null;
  // Owning Team LookupType Unique identifier of the team that owns the letter activity.
  owningteam?: import("dataverse-ify").EntityReference | null;
  // Subject [Required] StringType Type a short description about the objective or primary topic of the letter.
  subject?: string;
  // Exchange Rate DecimalType Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency.
  exchangerate?: number | null;
  //  StringType
  createdbyyominame?: string | null;
  // Bcc PartyListType Enter the recipients that are included in the letter distribution, but are not displayed to other recipients.
  bcc?: import("dataverse-ify").ActivityParty[] | null;
  //  StringType
  modifiedonbehalfbyyominame?: string | null;
  // Subscription UniqueidentifierType For internal use only.
  subscriptionid?: import("dataverse-ify").Guid | null;
  // Created By LookupType Shows who created the record.
  createdby?: import("dataverse-ify").EntityReference | null;
  // Regarding LookupType Unique identifier of the object with which the letter activity is associated.
  regardingobjectid?: import("dataverse-ify").EntityReference | null;
  // Last On Hold Time DateTimeType Contains the date and time stamp of the last on hold time. DateAndTime:UserLocal
  lastonholdtime?: Date | null;
  //  EntityNameType
  owneridtype?: string | null;
  // (Deprecated) Traversed Path StringType For internal use only.
  traversedpath?: string | null;
  // Actual Start DateTimeType Enter the actual start date and time for the letter. By default, it displays the date and time when the activity was created, but can be edited to capture the actual time to create and send the letter. DateOnly:UserLocal
  actualstart?: Date | null;
  //  StringType
  slainvokedidname?: string | null;
  // Sort Date DateTimeType Shows the date and time by which the activities are sorted. DateAndTime:UserLocal
  sortdate?: Date | null;
  //  StringType
  owneridyominame?: string | null;
}
