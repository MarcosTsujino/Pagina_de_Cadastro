class Cadastrada {
    constructor(nome, telefone, email, senha) {
        this.nome = nome
        this.telefone = telefone
        this.email = email
        this.senha = senha
        
    }

    validarDados() {
        for(let i in this) {
            if(this[i] == undefined || this[i] == '' || this[i] == null || this.senha.length < 8 || this.senha == '123' || this.senha == 'asasb' || this.senha == '12345678' || this.senha == 'lmn3!lmKX4' || this.senha == '543543TM!#kmn') {
                return false
            }
        }
        return true
    }
}

class Bd {

    constructor() {
        let id = localStorage.getItem('id')

        if(id === null) {
            localStorage.setItem('id', 0)
        }
        
    }

    getProximoId() {

        let proximoId = localStorage.getItem('id') 

        return parseInt(proximoId) + 1
    }

    gravar(d) {
        
        let id = this.getProximoId()

        localStorage.setItem(id, JSON.stringify(d))

        localStorage.setItem('id', id)
    }

    recuperarTodosRegistros() {

        //array de arquitetas
        let cadastradas = Array()

        let id = localStorage.getItem('id')

        //recuperar todas as arquitetas cadastradas em localStorage
        for(let i = 1; i <= id; i++) {

            //recuperar a arquiteta
            let cadastrada = JSON.parse(localStorage.getItem(i))

            //existe a possibiidade de haver índices que foram pulados/removidos
            //nestes casos nós vamos pular esses índices
            if(cadastrada === null) {
                continue
            }

            cadastrada.id = i
            cadastradas.push(cadastrada)
        }

        return cadastradas
    }

    pesquisar(cadastrada) {
        let cadastradasFiltradas = Array()

        cadastradasFiltradas = this.recuperarTodosRegistros()

        console.log(cadastradasFiltradas)
        console.log(cadastrada)

        console.log(cadastradasFiltradas)

        //nome
        if(cadastrada.nome != '') {
            console.log('filtro de nome')
            cadastradasFiltradas = cadastradasFiltradas.filter(d => d.nome == cadastrada.nome)
        }
        
        //telefone
        if(cadastrada.telefone != '') {
            console.log('Filtro de telefone')
            cadastradasFiltradas = cadastradasFiltradas.filter(d => d.telefone == cadastrada.telefone)
        }

        //email
        if(cadastrada.email != '') {
            console.log('Filtro de email')
            cadastradasFiltradas = cadastradasFiltradas.filter(d => d.email == cadastrada.email)
        }

        //senha
        if(cadastrada.senha != '') {
            console.log('Filtro de senha')
            cadastradasFiltradas = cadastradasFiltradas.filter(d => d.senha == cadastrada.senha)
        } 

        return cadastradasFiltradas
    }

    remover(id) {
        localStorage.removeItem(id)
    }

}

let bd = new Bd() 

function cadastrarCadastrada() {

    let nome = document.getElementById('nome')
    let telefone = document.getElementById('telefone')
    let email = document.getElementById('email')
    let senha = document.getElementById('senha')
    
    
    let cadastrada = new Cadastrada (
        nome.value,
        telefone.value,
        email.value,
        senha.value
    )

    if(cadastrada.validarDados()) {
        bd.gravar(cadastrada)

        document.getElementById('modal_titulo').innerHTML = 'Registro inserido com sucesso'
        document.getElementById('modal_titulo_div').className = 'modal-header text-success'
        document.getElementById('modal_conteudo').innerHTML = 'Arquiteta foi cadastrada com sucesso!'
        document.getElementById('modal_btn').innerHTML = 'Voltar'
        document.getElementById('modal_btn').className = 'btn btn-success'

        //dialog de sucesso
        $('#modalRegistraCadastrada').modal('show')

        nome.value = ''
        telefone.value = ''
        email.value = ''
        senha.value = ''
        
    } else {
                
        document.getElementById('modal_titulo').innerHTML = 'Erro na inclusão do registro'
        document.getElementById('modal_titulo_div').className = 'modal-header text-danger'
        document.getElementById('modal_conteudo').innerHTML = 'Erro na gravação, verifique se todos os campos foram preenchidos corretamente!'
        document.getElementById('modal_btn').innerHTML = 'Voltar e corrigir'
        document.getElementById('modal_btn').className = 'btn btn-danger'

        //dialog de erro
        $('#modalRegistraCadastrada').modal('show')
    }

    
}

function carregaListaCadastradas(cadastradas = Array(), filtro = false) {

    if(cadastradas.length == 0 && filtro == false) {
        cadastradas = bd.recuperarTodosRegistros()
    }
    
    //selecionando o elemento tbody da tabela
    let listaCadastradas = document.getElementById('listaCadastradas')
    listaCadastradas.innerHTML = ''

    //percorrer o array cadastradas, listando cada cadastrada de forma dinâmica
    cadastradas.forEach(function(d) {

        //console.log(d)       
        
        //criando a linha(tr)
        let linha = listaCadastradas.insertRow()

        //criar as colunas (td)
        linha.insertCell(0).innerHTML = `${d.nome}` 
        
        linha.insertCell(1).innerHTML = d.telefone

        linha.insertCell(2).innerHTML = d.email
        //linha.insertCell(3).innerHTML = d.senha

        //criar o botão de exclusão
        let btn = document.createElement("button")
        btn.className = 'btn btn-danger'
        btn.innerHTML = '<i class= "fas fa-times"></i>'
        btn.id = `id_cadastrada_${d.id}`
        btn.onclick = function() {
            //remover o cadastro
            let id = this.id.replace('id_cadastrada_', '')

            //alert(id)

            bd.remover(id)

            window.location.reload()
        }
        linha.insertCell(3).append(btn)

        console.log(d)
    })
}

function pesquisarCadastrada() {
    let nome = document.getElementById('nome').value
    let telefone = document.getElementById('telefone').value
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value

    let cadastrada = new Cadastrada(nome, telefone, email, senha)

    let cadastradas = bd.pesquisar(cadastrada)

    this.carregaListaCadastradas(cadastradas, true)

}