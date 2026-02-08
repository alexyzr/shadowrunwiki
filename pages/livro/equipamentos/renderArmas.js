console.log('RENDER CARREGOU');

const schemas = {
  'corpo-a-corpo': {
    headers: ['Nome', 'Dano', 'Close', 'Perto', 'Disponib.', 'Preço', 'Tags'],
    map: [0, 1, 2, 3, 4, 5, 6]
  },

  'arremesso-projeteis': {
    headers: ['Nome', 'Dano', 'Close', 'P', 'M', 'L', 'Disp.', 'Preço', 'Tags'],
    map: [0, 1, 2, 3, 4, 5, 6, 7, 8]
  },

  'tasers': {
    headers: ['Nome', 'Modo', 'Dano', 'Close', 'Próximo', 'Munição', 'Disponib.', 'Preço', 'Tags'],
    map: [0, 1, 2, 3, 4, 5, 6, 7, 8]
  },

  'tipos-municao': {
    headers: ['Nome', 'AR', 'DV', 'Multiplicador'],
    map: [0, 1, 2, 3]
  },

  'municao-classe': {
    headers: ['Nome', 'Disponib.', 'Preço'],
    map: [0, 1, 2]
  },

  'acessorios': {
    headers: ['Nome', 'Local', 'Disponib.', 'Preço'],
    map: [0, 1, 2, 3]
  },

  'granadas': {
    headers: ['Nome', 'DV GZ', 'DV Close', 'DV Near', 'Raio', 'Disponib.', 'Preço'],
    map: [0, 1, 2, 3, 4, 5, 6]
  },

  'misseis': {
    headers: ['Nome', 'DV GZ', 'DV Close', 'DV Near', 'Raio', 'Disponib.', 'Preço'],
    map: [0, 1, 2, 3, 4, 5, 6]
  },

  'pacote-explosivos': {
    headers: ['Rating', 'Preço'],
    map: [0, 1]
  },

  'default-armas': {
    headers: [
      'Nome', 'Dano', 'Modo',
      'Close', 'Perto', 'Médio', 'Longe', 'Extr.',
      'Munição', 'Dispon.', 'Preço', 'Tags'
    ],
    map: [0,1,2,3,4,5,6,7,8,9,10,11]
  }
};

const categoriasDefault = [
  'hold-outs',
  'pistolas-leves',
  'pistolas-automaticas',
  'pistolas-pesadas',
  'submetralhadoras',
  'shotguns',
  'fuzis',
  'metralhadoras',
  'injetoras',
  'lancadores'
];

const TAGS_CONHECIDAS = [
  'Corpo a Corpo',
  'Armas de Fogo',
  'Duas Mãos',
  'Uma Mão',
  'Não Letal',
  'Letal',
  'Sem Fio',
  'Automática',
  'Pistola',
  'Fuzis',
  'Shotgun',
  'Submetralhadora',
  'Granada',
  'Exótica',
  'Desarmado',
  'Lâminas',
  'Club',
  'Projétil',
  'Longarms',
  'Especial',
  'Leve',
  'Média',
  'Pesada',
  'Munição',
  'Arremesso'
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

  const h2 = document.createElement('h2');
  h2.textContent = categoria.replace(/-/g, ' ').toUpperCase();
  section.appendChild(h2);

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

  const temTagConhecida =
    typeof valor === 'string' &&
    TAGS_CONHECIDAS.some(tag =>
      valor.includes(tag.replace(/\s/g, ''))
    );

  td.textContent = temTagConhecida
    ? formatarTags(valor)
    : valor ?? '—';

  td.classList.add('tags');
}
 else {
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

    Object.entries(dadosEquipamentos).forEach(([categoria, itens]) => {
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

  // render inicial
  aplicarFiltros();
});
