/* eslint-disable*/
import { IEntity } from "dataverse-ify";
// Entity Opportunity
export const opportunityMetadata = {
  typeName: "mscrm.opportunity",
  logicalName: "opportunity",
  collectionName: "opportunities",
  primaryIdAttribute: "opportunityid",
  attributeTypes: {
    // Numeric Types
    freightamount_base: "Money",
    totaltax: "Money",
    discountamount: "Money",
    exchangerate: "Decimal",
    estimatedvalue: "Money",
    totaltax_base: "Money",
    totaldiscountamount_base: "Money",
    totalamountlessfreight_base: "Money",
    totalamountlessfreight: "Money",
    totallineitemamount_base: "Money",
    timezoneruleversionnumber: "Integer",
    totalamount: "Money",
    totallineitemdiscountamount: "Money",
    teamsfollowed: "Integer",
    budgetamount_base: "Money",
    msdyn_opportunityscore: "Integer",
    estimatedvalue_base: "Money",
    actualvalue: "Money",
    closeprobability: "Integer",
    budgetamount: "Money",
    discountamount_base: "Money",
    discountpercentage: "Decimal",
    utcconversiontimezonecode: "Integer",
    versionnumber: "BigInt",
    totallineitemamount: "Money",
    actualvalue_base: "Money",
    onholdtime: "Integer",
    totaldiscountamount: "Money",
    importsequencenumber: "Integer",
    totalamount_base: "Money",
    freightamount: "Money",
    totallineitemdiscountamount_base: "Money",
    // Optionsets
    statuscode: "Optionset",
    msdyn_opportunitygrade: "Optionset",
    msdyn_ordertype: "Optionset",
    statecode: "Optionset",
    opportunityratingcode: "Optionset",
    initialcommunication: "Optionset",
    skippricecalculation: "Optionset",
    need: "Optionset",
    salesstage: "Optionset",
    purchaseprocess: "Optionset",
    purchasetimeframe: "Optionset",
    budgetstatus: "Optionset",
    pricingerrorcode: "Optionset",
    adx_opportunitysource: "Optionset",
    prioritycode: "Optionset",
    adx_reasonforreturn: "Optionset",
    msdyn_forecastcategory: "Optionset",
    timeline: "Optionset",
    salesstagecode: "Optionset",
    msdyn_opportunityscoretrend: "Optionset",
    // Date Formats
    overriddencreatedon: "DateOnly:UserLocal",
    adx_accepteddate: "DateOnly:UserLocal",
    adx_wondate: "DateOnly:UserLocal",
    createdon: "DateAndTime:UserLocal",
    schedulefollowup_prospect: "DateOnly:UserLocal",
    modifiedon: "DateAndTime:UserLocal",
    adx_expirydate: "DateOnly:UserLocal",
    schedulefollowup_qualify: "DateOnly:UserLocal",
    finaldecisiondate: "DateOnly:DateOnly",
    estimatedclosedate: "DateOnly:DateOnly",
    scheduleproposalmeeting: "DateOnly:UserLocal",
    actualclosedate: "DateOnly:DateOnly",
    adx_delivereddate: "DateOnly:UserLocal",
    lastonholdtime: "DateAndTime:UserLocal",
  },
  navigation: {
    transactioncurrencyid: ["mscrm.transactioncurrency"],
    stageid_processstage: ["mscrm.processstage"],
    sla_opportunity_sla: ["mscrm.sla"],
    pricelevelid: ["mscrm.pricelevel"],
    parentcontactid: ["mscrm.contact"],
    parentaccountid: ["mscrm.account"],
    owninguser: ["mscrm.systemuser"],
    owningteam: ["mscrm.team"],
    owningbusinessunit: ["mscrm.businessunit"],
    ownerid: ["mscrm.principal"],
    originatingleadid: ["mscrm.lead"],
    msdyn_workordertype: ["mscrm.msdyn_workordertype"],
    msdyn_opportunitykpiid: ["mscrm.msdyn_opportunitykpiitem"],
    msdyn_PredictiveScoreId: ["mscrm.msdyn_predictivescore"],
    msdyn_ContractOrganizationalUnitId: ["mscrm.msdyn_organizationalunit"],
    msdyn_AccountManagerId: ["mscrm.systemuser"],
    msa_partneroppid: ["mscrm.contact"],
    msa_partnerid: ["mscrm.account"],
    modifiedonbehalfby: ["mscrm.systemuser"],
    modifiedby: ["mscrm.systemuser"],
    createdonbehalfby: ["mscrm.systemuser"],
    createdby: ["mscrm.systemuser"],
    campaignid: ["mscrm.campaign"],
    adx_TerritoryId: ["mscrm.territory"],
    adx_LeadTypeId: ["mscrm.adx_leadtype"],
    adx_DealRegistrationRequestId: ["mscrm.adx_dealregistrationrequest"],
    customerid: ["account","contact"],
    slainvokedid: ["sla"],
  },
};

// Attribute constants
export enum OpportunityAttributes {
  ConfirmInterest = "confirminterest",
  ProposedSolution = "proposedsolution",
  SLAInvokedIdName = "slainvokedidname",
  OverriddenCreatedOn = "overriddencreatedon",
  ModifiedBy = "modifiedby",
  msdyn_AccountManagerIdYomiName = "msdyn_accountmanageridyominame",
  StatusCode = "statuscode",
  IdentifyCustomerContacts = "identifycustomercontacts",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  OriginatingLeadIdYomiName = "originatingleadidyominame",
  TransactionCurrencyIdName = "transactioncurrencyidname",
  DecisionMaker = "decisionmaker",
  CompleteFinalProposal = "completefinalproposal",
  adx_AcceptedDate = "adx_accepteddate",
  msdyn_OpportunityGrade = "msdyn_opportunitygrade",
  ProcessId = "processid",
  OwningTeam = "owningteam",
  FreightAmount_Base = "freightamount_base",
  FileDebrief = "filedebrief",
  msdyn_OrderType = "msdyn_ordertype",
  adx_PartnerCollaboration = "adx_partnercollaboration",
  TotalTax = "totaltax",
  ModifiedOnBehalfByName = "modifiedonbehalfbyname",
  StateCode = "statecode",
  DiscountAmount = "discountamount",
  ParentAccountIdYomiName = "parentaccountidyominame",
  ParentAccountId = "parentaccountid",
  OpportunityRatingCode = "opportunityratingcode",
  ExchangeRate = "exchangerate",
  EstimatedValue = "estimatedvalue",
  StepName = "stepname",
  adx_DealRegistrationRequestIdName = "adx_dealregistrationrequestidname",
  DevelopProposal = "developproposal",
  ParentContactIdName = "parentcontactidname",
  msdyn_PredictiveScoreIdName = "msdyn_predictivescoreidname",
  OwnerId = "ownerid",
  CurrentSituation = "currentsituation",
  adx_WonDate = "adx_wondate",
  TotalTax_Base = "totaltax_base",
  adx_LeadTypeId = "adx_leadtypeid",
  CampaignIdName = "campaignidname",
  msdyn_PredictiveScoreId = "msdyn_predictivescoreid",
  PresentFinalProposal = "presentfinalproposal",
  TotalDiscountAmount_Base = "totaldiscountamount_base",
  IsRevenueSystemCalculated = "isrevenuesystemcalculated",
  TransactionCurrencyId = "transactioncurrencyid",
  CustomerIdYomiName = "customeridyominame",
  CreatedOn = "createdon",
  InitialCommunication = "initialcommunication",
  ModifiedByYomiName = "modifiedbyyominame",
  msdyn_AccountManagerId = "msdyn_accountmanagerid",
  adx_TerritoryId = "adx_territoryid",
  CustomerId = "customerid",
  ScheduleFollowup_Prospect = "schedulefollowup_prospect",
  TotalAmountLessFreight_Base = "totalamountlessfreight_base",
  OriginatingLeadIdName = "originatingleadidname",
  SendThankYouNote = "sendthankyounote",
  TotalAmountLessFreight = "totalamountlessfreight",
  TotalLineItemAmount_Base = "totallineitemamount_base",
  OwnerIdType = "owneridtype",
  adx_OpportuntiyProductsfromLead = "adx_opportuntiyproductsfromlead",
  dev1_ProcessName = "dev1_processname",
  ModifiedByName = "modifiedbyname",
  ModifiedOn = "modifiedon",
  msdyn_ScoreHistory = "msdyn_scorehistory",
  ContactIdYomiName = "contactidyominame",
  adx_ExpiryDate = "adx_expirydate",
  SkipPriceCalculation = "skippricecalculation",
  msdyn_ContractOrganizationalUnitIdName = "msdyn_contractorganizationalunitidname",
  msa_partneroppid = "msa_partneroppid",
  OwningUser = "owninguser",
  PriceLevelIdName = "pricelevelidname",
  msa_partneridName = "msa_partneridname",
  Need = "need",
  adx_LeadTypeIdName = "adx_leadtypeidname",
  TimeZoneRuleVersionNumber = "timezoneruleversionnumber",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  msdyn_ScoreReasons = "msdyn_scorereasons",
  SLAName = "slaname",
  ResolveFeedback = "resolvefeedback",
  ParentAccountIdName = "parentaccountidname",
  ScheduleFollowup_Qualify = "schedulefollowup_qualify",
  msa_partnerid = "msa_partnerid",
  SalesStage = "salesstage",
  QualificationComments = "qualificationcomments",
  msa_partneroppidYomiName = "msa_partneroppidyominame",
  PurchaseProcess = "purchaseprocess",
  OwnerIdName = "owneridname",
  PurchaseTimeframe = "purchasetimeframe",
  msdyn_WorkOrderType = "msdyn_workordertype",
  TotalAmount = "totalamount",
  TotalLineItemDiscountAmount = "totallineitemdiscountamount",
  BudgetStatus = "budgetstatus",
  TeamsFollowed = "teamsfollowed",
  BudgetAmount_Base = "budgetamount_base",
  adx_ReadyforDistribution = "adx_readyfordistribution",
  PricingErrorCode = "pricingerrorcode",
  adx_PartnerCreated = "adx_partnercreated",
  FinalDecisionDate = "finaldecisiondate",
  msdyn_OpportunityScore = "msdyn_opportunityscore",
  EstimatedValue_Base = "estimatedvalue_base",
  adx_OpportunitySource = "adx_opportunitysource",
  SLAInvokedId = "slainvokedid",
  ActualValue = "actualvalue",
  msdyn_ContractOrganizationalUnitId = "msdyn_contractorganizationalunitid",
  IdentifyCompetitors = "identifycompetitors",
  msa_partneridYomiName = "msa_partneridyominame",
  TimeSpentByMeOnEmailAndMeetings = "timespentbymeonemailandmeetings",
  msdyn_gdproptout = "msdyn_gdproptout",
  CreatedOnBehalfBy = "createdonbehalfby",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  EstimatedCloseDate = "estimatedclosedate",
  PriorityCode = "prioritycode",
  CloseProbability = "closeprobability",
  adx_ReasonforReturn = "adx_reasonforreturn",
  adx_DealRegistrationRequestId = "adx_dealregistrationrequestid",
  CustomerPainPoints = "customerpainpoints",
  ScheduleProposalMeeting = "scheduleproposalmeeting",
  msdyn_forecastcategory = "msdyn_forecastcategory",
  AccountIdName = "accountidname",
  SLAId = "slaid",
  msa_partneroppidName = "msa_partneroppidname",
  ActualCloseDate = "actualclosedate",
  OriginatingLeadId = "originatingleadid",
  OwningBusinessUnit = "owningbusinessunit",
  adx_DeliveredDate = "adx_delivereddate",
  IsPrivate = "isprivate",
  BudgetAmount = "budgetamount",
  DiscountAmount_Base = "discountamount_base",
  LastOnHoldTime = "lastonholdtime",
  msdyn_AccountManagerIdName = "msdyn_accountmanageridname",
  TimeLine = "timeline",
  DiscountPercentage = "discountpercentage",
  Description = "description",
  StageId = "stageid",
  EmailAddress = "emailaddress",
  adx_TerritoryIdName = "adx_territoryidname",
  CustomerNeed = "customerneed",
  AccountId = "accountid",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  msdyn_WorkOrderTypeName = "msdyn_workordertypename",
  ContactId = "contactid",
  VersionNumber = "versionnumber",
  OwnerIdYomiName = "owneridyominame",
  StepId = "stepid",
  TotalLineItemAmount = "totallineitemamount",
  adx_FeedbackYet = "adx_feedbackyet",
  ParentContactIdYomiName = "parentcontactidyominame",
  ContactIdName = "contactidname",
  CampaignId = "campaignid",
  ActualValue_Base = "actualvalue_base",
  TraversedPath = "traversedpath",
  OnHoldTime = "onholdtime",
  msdyn_similaropportunities = "msdyn_similaropportunities",
  CreatedByYomiName = "createdbyyominame",
  msdyn_opportunitykpiidName = "msdyn_opportunitykpiidname",
  CaptureProposalFeedback = "captureproposalfeedback",
  TotalDiscountAmount = "totaldiscountamount",
  AccountIdYomiName = "accountidyominame",
  PursuitDecision = "pursuitdecision",
  PriceLevelId = "pricelevelid",
  CustomerIdType = "customeridtype",
  SalesStageCode = "salesstagecode",
  CreatedBy = "createdby",
  CreatedByName = "createdbyname",
  msdyn_OpportunityScoreTrend = "msdyn_opportunityscoretrend",
  IdentifyPursuitTeam = "identifypursuitteam",
  CompleteInternalReview = "completeinternalreview",
  ParentContactId = "parentcontactid",
  QuoteComments = "quotecomments",
  CustomerIdName = "customeridname",
  PresentProposal = "presentproposal",
  ModifiedOnBehalfByYomiName = "modifiedonbehalfbyyominame",
  msdyn_opportunitykpiid = "msdyn_opportunitykpiid",
  ImportSequenceNumber = "importsequencenumber",
  TotalAmount_Base = "totalamount_base",
  adx_ReferenceCode = "adx_referencecode",
  Name = "name",
  EvaluateFit = "evaluatefit",
  ParticipatesInWorkflow = "participatesinworkflow",
  dev1_StageName = "dev1_stagename",
  FreightAmount = "freightamount",
  OpportunityId = "opportunityid",
  TotalLineItemDiscountAmount_Base = "totallineitemdiscountamount_base",
}

// Early Bound Interface
export interface Opportunity extends IEntity {
  // Confirm Interest BooleanType Select whether the lead confirmed interest in your offerings. This helps in determining the lead quality and the probability of it turning into an opportunity.
  confirminterest?: boolean | null;
  // Proposed Solution MemoType Type notes about the proposed solution for the opportunity.
  proposedsolution?: string | null;
  //  StringType
  slainvokedidname?: string | null;
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: Date | null;
  // Modified By LookupType Shows who last updated the record.
  modifiedby?: import("dataverse-ify").EntityReference | null;
  //  StringType
  msdyn_accountmanageridyominame?: string | null;
  // Status Reason opportunity_opportunity_statuscode Reason for the status of the opportunity.
  statuscode?: import("../enums/opportunity_opportunity_statuscode").opportunity_opportunity_statuscode | null;
  // Identify Customer Contacts BooleanType Select whether the customer contacts for this opportunity have been identified.
  identifycustomercontacts?: boolean | null;
  // Modified By (Delegate) LookupType Shows who last updated the record on behalf of another user.
  modifiedonbehalfby?: import("dataverse-ify").EntityReference | null;
  //  StringType
  originatingleadidyominame?: string | null;
  //  StringType
  transactioncurrencyidname?: string | null;
  // Decision Maker? BooleanType Select whether your notes include information about who makes the purchase decisions at the lead's company.
  decisionmaker?: boolean | null;
  // Final Proposal Ready BooleanType Select whether a final proposal has been completed for the opportunity.
  completefinalproposal?: boolean | null;
  // Accepted Date DateTimeType DateOnly:UserLocal
  adx_accepteddate?: Date | null;
  // Opportunity Grade msdyn_opportunitygradeoptset
  msdyn_opportunitygrade?: import("../enums/msdyn_opportunitygradeoptset").msdyn_opportunitygradeoptset | null;
  // Process Id UniqueidentifierType Contains the id of the process associated with the entity.
  processid?: import("dataverse-ify").Guid | null;
  // Owning Team LookupType Unique identifier for the team that owns the record.
  owningteam?: import("dataverse-ify").EntityReference | null;
  // Freight Amount (Base) MoneyType Value of the Freight Amount in base currency.
  freightamount_base?: number | null;
  // File Debrief BooleanType Choose whether the sales team has recorded detailed notes on the proposals and the account's responses.
  filedebrief?: boolean | null;
  // Order Type opportunity_msdyn_opportunity_msdyn_ordertype Internal use only.
  msdyn_ordertype?: import("../enums/opportunity_msdyn_opportunity_msdyn_ordertype").opportunity_msdyn_opportunity_msdyn_ordertype | null;
  // Partner Collaboration BooleanType
  adx_partnercollaboration?: boolean | null;
  // Total Tax MoneyType Shows the total of the Tax amounts specified on all products included in the opportunity, included in the Total Amount field calculation for the opportunity.
  totaltax?: number | null;
  //  StringType
  modifiedonbehalfbyname?: string | null;
  // Status opportunity_opportunity_statecode Shows whether the opportunity is open, won, or lost. Won and lost opportunities are read-only and can't be edited until they are reactivated.
  statecode?: import("../enums/opportunity_opportunity_statecode").opportunity_opportunity_statecode | null;
  // Opportunity Discount Amount MoneyType Type the discount amount for the opportunity if the customer is eligible for special savings.
  discountamount?: number | null;
  //  StringType
  parentaccountidyominame?: string | null;
  // Account LookupType Choose an account to connect this opportunity to, so that the relationship is visible in reports and analytics, and to provide a quick link to additional details, such as financial information and activities.
  parentaccountid?: import("dataverse-ify").EntityReference | null;
  // Rating opportunity_opportunity_opportunityratingcode Select the expected value or priority of the opportunity based on revenue, customer status, or closing probability.
  opportunityratingcode?: import("../enums/opportunity_opportunity_opportunityratingcode").opportunity_opportunity_opportunityratingcode | null;
  // Exchange Rate DecimalType Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency.
  exchangerate?: number | null;
  // Est. Revenue MoneyType Type the estimated revenue amount to indicate the potential sale or value of the opportunity for revenue forecasting. This field can be either system-populated or editable based on the selection in the Revenue field.
  estimatedvalue?: number | null;
  // Pipeline Phase StringType Shows the current phase in the sales pipeline for the opportunity. This is updated by a workflow.
  stepname?: string | null;
  //  StringType
  adx_dealregistrationrequestidname?: string | null;
  // Develop Proposal BooleanType Select whether a proposal has been developed for the opportunity.
  developproposal?: boolean | null;
  //  StringType
  parentcontactidname?: string | null;
  //  StringType
  msdyn_predictivescoreidname?: string | null;
  // Owner OwnerType Owner Id
  ownerid?: import("dataverse-ify").EntityReference | null;
  // Current Situation MemoType Type notes about the company or organization associated with the opportunity.
  currentsituation?: string | null;
  // Won Date DateTimeType DateOnly:UserLocal
  adx_wondate?: Date | null;
  // Total Tax (Base) MoneyType Value of the Total Tax in base currency.
  totaltax_base?: number | null;
  // Lead Type LookupType Unique identifier for Lead Type associated with Opportunity.
  adx_leadtypeid?: import("dataverse-ify").EntityReference | null;
  //  StringType
  campaignidname?: string | null;
  // Predictive Score LookupType Predictive score
  msdyn_predictivescoreid?: import("dataverse-ify").EntityReference | null;
  // Present Final Proposal BooleanType Select whether the final proposal has been presented to the account.
  presentfinalproposal?: boolean | null;
  // Total Discount Amount (Base) MoneyType Value of the Total Discount Amount in base currency.
  totaldiscountamount_base?: number | null;
  // Revenue BooleanType Select whether the estimated revenue for the opportunity is calculated automatically based on the products entered or entered manually by a user.
  isrevenuesystemcalculated?: boolean | null;
  // Currency [Required] LookupType Choose the local currency for the record to make sure budgets are reported in the correct currency.
  transactioncurrencyid?: import("dataverse-ify").EntityReference;
  //  [Required] StringType
  customeridyominame?: string;
  // Created On DateTimeType Date and time when the record was created. DateAndTime:UserLocal
  createdon?: Date | null;
  // Initial Communication initialcommunication Choose whether someone from the sales team contacted this lead earlier.
  initialcommunication?: import("../enums/initialcommunication").initialcommunication | null;
  //  StringType
  modifiedbyyominame?: string | null;
  // Account Manager LookupType The account manager responsible for the opportunity.
  msdyn_accountmanagerid?: import("dataverse-ify").EntityReference | null;
  // Territory LookupType Unique identifier for Territory associated with Opportunity.
  adx_territoryid?: import("dataverse-ify").EntityReference | null;
  // Potential Customer [Required] CustomerType Select the customer account or contact to provide a quick link to additional customer details, such as address, phone number, activities, and orders.
  customerid?: import("dataverse-ify").EntityReference;
  // Scheduled Follow up (Prospect) DateTimeType Enter the date and time of the prospecting follow-up meeting with the lead. DateOnly:UserLocal
  schedulefollowup_prospect?: Date | null;
  // Total Pre-Freight Amount (Base) MoneyType Value of the Total Pre-Freight Amount in base currency.
  totalamountlessfreight_base?: number | null;
  //  StringType
  originatingleadidname?: string | null;
  // Send Thank You Note BooleanType Select whether a thank you note has been sent to the account for considering the proposal.
  sendthankyounote?: boolean | null;
  // Total Pre-Freight Amount MoneyType Shows the total product amount for the opportunity, minus any discounts. This value is added to freight and tax amounts in the calculation for the total amount of the opportunity.
  totalamountlessfreight?: number | null;
  // Total Detail Amount (Base) MoneyType Value of the Total Detail Amount in base currency.
  totallineitemamount_base?: number | null;
  //  EntityNameType Owner Id Type
  owneridtype?: string | null;
  // Opportuntiy Products from Lead MemoType
  adx_opportuntiyproductsfromlead?: string | null;
  // Process Name StringType
  dev1_processname?: string | null;
  //  StringType
  modifiedbyname?: string | null;
  // Modified On DateTimeType Date and time when the record was modified. DateAndTime:UserLocal
  modifiedon?: Date | null;
  // Score History MemoType
  msdyn_scorehistory?: string | null;
  //  StringType
  contactidyominame?: string | null;
  // Expiry Date DateTimeType DateOnly:UserLocal
  adx_expirydate?: Date | null;
  // Skip Price Calculation qooi_skippricecalculation Skip Price Calculation (For Internal Use)
  skippricecalculation?: import("../enums/qooi_skippricecalculation").qooi_skippricecalculation | null;
  //  StringType
  msdyn_contractorganizationalunitidname?: string | null;
  // Partner Contact LookupType Unique identifier for Contact associated with Opportunity.
  msa_partneroppid?: import("dataverse-ify").EntityReference | null;
  // Owning User LookupType Unique identifier for the user that owns the record.
  owninguser?: import("dataverse-ify").EntityReference | null;
  //  StringType
  pricelevelidname?: string | null;
  //  StringType
  msa_partneridname?: string | null;
  // Need need Choose how high the level of need is for the lead's company.
  need?: import("../enums/need").need | null;
  //  StringType
  adx_leadtypeidname?: string | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  //  StringType
  createdonbehalfbyyominame?: string | null;
  // Score Reasons MemoType
  msdyn_scorereasons?: string | null;
  //  StringType
  slaname?: string | null;
  // Feedback Resolved BooleanType Choose whether the proposal feedback has been captured and resolved for the opportunity.
  resolvefeedback?: boolean | null;
  //  StringType
  parentaccountidname?: string | null;
  // Scheduled Follow up (Qualify) DateTimeType Enter the date and time of the qualifying follow-up meeting with the lead. DateOnly:UserLocal
  schedulefollowup_qualify?: Date | null;
  // Partner LookupType Unique identifier for Account associated with Opportunity.
  msa_partnerid?: import("dataverse-ify").EntityReference | null;
  // Sales Stage opportunity_salesstage Select the sales stage of this opportunity to aid the sales team in their efforts to win this opportunity.
  salesstage?: import("../enums/opportunity_salesstage").opportunity_salesstage | null;
  // Qualification Comments MemoType Type comments about the qualification or scoring of the lead.
  qualificationcomments?: string | null;
  //  StringType
  msa_partneroppidyominame?: string | null;
  // Purchase Process purchaseprocess Choose whether an individual or a committee will be involved in the  purchase process for the lead.
  purchaseprocess?: import("../enums/purchaseprocess").purchaseprocess | null;
  //  StringType Name of the owner
  owneridname?: string | null;
  // Purchase Timeframe purchasetimeframe Choose how long the lead will likely take to make the purchase.
  purchasetimeframe?: import("../enums/purchasetimeframe").purchasetimeframe | null;
  // Work Order Type LookupType Unique identifier for Work Order Type associated with Opportunity.
  msdyn_workordertype?: import("dataverse-ify").EntityReference | null;
  // Total Amount MoneyType Shows the total amount due, calculated as the sum of the products, discounts, freight, and taxes for the opportunity.
  totalamount?: number | null;
  // Total Line Item Discount Amount MoneyType Shows the total of the Manual Discount amounts specified on all products included in the opportunity. This value is reflected in the Total Detail Amount field on the opportunity and is added to any discount amount or rate specified on the opportunity.
  totallineitemdiscountamount?: number | null;
  // Budget budgetstatus Select the likely budget status for the lead's company. This may help determine the lead rating or your sales approach.
  budgetstatus?: import("../enums/budgetstatus").budgetstatus | null;
  // TeamsFollowed IntegerType Number of users or conversations followed the record
  teamsfollowed?: number | null;
  // Budget Amount (Base) MoneyType Value of the Budget Amount in base currency.
  budgetamount_base?: number | null;
  // Ready for Distribution BooleanType
  adx_readyfordistribution?: boolean | null;
  // Pricing Error  qooi_pricingerrorcode Pricing error for the opportunity.
  pricingerrorcode?: import("../enums/qooi_pricingerrorcode").qooi_pricingerrorcode | null;
  // Partner Created BooleanType
  adx_partnercreated?: boolean | null;
  // Final Decision Date DateTimeType Enter the date and time when the final decision of the opportunity was made. DateOnly:DateOnly
  finaldecisiondate?: Date | null;
  // Opportunity Score IntegerType
  msdyn_opportunityscore?: number | null;
  // Est. Revenue (Base) MoneyType Value of the Est. Revenue in base currency.
  estimatedvalue_base?: number | null;
  // Opportunity Source opportunity_adx_opportunity_adx_opportunitysource
  adx_opportunitysource?: import("../enums/opportunity_adx_opportunity_adx_opportunitysource").opportunity_adx_opportunity_adx_opportunitysource | null;
  // Last SLA applied LookupType Last SLA that was applied to this opportunity. This field is for internal use only.
  slainvokedid?: import("dataverse-ify").EntityReference | null;
  // Actual Revenue MoneyType Type the actual revenue amount for the opportunity for reporting and analysis of estimated versus actual sales. Field defaults to the Est. Revenue value when an opportunity is won.
  actualvalue?: number | null;
  // Contracting Unit LookupType The organizational unit in charge of the opportunity.
  msdyn_contractorganizationalunitid?: import("dataverse-ify").EntityReference | null;
  // Identify Competitors BooleanType Select whether information about competitors is included.
  identifycompetitors?: boolean | null;
  //  StringType
  msa_partneridyominame?: string | null;
  // Time Spent by me StringType Total time spent for emails (read and write) and meetings by me in relation to the opportunity record.
  timespentbymeonemailandmeetings?: string | null;
  // GDPR Optout BooleanType Describes whether opportunity is opted out or not
  msdyn_gdproptout?: boolean | null;
  // Created By (Delegate) LookupType Shows who created the record on behalf of another user.
  createdonbehalfby?: import("dataverse-ify").EntityReference | null;
  //  StringType
  createdonbehalfbyname?: string | null;
  // Est. Close Date DateTimeType Enter the expected closing date of the opportunity to help make accurate revenue forecasts. DateOnly:DateOnly
  estimatedclosedate?: Date | null;
  // Priority opportunity_opportunity_prioritycode Select the priority so that preferred customers or critical issues are handled quickly.
  prioritycode?: import("../enums/opportunity_opportunity_prioritycode").opportunity_opportunity_prioritycode | null;
  // Probability IntegerType Type a number from 0 to 100 that represents the likelihood of closing the opportunity. This can aid the sales team in their efforts to convert the opportunity in a sale.
  closeprobability?: number | null;
  // Reason for Return opportunity_adx_opportunity_adx_reasonforreturn
  adx_reasonforreturn?: import("../enums/opportunity_adx_opportunity_adx_reasonforreturn").opportunity_adx_opportunity_adx_reasonforreturn | null;
  // Deal Registration Request LookupType
  adx_dealregistrationrequestid?: import("dataverse-ify").EntityReference | null;
  // Customer Pain Points MemoType Type notes about the customer's pain points to help the sales team identify products and services that could address these pain points.
  customerpainpoints?: string | null;
  // Schedule Proposal Meeting DateTimeType Enter the date and time of the proposal meeting for the opportunity. DateOnly:UserLocal
  scheduleproposalmeeting?: Date | null;
  // Forecast category opportunity_msdyn_opportunity_msdyn_forecastcategory Categories used for forecasting.
  msdyn_forecastcategory?: import("../enums/opportunity_msdyn_opportunity_msdyn_forecastcategory").opportunity_msdyn_opportunity_msdyn_forecastcategory | null;
  //  StringType
  accountidname?: string | null;
  // SLA LookupType Choose the service level agreement (SLA) that you want to apply to the opportunity record.
  slaid?: import("dataverse-ify").EntityReference | null;
  //  StringType
  msa_partneroppidname?: string | null;
  // Actual Close Date DateTimeType Shows the date and time when the opportunity was closed or canceled. DateOnly:DateOnly
  actualclosedate?: Date | null;
  // Originating Lead LookupType Choose the lead that the opportunity was created from for reporting and analytics. The field is read-only after the opportunity is created and defaults to the correct lead when an opportunity is created from a converted lead.
  originatingleadid?: import("dataverse-ify").EntityReference | null;
  // Owning Business Unit LookupType Unique identifier for the business unit that owns the record
  owningbusinessunit?: import("dataverse-ify").EntityReference | null;
  // Delivered Date DateTimeType DateOnly:UserLocal
  adx_delivereddate?: Date | null;
  // Is Private BooleanType Indicates whether the opportunity is private or visible to the entire organization.
  isprivate?: boolean | null;
  // Budget Amount MoneyType Type a value between 0 and 1,000,000,000,000 to indicate the lead's potential available budget.
  budgetamount?: number | null;
  // Opportunity Discount Amount (Base) MoneyType Value of the Opportunity Discount Amount in base currency.
  discountamount_base?: number | null;
  // Last On Hold Time DateTimeType Contains the date time stamp of the last on hold time. DateAndTime:UserLocal
  lastonholdtime?: Date | null;
  //  StringType
  msdyn_accountmanageridname?: string | null;
  // Timeline opportunity_opportunity_timeline Select when the opportunity is likely to be closed.
  timeline?: import("../enums/opportunity_opportunity_timeline").opportunity_opportunity_timeline | null;
  // Opportunity Discount (%) DecimalType Type the discount rate that should be applied to the Product Totals field to include additional savings for the customer in the opportunity.
  discountpercentage?: number | null;
  // Description MemoType Type additional information to describe the opportunity, such as possible products to sell or past purchases from the customer.
  description?: string | null;
  // Stage Id UniqueidentifierType Contains the id of the stage where the entity is located.
  stageid?: import("dataverse-ify").Guid | null;
  // Email Address StringType The primary email address for the entity.
  emailaddress?: string | null;
  //  StringType
  adx_territoryidname?: string | null;
  // Customer Need MemoType Type some notes about the customer's requirements, to help the sales team identify products and services that could meet their requirements.
  customerneed?: string | null;
  // Account LookupType Unique identifier of the account with which the opportunity is associated.
  accountid?: import("dataverse-ify").EntityReference | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
  //  StringType
  msdyn_workordertypename?: string | null;
  // Contact LookupType Unique identifier of the contact associated with the opportunity.
  contactid?: import("dataverse-ify").EntityReference | null;
  // Version Number BigIntType Version Number
  versionnumber?: number | null;
  //  StringType Yomi name of the owner
  owneridyominame?: string | null;
  // Step UniqueidentifierType Shows the ID of the workflow step.
  stepid?: import("dataverse-ify").Guid | null;
  // Total Detail Amount MoneyType Shows the sum of all existing and write-in products included on the opportunity, based on the specified price list and quantities.
  totallineitemamount?: number | null;
  // Feedback Yet? BooleanType
  adx_feedbackyet?: boolean | null;
  //  StringType
  parentcontactidyominame?: string | null;
  //  StringType
  contactidname?: string | null;
  // Source Campaign LookupType Shows the campaign that the opportunity was created from. The ID is used for tracking the success of the campaign.
  campaignid?: import("dataverse-ify").EntityReference | null;
  // Actual Revenue (Base) MoneyType Value of the Actual Revenue in base currency.
  actualvalue_base?: number | null;
  // Traversed Path StringType A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur.
  traversedpath?: string | null;
  // On Hold Time (Minutes) IntegerType Shows the duration in minutes for which the opportunity was on hold.
  onholdtime?: number | null;
  // msdyn_similaropportunities MemoType
  msdyn_similaropportunities?: string | null;
  //  StringType
  createdbyyominame?: string | null;
  //  StringType
  msdyn_opportunitykpiidname?: string | null;
  // Proposal Feedback Captured BooleanType Choose whether the proposal feedback has been captured for the opportunity.
  captureproposalfeedback?: boolean | null;
  // Total Discount Amount MoneyType Shows the total discount amount, based on the discount price and rate entered on the opportunity.
  totaldiscountamount?: number | null;
  //  StringType
  accountidyominame?: string | null;
  // Decide Go/No-Go BooleanType Select whether the decision about pursuing the opportunity has been made.
  pursuitdecision?: boolean | null;
  // Price List LookupType Choose the price list associated with this record to make sure the products associated with the campaign are offered at the correct prices.
  pricelevelid?: import("dataverse-ify").EntityReference | null;
  // Potential Customer Type [Required] EntityNameType
  customeridtype?: string;
  // Process Code opportunity_opportunity_salesstagecode Select the sales process stage for the opportunity to indicate the probability of closing the opportunity.
  salesstagecode?: import("../enums/opportunity_opportunity_salesstagecode").opportunity_opportunity_salesstagecode | null;
  // Created By LookupType Shows who created the record.
  createdby?: import("dataverse-ify").EntityReference | null;
  //  StringType
  createdbyname?: string | null;
  // Opportunity Score Trend msdyn_opportunityscoretrendoptset
  msdyn_opportunityscoretrend?: import("../enums/msdyn_opportunityscoretrendoptset").msdyn_opportunityscoretrendoptset | null;
  // Identify Sales Team BooleanType Choose whether you have recorded who will pursue the opportunity.
  identifypursuitteam?: boolean | null;
  // Complete Internal Review BooleanType Select whether an internal review has been completed for this opportunity.
  completeinternalreview?: boolean | null;
  // Contact LookupType Choose a contact to connect this opportunity to, so that the relationship is visible in reports and analytics.
  parentcontactid?: import("dataverse-ify").EntityReference | null;
  // Quote Comments MemoType Type comments about the quotes associated with the opportunity.
  quotecomments?: string | null;
  //  [Required] StringType
  customeridname?: string;
  // Presented Proposal BooleanType Select whether a proposal for the opportunity has been presented to the account.
  presentproposal?: boolean | null;
  //  StringType
  modifiedonbehalfbyyominame?: string | null;
  // KPI LookupType Maps to opportunity KPI records
  msdyn_opportunitykpiid?: import("dataverse-ify").EntityReference | null;
  // Import Sequence Number IntegerType Sequence number of the import that created this record.
  importsequencenumber?: number | null;
  // Total Amount (Base) MoneyType Value of the Total Amount in base currency.
  totalamount_base?: number | null;
  // Reference Code StringType
  adx_referencecode?: string | null;
  // Topic [Required] StringType Type a subject or descriptive name, such as the expected order or company name, for the opportunity.
  name?: string;
  // Evaluate Fit BooleanType Select whether the fit between the lead's requirements and your offerings was evaluated.
  evaluatefit?: boolean | null;
  // Participates in Workflow BooleanType Information about whether the opportunity participates in workflow rules.
  participatesinworkflow?: boolean | null;
  // Stage Name StringType
  dev1_stagename?: string | null;
  // Freight Amount MoneyType Type the cost of freight or shipping for the products included in the opportunity for use in calculating the Total Amount field.
  freightamount?: number | null;
  // Opportunity UniqueidentifierType Unique identifier of the opportunity.
  opportunityid?: import("dataverse-ify").Guid | null;
  // Total Line Item Discount Amount (Base) MoneyType Value of the Total Line Item Discount Amount in base currency.
  totallineitemdiscountamount_base?: number | null;
}
