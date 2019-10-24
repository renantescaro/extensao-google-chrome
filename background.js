
consultaApi();

this.document.getElementById('btnSalvar').addEventListener("click", salvar);
this.document.getElementById('btnAdicionar').addEventListener("click", abrirCadastro);
this.document.getElementById('btnCancelar').addEventListener("click", fecharCadastro);

function consultaApi(){
    
    var get = new XMLHttpRequest();

    get.open("GET", "", true);

    get.send();

    get.onreadystatechange = function(){
    
        if (get.readyState == 4 && get.status == 200) {

            montarListagem(get.responseText);
        }
    }
}

function enviarDadosApi(){

    var titulo = document.getElementById('txtTitulo').value;
    var descricao = document.getElementById('txtDescricao').value;

    var post = new XMLHttpRequest();

    post.open("POST", "", true);

    post.send();

    post.onreadystatechange = function(){
    
        if (post.readyState == 4 && post.status == 200) {

            
        }
    }
}

function montarListagem(json){

    /*
        [
            {"anotacao":{"titulo":"almoco","descricao":"almocar com meus pais"}},
            {"anotacao":{"titulo":"Noite","descricao":"Passear com o cachorro"}}
        ]
    */

    var obj = JSON.parse(json);

    obj.forEach(a => {

        var tr = document.createElement('tr');
        var tdId = document.createElement('td')
        var tdTitulo = document.createElement('td');
        var tdBtnEditar = document.createElement('td');
        var btnEditar = document.createElement('button');

        tdId.style.display = 'none';
        btnEditar.className = 'btn btn-primary editar';
        btnEditar.textContent = 'Editar';
        btnEditar.onclick = editarCadastro;

        tdId.textContent = a.anotacao.id;
        tdTitulo.textContent = a.anotacao.titulo;

        tdBtnEditar.appendChild(btnEditar);
        tr.appendChild(tdId);
        tr.appendChild(tdTitulo);
        tr.appendChild(tdBtnEditar);

        document.getElementById('tbodyListagem').appendChild(tr);
    });
}

function salvar(){

    enviarDadosApi();
    
    document.getElementById('listagem').style.display = '';
    document.getElementById('cadastro').style.display = 'none';
    document.getElementById('btnExcluir').style.display = 'none';
    
    document.getElementById('txtTitulo').value = '';
    document.getElementById('txtConteudo').value = '';
}

function abrirCadastro(){

    document.getElementById('listagem').style.display = 'none';
    document.getElementById('cadastro').style.display = '';
}

function editarCadastro(){

    document.getElementById('listagem').style.display = 'none';
    document.getElementById('cadastro').style.display = '';
    document.getElementById('btnExcluir').style.display = '';
}

function fecharCadastro(){

    document.getElementById('listagem').style.display = '';
    document.getElementById('cadastro').style.display = 'none';
    document.getElementById('btnExcluir').style.display = 'none';
}
