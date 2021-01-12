/* eslint-disable*/
import { IEntity } from "dataverse-ify";
// Entity Incident
export const incidentMetadata = {
  typeName: "mscrm.incident",
  logicalName: "incident",
  collectionName: "incidents",
  primaryIdAttribute: "incidentid",
  attributeTypes: {
    // Numeric Types
    numberofchildincidents: "Integer",
    importsequencenumber: "Integer",
    billedserviceunits: "Integer",
    sentimentvalue: "Double",
    exchangerate: "Decimal",
    versionnumber: "BigInt",
    utcconversiontimezonecode: "Integer",
    entityimage_timestamp: "BigInt",
    actualserviceunits: "Integer",
    onholdtime: "Integer",
    influencescore: "Double",
    timezoneruleversionnumber: "Integer",
    // Optionsets
    statecode: "Optionset",
    contractservicelevelcode: "Optionset",
    prioritycode: "Optionset",
    casetypecode: "Optionset",
    caseorigincode: "Optionset",
    incidentstagecode: "Optionset",
    firstresponseslastatus: "Optionset",
    messagetypecode: "Optionset",
    servicestage: "Optionset",
    severitycode: "Optionset",
    customersatisfactioncode: "Optionset",
    statuscode: "Optionset",
    resolvebyslastatus: "Optionset",
    // Date Formats
    followupby: "DateOnly:UserLocal",
    escalatedon: "DateAndTime:UserLocal",
    responseby: "DateAndTime:UserLocal",
    createdon: "DateAndTime:UserLocal",
    overriddencreatedon: "DateOnly:UserLocal",
    resolveby: "DateAndTime:UserLocal",
    adx_resolutiondate: "DateAndTime:UserLocal",
    modifiedon: "DateAndTime:UserLocal",
    lastonholdtime: "DateAndTime:UserLocal",
  },
  navigation: {
    transactioncurrencyid: ["mscrm.transactioncurrency"],
    subjectid: ["mscrm.subject"],
    stageid_processstage: ["mscrm.processstage"],
    socialprofileid: ["mscrm.socialprofile"],
    responsiblecontactid: ["mscrm.contact"],
    resolvebykpiid: ["mscrm.slakpiinstance"],
    productid: ["mscrm.product"],
    primarycontactid: ["mscrm.contact"],
    parentcaseid: ["mscrm.incident"],
    owninguser: ["mscrm.systemuser"],
    owningteam: ["mscrm.team"],
    owningbusinessunit: ["mscrm.businessunit"],
    ownerid: ["mscrm.principal"],
    msdyn_incidenttype: ["mscrm.msdyn_incidenttype"],
    msdyn_IoTAlert: ["mscrm.msdyn_iotalert"],
    msdyn_FunctionalLocation: ["mscrm.msdyn_functionallocation"],
    msa_partnerid: ["mscrm.account"],
    msa_partnercontactid: ["mscrm.contact"],
    modifiedonbehalfby: ["mscrm.systemuser"],
    modifiedby: ["mscrm.systemuser"],
    masterid: ["mscrm.incident"],
    kbarticleid: ["mscrm.kbarticle"],
    firstresponsebykpiid: ["mscrm.slakpiinstance"],
    existingcase: ["mscrm.incident"],
    entitlementid: ["mscrm.entitlement"],
    createdonbehalfby: ["mscrm.systemuser"],
    createdby: ["mscrm.systemuser"],
    contractid: ["mscrm.contract"],
    contractdetailid: ["mscrm.contractdetail"],
    slainvokedid: ["sla"],
    customerid: ["account","contact"],
    slaid: ["sla"],
  },
};

// Attribute constants
export enum IncidentAttributes {
  SLAName = "slaname",
  NumberOfChildIncidents = "numberofchildincidents",
  OwningUser = "owninguser",
  ImportSequenceNumber = "importsequencenumber",
  ResolveByKPIIdName = "resolvebykpiidname",
  adx_publishtoweb = "adx_publishtoweb",
  FollowupBy = "followupby",
  EntitlementIdName = "entitlementidname",
  EntitlementId = "entitlementid",
  BlockedProfile = "blockedprofile",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  SubjectId = "subjectid",
  EmailAddress = "emailaddress",
  msdyn_IncidentType = "msdyn_incidenttype",
  msdyn_FunctionalLocation = "msdyn_functionallocation",
  Title = "title",
  msdyn_iotalert = "msdyn_iotalert",
  StateCode = "statecode",
  BilledServiceUnits = "billedserviceunits",
  msa_partneridName = "msa_partneridname",
  SLAInvokedId = "slainvokedid",
  ContractServiceLevelCode = "contractservicelevelcode",
  CustomerId = "customerid",
  OwnerIdName = "owneridname",
  EntityImageId = "entityimageid",
  msdyn_IncidentTypeName = "msdyn_incidenttypename",
  OwningTeam = "owningteam",
  SentimentValue = "sentimentvalue",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  ContactIdName = "contactidname",
  AccountIdName = "accountidname",
  ContractIdName = "contractidname",
  ContractId = "contractid",
  RouteCase = "routecase",
  IsEscalated = "isescalated",
  TransactionCurrencyId = "transactioncurrencyid",
  SLAInvokedIdName = "slainvokedidname",
  ActivitiesComplete = "activitiescomplete",
  ParentCaseIdName = "parentcaseidname",
  EscalatedOn = "escalatedon",
  ModifiedByName = "modifiedbyname",
  msdyn_iotalertName = "msdyn_iotalertname",
  ResponsibleContactIdYomiName = "responsiblecontactidyominame",
  ExchangeRate = "exchangerate",
  PriorityCode = "prioritycode",
  EntityImage_URL = "entityimage_url",
  KbArticleIdName = "kbarticleidname",
  PrimaryContactIdYomiName = "primarycontactidyominame",
  ContactIdYomiName = "contactidyominame",
  VersionNumber = "versionnumber",
  ResponsibleContactIdName = "responsiblecontactidname",
  SubjectIdName = "subjectidname",
  ResponseBy = "responseby",
  ModifiedByExternalPartyName = "modifiedbyexternalpartyname",
  ProductIdName = "productidname",
  CaseTypeCode = "casetypecode",
  ResponsibleContactId = "responsiblecontactid",
  CaseOriginCode = "caseorigincode",
  PrimaryContactIdName = "primarycontactidname",
  ContractDetailIdName = "contractdetailidname",
  ModifiedOnBehalfByName = "modifiedonbehalfbyname",
  CreatedOnBehalfBy = "createdonbehalfby",
  ContactId = "contactid",
  AccountId = "accountid",
  ContractDetailId = "contractdetailid",
  CustomerIdType = "customeridtype",
  CreatedOn = "createdon",
  MasterId = "masterid",
  OverriddenCreatedOn = "overriddencreatedon",
  IncidentStageCode = "incidentstagecode",
  OwnerId = "ownerid",
  KbArticleId = "kbarticleid",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  CreatedByExternalPartyYomiName = "createdbyexternalpartyyominame",
  Adx_CreatedByIPAddress = "adx_createdbyipaddress",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  SocialProfileIdName = "socialprofileidname",
  msa_partnerid = "msa_partnerid",
  ResolveBy = "resolveby",
  adx_resolutiondate = "adx_resolutiondate",
  FirstResponseSLAStatus = "firstresponseslastatus",
  TicketNumber = "ticketnumber",
  CustomerIdName = "customeridname",
  EntityImage_Timestamp = "entityimage_timestamp",
  msdyn_FunctionalLocationName = "msdyn_functionallocationname",
  ModifiedByExternalParty = "modifiedbyexternalparty",
  ModifiedByExternalPartyYomiName = "modifiedbyexternalpartyyominame",
  MessageTypeCode = "messagetypecode",
  ServiceStage = "servicestage",
  IsDecrementing = "isdecrementing",
  msa_partnercontactid = "msa_partnercontactid",
  CreatedByName = "createdbyname",
  msa_partnercontactidYomiName = "msa_partnercontactidyominame",
  OwnerIdYomiName = "owneridyominame",
  CreatedBy = "createdby",
  msa_partnercontactidName = "msa_partnercontactidname",
  CreatedByYomiName = "createdbyyominame",
  TransactionCurrencyIdName = "transactioncurrencyidname",
  CheckEmail = "checkemail",
  ActualServiceUnits = "actualserviceunits",
  adx_stepstoreproduce = "adx_stepstoreproduce",
  Merged = "merged",
  SeverityCode = "severitycode",
  FirstResponseByKPIIdName = "firstresponsebykpiidname",
  FollowUpTaskCreated = "followuptaskcreated",
  ModifiedOn = "modifiedon",
  ProcessId = "processid",
  SocialProfileId = "socialprofileid",
  CreatedByExternalParty = "createdbyexternalparty",
  ParentCaseId = "parentcaseid",
  ModifiedByYomiName = "modifiedbyyominame",
  OnHoldTime = "onholdtime",
  CustomerSatisfactionCode = "customersatisfactioncode",
  ModifiedOnBehalfByYomiName = "modifiedonbehalfbyyominame",
  DecrementEntitlementTerm = "decremententitlementterm",
  StatusCode = "statuscode",
  StageId = "stageid",
  SLAId = "slaid",
  LastOnHoldTime = "lastonholdtime",
  ResolveBySLAStatus = "resolvebyslastatus",
  CustomerContacted = "customercontacted",
  ExistingCase = "existingcase",
  FirstResponseSent = "firstresponsesent",
  IncidentId = "incidentid",
  Adx_CreatedByUsername = "adx_createdbyusername",
  FirstResponseByKPIId = "firstresponsebykpiid",
  Adx_ModifiedByIPAddress = "adx_modifiedbyipaddress",
  PrimaryContactId = "primarycontactid",
  msa_partneridYomiName = "msa_partneridyominame",
  adx_resolution = "adx_resolution",
  OwningBusinessUnit = "owningbusinessunit",
  ModifiedBy = "modifiedby",
  InfluenceScore = "influencescore",
  Adx_ModifiedByUsername = "adx_modifiedbyusername",
  OwnerIdType = "owneridtype",
  ProductId = "productid",
  TraversedPath = "traversedpath",
  ProductSerialNumber = "productserialnumber",
  Description = "description",
  CustomerIdYomiName = "customeridyominame",
  CreatedByExternalPartyName = "createdbyexternalpartyname",
  ResolveByKPIId = "resolvebykpiid",
  MasterIdName = "masteridname",
  TimeZoneRuleVersionNumber = "timezoneruleversionnumber",
  AccountIdYomiName = "accountidyominame",
  EntityImage = "entityimage",
}

// Early Bound Interface
export interface Incident extends IEntity {
  //  StringType
  slaname?: string | null;
  // Child Cases IntegerType Number of child incidents associated with the incident.
  numberofchildincidents?: number | null;
  // Owning User LookupType Unique identifier for the user that owns the record.
  owninguser?: import("dataverse-ify").EntityReference | null;
  // Import Sequence Number IntegerType Sequence number of the import that created this record.
  importsequencenumber?: number | null;
  //  StringType
  resolvebykpiidname?: string | null;
  // Publish to Web BooleanType If set to Yes, the case will be visible and searchable on portals connected to this organization.
  adx_publishtoweb?: boolean | null;
  // Follow Up By DateTimeType Enter the date by which a customer service representative has to follow up with the customer on this case. DateOnly:UserLocal
  followupby?: Date | null;
  //  StringType
  entitlementidname?: string | null;
  // Entitlement LookupType Choose the entitlement that is applicable for the case.
  entitlementid?: import("dataverse-ify").EntityReference | null;
  // Blocked Profile BooleanType Details whether the profile is blocked or not.
  blockedprofile?: boolean | null;
  // Modified By (Delegate) LookupType Shows who last updated the record on behalf of another user.
  modifiedonbehalfby?: import("dataverse-ify").EntityReference | null;
  // Subject LookupType Choose the subject for the case, such as catalog request or product complaint, so customer service managers can identify frequent requests or problem areas. Administrators can configure subjects under Business Management in the Settings area.
  subjectid?: import("dataverse-ify").EntityReference | null;
  // Email Address StringType The primary email address for the entity.
  emailaddress?: string | null;
  // Incident Type LookupType Unique identifier for Incident Type associated with Case.
  msdyn_incidenttype?: import("dataverse-ify").EntityReference | null;
  // Functional Location LookupType Case's functional location
  msdyn_functionallocation?: import("dataverse-ify").EntityReference | null;
  // Case Title [Required] StringType Type a subject or descriptive name, such as the request, issue, or company name, to identify the case in Microsoft Dynamics 365 views.
  title?: string;
  // IoT Alert LookupType The iot alert that initiated this case
  msdyn_iotalert?: import("dataverse-ify").EntityReference | null;
  // Status incident_incident_statecode Shows whether the case is active, resolved, or canceled. Resolved and canceled cases are read-only and can't be edited unless they are reactivated.
  statecode?: import("../enums/incident_incident_statecode").incident_incident_statecode | null;
  // Billed Service Units IntegerType Type the number of service units that were billed to the customer for the case.
  billedserviceunits?: number | null;
  //  StringType
  msa_partneridname?: string | null;
  // Last SLA applied LookupType Last SLA that was applied to this case. This field is for internal use only.
  slainvokedid?: import("dataverse-ify").EntityReference | null;
  // Service Level incident_incident_contractservicelevelcode Select the service level for the case to make sure the case is handled correctly.
  contractservicelevelcode?: import("../enums/incident_incident_contractservicelevelcode").incident_incident_contractservicelevelcode | null;
  // Customer CustomerType Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities.
  customerid?: import("dataverse-ify").EntityReference | null;
  //  StringType Name of the owner
  owneridname?: string | null;
  //  UniqueidentifierType
  entityimageid?: import("dataverse-ify").Guid | null;
  //  StringType
  msdyn_incidenttypename?: string | null;
  // Owning Team LookupType Unique identifier for the team that owns the record.
  owningteam?: import("dataverse-ify").EntityReference | null;
  // Sentiment Value DoubleType Value derived after assessing words commonly associated with a negative, neutral, or positive sentiment that occurs in a social post. Sentiment information can also be reported as numeric values.
  sentimentvalue?: number | null;
  //  StringType
  createdonbehalfbyname?: string | null;
  //  StringType
  contactidname?: string | null;
  //  StringType
  accountidname?: string | null;
  //  StringType
  contractidname?: string | null;
  // Contract LookupType Choose the service contract that the case should be logged under to make sure the customer is eligible for support services.
  contractid?: import("dataverse-ify").EntityReference | null;
  // Route Case BooleanType Tells whether the incident has been routed to queue or not.
  routecase?: boolean | null;
  // Is Escalated BooleanType Indicates if the case has been escalated.
  isescalated?: boolean | null;
  // Currency LookupType Choose the local currency for the record to make sure budgets are reported in the correct currency.
  transactioncurrencyid?: import("dataverse-ify").EntityReference | null;
  //  StringType
  slainvokedidname?: string | null;
  // Activities Complete BooleanType This attribute is used for Sample Service Business Processes.
  activitiescomplete?: boolean | null;
  //  StringType
  parentcaseidname?: string | null;
  // Escalated On DateTimeType Indicates the date and time when the case was escalated. DateAndTime:UserLocal
  escalatedon?: Date | null;
  //  StringType
  modifiedbyname?: string | null;
  //  StringType
  msdyn_iotalertname?: string | null;
  //  StringType
  responsiblecontactidyominame?: string | null;
  // Exchange Rate DecimalType Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency.
  exchangerate?: number | null;
  // Priority incident_incident_prioritycode Select the priority so that preferred customers or critical issues are handled quickly.
  prioritycode?: import("../enums/incident_incident_prioritycode").incident_incident_prioritycode | null;
  //  StringType
  entityimage_url?: string | null;
  //  StringType
  kbarticleidname?: string | null;
  //  StringType
  primarycontactidyominame?: string | null;
  //  StringType
  contactidyominame?: string | null;
  // Version Number BigIntType Version Number
  versionnumber?: number | null;
  //  StringType
  responsiblecontactidname?: string | null;
  //  StringType
  subjectidname?: string | null;
  // First Response By DateTimeType For internal use only. DateAndTime:UserLocal
  responseby?: Date | null;
  //  StringType
  modifiedbyexternalpartyname?: string | null;
  //  StringType
  productidname?: string | null;
  // Case Type incident_incident_casetypecode Select the type of case to identify the incident for use in case routing and analysis.
  casetypecode?: import("../enums/incident_incident_casetypecode").incident_incident_casetypecode | null;
  // Responsible Contact LookupType Choose an additional customer contact who can also help resolve the case.
  responsiblecontactid?: import("dataverse-ify").EntityReference | null;
  // Origin incident_caseorigincode Select how contact about the case was originated, such as email, phone, or web, for use in reporting and analysis.
  caseorigincode?: import("../enums/incident_caseorigincode").incident_caseorigincode | null;
  //  StringType
  primarycontactidname?: string | null;
  //  StringType
  contractdetailidname?: string | null;
  //  StringType
  modifiedonbehalfbyname?: string | null;
  // Created By (Delegate) LookupType Shows who created the record on behalf of another user.
  createdonbehalfby?: import("dataverse-ify").EntityReference | null;
  // Contact LookupType Unique identifier of the contact associated with the case.
  contactid?: import("dataverse-ify").EntityReference | null;
  // Account LookupType Unique identifier of the account with which the case is associated.
  accountid?: import("dataverse-ify").EntityReference | null;
  // Contract Line LookupType Choose the contract line that the case should be logged under to make sure the customer is charged correctly.
  contractdetailid?: import("dataverse-ify").EntityReference | null;
  // Customer Type [Required] EntityNameType
  customeridtype?: string;
  // Created On DateTimeType Date and time when the record was created. DateAndTime:UserLocal
  createdon?: Date | null;
  // Master Case LookupType Choose the primary case the current case was merged into.
  masterid?: import("dataverse-ify").EntityReference | null;
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: Date | null;
  // Case Stage incident_incident_incidentstagecode Select the current stage of the service process for the case to assist service team members when they review or transfer a case.
  incidentstagecode?: import("../enums/incident_incident_incidentstagecode").incident_incident_incidentstagecode | null;
  // Owner OwnerType Owner Id
  ownerid?: import("dataverse-ify").EntityReference | null;
  // Knowledge Base Article LookupType Choose the article that contains additional information or a resolution for the case, for reference during research or follow up with the customer.
  kbarticleid?: import("dataverse-ify").EntityReference | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
  //  StringType
  createdbyexternalpartyyominame?: string | null;
  // Created By IP Address StringType
  adx_createdbyipaddress?: string | null;
  //  StringType
  createdonbehalfbyyominame?: string | null;
  //  StringType
  socialprofileidname?: string | null;
  // Partner LookupType Creates a Relationship between a Partner (account) and a case for indirect service arrangements.
  msa_partnerid?: import("dataverse-ify").EntityReference | null;
  // Resolve By DateTimeType Enter the date by when the case must be resolved. DateAndTime:UserLocal
  resolveby?: Date | null;
  // Resolution Date DateTimeType DateAndTime:UserLocal
  adx_resolutiondate?: Date | null;
  // First Response SLA Status incident_incident_firstresponseslastatus Shows the status of the initial response time for the case according to the terms of the SLA.
  firstresponseslastatus?: import("../enums/incident_incident_firstresponseslastatus").incident_incident_firstresponseslastatus | null;
  // Case Number StringType Shows the case number for customer reference and searching capabilities. This cannot be modified.
  ticketnumber?: string | null;
  //  [Required] StringType
  customeridname?: string;
  //  BigIntType
  entityimage_timestamp?: number | null;
  //  StringType
  msdyn_functionallocationname?: string | null;
  // Modified By (External Party) LookupType Shows the external party who modified the record.
  modifiedbyexternalparty?: import("dataverse-ify").EntityReference | null;
  //  StringType
  modifiedbyexternalpartyyominame?: string | null;
  // Received As socialactivity_postmessagetype Shows whether the post originated as a public or private message.
  messagetypecode?: import("../enums/socialactivity_postmessagetype").socialactivity_postmessagetype | null;
  // Service Stage servicestage Select the stage, in the case resolution process, that the case is in.
  servicestage?: import("../enums/servicestage").servicestage | null;
  // Decrementing BooleanType For system use only.
  isdecrementing?: boolean | null;
  // Partner Contact LookupType Allows a partner contact to be assigned to a specific case.
  msa_partnercontactid?: import("dataverse-ify").EntityReference | null;
  //  StringType
  createdbyname?: string | null;
  //  StringType
  msa_partnercontactidyominame?: string | null;
  //  StringType Yomi name of the owner
  owneridyominame?: string | null;
  // Created By LookupType Shows who created the record.
  createdby?: import("dataverse-ify").EntityReference | null;
  //  StringType
  msa_partnercontactidname?: string | null;
  //  StringType
  createdbyyominame?: string | null;
  //  StringType
  transactioncurrencyidname?: string | null;
  // Check Email BooleanType This attribute is used for Sample Service Business Processes.
  checkemail?: boolean | null;
  // Actual Service Units IntegerType Type the number of service units that were actually required to resolve the case.
  actualserviceunits?: number | null;
  // Steps to Reproduce MemoType
  adx_stepstoreproduce?: string | null;
  // Internal Use Only BooleanType Tells whether the incident has been merged with another incident.
  merged?: boolean | null;
  // Severity incident_incident_severitycode Select the severity of this case to indicate the incident's impact on the customer's business.
  severitycode?: import("../enums/incident_incident_severitycode").incident_incident_severitycode | null;
  //  StringType
  firstresponsebykpiidname?: string | null;
  // Follow up Task Created BooleanType This attribute is used for Sample Service Business Processes.
  followuptaskcreated?: boolean | null;
  // Modified On DateTimeType Date and time when the record was modified. DateAndTime:UserLocal
  modifiedon?: Date | null;
  // Process Id UniqueidentifierType Contains the id of the process associated with the entity.
  processid?: import("dataverse-ify").Guid | null;
  // Social Profile LookupType Unique identifier of the social profile with which the case is associated.
  socialprofileid?: import("dataverse-ify").EntityReference | null;
  // Created By (External Party) LookupType Shows the external party who created the record.
  createdbyexternalparty?: import("dataverse-ify").EntityReference | null;
  // Parent Case LookupType Choose the parent case for a case.
  parentcaseid?: import("dataverse-ify").EntityReference | null;
  //  StringType
  modifiedbyyominame?: string | null;
  // On Hold Time (Minutes) IntegerType Shows the duration in minutes for which the case was on hold.
  onholdtime?: number | null;
  // Satisfaction incident_incident_customersatisfactioncode Select the customer's level of satisfaction with the handling and resolution of the case.
  customersatisfactioncode?: import("../enums/incident_incident_customersatisfactioncode").incident_incident_customersatisfactioncode | null;
  //  StringType
  modifiedonbehalfbyyominame?: string | null;
  // Decrement Entitlement Terms BooleanType Shows whether terms of the associated entitlement should be decremented or not.
  decremententitlementterm?: boolean | null;
  // Status Reason incident_incident_statuscode Select the case's status.
  statuscode?: import("../enums/incident_incident_statuscode").incident_incident_statuscode | null;
  // Stage Id UniqueidentifierType Contains the id of the stage where the entity is located.
  stageid?: import("dataverse-ify").Guid | null;
  // SLA LookupType Choose the service level agreement (SLA) that you want to apply to the case record.
  slaid?: import("dataverse-ify").EntityReference | null;
  // Last On Hold Time DateTimeType Contains the date time stamp of the last on hold time. DateAndTime:UserLocal
  lastonholdtime?: Date | null;
  // Resolve By SLA Status incident_incident_resolvebyslastatus Shows the status of the resolution time for the case according to the terms of the SLA.
  resolvebyslastatus?: import("../enums/incident_incident_resolvebyslastatus").incident_incident_resolvebyslastatus | null;
  // Customer Contacted BooleanType Tells whether customer service representative has contacted the customer or not.
  customercontacted?: boolean | null;
  // Existing Case LookupType Select an existing case for the customer that has been populated. For internal use only.
  existingcase?: import("dataverse-ify").EntityReference | null;
  // First Response Sent BooleanType Indicates if the first response has been sent.
  firstresponsesent?: boolean | null;
  // Case UniqueidentifierType Unique identifier of the case.
  incidentid?: import("dataverse-ify").Guid | null;
  // Created By Username StringType
  adx_createdbyusername?: string | null;
  // First Response By KPI LookupType For internal use only.
  firstresponsebykpiid?: import("dataverse-ify").EntityReference | null;
  // Modified By IP Address StringType
  adx_modifiedbyipaddress?: string | null;
  // Contact LookupType Select a primary contact for this case.
  primarycontactid?: import("dataverse-ify").EntityReference | null;
  //  StringType
  msa_partneridyominame?: string | null;
  // Resolution MemoType
  adx_resolution?: string | null;
  // Owning Business Unit LookupType Unique identifier for the business unit that owns the record
  owningbusinessunit?: import("dataverse-ify").EntityReference | null;
  // Modified By LookupType Shows who last updated the record.
  modifiedby?: import("dataverse-ify").EntityReference | null;
  // Influence Score DoubleType Will contain the Influencer score coming from NetBreeze.
  influencescore?: number | null;
  // Modified By Username StringType
  adx_modifiedbyusername?: string | null;
  //  EntityNameType Owner Id Type
  owneridtype?: string | null;
  // Product LookupType Choose the product associated with the case to identify warranty, service, or other product issues and be able to report the number of incidents for each product.
  productid?: import("dataverse-ify").EntityReference | null;
  // Traversed Path StringType A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur.
  traversedpath?: string | null;
  // Serial Number StringType Type the serial number of the product that is associated with this case, so that the number of cases per product can be reported.
  productserialnumber?: string | null;
  // Description MemoType Type additional information to describe the case to assist the service team in reaching a resolution.
  description?: string | null;
  //  [Required] StringType
  customeridyominame?: string;
  //  StringType
  createdbyexternalpartyname?: string | null;
  // Resolve By KPI LookupType For internal use only.
  resolvebykpiid?: import("dataverse-ify").EntityReference | null;
  //  StringType
  masteridname?: string | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  //  StringType
  accountidyominame?: string | null;
  // Entity Image ImageType The default image for the entity.
  entityimage?: string | null;
}
