const user = {
    nome: "Janine",
    email: "j@j.com",
    nascimento: "2023/01/01",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: "Mariana",
    email: "m@m.com",
    role: "admin",
    criarCurso() {
        console.log('Curso criado!')
    }
}
//parâmetros: objeto que vai herdar a propriedade + objeto que vai ceder as propriedades
Object.setPrototypeOf(admin, user)
admin.criarCurso() //Curso criado!
admin.exibirInfos() //Mariana m@m.com (cadeia de protótipo)