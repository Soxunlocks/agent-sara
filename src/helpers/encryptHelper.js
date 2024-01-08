const crypto = require('crypto');
const config = require('../config');

const algorithm = 'aes-256-ctr';
const secretKey = config.encryptionSecret;
const iv = crypto.randomBytes(16);

const encrypt = (text) => {
  const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
  return {
    iv: iv.toString('hex'),
    content: encrypted.toString('hex')
  };
};

module.exports = {
  encrypt
};