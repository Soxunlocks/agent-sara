const express = require('express');
const validateRegistration = require('./middleware/validateRegistration');
const authController = require('./controllers/authController');
const tokenizeDataController = require('./controllers/tokenizeDataController');

const app = express();
app.use(express.json());

app.post('/register', validateRegistration, authController.registerUser);

app.post('/tokenize', tokenizeDataController.tokenizeData);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
