import z from 'zod';

const signInInput =  z.object({
    email : z.string().email(),
    password : z.string().min(8),
})

const signUpInput = z.object({
    email : z.string().email(),
    password : z.string().min(8),
    name : z.string().min(2),
    contact : z.string().min(10).max(10)
})

function validationSignIn(req, res, next){
    const body = req.body;
    const {success} = signInInput.safeParse(body);
    if(success){
        next();
    }
    else{
        return res.json({msg : "Invalid Inputs", success : false});
    }
}

function validationSignUp(req, res, next){
    const body = req.body;
    const {success} = signUpInput.safeParse(body);
    if(success){
        next();
    }
    else{
        return res.json({msg: "Invalid Inputs", success : false});
    }
}

export {validationSignIn, validationSignUp};