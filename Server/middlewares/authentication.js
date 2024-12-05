import jwt from 'jsonwebtoken'


function authentication(req, res, next){
    const token = req.headers['authorization'];
    if(!token){
        return res.json({msg : 'Unauthorized User', success : false});
    }

    try {
        const verify = jwt.verify(token, process.env.JWT_SECRET);
        if(!verify){
            return res.json({msg : "Unauthorized User", success : false});
        }
        req.userId = verify.id;
        next();
    } catch (error) {
        return res.json({msg : "Authentication Error", success : false});
    }
}

export default authentication;