console.log('RENDER SEGURANÇA CARREGOU');

const schemas = {
  'segurança': {
    headers: ['Nome', 'Disponib.', 'Preço'],
    map: [0, 1, 2],
  },

  'contrassegurança': {
    headers: ['Nome', 'Rating', 'Disponib', 'Preço'],
    map: [0, 1 ,2, 3],
  },

  'sobrevivência': {
    headers: ['Nome', 'Disponib.', 'Preço'],
    map: [0, 1, 2],
  },

  'arma de gancho': {
    headers: ['Nome', 'Disponib.', 'Preço'],
    map: [0, 1, 2],
  },
};

function criarTabela(categoria, itens, schema) {
  const section = document.createElement('section');

  const h3 = document.createElement('h3');
  h3.textContent = categoria.toUpperCase();
  section.appendChild(h3);

  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const trHead = document.createElement('tr');

  schema.headers.forEach(h => {
    const th = document.createElement('th');
    th.textContent = h;
    trHead.appendChild(th);
  });

  thead.appendChild(trHead);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');

  itens.forEach(item => {
    const tr = document.createElement('tr');

    schema.map.forEach(i => {
      const td = document.createElement('td');
      td.textContent = item[i] ?? '—';
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  section.appendChild(table);

  return section;
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('conteudo');
  const filtroNome = document.getElementById('filtro-nome');

  function aplicarFiltros() {
    const termo = filtroNome.value.toLowerCase();
    container.innerHTML = '';

    Object.entries(dadosSeguranca).forEach(([categoria, itens]) => {
      const schema = schemas[categoria];
      if (!schema) return;

      const filtrados = itens.filter(item =>
        item.some(campo =>
          String(campo).toLowerCase().includes(termo)
        )
      );

      if (filtrados.length) {
        container.appendChild(criarTabela(categoria, filtrados, schema));
      }
    });
  }

  filtroNome.addEventListener('input', aplicarFiltros);
  aplicarFiltros();
});
