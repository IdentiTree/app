const identity = require('@iota/identity-wasm/node');

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


module.exports = { createDID };
