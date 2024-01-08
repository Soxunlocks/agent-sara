module.exports = {
  jwtSecret: process.env.JWT_SECRET || 'y0un33dt0d1v3rs1fyy0urb0nds',
  jwtSession: {
    session: false
  },
  encryptionSecret: process.env.ENCRYPTION_SECRET || '<encryption_secret>'
};
