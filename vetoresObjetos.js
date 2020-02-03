const objeto = {
    nome: "Carlos",
    idade: 32,
    especialidades: [
        {
            nome: 'C++',
            especialidade: 'Desktop' 
        },
        
        { 
            nome: 'Python',
            especialidade: 'Data Science'
        },

        { 
            nome: 'JavaScript',
            especialidade: 'Web/Mobile' 
        }
    ]
}

console.log(`O usuário ${objeto.nome} tem ${objeto.idade} anos e usa a tecnologia ${objeto.especialidades[0].nome} com especialidade em ${objeto.especialidades[0].especialidade}`
)