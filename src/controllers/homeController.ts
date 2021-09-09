import { Request, Response } from 'express';
import { Op } from 'sequelize'; // Operations no mysql com sequelize
import { User } from '../models/user';
import { Attractive } from '../models/attractive';

export const Home = async (req: Request, res: Response) => {
    /*
    examples
    consultando dados no model com sequelize

    let users = await User.findAll({})

    let users = await User.findAll({
        where: { id: 2 } // Filtrando examples: where: { name: 'Daniel' }, where: { email: 'Clotilde' },
    })

    let users = await User.findAll({
        where: { name: 'Clotilde', email: 'cloclo@bol.com' }
    })

    let users = await User.findAll({
        where: { name: 'Clotilde', email: 'cloclo@bol.com' }
    })

    let users = await User.findAll({
        attributes: ['name', 'email'], // Pegar somente o nome e o email
    })

    let users = await User.findAll({
        attributes: { exclude: ['id', 'name'] } // Pegue todos os campos exceto ['id', 'name']
    })

    let users = await User.findAll({
        where: {
            [Op.or]: [
                {name: 'Daniel'},
                {email: 'cloclo@bol.com'}
            ]
        }
    });

    let users = await User.findAll({
        where: {
            age: {
                [Op.gt]: 40, // > 40 gt > Greather Than
                [Op.gte]: 40, // >= 40
                [Op.lt]: 40, // < 40 > lt > Lower Than
                [Op.lte]: 40, // <= 40 e -> Equal
            }
        }
    });

    let users = await User.findAll({
        where: {
            age: {
                [Op.between]: [40, 70] // Todos entre 40 anos e 70 anos
            }
        }
    });

    let users = await User.findAll({
        where: {
            age: {
                [Op.notBetween]: [40, 70] // Pegue todos exceto entre 40 anos e 70 anos, notBetween
            }
        }
    });
    let users = await User.findAll({
        where: {
            age: {
                [Op.notBetween]: [40, 70] // Pegue todos exceto entre 40 anos e 70 anos, notBetween
            }
        }
    });

    let users = await User.findAll({
        where: {
            name: {
                [Op.like]: 'Dani%' // Like busca, vou usar muito
            }
        }
    });

    let users = await User.findAll({
        where: {
            age: {
                [Op.gte]: 18 // >= 18
            }
        },
        order: [
            ['age', 'ASC'], // 'DESC'
            ['name', 'ASC'], // 'DESC'
        ]
    });

    // Ordenando
    let users = await User.findAll({
        order: [
            ['name', 'ASC'], // 'DESC'
        ]
    });

    // Ordenando e limitando
    let users = await User.findAll({
        order: [
            ['name', 'ASC'], // 'DESC'
        ],
        limit: 1
    });

    // Ordenando e limitando, offset pula x e limit pega x
    let users = await User.findAll({
        order: [
            ['name', 'ASC'], // 'DESC'
        ],
        offset: 0,
        limit: 2
    });

    // Build + save adicionar / inserir dados com sequelize
    const user = User.build({
        name: 'Vanderson',
        email: 'van@gmail.com'
    });

    await user.save()
    console.log(user.name, user.email)

    // Método dos models -> ModelName.create({})
    const user = await User.create({
        name: 'Nemo',
        email: 'nemo@gmail.com'
    })

    console.log(user.name)
    console.log(user.email)

    // create
    const user = await User.create({
        name: 'Nemo',
        email: 'nemo@gmail.com'
    })

    console.log(user.name)
    console.log(user.email)
    console.log(JSON.stringify(users));
    // Link docs sequelize
    */

    let users = await User.findAll({});

    let nome: string = 'Daniel';
    let idade: number = 16;

    // lista de atrativos, array
    let list = Attractive.getAll();

    // Lista de carros
    let cars = ['Camaro', 'Corola', 'Fiat'];

    let showNumber: boolean = false
    if(idade >= 18) {
        showNumber = true
    }

    res.render('pages/home', {
        nome,
        idade,
        showNumber,
        cachoeiras: list,
        cars,
        users
    });
}