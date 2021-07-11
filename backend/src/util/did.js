const identity = require('@iota/identity-wasm/node');
const { checkCredential } = require('@iota/identity-wasm/node');

const createDID = async () => {
    const key = new identity.KeyPair(identity.KeyType.Ed25519);
    const doc = await identity.Document.fromKeyPair(key);

    doc.sign(key);

    const message = await identity.publish(doc.toJSON()).catch((error) => {
        console.error("Error: ", error);
    });

    return {
        message,
        key,
        did: `did:iota:${doc.id.tag}`,
    };
};

const CLIENT_CONFIG = {
    network: "main",
    node: "https://chrysalis-nodes.iota.org:443",
}

const authenticate = async (credential) => {


    console.log("authenticate", credential)
    // const result = await client.checkCredential(credential.toString());
    try {
        const result = await checkCredential(JSON.stringify(credential), CLIENT_CONFIG);
        console.log("result", result)

        console.log(`VC verification result: ${result.verified}`);

        return {
            result
        };
    } catch (error) {
        console.log("error authenticate", error)

    }

};


module.exports = { createDID, authenticate };
