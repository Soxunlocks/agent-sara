// Dummy in-memory store for users. In a real-world scenario, 
// this would be replaced with a database like SQLite or PostgreSQL.
const users = [];

module.exports = {
  async findByEmail(email) {
    return users.find(user => user.email === email);
  },

  async create(user) {
    // Initialize with an empty wallet object to store address and private key
    const newUser = { ...user, wallet: {} };
    users.push(newUser);
    return newUser;
  },

  async findById(userId) {
    return users.find(user => user.id === userId);
  }
};
