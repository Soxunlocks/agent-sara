const User = require('../models/User');
const hashPassword = require('../helpers/hashPassword');
const generateToken = require('../helpers/generateToken');
const { createWallet } = require('../helpers/ethereumWallets');
const { encrypt } = require('../helpers/encryptHelper');

exports.registerUser = async (req, res) => {
  try {
    const { email, password, username } = req.body;

    // Check if the user already exists
    const existingUser = await User.findByEmail(email);
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    const hashedPassword = await hashPassword(password);
    const ethereumWallet = createWallet();
    const encryptedPrivateKey = encrypt(ethereumWallet.privateKey);

    // Create user
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      walletAddress: ethereumWallet.address,
      privateKey: encryptedPrivateKey
    });

    // Omit the password when returning the user
    const { password: _, ...userWithoutPassword } = newUser;

    // Generate Token
    const token = generateToken(userWithoutPassword);

    return res.status(201).json({
      message: 'User successfully registered',
      user: userWithoutPassword,
      token
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
