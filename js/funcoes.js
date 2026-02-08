// Função para adicionar classes CSS baseadas no conteúdo
function getClassByContent(conteudo, tipo) {
    if (tipo === "escola") {
        switch(conteudo) {
            case "Combate": return "escola combate";
            case "Detecção": return "escola deteccao";
            case "Saúde": return "escola saude";
            case "Ilusão": return "escola ilusao";
            case "Manipulação": return "escola manipulacao";
            default: return "escola";
        }
    }
    
    if (tipo === "dano") {
        if (conteudo.includes("Físico")) return "dano fisico";
        if (conteudo === "Stun") return "dano stun";
        if (conteudo.includes("Mana")) return "dano mana";
        if (conteudo === "Inexistente") return "dano inexistente";
        return "dano";
    }
    
    return "";
}

// Função para renderizar a tabela
function renderizarTabela(dados) {
    const corpoTabela = document.getElementById('corpo-tabela');
    corpoTabela.innerHTML = '';
    
    dados.forEach(magia => {
        const linha = document.createElement('tr');
        
        // Nome
        const tdNome = document.createElement('td');
        tdNome.textContent = magia[0];
        linha.appendChild(tdNome);
        
        // Escola
        const tdEscola = document.createElement('td');
        tdEscola.textContent = magia[1];
        tdEscola.className = getClassByContent(magia[1], "escola");
        linha.appendChild(tdEscola);
        
        // Alcance
        const tdAlcance = document.createElement('td');
        tdAlcance.textContent = magia[2];
        linha.appendChild(tdAlcance);
        
        // Tipo
        const tdTipo = document.createElement('td');
        tdTipo.className = "tipo";
        const tipoFormatado = formatarTipo(magia[3]);
        
        // Criar spans para cada palavra do tipo
        const palavrasTipo = tipoFormatado.split(' ');
        palavrasTipo.forEach(palavra => {
            const span = document.createElement('span');
            span.textContent = palavra;
            tdTipo.appendChild(span);
            tdTipo.appendChild(document.createTextNode(' '));
        });
        
        linha.appendChild(tdTipo);
        
        // Duração
        const tdDuracao = document.createElement('td');
        tdDuracao.textContent = magia[4];
        linha.appendChild(tdDuracao);
        
        // DV
        const tdDV = document.createElement('td');
        tdDV.textContent = magia[5];
        tdDV.className = "dv";
        linha.appendChild(tdDV);
        
        // Dano/Efeito
        const tdDano = document.createElement('td');
        tdDano.className = getClassByContent(magia[6], "dano");
        const danoFormatado = formatarDano(magia[6]);
        
        // Criar spans para cada palavra do dano/efeito
        const palavrasDano = danoFormatado.split(' ');
        palavrasDano.forEach(palavra => {
            const span = document.createElement('span');
            span.textContent = palavra;
            span.className = "palavra-dano";
            tdDano.appendChild(span);
            tdDano.appendChild(document.createTextNode(' '));
        });
        
        linha.appendChild(tdDano);
        
        corpoTabela.appendChild(linha);
    });
}

// Função para preencher o filtro de tipos
function preencherFiltroTipos() {
    const filtroTipo = document.getElementById('filtro-tipo');
    const tiposUnicos = gerarTiposUnicos();
    
    // Limpar opções existentes (exceto a primeira)
    while (filtroTipo.options.length > 1) {
        filtroTipo.remove(1);
    }
    
    // Adicionar tipos únicos
    tiposUnicos.forEach(tipo => {
        const option = document.createElement('option');
        option.value = tipo.replace(/ /g, ''); // Remove espaços para o valor
        option.textContent = tipo;
        filtroTipo.appendChild(option);
    });
}

// Função para filtrar as magias
function filtrarMagias() {
    const filtroEscola = document.getElementById('filtro-escola').value;
    const filtroNome = document.getElementById('filtro-nome').value.toLowerCase();
    const filtroTipo = document.getElementById('filtro-tipo').value;
    const filtroDV = parseInt(document.getElementById('filtro-dv').value);
    
    const dadosFiltrados = dadosMagias.filter(magia => {
        // Filtro por escola
        if (filtroEscola !== "todas" && magia[1] !== filtroEscola) {
            return false;
        }
        
        // Filtro por nome
        if (filtroNome && !magia[0].toLowerCase().includes(filtroNome)) {
            return false;
        }
        
        // Filtro por tipo
        if (filtroTipo !== "todos") {
            const tipoMagia = formatarTipo(magia[3]).replace(/ /g, '');
            if (tipoMagia !== filtroTipo) {
                return false;
            }
        }
        
        // Filtro por DV
        if (filtroDV < 10 && parseInt(magia[5]) > filtroDV) {
            return false;
        }
        
        return true;
    });
    
    renderizarTabela(dadosFiltrados);
}

// Inicializar a tabela
document.addEventListener('DOMContentLoaded', function() {
    // Preencher o filtro de tipos
    preencherFiltroTipos();
    
    // Renderizar tabela inicial
    renderizarTabela(dadosMagias);
    
    // Adicionar eventos aos filtros
    document.getElementById('filtro-escola').addEventListener('change', filtrarMagias);
    document.getElementById('filtro-nome').addEventListener('input', filtrarMagias);
    document.getElementById('filtro-tipo').addEventListener('change', filtrarMagias);
    document.getElementById('filtro-dv').addEventListener('change', filtrarMagias);
});
