export const IConvexCurveLpStakingWrapperFactory = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_dispatcher",
        type: "address",
      },
      {
        internalType: "address",
        name: "_convexBooster",
        type: "address",
      },
      {
        internalType: "address",
        name: "_crvToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_cvxToken",
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
        name: "nextCanonicalLib",
        type: "address",
      },
    ],
    name: "CanonicalLibSet",
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
      {
        indexed: false,
        internalType: "bytes",
        name: "constructData",
        type: "bytes",
      },
    ],
    name: "ProxyDeployed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "wrapperProxy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "curveLpToken",
        type: "address",
      },
    ],
    name: "WrapperDeployed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
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
    inputs: [
      {
        internalType: "bytes",
        name: "_constructData",
        type: "bytes",
      },
    ],
    name: "deployProxy",
    outputs: [
      {
        internalType: "address",
        name: "proxy_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getCanonicalLib",
    outputs: [
      {
        internalType: "address",
        name: "canonicalLib_",
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
        name: "_wrapper",
        type: "address",
      },
    ],
    name: "getCurveLpTokenForWrapper",
    outputs: [
      {
        internalType: "address",
        name: "lpToken_",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwner",
    outputs: [
      {
        internalType: "address",
        name: "owner_",
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
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "getWrapperForConvexPool",
    outputs: [
      {
        internalType: "address",
        name: "wrapper_",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_wrappers",
        type: "address[]",
      },
    ],
    name: "pauseWrappers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nextCanonicalLib",
        type: "address",
      },
    ],
    name: "setCanonicalLib",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_wrappers",
        type: "address[]",
      },
    ],
    name: "unpauseWrappers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;
