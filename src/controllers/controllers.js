import { pool } from '../db/db.js';

export const home = (req,res) => res.render('home', {title:'home'})

export const pruebacon = async(req,res) => {
    const result = await pool.query('select 1+1 as result');
    res.json(result[0])
}
export const showUsers = async(req,res) => {
    const result = await pool.query('select * from users');
    res.json(result[0])
}
export const insertUsers = async(req,res) => {
    
    const result = await pool.query('INSERT INTO users (nameuser, password) VALUES (?,?)');
    
    res.json(result)
    console.log(req.body);
    res.send('vaaaaa')
}
