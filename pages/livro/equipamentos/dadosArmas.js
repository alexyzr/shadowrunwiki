// Dados das armas e equipamentos
const dadosEquipamentos = {
    // CORPO A CORPO
    'corpo-a-corpo': [
        ['Machado de Combate', '5P', '9', '0', '4', '500', 'Corpo a CorpoDuas MãosLetalLâminas'],
        ['Faca', '2P', '6', '1', '1', '20', 'Corpo a CorpoLetalLâminasUma Mão'],
        ['Faca de Combate', '3P', '8', '2', '2', '220', 'Corpo a CorpoLetalLâminasUma Mão'],
        ['Faca de Sobrevivência', '3P', '8', '2', '2', '220', 'Corpo a CorpoLetalLâminasSem FioUma Mão'],
        ['Garras', '3P', '6', '0', '3', '185', 'Corpo a CorpoLetalLâminasSem FioUma Mão'],
        ['Katana', '4P', '10', '0', '3', '350', 'Corpo a CorpoDuas MãosLetalLâminas'],
        ['Foice', '4P', '8', '0', '2', '210', 'Corpo a CorpoDuas MãosLetalLâminas'],
        ['Espada', '3P', '9', '0', '3', '320', 'Corpo a CorpoLetalLâminasUma Mão'],
        ['Bastão', '3S', '6', '0', '1', '65', 'ClubCorpo a CorpoNão LetalUma Mão'],
        ['Cacetete Retrátil', '2S', '5', '0', '2', '52', 'ClubCorpo a CorpoNão LetalSem FioUma Mão'],
        ['Saco de Manteiga (Sap)', '2S', '6', '0', '1', '75', 'ClubCorpo a CorpoNão LetalUma Mão'],
        ['Cajado', '4S', '8', '0', '1', '150', 'ClubCorpo a CorpoDuas MãosNão Letal'],
        ['Cacetete de Choque', '5S (e)', '6', '0', '2', '600', 'ClubCorpo a CorpoNão LetalSem FioUma Mão'],
        ['Cajado Retrátil', '4S', '8', '0', '2', '250', 'ClubCorpo a CorpoDuas MãosNão LetalSem Fio'],
        ['Corrente de Moto', '2S', '5', '0', '1', '15', 'Corpo a CorpoDesarmadoNão LetalUma Mão'],
        ['Chicote', '1P', '6', '0', '4', '255', 'Corpo a CorpoExóticoLetalUma Mão'],
        ['Soco Inglês', '3P', '6', '0', '1', '100', 'Corpo a CorpoDesarmadoLetalUma Mão'],
        ['Luva de Choque', '4S (e)', '5', '0', '4', '790', 'Corpo a CorpoDesarmadoNão LetalSem FioUma Mão']
    ],
    
    // ARMAS DE ARREMESSO/PROJÉTEIS
    'arremesso-projeteis': [
        ['Arco', '(Rat./2)P', 'Rat./2', 'Rat.', 'Rat./4', '0', 'Rat./3 (L)', '100+(Rating x 10)', 'Duas MãosProjétil'],
        ['Flecha', '', '', '', '', '', 'Rat./3', 'Rat. x 2', 'Munição'],
        ['Flecha Injetora', '', '', '', '', '', '4', 'Rat. x 20', 'MuniçãoSem Fio'],
        ['Besta Leve', '2P', '6', '8', '2', '0', '3', '150', 'ProjétilUma Mão'],
        ['Besta Média', '3P', '2', '10', '4', '2', '3(L)', '290', 'Duas MãosProjétil'],
        ['Besta Pesada', '4P', '2', '8', '6', '4', '4(L)', '425', 'Duas MãosProjétil'],
        ['Virote', '', '', '', '', '', '2', '5', 'Munição'],
        ['Virote Injetor', '', '', '', '', '', '4', '50', 'MuniçãoSem Fio'],
        ['Faca Arremessável', '2P', '10', '9', '3', '0', '2', '155', 'ArremessoSem FioUma Mão'],
        ['Shiyuriken', '2P', '9', '11', '5', '0', '2', '160', 'ArremessoSem FioUma Mão']
    ],
    
    // TASERS
    'tasers': [
        ['Defiance Super Shock', 'SS', '6S (e)', '10', '9 (20m)', '4', '1', '340', 'Não LetalSem Fio'],
        ['Yamaha Pulsar', 'SS', '4S (e)', '9', '6 (50m)', '4', '1', '330', 'Não LetalSem Fio']
    ],
    
    // PISTOLAS HOLD OUTS
    'hold-outs': [
        ['Fichetti Tiffani Needler', '3P', 'SS', '10', '6', '2', '0', '0', '4 (fl)', '2', '435', 'Armas de FogoLetalSem FioUma Mão'],
        ['Streetline Special', '2P', 'SS', '8', '8', '0', '0', '0', '6', '2', '200', 'Armas de FogoLetalUma Mão'],
        ['Walther Palm Pistol', '2P', 'SA/BF', '12', '7', '0', '0', '0', '6', '2', '345', 'Armas de FogoLetalUma Mão']
    ],
    
    // PISTOLAS LEVES
    'pistolas-leves': [
        ['Ares Light Fire 75', '2P', 'SA', '10', '7', '6', '0', '0', '16', '3 (L)', '400', 'Armas de FogoLetalPistolaUma Mão'],
        ['Beretta 20iT', '2P', 'SA/FA', '9', '8', '6', '0', '0', '21', '2 (L)', '460', 'Armas de FogoAutomáticaLetalPistolaUma Mão'],
        ['Colt America L36', '2P', 'SA', '8', '8', '6', '0', '0', '11', '2 (L)', '230', 'Armas de FogoLetalPistolaSem FioUma Mão'],
        ['Fichetti Security 600', '2P', 'SA', '10', '9', '6', '0', '0', '30', '3 (L)', '390', 'Armas de FogoLetalPistolaUma Mão'],
        ['Ruger Redhawk', '3P', 'SA/BF', '7', '10', '7', '0', '0', '8', '2 (L)', '250', 'Armas de FogoLetalPistolaSem FioUma Mão']
    ],
    
    // PISTOLAS AUTOMÁTICAS
    'pistolas-automaticas': [
        ['Ares Crusader II', '2P', 'SA/BF', '9', '9', '7', '0', '0', '40', '4 (L)', '520', 'Armas de FogoAutomáticaLetalPistolaUma Mão'],
        ['Ceska Black Scorpion', '2P', 'SA/BF', '10', '9', '8', '0', '0', '35', '3 (L)', '510', 'Armas de FogoAutomáticaLetalPistolaUma Mão'],
        ['Steyr TMP', '2P', 'SA/FA', '8', '8', '6', '0', '0', '30', '3 (L)', '690', 'Armas de FogoAutomáticaLetalPistolaUma Mão']
    ],
    
    // PISTOLAS PESADAS
    'pistolas-pesadas': [
        ['Ares Predator', '3P', 'SA/BF', '10', '10', '8', '0', '0', '15', '2 (L)', '750', 'Armas de FogoLetalPistolaUma Mão'],
        ['Ares Viper Slivergun', '4P', 'SA/BF', '12', '8', '6', '0', '0', '30', '4 (L)', '610', 'Armas de FogoLetalPistolaUma Mão'],
        ['Browning Ultra Power', '3P', 'SA', '10', '9', '6', '0', '0', '10', '2 (L)', '315', 'Armas de FogoLetalPistolaUma Mão'],
        ['Colt Manhunter', '3P', 'SA', '10', '8', '6', '0', '0', '14', '3 (L)', '500', 'Armas de FogoLetalPistolaUma Mão'],
        ['Ruger Super Warhawk', '4P', 'SA', '8', '11', '8', '0', '0', '6', '3 (L)', '400', 'Armas de FogoLetalPistolaUma Mão']
    ],
    
    // SUBMETRALHADORAS
    'submetralhadoras': [
        ['Colt Cobra TZ', '3P', 'SA/BF', '10', '11', '8', '0', '0', '32', '3 (L)', '840', 'Armas de FogoAutomáticaDuas MãosLetal'],
        ['Fn P93', '4P', 'SA/BF/FA', '9', '12', '7', '0', '0', '50', '4 (L)', '925', 'Armas de FogoAutomáticaDuas MãosLetal'],
        ['HK-227', '3P', 'SA/BF', '10', '11', '8', '0', '0', '28', '3 (L)', '825', 'Armas de FogoAutomáticaDuas MãosLetal'],
        ['Ingram Smartgun', '3P', 'SA/BF', '11', '9', '6', '0', '0', '32', '3 (L)', '750', 'Armas de FogoAutomáticaLetalPistolaUma Mão'],
        ['SCK Model 100', '3P', 'SA/BF', '10', '10', '7', '0', '0', '30', '3 (L)', '725', 'Armas de FogoAutomáticaDuas MãosLetal'],
        ['Uzi IV', '3P', 'SA/BF/FA', '8', '8', '7', '0', '0', '24', '2 (L)', '455', 'Armas de FogoAutomáticaLetalPistolaUma Mão']
    ],
    
    // SHOTGUNS
    'shotguns': [
        ['Defiance T-250', '4P', 'SS/SA', '7', '10', '6', '0', '0', '5', '2 (L)', '330', 'Armas de FogoDuas MãosLetalShotgun'],
        ['Mossberg CMDT', '4P', 'SA/BF', '4', '11', '7', '0', '0', '10/24', '4 (L)', '700', 'Armas de FogoDuas MãosLetalShotgun'],
        ['PJSS Model 55', '4P', 'SA/BF (Sawed)', '3', '12', '8', '0', '0', '2', '5 (L)', '325', 'Armas de FogoDuas MãosLetalShotgun'],
        ['Remington Roomsweeper', '5P', 'SA', '9', '8', '4', '0', '0', '8', '2 (L)', '325', 'Armas de FogoLetalPistolaShotgunUma Mão']
    ],
    
    // FUZIS
    'fuzis': [
        ['AK-97', '5P', 'SA/BF/FA', '4', '11', '9', '7', '1', '38', '2 (L)', '2100', 'Armas de FogoAutomáticaDuas MãosFuzisLetal'],
        ['Ares Alpha', '4P', 'SA/BF/FA', '4', '10', '9', '7', '2', '42', '5 (L)', '3400', 'Armas de FogoAutomáticaDuas MãosFuzisLetal'],
        ['Ares Alpha +Grenade Launcher', 'As Grenade', 'SS', '4', '10', '6', '2', '0', '6', '-', '-', 'ExóticaGranada'],
        ['Colt M23', '4P', 'SA/BF/FA', '5', '8', '8', '8', '4', '40', '2 (L)', '5100', 'Armas de FogoAutomáticaDuas MãosFuzisLetal'],
        ['FN-HAR', '5P', 'SA/BF/FA', '3', '11', '10', '6', '1', '35', '3 (L)', '2100', 'Armas de FogoAutomáticaDuas MãosFuzisLetal'],
        ['Yamaha Raiden', '4P', 'SA/BF/FA', '4', '11', '10', '7', '2', '60', '5 (L)', '3200', 'Armas de FogoAutomáticaDuas MãosFuzisLetal'],
        ['Yamaha Raiden +Grenade Launcher', 'As Grenade', 'SS', '4', '11', '7', '0', '0', '4', '-', '-', 'ExóticaGranada'],
        ['Yamaha Raiden +Shotgun', '4P', 'SS/SA', '7', '9', '8', '0', '0', '2', '-', '-', 'Armas de FogoLetalShotgun'],
        ['Ares Desert Strike', '5P', 'SA', '3', '10', '10', '10', '10', '14', '4 (I)', '11000', 'Armas de FogoDuas MãosFuzisLetalLongarms'],
        ['Cavalier Arms Crockett EBR', '5P', 'SA/BF', '3', '8', '11', '8', '8', '20', '5 (I)', '9050', 'Armas de FogoDuas MãosFuzisLetalLongarms'],
        ['Ranger Arms SM-5', '5P', 'SA', '3', '6', '9', '11', '12', '15', '5 (I)', '13200', 'Armas de FogoDuas MãosFuzisLetalLongarms'],
        ['Remington 900', '5P', 'SS', '2', '7', '10', '12', '11', '5', '3 (L)', '12000', 'Armas de FogoDuas MãosFuzisLetalLongarms'],
        ['Ruger 101', '5P', 'SA', '2', '6', '10', '12', '11', '8', '2 (L)', '11100', 'Armas de FogoDuas MãosFuzisLetalLongarms'],
        ['Baret Model 122', '6P', 'SA', '1', '8', '11', '16', '14', '10', '6 (I)', '15200', 'Armas de FogoDuas MãosFuzisLetalLongarms']
    ],
    
    // METRALHADORAS
    'metralhadoras': [
        ['Ingram Vallant', '4P', 'SA/BF/FA', '2', '11', '12', '7', '3', '50 ou 100', '4 (L)', '4175', 'Armas de FogoAutomáticaDuas MãosLetalLeve'],
        ['Stoner Ares M202', '5P', 'SA/BF/FA', '1', '10', '11', '7', '6', '50 ou 100', '4 (L)', '6900', 'Armas de FogoAutomáticaDuas MãosLetalMédia'],
        ['RPK HMG', '6P', 'SA/BF/FA', '1', '10', '12', '8', '7', '50 ou 100', '5 (L)', '8000', 'Armas de FogoAutomáticaDuas MãosLetalPesada'],
        ['Panther XXL', '7P', 'SA', '1', '9', '12', '8', '6', '15', '6 (I)', '10000', 'Armas de FogoDuas MãosLetalLongarmsMédia']
    ],
    
    // ARMAS EXÓTICAS - INJETORAS
    'injetoras': [
        ['Ares Squirt', 'Especial', 'SS', '8', '12', '9', '0', '0', '20', '3 (L)', '560', 'Duas MãosEspecialExóticasSuper Squirt'],
        ['Parashield Dart Pistol', '1P+Especial', 'SS', '9', '10', '8', '0', '0', '5', '2', '510', 'EspecialExóticasLetalParashield DartUma Mão'],
        ['Parashield Dart Rifle', '1P+Especial', 'SS', '5', '8', '11', '3', '3', '6', '3', '710', 'Duas MãosEspecialExóticasLetalParashield Dart']
    ],
    
    // LANÇADORES
    'lancadores': [
        ['Ares Antioch II', 'Granada', 'SS', '-', '6', '8', '6', '5', '8', '3 (I)', '5900', 'Ares Antioch IIDuas MãosEspecialExóticaSem Fio'],
        ['Armtech MGL-6', 'Granada', 'SA', '-', '8', '8', '3', '0', '6', '4 (I)', '1800', 'EspecialExóticaMGLSem FioUma Mão'],
        ['Armtech MGL-1', 'Granada', 'SA', '-', '8', '9', '6', '2', '12', '4 (I)', '5000', 'Duas MãosEspecialExóticaMGLSem Fio'],
        ['Aztechnology Striker', 'Míssil', 'SS', '-', '4', '10', '9', '6', '1', '5 (I)', '7000', 'Duas MãosEspecialExóticaSem FioStriker'],
        ['Onotari Interceptor', 'Míssil', 'SS', '-', '5', '9', '10', '8', '2', '6 (I)', '9000', 'Duas MãosEspecialExóticaInterceptorSem Fio']
    ],
    
    // TIPOS DE MUNIÇÃO
    'tipos-municao': [
        ['APDS', '+2', '-1', 'x3'],
        ['Explosivo', '-', '+1', 'x2'],
        ['Flechette', '+1', '-1', 'x1,5'],
        ['Gel', '-', 'S', 'x1,5'],
        ['Stick n Shock', '+1', '-1S (e)', 'x2'],
        ['Caseless', '-', '-', 'x2']
    ],
    
    // MUNIÇÃO POR CLASSE
    'municao-classe': [
        ['Hold Out/Pistola Leve/Automática', '1', '5'],
        ['Submetralhadora/Pistola Pesada', '1', '10'],
        ['Fuzil', '2 (L)', '20'],
        ['Taser', '1', '10'],
        ['Dardo Injetório', '2', '5+Toxina'],
        ['Canhão de Assalto', '4 (I)', '50'],
        ['Metralhadora', '2 (L)', '15'],
        ['DMSO (Munição da Squirt)', '1', '10']
    ],
    
    // ACESSÓRIOS/MODIFICAÇÕES
    'acessorios': [
        ['Airbust Link', '-', '3', '600'],
        ['Bipé', 'Under', '1', '200'],
        ['Coldre Esconderijo', '-', '1', '150'],
        ['Slide de Braço', '-', '3', '350'],
        ['Coldre Quick Draw', '-', '3', '175'],
        ['Gas-Vent', 'Barrel', '2', '500'],
        ['Gyro Mount', '-', '2', '1400'],
        ['Scope', 'Top', '1', '350'],
        ['Mira a Laser', 'Top/Under', '1', '125'],
        ['Periscópio', 'Top', '2', '70'],
        ['Shock Pad', '-', '2', '50'],
        ['Silenciador', 'Barrel', '4', '500'],
        ['Plataforma de Tiro Inteligente', 'Under', '5', '2500'],
        ['Smartgun Interna', '-', '1 (L)', '+500'],
        ['Smartgun Externa', 'Top/Under', '2 (L)', '200'],
        ['Recarregador Rápido', '-', '1', '25'],
        ['Tripé', 'Under', '2', '500']
    ],
    
    // GRANADAS
    'granadas': [
        ['Flashbang (Stun)', '10S', '8S', '6S', '15m', '4 (L)', '100'],
        ['Fragmentação', '14P', '12P', '8P', '20m', '4 (I)', '150'],
        ['Alta Explosão', '16P', '10P', '4P', '15m', '4 (I)', '150'],
        ['Gás', '-', '-', '-', '-', '4 (I)', '50+20 doses'],
        ['Fumaça (Normal ou Termal)', '-', '-', '-', '-', '4 (I)', '50'],
        ['Flash-Pak', 'Blinded III', 'Blinded II', 'Blinded I', '10m', '4 (L)', '125']
    ],
    
    // MÍSSEIS
    'misseis': [
        ['Míssel Anti-Veículos', '12P', '8P', '4P', '10m', '5 (I)', '2800'],
        ['Míssel de Fragmentação', '16P', '12P', '8P', '30m', '5 (I)', '2000'],
        ['Míssel de Alta Explosão', '16P', '10P', '4P', '20m', '5 (I)', '2100'],
        ['Míssel de Gás', '-', '-', '-', '-', '4 (I)', '750+100 doses'],
        ['Míssel de Fumaça (Normal ou Termal)', '-', '-', '-', '-', '4 (I)', '1200'],
        ['Adicional Teleguiado', 'Como Míssel', 'Como Míssel', 'Como Míssel', 'Como Míssel', '+1 (I)', 'Míssel+Sensor Rating x500']
    ],
    
    //TEM OS TIPOS DE EXPLOSIVOS ANTES
    // PACOTE DE EXPLOSIVOS
    'pacote-explosivos': [
        ['1-3', 'Rating x10'],
        ['4-6', 'Rating x50'],
        ['7-9', 'Rating x100'],
        ['10-12', 'Rating x250'],
        ['13-15', 'Rating x500'],
        ['16-18', 'Rating x1000'],
        ['19-20', 'Rating x5000']
    ]
};


