// SPDX-License-Identifier: AGPL-3.0
pragma solidity >=0.8.17;

interface IREQDebt {
  function changeDebt(
    uint256 amount,
    address debtor,
    bool add
  ) external;

  function debtBalances(address _address) external view returns (uint256);
}
