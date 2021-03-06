const express = require('express');
const helmet = require('helmet');
const path = require('path');
const bodyParser = require('body-parser')
//END OF PACKAGE IMPORTS
const router = require('./router');
const config = require('./config');
//END OF LOCAL IMPORTS
const PORT = config.port || process.env.PORT || 8000;
//END OF CONSTS
//MAIN PROGRAM
const app = express();
// Enable Helmet for more protection
app.use(helmet());
// Enable Body Parser for more data
app.use(bodyParser.json())

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));
// Serve routes
router(app);

// Serve webpage
app.get('*', (req, res) => {res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'))});
// Start Server
app.listen(PORT,()=>{console.log('Server running on port #'+PORT);});
