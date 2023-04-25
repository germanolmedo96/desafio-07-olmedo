import passport from 'passport';
import userModel from "../dao/models/user.js";

export const  postRegister = async(req,res)=>{
    passport.authenticate('register', { failureRedirect: 'fail-register' }), async (req, res) => {
        res.send({ status: 'success', message: 'User registered' })
}
}

export const failLogin = async(req,res)=>{
    res.send({ status: 'error', message: 'login failed' });
}

export const postLogin = async(req,res)=>{
    passport.authenticate('login', { failureRedirect: 'fail-login' }), async (req, res) => {
        if (!req.user) return res.status(400)
        .send({ status: 'error', message: 'Invalid credentials' });
        
        req.session.user = {
            name: `${req.user.first_name} ${req.user.last_name}`,
            age: req.user.age,
            email: req.user.email,
        }
    
        res.send({ status: 'success', message: 'login success' });
}
}

export const failRegister = async(req,res)=>{
    res.send({ status: 'error', message: 'Register failed' });
}

export const getLogout = async(req,res)=>{
    req.session.destroy(err => {
        if (err) return res.status(500).send({ status: 'error', error: 'couldnt logout' });
        res.redirect('/products');
    })
}

export const getGitHub = async(req,res)=>{
    passport.authenticate('github', { scope: ['user:email'] }), async (req, res) => {
        res.send({ status: 'succes', message:'user Registered'});
}
}

export const getGitHubCallback= async(req,res)=>{
    passport.authenticate('github', { failureRedirect: '/login' }), (req, res) => {
        req.session.user = {
            name: `${req.user.first_name} ${req.user.last_name}`,
            age: req.user.age,
            email: req.user.email,
            // rol: rol
        }
    
        res.redirect('/products'); 
}
}
export default{
    postRegister,
    failLogin,
    postLogin,
    failRegister,
    getLogout,
    getGitHub,
    getGitHubCallback
}