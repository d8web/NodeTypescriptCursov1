import { Request, Response } from 'express';

export const Contact =  (req: Request, res: Response) => {
    res.render('pages/contato');
}

export const TestFunction = (req: Request, res: Response) => {
    let queryName: string = req.query.name as string;
    let idade: string = req.query.age as string;

    res.render('pages/teste', {
        queryName: queryName ?? 'Visitante',
        age: idade ?? 18
    });
}

export const About = (req: Request, res: Response) => {
    res.render('pages/sobre');
}