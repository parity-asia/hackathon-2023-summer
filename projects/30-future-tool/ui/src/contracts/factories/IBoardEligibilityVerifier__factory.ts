/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IBoardEligibilityVerifier,
  IBoardEligibilityVerifierInterface,
} from "../IBoardEligibilityVerifier";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "a",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][2]",
        name: "b",
        type: "uint256[2][2]",
      },
      {
        internalType: "uint256[2]",
        name: "c",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[1]",
        name: "input",
        type: "uint256[1]",
      },
    ],
    name: "verifyProof",
    outputs: [
      {
        internalType: "bool",
        name: "r",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IBoardEligibilityVerifier__factory {
  static readonly abi = _abi;
  static createInterface(): IBoardEligibilityVerifierInterface {
    return new Interface(_abi) as IBoardEligibilityVerifierInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IBoardEligibilityVerifier {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as IBoardEligibilityVerifier;
  }
}
