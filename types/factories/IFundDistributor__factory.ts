/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IFundDistributor,
  IFundDistributorInterface,
} from "../IFundDistributor";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "distributeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IFundDistributor__factory {
  static readonly abi = _abi;
  static createInterface(): IFundDistributorInterface {
    return new utils.Interface(_abi) as IFundDistributorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IFundDistributor {
    return new Contract(address, _abi, signerOrProvider) as IFundDistributor;
  }
}
