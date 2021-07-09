//Install express server
function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}
const express = require('express');
const app = express();
app.use(requireHTTPS);

// Serve only the static files form the dist directory
app.use(express.static("docu-dash"));

app.use(express.static("docu-dash"));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
