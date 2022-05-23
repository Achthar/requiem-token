/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AssetBackedRequiem,
  AssetBackedRequiemInterface,
} from "../AssetBackedRequiem";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_newCap",
        type: "uint256",
      },
    ],
    name: "MaxTotalSupplyUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cap",
        type: "uint256",
      },
    ],
    name: "MinterUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_TOTAL_SUPPLY",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "minters",
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
        name: "",
        type: "address",
      },
    ],
    name: "minters_minted",
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
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
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
    inputs: [],
    name: "owner",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newCap",
        type: "uint256",
      },
    ],
    name: "resetMaxTotalSupply",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_minterCap",
        type: "uint256",
      },
    ],
    name: "setMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x60a0604052306080526a084595161401484a0000006101945534801561002457600080fd5b50608051612d8161005c6000396000818161065c0152818161071101528181610a1201528181610ac20152610c070152612d816000f3fe6080604052600436106101b75760003560e01c806370a08231116100ec5780639ce389981161008a578063d505accf11610064578063d505accf14610537578063dd62ed3e14610557578063f2fde38b146105aa578063f46eccc4146105ca57600080fd5b80639ce38998146104d7578063a457c2d7146104f7578063a9059cbb1461051757600080fd5b80637ecebe00116100c65780637ecebe001461040d57806387de84981461042d5780638da5cb5b1461045b57806395d89b411461049157600080fd5b806370a0823114610395578063715018a6146103d857806379cc6790146103ed57600080fd5b80633659cfe61161015957806342966c681161013357806342966c681461032d5780634f1ef2861461034d57806352d1902d1461036057806360c918851461037557600080fd5b80633659cfe6146102cb57806339509351146102ed57806340c10f191461030d57600080fd5b806323b872dd1161019557806323b872dd14610263578063313ce5671461028357806333039d3d1461029f5780633644e515146102b657600080fd5b806306fdde03146101bc578063095ea7b31461021457806318160ddd14610244575b600080fd5b3480156101c857600080fd5b5060408051808201909152601a81527f4173736574204261636b6564205265717569656d20546f6b656e00000000000060208201525b60405161020b9190612999565b60405180910390f35b34801561022057600080fd5b5061023461022f366004612a13565b6105f8565b604051901515815260200161020b565b34801561025057600080fd5b506035545b60405190815260200161020b565b34801561026f57600080fd5b5061023461027e366004612a3d565b610610565b34801561028f57600080fd5b506040516012815260200161020b565b3480156102ab57600080fd5b506102556101945481565b3480156102c257600080fd5b50610255610636565b3480156102d757600080fd5b506102eb6102e6366004612a79565b610645565b005b3480156102f957600080fd5b50610234610308366004612a13565b61084f565b34801561031957600080fd5b506102eb610328366004612a13565b61089b565b34801561033957600080fd5b506102eb610348366004612a94565b6109f1565b6102eb61035b366004612adc565b6109fb565b34801561036c57600080fd5b50610255610bed565b34801561038157600080fd5b506102eb610390366004612a94565b610cd9565b3480156103a157600080fd5b506102556103b0366004612a79565b73ffffffffffffffffffffffffffffffffffffffff1660009081526033602052604090205490565b3480156103e457600080fd5b506102eb610e29565b3480156103f957600080fd5b506102eb610408366004612a13565b610eb7565b34801561041957600080fd5b50610255610428366004612a79565b610ecc565b34801561043957600080fd5b50610255610448366004612a79565b6101966020526000908152604090205481565b34801561046757600080fd5b506101625460405173ffffffffffffffffffffffffffffffffffffffff909116815260200161020b565b34801561049d57600080fd5b5060408051808201909152600581527f616252455100000000000000000000000000000000000000000000000000000060208201526101fe565b3480156104e357600080fd5b506102eb6104f2366004612a13565b610ef9565b34801561050357600080fd5b50610234610512366004612a13565b611115565b34801561052357600080fd5b50610234610532366004612a13565b6111f1565b34801561054357600080fd5b506102eb610552366004612bbc565b6111ff565b34801561056357600080fd5b50610255610572366004612c2f565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260346020908152604080832093909416825291909152205490565b3480156105b657600080fd5b506102eb6105c5366004612a79565b6113e9565b3480156105d657600080fd5b506102556105e5366004612a79565b6101956020526000908152604090205481565b600033610606818585611517565b5060019392505050565b60003361061e8582856116ca565b6106298585856117a1565b60019150505b9392505050565b6000610640611a5f565b905090565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016300361070f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c000000000000000000000000000000000000000060648201526084015b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166107847f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1614610827576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f787900000000000000000000000000000000000000006064820152608401610706565b61083081611ada565b6040805160008082526020820190925261084c91839190611b5c565b50565b33600081815260346020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120549091906106069082908690610896908790612c91565b611517565b3360009081526101956020526040902054610912576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4f6e6c79206d696e7465722063616e20696e74657261637400000000000000006044820152606401610706565b336000908152610196602052604081208054839290610932908490612c91565b909155505033600090815261019660209081526040808320546101959092529091205410156109e3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f4d696e74696e6720616d6f756e742065786365656473206d696e74657220636160448201527f70000000000000000000000000000000000000000000000000000000000000006064820152608401610706565b6109ed8282611d60565b5050565b61084c3382611e8c565b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163003610ac0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c00000000000000000000000000000000000000006064820152608401610706565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610b357f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1614610bd8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f787900000000000000000000000000000000000000006064820152608401610706565b610be182611ada565b6109ed82826001611b5c565b60003073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610cb4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152608401610706565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b6101625473ffffffffffffffffffffffffffffffffffffffff163314610d5b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610706565b603554811015610ded576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f5f6e65774361702069732062656c6f772063757272656e7420746f74616c207360448201527f7570706c790000000000000000000000000000000000000000000000000000006064820152608401610706565b6101948190556040518181527ff2672935fc79f5237559e2e2999dbe743bf65430894ac2b37666890e7c69e1af9060200160405180910390a150565b6101625473ffffffffffffffffffffffffffffffffffffffff163314610eab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610706565b610eb56000612085565b565b610ec28233836116ca565b6109ed8282611e8c565b73ffffffffffffffffffffffffffffffffffffffff81166000908152609960205260408120545b92915050565b6101625473ffffffffffffffffffffffffffffffffffffffff163314610f7b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610706565b73ffffffffffffffffffffffffffffffffffffffff8216610ff8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f696e76616c6964206164647265737300000000000000000000000000000000006044820152606401610706565b73ffffffffffffffffffffffffffffffffffffffff8216600090815261019660205260409020548110156110ae576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4d696e74657220616c7265616479206d696e7465642061206c6172676572206160448201527f6d6f756e74207468616e206e65772063617000000000000000000000000000006064820152608401610706565b73ffffffffffffffffffffffffffffffffffffffff82166000818152610195602052604090819020839055517f4806dc7228dc0d536104603610b1cf9b1c98f326289316cf3188bf1c6cf3ef5e906111099084815260200190565b60405180910390a25050565b33600081815260346020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152812054909190838110156111d9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610706565b6111e68286868403611517565b506001949350505050565b6000336106068185856117a1565b83421115611269576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e650000006044820152606401610706565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886112c38c73ffffffffffffffffffffffffffffffffffffffff16600090815260996020526040902080546001810190915590565b60408051602081019690965273ffffffffffffffffffffffffffffffffffffffff94851690860152929091166060840152608083015260a082015260c0810186905260e001604051602081830303815290604052805190602001209050600061132b826120fd565b9050600061133b82878787612166565b90508973ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146113d2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e617475726500006044820152606401610706565b6113dd8a8a8a611517565b50505050505050505050565b6101625473ffffffffffffffffffffffffffffffffffffffff16331461146b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610706565b73ffffffffffffffffffffffffffffffffffffffff811661150e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610706565b61084c81612085565b73ffffffffffffffffffffffffffffffffffffffff83166115b9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610706565b73ffffffffffffffffffffffffffffffffffffffff821661165c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610706565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152603460209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461179b578181101561178e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610706565b61179b8484848403611517565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316611844576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610706565b73ffffffffffffffffffffffffffffffffffffffff82166118e7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610706565b6118f283838361218e565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260336020526040902054818110156119a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610706565b73ffffffffffffffffffffffffffffffffffffffff8085166000908152603360205260408082208585039055918516815290812080548492906119ec908490612c91565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051611a5291815260200190565b60405180910390a361179b565b60006106407f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f611a8e60655490565b6066546040805160208101859052908101839052606081018290524660808201523060a082015260009060c0016040516020818303038152906040528051906020012090509392505050565b6101625473ffffffffffffffffffffffffffffffffffffffff16331461084c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610706565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff1615611b9457611b8f836122f3565b505050565b8273ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015611c19575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252611c1691810190612ca9565b60015b611ca5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f7420555550530000000000000000000000000000000000006064820152608401610706565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8114611d54576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c655555494400000000000000000000000000000000000000000000006064820152608401610706565b50611b8f8383836123fd565b73ffffffffffffffffffffffffffffffffffffffff8216611ddd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610706565b611de96000838361218e565b8060356000828254611dfb9190612c91565b909155505073ffffffffffffffffffffffffffffffffffffffff821660009081526033602052604081208054839290611e35908490612c91565b909155505060405181815273ffffffffffffffffffffffffffffffffffffffff8316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b73ffffffffffffffffffffffffffffffffffffffff8216611f2f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f73000000000000000000000000000000000000000000000000000000000000006064820152608401610706565b611f3b8260008361218e565b73ffffffffffffffffffffffffffffffffffffffff821660009081526033602052604090205481811015611ff1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f63650000000000000000000000000000000000000000000000000000000000006064820152608401610706565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260336020526040812083830390556035805484929061202d908490612cc2565b909155505060405182815260009073ffffffffffffffffffffffffffffffffffffffff8516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b610162805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000610ef361210a611a5f565b836040517f19010000000000000000000000000000000000000000000000000000000000006020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b600080600061217787878787612422565b915091506121848161253a565b5095945050505050565b73ffffffffffffffffffffffffffffffffffffffff83166122295761019454816121b760355490565b6121c19190612c91565b1115612229576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4d617820746f74616c20737570706c79206578636565646564000000000000006044820152606401610706565b73ffffffffffffffffffffffffffffffffffffffff8216611b8f57806101945410156122d6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f4275726e20616d6f756e742065786365656473206d617820746f74616c20737560448201527f70706c79000000000000000000000000000000000000000000000000000000006064820152608401610706565b8061019460008282546122e99190612cc2565b9091555050505050565b73ffffffffffffffffffffffffffffffffffffffff81163b612397576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e7472616374000000000000000000000000000000000000006064820152608401610706565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6124068361278e565b6000825111806124135750805b15611b8f5761179b83836127db565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156124595750600090506003612531565b8460ff16601b1415801561247157508460ff16601c14155b156124825750600090506004612531565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156124d6573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff811661252a57600060019250925050612531565b9150600090505b94509492505050565b600081600481111561254e5761254e612cd9565b036125565750565b600181600481111561256a5761256a612cd9565b036125d1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610706565b60028160048111156125e5576125e5612cd9565b0361264c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610706565b600381600481111561266057612660612cd9565b036126ed576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f75650000000000000000000000000000000000000000000000000000000000006064820152608401610706565b600481600481111561270157612701612cd9565b0361084c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c60448201527f75650000000000000000000000000000000000000000000000000000000000006064820152608401610706565b612797816122f3565b60405173ffffffffffffffffffffffffffffffffffffffff8216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b606073ffffffffffffffffffffffffffffffffffffffff83163b612881576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e747261637400000000000000000000000000000000000000000000000000006064820152608401610706565b6000808473ffffffffffffffffffffffffffffffffffffffff16846040516128a99190612d08565b600060405180830381855af49150503d80600081146128e4576040519150601f19603f3d011682016040523d82523d6000602084013e6128e9565b606091505b50915091506129118282604051806060016040528060278152602001612d256027913961291a565b95945050505050565b6060831561292957508161062f565b8251156129395782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107069190612999565b60005b83811015612988578181015183820152602001612970565b8381111561179b5750506000910152565b60208152600082518060208401526129b881604085016020870161296d565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114612a0e57600080fd5b919050565b60008060408385031215612a2657600080fd5b612a2f836129ea565b946020939093013593505050565b600080600060608486031215612a5257600080fd5b612a5b846129ea565b9250612a69602085016129ea565b9150604084013590509250925092565b600060208284031215612a8b57600080fd5b61062f826129ea565b600060208284031215612aa657600080fd5b5035919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008060408385031215612aef57600080fd5b612af8836129ea565b9150602083013567ffffffffffffffff80821115612b1557600080fd5b818501915085601f830112612b2957600080fd5b813581811115612b3b57612b3b612aad565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908382118183101715612b8157612b81612aad565b81604052828152886020848701011115612b9a57600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b600080600080600080600060e0888a031215612bd757600080fd5b612be0886129ea565b9650612bee602089016129ea565b95506040880135945060608801359350608088013560ff81168114612c1257600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215612c4257600080fd5b612c4b836129ea565b9150612c59602084016129ea565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008219821115612ca457612ca4612c62565b500190565b600060208284031215612cbb57600080fd5b5051919050565b600082821015612cd457612cd4612c62565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60008251612d1a81846020870161296d565b919091019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220138f4d46222e3017a65d108ca650bb3ce10922c7ebcdb809582676ab6ecede3b64736f6c634300080e0033";

export class AssetBackedRequiem__factory extends ContractFactory {
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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AssetBackedRequiem> {
    return super.deploy(overrides || {}) as Promise<AssetBackedRequiem>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AssetBackedRequiem {
    return super.attach(address) as AssetBackedRequiem;
  }
  connect(signer: Signer): AssetBackedRequiem__factory {
    return super.connect(signer) as AssetBackedRequiem__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AssetBackedRequiemInterface {
    return new utils.Interface(_abi) as AssetBackedRequiemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AssetBackedRequiem {
    return new Contract(address, _abi, signerOrProvider) as AssetBackedRequiem;
  }
}
