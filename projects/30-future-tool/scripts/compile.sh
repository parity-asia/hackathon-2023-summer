#!/bin/bash

FULL_PATH=$1
DIR_PATH=$(dirname $FULL_PATH)
CIRCUIT_NAME=$(basename $FULL_PATH)
CIRCUIT_NAME=${CIRCUIT_NAME:=test}
FUNCTION=$2
TAU_PATH=$(realpath pot_final.ptau)
PROTOCOL=$3
PROTOCOL=${PROTOCOL:=groth16} # plonk/groth16

cd $DIR_PATH

BASEPATH=${CIRCUIT_NAME}_obj
rm -rf $BASEPATH
mkdir -p $BASEPATH
cd $BASEPATH

set -e # stop for errors

circom ../$CIRCUIT_NAME.circom --r1cs --wasm --sym

if [ ! -f $CIRCUIT_NAME.r1cs ]; then
    exit
fi


if [ "$FUNCTION" == "info" ]; then
    set -x # for verbose printing
    snarkjs r1cs info $CIRCUIT_NAME.r1cs
    snarkjs r1cs print $CIRCUIT_NAME.r1cs $CIRCUIT_NAME.sym
    set +x
fi

snarkjs r1cs export json $CIRCUIT_NAME.r1cs $CIRCUIT_NAME.r1cs.json

cd ${CIRCUIT_NAME}_js
node generate_witness.js $CIRCUIT_NAME.wasm ../../${CIRCUIT_NAME}_input.json ../witness.wtns

cd ..


( set -x;

    snarkjs $PROTOCOL setup $CIRCUIT_NAME.r1cs $TAU_PATH ${CIRCUIT_NAME}_final.zkey
    # snarkjs zkey verify $CIRCUIT_NAME.r1cs $TAU_PATH ${CIRCUIT_NAME}_final.zkey
    snarkjs zkey export verificationkey ${CIRCUIT_NAME}_final.zkey verification_key.json
    snarkjs $PROTOCOL prove ${CIRCUIT_NAME}_final.zkey witness.wtns proof.json public.json
    snarkjs zkey export solidityverifier ${CIRCUIT_NAME}_final.zkey verifier.sol
    snarkjs zkey export soliditycalldata public.json proof.json
)

# cat public.json

if [ "$FUNCTION" == "verify" ]; then
    set -x
    snarkjs $PROTOCOL verify verification_key.json public.json proof.json
    set +x
fi