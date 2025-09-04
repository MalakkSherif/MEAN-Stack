export let courses =[
    {id: 1, title: 'JavaScript', price: 1000},
    {id: 2, title: 'Angular', price: 2000},
    {id: 3, title: 'Express.js', price: 1400},
    {id: 4, title: 'Node.js', price: 2050},
]

export function modifyC( value ) { courses = value; }