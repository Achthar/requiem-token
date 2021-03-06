/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IAssetPricer, IAssetPricerInterface } from "../IAssetPricer";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "valuation",
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

export class IAssetPricer__factory {
  static readonly abi = _abi;
  static createInterface(): IAssetPricerInterface {
    return new utils.Interface(_abi) as IAssetPricerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAssetPricer {
    return new Contract(address, _abi, signerOrProvider) as IAssetPricer;
  }
}
