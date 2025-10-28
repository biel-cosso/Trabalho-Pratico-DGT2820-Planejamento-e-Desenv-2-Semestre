# exemplosjs - Instruções de teste

Este pequeno projeto contém três páginas de exemplo demonstrando uso de JavaScript, DOM e Vue.js:

- `ordenando.html` + `ordenando.js` — algoritmos de ordenação, manipulação do DOM e funções em estilo arrow.
- `receitas.html` — catálogo de receitas gerado dinamicamente a partir de um vetor JSON (map/reduce).
- `usuarios.html` — consumo de API REST (https://reqres.in) e renderização de cards usando Vue 3.

Como abrir e testar

1. Abra o projeto no Visual Studio Code.
2. Recomendo usar a extensão Live Server para servir os arquivos localmente (evita limitações do protocolo file://).
   - Instale Live Server (se ainda não estiver instalado).
   - Com o arquivo aberto (por exemplo `usuarios.html`), clique em "Go Live" no canto inferior direito do VS Code.
   - Abra o endereço exibido, por exemplo: `http://127.0.0.1:5500/usuarios.html`.

3. Testes específicos por página

- `ordenando.html`
  - Adicione valores no campo "Valor" e clique "Adicionar".
  - Selecione um algoritmo (Bubble, Selection, Quick) e clique "Ordenar".
  - Clique "Misturar" para embaralhar os valores (usa a função `shuffle` em `ordenando.js`).
  - Abra o DevTools (F12) e veja o Console caso algo não funcione.

- `receitas.html`
  - A página carrega automaticamente os cards (evento `onload` chama `preencheCatalogo`).
  - Verifique se as imagens (`bolo_cenoura.png`, etc.) aparecem; se não, confira o painel Network para erros 404.

- `usuarios.html`
  - A página usa Vue 3 para buscar usuários em `https://reqres.in/api/users`.
  - Há paginação (Anterior / Próxima) e um indicador de carregamento.
  - Abra o DevTools → aba Network e filtre por XHR/fetch para observar as requisições.
  - Abra o Console para ver mensagens de erro (por exemplo problemas de CORS).
