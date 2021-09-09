import { Request, Response } from 'express';
import { User } from '../models/user';

export const AgeUser = (req: Request, res: Response) => {
    let showAge: boolean = false;
    let idade: number = 0;

    // Recebendo dados via POST pelo formulário.
    // req.body = dados do corpo da requisição.
    if(req.body.year) {
        let yearInput: number = parseInt(req.body.year as string);
        let currentYear: number = new Date().getFullYear();
        
        idade = currentYear - yearInput;
        showAge = true;
    }

    res.render('pages/contato', {
        idade,
        showAge
    });
}

export const ScreenAddUser = (req: Request, res: Response) => {
    res.render('pages/user');
}

export const AddUserAction = async (req: Request, res: Response) => {
    let name = req.body.name;
    let email = req.body.email;

    if(name && email) {
        const user = await User.create({
            name,
            email
        })

        console.log(user.name, user.email);
    }

    res.redirect('/');
}