/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ITermsKeeperInterface extends ethers.utils.Interface {
  functions: {
    "indexesFor(address)": FunctionFragment;
    "pendingFor(address,uint256)": FunctionFragment;
    "pullTerms(address,uint256)": FunctionFragment;
    "pushTerms(address,uint256)": FunctionFragment;
    "redeem(address,uint256[],bool)": FunctionFragment;
    "redeemAll(address,bool)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "indexesFor", values: [string]): string;
  encodeFunctionData(
    functionFragment: "pendingFor",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pullTerms",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pushTerms",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "redeem",
    values: [string, BigNumberish[], boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "redeemAll",
    values: [string, boolean]
  ): string;

  decodeFunctionResult(functionFragment: "indexesFor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pendingFor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pullTerms", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pushTerms", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "redeemAll", data: BytesLike): Result;

  events: {};
}

export class ITermsKeeper extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ITermsKeeperInterface;

  functions: {
    indexesFor(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    pendingFor(
      _user: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, boolean] & { payout_: BigNumber; matured_: boolean }
    >;

    pullTerms(
      from: string,
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pushTerms(
      to: string,
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    redeem(
      _user: string,
      _indexes: BigNumberish[],
      _sendgREQ: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    redeemAll(
      _user: string,
      _sendgREQ: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  indexesFor(_user: string, overrides?: CallOverrides): Promise<BigNumber[]>;

  pendingFor(
    _user: string,
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, boolean] & { payout_: BigNumber; matured_: boolean }>;

  pullTerms(
    from: string,
    index: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pushTerms(
    to: string,
    index: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  redeem(
    _user: string,
    _indexes: BigNumberish[],
    _sendgREQ: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  redeemAll(
    _user: string,
    _sendgREQ: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    indexesFor(_user: string, overrides?: CallOverrides): Promise<BigNumber[]>;

    pendingFor(
      _user: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, boolean] & { payout_: BigNumber; matured_: boolean }
    >;

    pullTerms(
      from: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pushTerms(
      to: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    redeem(
      _user: string,
      _indexes: BigNumberish[],
      _sendgREQ: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    redeemAll(
      _user: string,
      _sendgREQ: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    indexesFor(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    pendingFor(
      _user: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pullTerms(
      from: string,
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pushTerms(
      to: string,
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    redeem(
      _user: string,
      _indexes: BigNumberish[],
      _sendgREQ: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    redeemAll(
      _user: string,
      _sendgREQ: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    indexesFor(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pendingFor(
      _user: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pullTerms(
      from: string,
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pushTerms(
      to: string,
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    redeem(
      _user: string,
      _indexes: BigNumberish[],
      _sendgREQ: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    redeemAll(
      _user: string,
      _sendgREQ: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
