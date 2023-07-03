// This file is part of Substrate.

// Copyright (C) Parity Technologies (UK) Ltd.
// SPDX-License-Identifier: Apache-2.0

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// 	http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

//! Autogenerated weights for pallet_asset_rate
//!
//! THIS FILE WAS AUTO-GENERATED USING THE SUBSTRATE BENCHMARK CLI VERSION 4.0.0-dev
//! DATE: 2023-03-16, STEPS: `50`, REPEAT: `20`, LOW RANGE: `[]`, HIGH RANGE: `[]`
//! WORST CASE MAP SIZE: `1000000`
//! HOSTNAME: `local`, CPU: `<UNKNOWN>`
//! EXECUTION: Some(Wasm), WASM-EXECUTION: Compiled, CHAIN: Some("dev"), DB CACHE: 1024

// Executed Command:
// ./target/production/substrate
// benchmark
// pallet
// --chain=dev
// --steps=50
// --repeat=20
// --pallet=pallet_asset_rate
// --extrinsic=*
// --execution=wasm
// --wasm-execution=compiled
// --heap-pages=4096
// --output=./frame/asset-rate/src/weights.rs
// --header=./HEADER-APACHE2
// --template=./.maintain/frame-weight-template.hbs

#![cfg_attr(rustfmt, rustfmt_skip)]
#![allow(unused_parens)]
#![allow(unused_imports)]

use frame_support::{traits::Get, weights::{Weight, constants::RocksDbWeight}};
use sp_std::marker::PhantomData;

/// Weight functions needed for pallet_asset_rate.
pub trait WeightInfo {
	fn create() -> Weight;
	fn update() -> Weight;
	fn remove() -> Weight;
}

/// Weights for pallet_asset_rate using the Substrate pivot and recommended hardware.
pub struct SubstrateWeight<T>(PhantomData<T>);
impl<T: frame_system::Config> WeightInfo for SubstrateWeight<T> {
	/// Storage: AssetRate ConversionRateToNative (r:1 w:1)
	/// Proof: AssetRate ConversionRateToNative (max_values: None, max_size: Some(36), added: 2511, mode: MaxEncodedLen)
	fn create() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `76`
		//  Estimated: `3501`
		// Minimum execution time: 6_000_000 picoseconds.
		Weight::from_parts(7_000_000, 3501)
			.saturating_add(T::DbWeight::get().reads(1_u64))
			.saturating_add(T::DbWeight::get().writes(1_u64))
	}
	/// Storage: AssetRate ConversionRateToNative (r:1 w:1)
	/// Proof: AssetRate ConversionRateToNative (max_values: None, max_size: Some(36), added: 2511, mode: MaxEncodedLen)
	fn update() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `137`
		//  Estimated: `3501`
		// Minimum execution time: 7_000_000 picoseconds.
		Weight::from_parts(8_000_000, 3501)
			.saturating_add(T::DbWeight::get().reads(1_u64))
			.saturating_add(T::DbWeight::get().writes(1_u64))
	}
	/// Storage: AssetRate ConversionRateToNative (r:1 w:1)
	/// Proof: AssetRate ConversionRateToNative (max_values: None, max_size: Some(36), added: 2511, mode: MaxEncodedLen)
	fn remove() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `137`
		//  Estimated: `3501`
		// Minimum execution time: 7_000_000 picoseconds.
		Weight::from_parts(8_000_000, 3501)
			.saturating_add(T::DbWeight::get().reads(1_u64))
			.saturating_add(T::DbWeight::get().writes(1_u64))
	}
}

// For backwards compatibility and tests
impl WeightInfo for () {
	/// Storage: AssetRate ConversionRateToNative (r:1 w:1)
	/// Proof: AssetRate ConversionRateToNative (max_values: None, max_size: Some(36), added: 2511, mode: MaxEncodedLen)
	fn create() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `76`
		//  Estimated: `3501`
		// Minimum execution time: 6_000_000 picoseconds.
		Weight::from_parts(7_000_000, 3501)
			.saturating_add(RocksDbWeight::get().reads(1_u64))
			.saturating_add(RocksDbWeight::get().writes(1_u64))
	}
	/// Storage: AssetRate ConversionRateToNative (r:1 w:1)
	/// Proof: AssetRate ConversionRateToNative (max_values: None, max_size: Some(36), added: 2511, mode: MaxEncodedLen)
	fn update() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `137`
		//  Estimated: `3501`
		// Minimum execution time: 7_000_000 picoseconds.
		Weight::from_parts(8_000_000, 3501)
			.saturating_add(RocksDbWeight::get().reads(1_u64))
			.saturating_add(RocksDbWeight::get().writes(1_u64))
	}
	/// Storage: AssetRate ConversionRateToNative (r:1 w:1)
	/// Proof: AssetRate ConversionRateToNative (max_values: None, max_size: Some(36), added: 2511, mode: MaxEncodedLen)
	fn remove() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `137`
		//  Estimated: `3501`
		// Minimum execution time: 7_000_000 picoseconds.
		Weight::from_parts(8_000_000, 3501)
			.saturating_add(RocksDbWeight::get().reads(1_u64))
			.saturating_add(RocksDbWeight::get().writes(1_u64))
	}
}
