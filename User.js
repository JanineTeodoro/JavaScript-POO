export default class User {
    #nome
    #sobrenome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, sobrenome, email, nascimento, role, ativo = true) {
        this.#nome = nome
        this.#sobrenome = sobrenome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    //Método apenas de leitura (getter)
    //Nunca recebe argumento
    get nome() {
        //Pode ter lógica condicional
        return this.#nome
    }

    get sobrenome() {
        return this.#sobrenome
      }

    get email() {
        return this.#email
    }

    get nascimento() {
        return this.#nascimento
    }

    get role() {
        return this.#role
    }

    get ativo() {
        return this.#ativo
    }

    //recebe apenas um parâmetro
    set nome(novoNome) {
        if (novoNome === '') {
            throw new Error('formato não válido')
        }
        let [nome, ...sobrenome] = novoNome.split(" ")
            sobrenome = sobrenome.join(' ')
            this.#nome = nome
            this.#sobrenome = sobrenome
          }

    get nome() {
        return `${this.#nome} ${this.#sobrenome}`
    }

    exibirInfos() {
        return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`
    }
}
