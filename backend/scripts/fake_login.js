// Copyright 2020-2021 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

const { Network, defaultNodeURL, explorerURL, Client, Config, VerifiableCredential, checkCredential } = require('@iota/identity-wasm/node');

const { createIdentity } = require('./create_did');

/*
    This example shows how to create a Verifiable Credential and validate it.
    In this example, alice takes the role of the subject, while we also have an issuer.
    The issuer signs a UniversityDegreeCredential type verifiable credential with Alice's name and DID.
    This Verifiable Credential can be verified by anyone, allowing Alice to take control of it and share it with whoever they please.
    @param {{network: string, node: string}} clientConfig
*/
async function createVC() {
    //Creates new identities (See "create_did" and "manipulate_did" examples)
    const alice = await createIdentity();

    console.log("alice", alice)

    // Prepare a credential subject indicating the degree earned by Alice
    let credentialSubject = {
        id: "did:iota:BTEg5it1b4BX8cGbTqwDpErgWet8jy73o6WPLGVYsk2Y", // LoginServer DID
        name: "Alice",
    };

    // Create an unsigned `UniversityDegree` credential for Alice
    const unsignedVc = VerifiableCredential.extend({
        id: "http://example.edu/credentials/3732",
        type: "LoginCredential",
        issuer: alice.doc.id.toString(),
        credentialSubject,
    });

    //Sign the credential with alice's newKey
    try {
        const signedVc = alice.doc.signCredential(unsignedVc, {
            method: alice.doc.id.toString()+"#key",
            public: alice.key.public,
            secret: alice.key.secret,
        });
        //Check if the credential is verifiable
        try {

            const result = await checkCredential(signedVc.toString(), CLIENT_CONFIG);
            console.log(`VC verification result: ${result.verified}`);
            console.log(`signedVc: ${signedVc}`);
        } catch (error) {

            console.log(`error verification:`, error);
        }

        return { alice, signedVc };
    } catch (error) {

        console.log(`error signCredential:`, error);
    }


}


const CLIENT_CONFIG = {
    network: "main",
    node: "https://chrysalis-nodes.iota.org:443",
}

const EXPLORER_URL = "https://explorer.iota.org/mainnet/transaction";


createVC(CLIENT_CONFIG)