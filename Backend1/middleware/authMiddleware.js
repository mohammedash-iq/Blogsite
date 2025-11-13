import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

function jwtVerify(req, res, next) {
    const authHeader = req.headers.authorization.split(" ")
    console.log(authHeader)
    if (!authHeader[0]) {
        return res.status(401).json({ error: "Unauthorized", success: false })
    }
    const token = authHeader[1]
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decode) => {
        if (err) {
            return res.status(403).json({ error: "Forbidden", success: false })
        }
        req.user = { id: decode.user_id, email: decode.email }
        next()
    })
}

export default jwtVerify;