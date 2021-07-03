import crypto from 'crypto';
import path from 'path';
import dotenv from 'dotenv';
import { SESSION_SECRET as encryptionSecret } from '../util/secrets';

const algorithm = 'aes-256-ctr';
const iv = crypto.randomBytes(16);

/**
 * Encrypts the passed text and returns the iv and encrypted content
 *
 * @param   {String} text - plain text that needs to be encrypted
 * @return  { iv: String, content: String }
 */

const encrypt = (text: string): { iv: string; content: string } => {
  const cipher = crypto.createCipheriv(algorithm, encryptionSecret, iv);
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

  return {
    iv: iv.toString('hex'),
    content: encrypted.toString('hex'),
  };
};

/**
 * Decrypts the encrypted message and returns the decrypted data
 *
 * @param   {Object} Hash - an object with the iv and content
 * @return  {String} text - plain text data
 */

const decrypt = (hash: { iv: string; content: string; }): string => {
  const decipher = crypto.createDecipheriv(
    algorithm,
    encryptionSecret,
    Buffer.from(hash.iv, 'hex')
  );

  const decrpyted = Buffer.concat([
    decipher.update(Buffer.from(hash.content, 'hex')),
    decipher.final(),
  ]);

  return decrpyted.toString();
};

export { encrypt, decrypt };
