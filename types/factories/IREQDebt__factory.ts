/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IREQDebt, IREQDebtInterface } from "../IREQDebt";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "debtor",
        type: "address",
      },
      {
        internalType: "bool",
        name: "add",
        type: "bool",
      },
    ],
    name: "changeDebt",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "debtBalances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IREQDebt__factory {
  static readonly abi = _abi;
  static createInterface(): IREQDebtInterface {
    return new utils.Interface(_abi) as IREQDebtInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IREQDebt {
    return new Contract(address, _abi, signerOrProvider) as IREQDebt;
  }
}
