const { mintToken } = require('../services/tokenService');

exports.tokenizeData = async (req, res) => {
  const data = req.body;

  try {
    const tokenId = await mintToken(data);
    return res.status(201).json({
      message: 'Data successfully tokenized',
      tokenId
    });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error', error });
  }
};
