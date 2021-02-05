// importanto o axios
import axios from 'axios';

class Api{
    static async getEndereco(cep){
        const responde = new Endereco((await axios.get(`https://viacep.com.br/ws/${cep}/json/`)).data);
        console.log('response :', responde);
    }
}
class Endereco{
    constructor({logradouro, bairro, localidade, uf}){
        this.logradouro = logradouro,
        this.bairro = bairro,
        this.localidade = localidade,
        this.uf = uf
    }
        
}
Api.getEndereco('12230082').then(valor => {
    console.log(valor)
});