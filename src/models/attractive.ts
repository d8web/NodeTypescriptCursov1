type attractive = {
    name: string,
    price: number
}

const data: attractive[] = [
    {name: 'Cachoeira da Esmeralda', price: 10},
    {name: 'Cachoeira Véu de Noiva', price: 0},
    {name: 'Cachoeira da Serrinha', price: 0},
    {name: 'Cachoeira da Fumaça', price: 0},
    {name: 'Cachoeira da Zilda', price: 30},
    {name: 'Cachoeira da Proa', price: 30},
    {name: 'Cachoeira do Guatambu', price: 30},
];

export const Attractive = {
    getAll: (): attractive[] => {
        return data;
    },
    getPriceAfter: (price: number): attractive[] => {
        return data.filter(item => item.price >= price);
    }
}