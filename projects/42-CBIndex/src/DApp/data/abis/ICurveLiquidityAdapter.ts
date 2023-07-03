export const ICurveLiquidityAdapter = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_integrationManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_curvePriceFeed",
        type: "address",
      },
      {
        internalType: "address",
        name: "_wrappedNativeAsset",
        type: "address",
      },
      {
        internalType: "address",
        name: "_curveMinter",
        type: "address",
      },
      {
        internalType: "address",
        name: "_crvToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_nativeAssetAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "CLAIM_REWARDS_SELECTOR",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LEND_AND_STAKE_SELECTOR",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LEND_SELECTOR",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "REDEEM_SELECTOR",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "STAKE_SELECTOR",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TAKE_MULTIPLE_ORDERS_SELECTOR",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TAKE_ORDER_SELECTOR",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "UNSTAKE_AND_REDEEM_SELECTOR",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "UNSTAKE_SELECTOR",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_vaultProxy",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_actionData",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "claimRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurveGaugeV2RewardsHandlerCrvToken",
    outputs: [
      {
        internalType: "address",
        name: "crvToken_",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurveGaugeV2RewardsHandlerMinter",
    outputs: [
      {
        internalType: "address",
        name: "minter_",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurveLiquidityWrappedNativeAsset",
    outputs: [
      {
        internalType: "address",
        name: "addressProvider_",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getIntegrationManager",
    outputs: [
      {
        internalType: "address",
        name: "integrationManager_",
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
        name: "_vaultProxy",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_actionData",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_assetData",
        type: "bytes",
      },
    ],
    name: "lend",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_vaultProxy",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_actionData",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_assetData",
        type: "bytes",
      },
    ],
    name: "lendAndStake",
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
      {
        internalType: "bytes4",
        name: "_selector",
        type: "bytes4",
      },
      {
        internalType: "bytes",
        name: "_actionData",
        type: "bytes",
      },
    ],
    name: "parseAssetsForAction",
    outputs: [
      {
        internalType: "enum IIntegrationManager.SpendAssetsHandleType",
        name: "spendAssetsHandleType_",
        type: "uint8",
      },
      {
        internalType: "address[]",
        name: "spendAssets_",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "spendAssetAmounts_",
        type: "uint256[]",
      },
      {
        internalType: "address[]",
        name: "incomingAssets_",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "minIncomingAssetAmounts_",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_vaultProxy",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_actionData",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_assetData",
        type: "bytes",
      },
    ],
    name: "redeem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_vaultProxy",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_assetData",
        type: "bytes",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_vaultProxy",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_actionData",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_assetData",
        type: "bytes",
      },
    ],
    name: "unstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_vaultProxy",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_actionData",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_assetData",
        type: "bytes",
      },
    ],
    name: "unstakeAndRedeem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;
