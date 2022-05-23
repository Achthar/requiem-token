/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  RequiemPairBondingCalculator,
  RequiemPairBondingCalculatorInterface,
} from "../RequiemPairBondingCalculator";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_QUOTE",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "QUOTE",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_pair",
        type: "address",
      },
    ],
    name: "getTotalValue",
    outputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_pair",
        type: "address",
      },
    ],
    name: "markdown",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "_pair",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "valuation",
    outputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051610a1e380380610a1e83398101604081905261002f91610053565b6001600160a01b03811661004257600080fd5b6001600160a01b0316608052610083565b60006020828403121561006557600080fd5b81516001600160a01b038116811461007c57600080fd5b9392505050565b6080516109736100ab6000396000818160a201528181610329015261039d01526109736000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806332da80a3146100515780634249719f14610077578063686375491461008a5780639c5798391461009d575b600080fd5b61006461005f3660046105b1565b6100e9565b6040519081526020015b60405180910390f35b6100646100853660046105ce565b6100fa565b6100646100983660046105b1565b61018f565b6100c47f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161006e565b60006100f48261018f565b92915050565b6000806101068461018f565b905060008473ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610155573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061017991906105fa565b9050610186828583610457565b95945050505050565b60008060008373ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b8152600401606060405180830381865afa1580156101df573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610203919061064a565b506dffffffffffffffffffffffffffff1691506dffffffffffffffffffffffffffff1691506000808573ffffffffffffffffffffffffffffffffffffffff166332bfe4696040518163ffffffff1660e01b81526004016040805180830381865afa158015610275573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610299919061068d565b9150915060008060008873ffffffffffffffffffffffffffffffffffffffff16630dfe16816040518163ffffffff1660e01b8152600401602060405180830381865afa1580156102ed573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061031191906106c0565b73ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff161461036c5786868686610371565b858785875b9350935093505061038f838363ffffffff168363ffffffff16610457565b610399908461070c565b97507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610406573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061042a9190610724565b610435906012610747565b61044090600a61088a565b61044a9089610899565b9998505050505050505050565b60006104648484846104c0565b905060008280610476576104766108d6565b84860911156104b9577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81106104ab57600080fd5b806104b581610905565b9150505b9392505050565b600080807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff85870985870292508281108382030391505080600003610517576000841161050c57600080fd5b5082900490506104b9565b80841161052357600080fd5b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b73ffffffffffffffffffffffffffffffffffffffff811681146105ae57600080fd5b50565b6000602082840312156105c357600080fd5b81356104b98161058c565b600080604083850312156105e157600080fd5b82356105ec8161058c565b946020939093013593505050565b60006020828403121561060c57600080fd5b5051919050565b80516dffffffffffffffffffffffffffff8116811461063157600080fd5b919050565b805163ffffffff8116811461063157600080fd5b60008060006060848603121561065f57600080fd5b61066884610613565b925061067660208501610613565b915061068460408501610636565b90509250925092565b600080604083850312156106a057600080fd5b6106a983610636565b91506106b760208401610636565b90509250929050565b6000602082840312156106d257600080fd5b81516104b98161058c565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000821982111561071f5761071f6106dd565b500190565b60006020828403121561073657600080fd5b815160ff811681146104b957600080fd5b600060ff821660ff841680821015610761576107616106dd565b90039392505050565b600181815b808511156107c357817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211156107a9576107a96106dd565b808516156107b657918102915b93841c939080029061076f565b509250929050565b6000826107da575060016100f4565b816107e7575060006100f4565b81600181146107fd576002811461080757610823565b60019150506100f4565b60ff841115610818576108186106dd565b50506001821b6100f4565b5060208310610133831016604e8410600b8410161715610846575081810a6100f4565b610850838361076a565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115610882576108826106dd565b029392505050565b60006104b960ff8416836107cb565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156108d1576108d16106dd565b500290565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610936576109366106dd565b506001019056fea2646970667358221220aff2cb0438a2eec6753190d9353efa42cb633d14eb29762d36fcdd961b3bf5c964736f6c634300080e0033";

export class RequiemPairBondingCalculator__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _QUOTE: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RequiemPairBondingCalculator> {
    return super.deploy(
      _QUOTE,
      overrides || {}
    ) as Promise<RequiemPairBondingCalculator>;
  }
  getDeployTransaction(
    _QUOTE: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_QUOTE, overrides || {});
  }
  attach(address: string): RequiemPairBondingCalculator {
    return super.attach(address) as RequiemPairBondingCalculator;
  }
  connect(signer: Signer): RequiemPairBondingCalculator__factory {
    return super.connect(signer) as RequiemPairBondingCalculator__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RequiemPairBondingCalculatorInterface {
    return new utils.Interface(_abi) as RequiemPairBondingCalculatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RequiemPairBondingCalculator {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as RequiemPairBondingCalculator;
  }
}
