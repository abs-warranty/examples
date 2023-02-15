const fs = require('fs')

const jsonwebtoken = require('jsonwebtoken')

/**
 * Generate a JSON web token signed with an asymmetric ECDSA key pair with the following claims:
 * {
 *   "iat": 1627618568,
 *   "iss": "6102b521f403f42ddcde7ae5",
 *   "aud": "https://sandbox.absintegrations.com/api/v3",
 *   "exp": 1627625768
 * }
 * @returns {string} Signed JSON Web Token
 */
function generateAuthToken() {
  let privateKeyFile

  // Read teh private key from the file system
  privateKeyFile = fs.readFileSync('tire-protection-key')

  // Configure JSON web token to be signed by ES256 algorithm with
  // 2 hour expiry time
  // Environment as audience
  // Partner id as issuer
  const jwt = jsonwebtoken.sign({}, privateKeyFile, {
    algorithm: 'ES256',
    expiresIn: '2h',
    audience: process.env.AUDIENCE,
    issuer: process.env.PARTNER_ID,
  })

  return jwt
}

module.exports = { generateAuthToken }
