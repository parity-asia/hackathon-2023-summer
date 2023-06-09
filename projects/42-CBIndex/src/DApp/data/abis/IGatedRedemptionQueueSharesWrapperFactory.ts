export const IGatedRedemptionQueueSharesWrapperFactory = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_dispatcher",
        type: "address",
      },
      {
        internalType: "address",
        name: "_implementation",
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
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "ImplementationSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "proxy",
        type: "address",
      },
    ],
    name: "ProxyDeployed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_vaultProxy",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "_managers",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "_redemptionAsset",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_useDepositApprovals",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "_useRedemptionApprovals",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "_useTransferApprovals",
        type: "bool",
      },
      {
        internalType: "enum GatedRedemptionQueueSharesWrapperLibBase1.DepositMode",
        name: "_depositMode",
        type: "uint8",
      },
      {
        components: [
          {
            internalType: "uint64",
            name: "firstWindowStart",
            type: "uint64",
          },
          {
            internalType: "uint32",
            name: "frequency",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "duration",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "relativeSharesCap",
            type: "uint64",
          },
        ],
        internalType: "struct GatedRedemptionQueueSharesWrapperLibBase1.RedemptionWindowConfig",
        name: "_windowConfig",
        type: "tuple",
      },
    ],
    name: "deploy",
    outputs: [
      {
        internalType: "address",
        name: "wrapperProxy_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
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
        name: "_nextImplementation",
        type: "address",
      },
    ],
    name: "setImplementation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;
