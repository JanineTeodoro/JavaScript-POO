import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

// novoUser.#nome = 'Márcia'
// console.log(novoUser.nome) //SyntaxError: Private field '#nome' must be declared in an enclosing class

const novoUser = new User('Juliana', 'Souza', 'j@j.com', '2021-01-01')
console.log(novoUser.nome) //'Juliana'
novoUser.nome = 'Juliana Silva Souza'
console.log(novoUser.nome) //'Juliana'
console.log(novoUser.sobrenome) //'Silva Souza'