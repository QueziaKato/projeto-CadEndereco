'use restrict'; //Modo restrito

//Limpar formulário
const limparFormulario =(endereco) =>{
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';

}

//Verifica se CEP é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

//Preenche campos do formulário
const preencherformulario = (endereco) =>{
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value =endereco.uf;
}
/*
Função para consumo de API
utilizando a função do tipo assíncrona
*/
const pesquisarcep = async() =>{
    limparFormulario();
    const url =  `http://viacep.com.br/ws/${cep.value}/json/`;
}
