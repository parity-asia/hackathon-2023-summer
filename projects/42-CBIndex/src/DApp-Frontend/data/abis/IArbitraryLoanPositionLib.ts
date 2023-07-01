export const IArbitraryLoanPositionLib = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_wrappedNativeAsset",
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
        name: "borrowableAmount",
        type: "uint256",
      },
    ],
    name: "BorrowableAmountUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "LoanClosed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "loanAsset",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "accountingModule",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "description",
        type: "bytes32",
      },
    ],
    name: "LoanConfigured",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "totalBorrowed",
        type: "uint256",
      },
    ],
    name: "TotalBorrowedUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "totalRepaid",
        type: "uint256",
      },
    ],
    name: "TotalRepaidUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "borrow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAccountingModule",
    outputs: [
      {
        internalType: "address",
        name: "accountingModule_",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBorrowableAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "borrowableAmount_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBorrower",
    outputs: [
      {
        internalType: "address",
        name: "borrower_",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDebtAssets",
    outputs: [
      {
        internalType: "address[]",
        name: "assets_",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts_",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getLoanAsset",
    outputs: [
      {
        internalType: "address",
        name: "asset_",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getManagedAssets",
    outputs: [
      {
        internalType: "address[]",
        name: "assets_",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts_",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalBorrowed",
    outputs: [
      {
        internalType: "uint256",
        name: "totalBorrowed_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalRepaid",
    outputs: [
      {
        internalType: "uint256",
        name: "totalRepaid_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "loanIsClosed",
    outputs: [
      {
        internalType: "bool",
        name: "isClosed_",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_actionData",
        type: "bytes",
      },
    ],
    name: "receiveCallFromVault",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "repay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;
