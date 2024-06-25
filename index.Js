// Função para adicionar uma nova tarefa
function adicionarTarefa() {
    var inputTarefa = document.getElementById('tarefaInput');
    var valorTarefa = inputTarefa.value.trim();
  
    if (valorTarefa !== '') {
      var listaTarefas = document.getElementById('listaTarefas');
  
      // Criar elementos HTML para a nova tarefa
      var novaTarefa = document.createElement('li');
      novaTarefa.className = 'tarefa';
      
      var textoTarefa = document.createElement('span');
      textoTarefa.className = 'texto';
      textoTarefa.textContent = valorTarefa;
      textoTarefa.addEventListener('click', toggleConcluida);
  
      var btnExcluir = document.createElement('button');
      btnExcluir.className = 'btnExcluir';
      btnExcluir.textContent = 'Excluir';
      btnExcluir.addEventListener('click', removerTarefa);
  
      novaTarefa.appendChild(textoTarefa);
      novaTarefa.appendChild(btnExcluir);
  
      listaTarefas.appendChild(novaTarefa);
  
      // Limpar o campo de entrada
      inputTarefa.value = '';
    }
  }
  
  // Função para marcar/desmarcar uma tarefa como concluída
  function toggleConcluida() {
    this.classList.toggle('concluida');
  }
  
  // Função para remover uma tarefa da lista
  function removerTarefa() {
    var tarefa = this.parentNode;
    var listaTarefas = document.getElementById('listaTarefas');
    listaTarefas.removeChild(tarefa);
  }