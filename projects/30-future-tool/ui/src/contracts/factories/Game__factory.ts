/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../common";
import type { Game, GameInterface } from "../Game";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_boardEligibilityVerifier",
        type: "address",
      },
      {
        internalType: "address",
        name: "_revealAttackVerifier",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_gameId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_by",
        type: "address",
      },
    ],
    name: "Joined",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_gameId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "_shotIndex",
        type: "uint8",
      },
    ],
    name: "ShotFired",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_gameId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "_shipId",
        type: "uint8",
      },
    ],
    name: "ShotLanded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_gameId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_by",
        type: "address",
      },
    ],
    name: "Started",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_gameId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_by",
        type: "address",
      },
    ],
    name: "Won",
    type: "event",
  },
  {
    inputs: [],
    name: "WIN_HIT_COUNT",
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
    name: "gameIndex",
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
        name: "_gameId",
        type: "uint256",
      },
    ],
    name: "gameState",
    outputs: [
      {
        internalType: "address[2]",
        name: "_participants",
        type: "address[2]",
      },
      {
        internalType: "uint256[2]",
        name: "_boards",
        type: "uint256[2]",
      },
      {
        internalType: "uint256",
        name: "_turn",
        type: "uint256",
      },
      {
        internalType: "uint256[2]",
        name: "_hits",
        type: "uint256[2]",
      },
      {
        internalType: "address",
        name: "_winner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "games",
    outputs: [
      {
        internalType: "uint256",
        name: "turn",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "winner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_gameId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_boardHash",
        type: "uint256",
      },
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
    ],
    name: "joinGame",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_gameId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_turnShotIndex",
        type: "uint256",
      },
    ],
    name: "playFirstTurn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_gameId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_hitShipId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_prevTurnShotIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_turnShotIndex",
        type: "uint256",
      },
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
    ],
    name: "playTurn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_boardHash",
        type: "uint256",
      },
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
    ],
    name: "startGame",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161117638038061117683398101604081905261002f9161007c565b600280546001600160a01b039384166001600160a01b031991821617909155600380549290931691161790556100af565b80516001600160a01b038116811461007757600080fd5b919050565b6000806040838503121561008f57600080fd5b61009883610060565b91506100a660208401610060565b90509250929050565b6110b8806100be6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80635654a3411161005b5780635654a34114610131578063763cb3421461013a57806380bdf5d41461014d578063b8ccd40f1461016057600080fd5b8063117a5b901461008d578063498c1b90146100e25780634a11e01f146100f85780634e0e1a3e1461010d575b600080fd5b6100c061009b366004610be3565b600160205260009081526040902060048101546008909101546001600160a01b031682565b604080519283526001600160a01b039091166020830152015b60405180910390f35b6100ea601181565b6040519081526020016100d9565b61010b610106366004610bfc565b610173565b005b61012061011b366004610be3565b6102e1565b6040516100d9959493929190610c47565b6100ea60005481565b61010b610148366004610d8d565b6103c9565b61010b61015b366004610de9565b610557565b61010b61016e366004610e58565b610a72565b60008281526001602052604090206004810154156101ce5760405162461bcd60e51b81526020600482015260136024820152724e6f7420746865206669727374207475726e2160681b60448201526064015b60405180910390fd5b80600001546001600160a01b031633146102165760405162461bcd60e51b81526020600482015260096024820152684e6f74207475726e2160b81b60448201526064016101c5565b606482106102665760405162461bcd60e51b815260206004820152601960248201527f53686f7420636f6f7264696e6174657320696e76616c6964210000000000000060448201526064016101c5565b600481015460008381526005830160205260409081902091909155517f856b88170e0caeb4b11ef613cb3df1eb1f59ef2c26d3fed6dbd995b325c5ae16906102bd908590859091825260ff16602082015260400190565b60405180910390a16004810180549060006102d783610ed5565b9190505550505050565b6102e9610bc5565b6102f1610bc5565b60006102fb610bc5565b6000858152600160205260408082208151808301928390529091829060029082845b81546001600160a01b0316815260019091019060200180831161031d5750506040805180820191829052949a50600286810194509250905082845b81548152602001906001019080831161035857505050506004830154604080518082019182905293985090965060068401915060029082845b815481526020019060010190808311610391575050506008909301549799969850949690956001600160a01b03909116945092505050565b6000858152600160208190526040822091908201546001600160a01b0316146104295760405162461bcd60e51b815260206004820152601260248201527147616d6520616c72656164792066756c6c2160701b60448201526064016101c5565b6002546040805160208101825287815290516343753b4d60e01b81526001600160a01b03909216916343753b4d9161046a9188918891889190600401610f46565b602060405180830381865afa158015610487573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104ab9190610fa3565b6104f75760405162461bcd60e51b815260206004820152601b60248201527f496e76616c6964207368697020636f6e66696775726174696f6e21000000000060448201526064016101c5565b6001810180546001600160a01b03191633908117909155600382018690556040805188815260208101929092527fc0081eeafa0d002abcd7d58d84b6e688d1526b9c3d915a282212ba08c49a17a7910160405180910390a1505050505050565b60008781526001602081905260408220600481015490929160029161057c9190610fcc565b6105869190610fe5565b905060006002836004015461059b9190610fe5565b905060008360040154116105e35760405162461bcd60e51b815260206004820152600f60248201526e546865206669727374207475726e2160881b60448201526064016101c5565b8281600281106105f5576105f5610ea9565b01546001600160a01b0316331461063a5760405162461bcd60e51b81526020600482015260096024820152684e6f74207475726e2160b81b60448201526064016101c5565b60088301546001600160a01b03161561068a5760405162461bcd60e51b815260206004820152601260248201527147616d6520616c7265616479206f7665722160701b60448201526064016101c5565b606487106106da5760405162461bcd60e51b815260206004820152601e60248201527f4e6578742073686f7420636f6f7264696e6174657320696e76616c696421000060448201526064016101c5565b6005830160006106eb846064611007565b6106f5908b61101e565b815260200190815260200160002054600184600401546107159190610fcc565b146107755760405162461bcd60e51b815260206004820152602a60248201527f496e636f72726563742073686f7420666f722070726576696f7573207475726e6044820152692070726f76696465642160b01b60648201526084016101c5565b600360009054906101000a90046001600160a01b03166001600160a01b03166311479fea87878760405180606001604052808f81526020018960020188600281106107c2576107c2610ea9565b015481526020018e8152506040518563ffffffff1660e01b81526004016107ec9493929190611031565b602060405180830381865afa158015610809573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061082d9190610fa3565b61086a5760405162461bcd60e51b815260206004820152600e60248201526d496e76616c69642070726f6f662160901b60448201526064016101c5565b881561089a5782600601826002811061088557610885610ea9565b01805490600061089483610ed5565b91905055505b604080518b815260ff8b1660208201527f8f78455e6cc82b42f8dc866bf3befc9b590f0ad419058f342ccab8f2cf4fcf19910160405180910390a160118360060183600281106108ec576108ec610ea9565b0154106109665782826002811061090557610905610ea9565b01546008840180546001600160a01b0319166001600160a01b039092169182179055604080518c815260208101929092527f34fee8cf8c6f9d389d6b16d4f6676f2d68632f123b5a7c3a4dd48b0ec7fac014910160405180910390a1610a66565b600583016000610977836064611007565b610981908a61101e565b8152602001908152602001600020546000146109d75760405162461bcd60e51b815260206004820152601560248201527453686f7473206d75737420626520756e697175652160581b60448201526064016101c5565b60048301546005840160006109ed846064611007565b6109f7908b61101e565b8152602001908152602001600020819055507f856b88170e0caeb4b11ef613cb3df1eb1f59ef2c26d3fed6dbd995b325c5ae168a88604051610a4692919091825260ff16602082015260400190565b60405180910390a1600483018054906000610a6083610ed5565b91905055505b50505050505050505050565b6002546040805160208101825286815290516343753b4d60e01b81526001600160a01b03909216916343753b4d91610ab39187918791879190600401610f46565b602060405180830381865afa158015610ad0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610af49190610fa3565b610b405760405162461bcd60e51b815260206004820152601b60248201527f496e76616c6964207368697020636f6e66696775726174696f6e21000000000060448201526064016101c5565b60008054815260016020908152604080832080546001600160a01b031916339081179091558354845281842060020188905592548151908152918201929092527fcb88c87e28a0e0b68deef72d3d3536c607260b8c80944e6117a896f855eed81f910160405180910390a1600080549080610bba83610ed5565b919050555050505050565b60405180604001604052806002906020820280368337509192915050565b600060208284031215610bf557600080fd5b5035919050565b60008060408385031215610c0f57600080fd5b50508035926020909101359150565b8060005b6002811015610c41578151845260209384019390910190600101610c22565b50505050565b6101008101818760005b6002811015610c795781516001600160a01b0316835260209283019290910190600101610c51565b505050610c896040830187610c1e565b846080830152610c9c60a0830185610c1e565b6001600160a01b039290921660e09190910152949350505050565b6040805190810167ffffffffffffffff81118282101715610ce857634e487b7160e01b600052604160045260246000fd5b60405290565b600082601f830112610cff57600080fd5b610d07610cb7565b806040840185811115610d1957600080fd5b845b81811015610d33578035845260209384019301610d1b565b509095945050505050565b600082601f830112610d4f57600080fd5b610d57610cb7565b806080840185811115610d6957600080fd5b845b81811015610d3357610d7d8782610cee565b8452602090930192604001610d6b565b60008060008060006101408688031215610da657600080fd5b8535945060208601359350610dbe8760408801610cee565b9250610dcd8760808801610d3e565b9150610ddd876101008801610cee565b90509295509295909350565b6000806000806000806000610180888a031215610e0557600080fd5b87359650602088013595506040880135945060608801359350610e2b8960808a01610cee565b9250610e3a8960c08a01610d3e565b9150610e4a896101408a01610cee565b905092959891949750929550565b6000806000806101208587031215610e6f57600080fd5b84359350610e808660208701610cee565b9250610e8f8660608701610d3e565b9150610e9e8660e08701610cee565b905092959194509250565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060018201610ee757610ee7610ebf565b5060010190565b806000805b6002808210610f025750610f3f565b835186845b83811015610f25578251825260209283019290910190600101610f07565b505050604095909501945060209290920191600101610ef3565b5050505050565b6101208101610f558287610c1e565b610f626040830186610eee565b610f6f60c0830185610c1e565b61010082018360005b6001811015610f97578151835260209283019290910190600101610f78565b50505095945050505050565b600060208284031215610fb557600080fd5b81518015158114610fc557600080fd5b9392505050565b81810381811115610fdf57610fdf610ebf565b92915050565b60008261100257634e487b7160e01b600052601260045260246000fd5b500690565b8082028115828204841417610fdf57610fdf610ebf565b80820180821115610fdf57610fdf610ebf565b61016081016110408287610c1e565b61104d6040830186610eee565b61105a60c0830185610c1e565b61010082018360005b6003811015610f9757815183526020928301929091019060010161106356fea2646970667358221220de75604dcb47ace958587cce8ae2ea08c3eea49ceec22e4bbe281bc326fc515464736f6c63430008140033";

type GameConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GameConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Game__factory extends ContractFactory {
  constructor(...args: GameConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _boardEligibilityVerifier: AddressLike,
    _revealAttackVerifier: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _boardEligibilityVerifier,
      _revealAttackVerifier,
      overrides || {}
    );
  }
  override deploy(
    _boardEligibilityVerifier: AddressLike,
    _revealAttackVerifier: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _boardEligibilityVerifier,
      _revealAttackVerifier,
      overrides || {}
    ) as Promise<
      Game & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Game__factory {
    return super.connect(runner) as Game__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GameInterface {
    return new Interface(_abi) as GameInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Game {
    return new Contract(address, _abi, runner) as unknown as Game;
  }
}
