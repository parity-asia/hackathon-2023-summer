Ethereum compatible

1. substrate-node-template是0.9.40版本
2. 基于Substrate EVM适配有模板[Frontier](https://github.com/paritytech/frontier)
[这个](https://github.com/moondance-labs/frontier/tree/polkadot-v0.9.40)基于polkadot-v0.9.40版本，选择这个作为运行时依赖

Build & Run
To build the chain, execute the following commands from the project root:

$ cargo build --release
To execute the chain, run:

$ ./target/release/dandelion-node --dev

To execute the chain, run:

$ ./target/release/frontier-template-node --dev
The node also supports to use manual seal (to produce block manually through RPC).
This is also used by the ts-tests:

$ ./target/release/frontier-template-node --dev --sealing=manual
# Or
$ ./target/release/frontier-template-node --dev --sealing=instant
Docker Based Development
Optionally, You can build and run the frontier node within Docker directly.
The Dockerfile is optimized for development speed.
(Running the docker run... command will recompile the binaries but not the dependencies)

Building (takes 5-10 min):

docker build -t frontier-node-dev .
Running (takes 1 min to rebuild binaries):

docker run -t frontier-node-dev
Genesis Configuration
The development chain spec included with this project defines a genesis block that has been pre-configured with an EVM account for Alice. When a development chain is started, Alice's EVM account will be funded with a large amount of Ether. The Polkadot UI can be used to see the details of Alice's EVM account. In order to view an EVM account, use the Developer tab of the Polkadot UI Settings app to define the EVM Account type as below. It is also necessary to define the Address and LookupSource to send transaction, and Transaction and Signature to be able to inspect blocks:

{
	"Address": "MultiAddress",
	"LookupSource": "MultiAddress",
	"Account": {
		"nonce": "U256",
		"balance": "U256"
	},
	"Transaction": {
		"nonce": "U256",
		"action": "String",
		"gas_price": "u64",
		"gas_limit": "u64",
		"value": "U256",
		"input": "Vec<u8>",
		"signature": "Signature"
	},
	"Signature": {
		"v": "u64",
		"r": "H256",
		"s": "H256"
	}
}
Use the Developer app's RPC calls tab to query eth > getBalance(address, number) with Alice's EVM account ID (0xd43593c715fdd31c61141abd04a99fd6822c8558); the value that is returned should be:

x: eth.getBalance
340,282,366,920,938,463,463,374,607,431,768,211,455
Further reading: EVM accounts

Alice's EVM account ID was calculated using an included utility script.

Example 1: ERC20 Contract Deployment using EVM dispatchable
The following steps are also available as a Typescript script using Polkadot JS SDK

Step 1: Contract creation
The truffle directory contains a Truffle project that defines an ERC-20 token. For convenience, this repository also contains the compiled bytecode of this token contract, which can be used to deploy it to the Substrate blockchain.

Further reading: the ERC-20 token standard

Use the Polkadot UI Extrinsics app to deploy the contract from Alice's account (submit the extrinsic as a signed transaction) using evm > create with the following parameters:

source: 0xd43593c715fdd31c61141abd04a99fd6822c8558
init: <raw contract bytecode, a very long hex value>
value: 0
gas_limit: 4294967295
gas_price: 1
nonce: <empty> {None}
The values for gas_limit and gas_price were chosen for convenience and have little inherent or special meaning. Note that None for the nonce will increment the known nonce for the source account, starting from 0x0, you may manually set this but will get an "evm.InvalidNonce" error if not set correctly.

Once the extrinsic is in a block, navigate to the Network -> Explorer tab in the UI, or open up the browser console to see that the EVM pallet has fired a Created event with an address field that provides the address of the newly-created contract:

# console:
... {"phase":{"applyExtrinsic":2},"event":{"index":"0x0901","data":["0x8a50db1e0f9452cfd91be8dc004ceb11cb08832f"]} ...

# UI:
evm.Created
A contract has been created at given [address]
   H160: 0x8a50db1e0f9452cfd91be8dc004ceb11cb08832f
In this case, however, it is trivial to calculate this value: 0x8a50db1e0f9452cfd91be8dc004ceb11cb08832f. That is because EVM contract account IDs are determined solely by the ID and nonce of the contract creator's account and, in this case, both of those values are well-known (0xd43593c715fdd31c61141abd04a99fd6822c8558 and 0x0, respectively).

Step 2: Check Contract Storage
Use the Chain State UI tab to queryevm > accountCodes for both Alice's and the contract's account IDs; notice that Alice's account code is empty and the contract's is equal to the bytecode of the Solidity contract.

The ERC-20 contract that was deployed inherits from the OpenZeppelin ERC-20 implementation and extends its capabilities by adding a constructor that mints a maximum amount of tokens to the contract creator. Use the Chain State app to query evm > accountStorage and view the value associated with Alice's account in the _balances map of the ERC-20 contract; use the ERC-20 contract address (0x8a50db1e0f9452cfd91be8dc004ceb11cb08832f) as the first parameter and the storage slot to read as the second parameter (0x045c0350b9cf0df39c4b40400c965118df2dca5ce0fbcf0de4aafc099aea4a14). The value that is returned should be 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.

The storage slot was calculated using a provided utility. (Slot 0 and alice address: 0xd43593c715fdd31c61141abd04a99fd6822c8558)

Further reading: EVM layout of state variables in storage

Step 3: Contract Usage
Use the Developer -> Extrinsics tab to invoke the transfer(address, uint256) function on the ERC-20 contract with evm > call and transfer some of the ERC-20 tokens from Alice to Bob.

target: 0x8a50db1e0f9452cfd91be8dc004ceb11cb08832f
source: 0xd43593c715fdd31c61141abd04a99fd6822c8558
input: 0xa9059cbb0000000000000000000000008eaf04151687736326c9fea17e25fc528761369300000000000000000000000000000000000000000000000000000000000000dd
value: 0
gas_limit: 4294967295
gas_price: 1
The value of the input parameter is an EVM ABI-encoded function call that was calculated using the Remix web IDE; it consists of a function selector (0xa9059cbb) and the arguments to be used for the function invocation. In this case, the arguments correspond to Bob's EVM account ID (0x8eaf04151687736326c9fea17e25fc5287613693) and the number of tokens to be transferred (0xdd, or 221 in hex).

Further reading: the EVM ABI specification

Step 4: Check Bob Contract Storage
After the extrinsic has finalized, use the Chain State app to query evm > accountStorage to see the ERC-20 balances for both Alice and Bob.

