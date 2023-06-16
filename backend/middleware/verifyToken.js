const jwt = require('jsonwebtoken')

// middleware function for token verification
const verifyToken = (req, res, next) => {
    //Getting the token from the request header or cookie
    const token = req.headers.authorization || req.cookies.token

    if(!token) {
        return res.status(401).json({ success: false, message: 'Unauthorized: No token provided'})
    }

    // verifying and decoding the token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if(err) {
          return res.status(401).json( { success: false, message: 'Unauthorized: Invalid token'})
        }

        // Token is valid so you can access the decoded data (e.g. userid)
        req._id = decoded._id

        next()
    })
}