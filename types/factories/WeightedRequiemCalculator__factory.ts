/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  WeightedRequiemCalculator,
  WeightedRequiemCalculatorInterface,
} from "../WeightedRequiemCalculator";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_REQ",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "REQ",
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
  "0x60a060405234801561001057600080fd5b50604051610a60380380610a6083398101604081905261002f91610053565b6001600160a01b03811661004257600080fd5b6001600160a01b0316608052610083565b60006020828403121561006557600080fd5b81516001600160a01b038116811461007c57600080fd5b9392505050565b6080516109ae6100b26000396000818160a2015281816101e60152818161023a015261058a01526109ae6000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806332da80a3146100515780634249719f14610077578063686375491461008a578063d26700251461009d575b600080fd5b61006461005f36600461062f565b6100e9565b6040519081526020015b60405180910390f35b610064610085366004610653565b6102f9565b61006461009836600461062f565b610398565b6100c47f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161006e565b6000808273ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b8152600401608060405180830381865afa158015610137573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061015b919061067f565b905060008373ffffffffffffffffffffffffffffffffffffffff16630dfe16816040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101aa573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101ce919061070c565b73ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff161461022757815161022d565b81602001515b905061023884610398565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156102a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102c79190610729565b6102d290600a61089d565b6102dd8360026108ac565b6102e791906108ac565b6102f191906108e9565b949350505050565b60008061030584610398565b905060008473ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610354573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103789190610924565b90508061038585846108ac565b61038f91906108e9565b95945050505050565b6000808273ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b8152600401608060405180830381865afa1580156103e6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061040a919061067f565b905060008373ffffffffffffffffffffffffffffffffffffffff1663d21220a76040518163ffffffff1660e01b8152600401602060405180830381865afa158015610459573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061047d919061070c565b73ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104eb9190610729565b6104f690601261093d565b61050190600a61089d565b90508373ffffffffffffffffffffffffffffffffffffffff1663d21220a76040518163ffffffff1660e01b8152600401602060405180830381865afa15801561054e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610572919061070c565b73ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16036105e757602082015182516105d69083906108ac565b6105e09190610960565b9250610603565b815160208301516105f99083906108ac565b6102f19190610960565b5050919050565b73ffffffffffffffffffffffffffffffffffffffff8116811461062c57600080fd5b50565b60006020828403121561064157600080fd5b813561064c8161060a565b9392505050565b6000806040838503121561066657600080fd5b82356106718161060a565b946020939093013593505050565b60006080828403121561069157600080fd5b6040516080810181811067ffffffffffffffff821117156106db577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b8060405250825181526020830151602082015260408301516040820152606083015160608201528091505092915050565b60006020828403121561071e57600080fd5b815161064c8161060a565b60006020828403121561073b57600080fd5b815160ff8116811461064c57600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600181815b808511156107d457817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211156107ba576107ba61074c565b808516156107c757918102915b93841c9390800290610780565b509250929050565b6000826107eb57506001610897565b816107f857506000610897565b816001811461080e576002811461081857610834565b6001915050610897565b60ff8411156108295761082961074c565b50506001821b610897565b5060208310610133831016604e8410600b8410161715610857575081810a610897565b610861838361077b565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211156108935761089361074c565b0290505b92915050565b600061064c60ff8416836107dc565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156108e4576108e461074c565b500290565b60008261091f577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b60006020828403121561093657600080fd5b5051919050565b600060ff821660ff8416808210156109575761095761074c565b90039392505050565b600082198211156109735761097361074c565b50019056fea26469706673582212204b233e67ae03520f8ac3eb00fdaba111f748ae2993fe49d5952d1b19ef53da8264736f6c634300080e0033";

export class WeightedRequiemCalculator__factory extends ContractFactory {
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
    _REQ: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<WeightedRequiemCalculator> {
    return super.deploy(
      _REQ,
      overrides || {}
    ) as Promise<WeightedRequiemCalculator>;
  }
  getDeployTransaction(
    _REQ: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_REQ, overrides || {});
  }
  attach(address: string): WeightedRequiemCalculator {
    return super.attach(address) as WeightedRequiemCalculator;
  }
  connect(signer: Signer): WeightedRequiemCalculator__factory {
    return super.connect(signer) as WeightedRequiemCalculator__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WeightedRequiemCalculatorInterface {
    return new utils.Interface(_abi) as WeightedRequiemCalculatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WeightedRequiemCalculator {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as WeightedRequiemCalculator;
  }
}
