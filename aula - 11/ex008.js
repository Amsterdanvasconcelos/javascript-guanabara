let velocidade = 120;

if (velocidade < 40) {
    console.log(`Sua velocidade é de ${velocidade}Km/h.`)
    console.log('A velocidade mínima da via é de 40km/h.')
    console.log('Por favor, adeque sua velocidade!')
} else if (velocidade > 80) {
    console.log(`Sua velocidade é de ${velocidade}Km/h.`)
    console.log('A velocidade máxima da via é de 80km/h.')
    console.log('Por favor, adeque sua velocidade!')
} else {
    console.log(`Sua velocidade é de ${velocidade}Km/h.`)
    console.log('Ela está dentro do adequado para a via.')
    console.log('Continue assim e boa viagem!')
}