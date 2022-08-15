/* eslint-disable quotes */

import moment from "moment";
import { Account } from "../../dataverse-gen";

export interface AccountService {
  getAccountsWithNoActivitySince(date: Date): Promise<Account[]>;
  closeAccounts(accounts: Account[]): Promise<void>;
}

/*
Demonstrates how to create a service that wraps the Xrm.WebApi to make it easier to test
*/
describe("XrmWebApiNode", () => {
  it("creates accounts and retrieveMultiple by id", async () => {
    // Arrange
    const accountService = {
      getAccountsWithNoActivitySince: jest.fn(async () => {
        return [
          { accountid: "1", name: "Account 1" },
          { accountid: "2", name: "Account 2" },
        ] as Account[];
      }),
      closeAccounts: jest.fn(),
    } as AccountService;

    // Act
    const todaysDate = new Date("2022-05-11T05:00:00Z");
    const accounts = await closeInactiveAccounts(todaysDate, accountService);

    // Assert
    // Expect accounts with not activity for 2 months to be queried - without the time element
    expect(accountService.getAccountsWithNoActivitySince).toHaveBeenCalledWith(new Date("2022-03-11T00:00:00.000Z"));
    expect(accountService.closeAccounts).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({ accountid: "1" }),
        expect.objectContaining({ accountid: "2" }),
      ]),
    );

    expect(accounts).toHaveLength(2);
  }, 10000);
});

export async function closeInactiveAccounts(today: Date, accountService: AccountService): Promise<Account[]> {
  // Inactive accounts have no activities for 2 months
  const cutOffDate = moment.utc(today).startOf("day").subtract(2, "months");
  const accounts = await accountService.getAccountsWithNoActivitySince(cutOffDate.toDate());
  await accountService.closeAccounts(accounts);
  return accounts;
}
