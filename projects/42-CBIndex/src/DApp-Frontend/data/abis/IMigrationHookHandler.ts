export const IMigrationHookHandler = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_vaultProxy",
        type: "address",
      },
      {
        internalType: "address",
        name: "_prevFundDeployer",
        type: "address",
      },
      {
        internalType: "address",
        name: "_nextVaultAccessor",
        type: "address",
      },
      {
        internalType: "address",
        name: "_nextVaultLib",
        type: "address",
      },
    ],
    name: "invokeMigrationInCancelHook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum IMigrationHookHandler.MigrationOutHook",
        name: "_hook",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "_vaultProxy",
        type: "address",
      },
      {
        internalType: "address",
        name: "_nextFundDeployer",
        type: "address",
      },
      {
        internalType: "address",
        name: "_nextVaultAccessor",
        type: "address",
      },
      {
        internalType: "address",
        name: "_nextVaultLib",
        type: "address",
      },
    ],
    name: "invokeMigrationOutHook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;
