console.log('RENDER CARREGOU');

const schemas = {
  'armaduras': {
    headers: ['Nome', 'Defesa', 'Capacidade', 'Disponib.', 'Preço', 'Tags'],
    map: [0, 1, 2, 3, 4, 5]
  },

  'modificações': {
    headers: ['Nome', 'Capacidade', 'Disponib', 'Preço'],
    map: [0, 1 ,2, 3]
  },

  'outros': {
    headers: ['Nome', 'Defesa', 'Capacidade', 'Dano', 'Disponib', 'Preço'],
    map: [0, 1, 2, 3, 4, 5]
  }

};



const TAGS_CONHECIDAS = [
  'Informal','Formal','Parkour','Tático','Flow'
];

/* ======================
   FORMATAR TAGS
====================== */
function formatarTags(tagString) {
  if (!tagString) return '—';

  const tags = TAGS_CONHECIDAS.filter(tag =>
    tagString.includes(tag.replace(/\s/g, ''))
  );

  return tags.length ? tags.join(' | | ') : tagString;
}

/* ======================
   CRIAR TABELA
====================== */
function criarTabela(categoria, itens, schema) {
  const section = document.createElement('section');

  const h3 = document.createElement('h3');
  h3.textContent = categoria.replace(/-/g, ' ').toUpperCase();
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

      if (schema.headers[i] === 'Tags') {
        const valor = item[i];
        td.textContent = formatarTags(valor);
        td.classList.add('tags');
      } else {
        td.textContent = item[i] ?? '—';
      }

      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  section.appendChild(table);

  return section;
}

/* ======================
   FILTRO
====================== */
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('conteudo');
  const filtroNome = document.getElementById('filtro-nome');

  function aplicarFiltros() {
    const termo = filtroNome.value.toLowerCase();
    container.innerHTML = '';

    Object.entries(dadosArmaduras).forEach(([categoria, itens]) => {
      let schema = schemas[categoria];
      if (!schema && categoriasDefault.includes(categoria)) {
        schema = schemas['default-armas'];
      }
      if (!schema) return;

      const filtrados = itens.filter(item =>
        item.some(campo =>
          String(campo).toLowerCase().includes(termo)
        )
      );

      if (filtrados.length > 0) {
        container.appendChild(criarTabela(categoria, filtrados, schema));
      }
    });
  }

  filtroNome.addEventListener('input', aplicarFiltros);
  aplicarFiltros();
});
