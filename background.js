
this.document.getElementById('btnSalvar').addEventListener("click", salvar);
this.document.getElementById('btnAdicionar').addEventListener("click", abrirCadastro);
this.document.getElementById('btnCancelar').addEventListener("click", fecharCadastro);
this.document.getElementById('btnCancelar').addEventListener("click", editarcadastro);

function salvar(){

    document.getElementById('txtTitulo').value = '';
    document.getElementById('txtConteudo').value = '';

    document.getElementById('listagem').style.display = '';
    document.getElementById('cadastro').style.display = 'none';
    document.getElementById('btnExcluir').style.display = 'none';
}

function abrirCadastro(){

    document.getElementById('listagem').style.display = 'none';
    document.getElementById('cadastro').style.display = '';
}

function editarcadastro(){

    document.getElementById('listagem').style.display = 'none';
    document.getElementById('cadastro').style.display = '';
    document.getElementById('btnExcluir').style.display = '';
}

function fecharCadastro(){

    document.getElementById('listagem').style.display = '';
    document.getElementById('cadastro').style.display = 'none';
    document.getElementById('btnExcluir').style.display = 'none';
}