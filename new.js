// function User(nome, email) {
//     this.nome = nome
//     this.email = email

//     this.exibirInfos = function() {
//         return `${this.nome}, ${this.email}`
//     }
// }

//>>>CONSTRUTOR<<<//
// const novoUser = new User('Janine', 'j@j.com')
// console.log(novoUser.exibirInfos()) //Janine, j@j.com

// function Admin(role) {
//     User.call(this, 'Juliana', 'j@j.com')
//     this.role = role || 'estudante'
// }

// Admin.prototype = Object.create(User.prototype)
// const novoUser = new Admin('admin')
// console.log(novoUser.exibirInfos()) //Juliana, j@j.com
// console.log(novoUser.role) // admin

//>>>OBJETO LITERAL<<<//
const user = {
    init: function(nome, email) {
        this.nome = nome
        this.email = email
    },
    exibirInfos: function(nome) {
        return this.nome
    }
}

const novoUser = Object.create(user)
novoUser.init('Janine', 'j@j.com')
console.log(novoUser.exibirInfos())//Janine
console.log(user.isPrototypeOf(novoUser)) //true