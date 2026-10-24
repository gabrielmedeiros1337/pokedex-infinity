/**
 * POKÉDEX INFINITY - Guia de Localização & Captura (Encounter Data Engine)
 * Fornece locais exatos, métodos de captura, encontros únicos e restrições por jogo.
 */

// Mapeamento e identificação visual de cada versão de jogo oficial
const GAME_VERSION_INFO = {
    'red': { label: 'Red', gen: 'Gen I', color: 'bg-red-700 text-white' },
    'blue': { label: 'Blue', gen: 'Gen I', color: 'bg-blue-700 text-white' },
    'yellow': { label: 'Yellow', gen: 'Gen I', color: 'bg-yellow-500 text-slate-950' },
    'gold': { label: 'Gold', gen: 'Gen II', color: 'bg-amber-600 text-white' },
    'silver': { label: 'Silver', gen: 'Gen II', color: 'bg-slate-400 text-slate-950' },
    'crystal': { label: 'Crystal', gen: 'Gen II', color: 'bg-cyan-600 text-white' },
    'ruby': { label: 'Ruby', gen: 'Gen III', color: 'bg-red-800 text-white' },
    'sapphire': { label: 'Sapphire', gen: 'Gen III', color: 'bg-blue-800 text-white' },
    'emerald': { label: 'Emerald', gen: 'Gen III', color: 'bg-emerald-700 text-white' },
    'firered': { label: 'FireRed', gen: 'Gen III', color: 'bg-orange-700 text-white' },
    'leafgreen': { label: 'LeafGreen', gen: 'Gen III', color: 'bg-green-700 text-white' },
    'diamond': { label: 'Diamond', gen: 'Gen IV', color: 'bg-cyan-700 text-white' },
    'pearl': { label: 'Pearl', gen: 'Gen IV', color: 'bg-pink-700 text-white' },
    'platinum': { label: 'Platinum', gen: 'Gen IV', color: 'bg-slate-500 text-white' },
    'heartgold': { label: 'HeartGold', gen: 'Gen IV', color: 'bg-amber-500 text-slate-950' },
    'soulsilver': { label: 'SoulSilver', gen: 'Gen IV', color: 'bg-indigo-400 text-slate-950' },
    'black': { label: 'Black', gen: 'Gen V', color: 'bg-neutral-800 text-white' },
    'white': { label: 'White', gen: 'Gen V', color: 'bg-neutral-200 text-slate-950' },
    'black-2': { label: 'Black 2', gen: 'Gen V', color: 'bg-neutral-800 text-white' },
    'white-2': { label: 'White 2', gen: 'Gen V', color: 'bg-neutral-200 text-slate-950' },
    'x': { label: 'X', gen: 'Gen VI', color: 'bg-blue-600 text-white' },
    'y': { label: 'Y', gen: 'Gen VI', color: 'bg-red-600 text-white' },
    'omega-ruby': { label: 'Omega Ruby', gen: 'Gen VI', color: 'bg-red-700 text-white' },
    'alpha-sapphire': { label: 'Alpha Sapphire', gen: 'Gen VI', color: 'bg-blue-700 text-white' },
    'sun': { label: 'Sun', gen: 'Gen VII', color: 'bg-amber-600 text-white' },
    'moon': { label: 'Moon', gen: 'Gen VII', color: 'bg-indigo-700 text-white' },
    'ultra-sun': { label: 'Ultra Sun', gen: 'Gen VII', color: 'bg-orange-600 text-white' },
    'ultra-moon': { label: 'Ultra Moon', gen: 'Gen VII', color: 'bg-indigo-800 text-white' },
    'lets-go-pikachu': { label: "Let's Go Pikachu", gen: 'Gen VII', color: 'bg-yellow-500 text-slate-950' },
    'lets-go-eevee': { label: "Let's Go Eevee", gen: 'Gen VII', color: 'bg-amber-700 text-white' },
    'sword': { label: 'Sword', gen: 'Gen VIII', color: 'bg-cyan-600 text-white' },
    'shield': { label: 'Shield', gen: 'Gen VIII', color: 'bg-rose-700 text-white' },
    'the-isle-of-armor-sword': { label: 'Isle of Armor', gen: 'Gen VIII', color: 'bg-yellow-700 text-white' },
    'the-isle-of-armor-shield': { label: 'Isle of Armor', gen: 'Gen VIII', color: 'bg-yellow-700 text-white' },
    'the-crown-tundra-sword': { label: 'Crown Tundra', gen: 'Gen VIII', color: 'bg-teal-700 text-white' },
    'the-crown-tundra-shield': { label: 'Crown Tundra', gen: 'Gen VIII', color: 'bg-teal-700 text-white' },
    'legends-arceus': { label: 'Legends Arceus', gen: 'Gen VIII', color: 'bg-emerald-800 text-white' },
    'scarlet': { label: 'Scarlet', gen: 'Gen IX', color: 'bg-red-600 text-white' },
    'violet': { label: 'Violet', gen: 'Gen IX', color: 'bg-purple-600 text-white' }
};

// Traduções dos métodos de captura com seus ícones e cores
const ENCOUNTER_METHODS_PT = {
    'walk':                     { label: 'Grama Selvagem', icon: 'fa-clover', color: 'text-emerald-400 bg-emerald-950/40 border-emerald-500/30' },
    'dark-grass':               { label: 'Grama Escura (Dupla)', icon: 'fa-clover', color: 'text-emerald-400 bg-emerald-950/40 border-emerald-500/30' },
    'yellow-flowers':           { label: 'Flores Amarelas', icon: 'fa-seedling', color: 'text-yellow-400 bg-yellow-950/40 border-yellow-500/30' },
    'surf':                     { label: 'Surfando na Água', icon: 'fa-water', color: 'text-blue-400 bg-blue-950/40 border-blue-500/30' },
    'old-rod':                  { label: 'Vara Velha (Old Rod)', icon: 'fa-fish', color: 'text-cyan-400 bg-cyan-950/40 border-cyan-500/30' },
    'good-rod':                 { label: 'Vara Boa (Good Rod)', icon: 'fa-fish', color: 'text-cyan-400 bg-cyan-950/40 border-cyan-500/30' },
    'super-rod':                { label: 'Super Vara (Super Rod)', icon: 'fa-fish', color: 'text-indigo-400 bg-indigo-950/40 border-indigo-500/30' },
    'only-one':                 { label: '👑 Encontro Único Estático', icon: 'fa-crown', color: 'text-amber-300 bg-amber-950/60 border-amber-500/50' },
    'static':                   { label: '👑 Encontro Único Estático', icon: 'fa-crown', color: 'text-amber-300 bg-amber-950/60 border-amber-500/50' },
    'overworld-special':        { label: '👑 Encontro Especial Overworld', icon: 'fa-star', color: 'text-amber-300 bg-amber-950/60 border-amber-500/50' },
    'pokeflute':                { label: '😴 Dormindo (Poké Flute)', icon: 'fa-moon', color: 'text-purple-300 bg-purple-950/60 border-purple-500/50' },
    'gift':                     { label: '🎁 Doado por NPC / Inicial', icon: 'fa-gift', color: 'text-pink-300 bg-pink-950/40 border-pink-500/40' },
    'gift-egg':                 { label: '🥚 Ovo Doado por NPC', icon: 'fa-egg', color: 'text-pink-300 bg-pink-950/40 border-pink-500/40' },
    'npc-trade':                { label: '🔄 Troca com NPC no Jogo', icon: 'fa-arrow-right-arrow-left', color: 'text-teal-300 bg-teal-950/40 border-teal-500/30' },
    'roaming-grass':            { label: '🏃 Lendário Errante (Grama)', icon: 'fa-person-running', color: 'text-orange-400 bg-orange-950/40 border-orange-500/40' },
    'roaming-water':            { label: '🏃 Lendário Errante (Água)', icon: 'fa-person-running', color: 'text-orange-400 bg-orange-950/40 border-orange-500/40' },
    'headbutt':                 { label: '🌳 Cabeçada em Árvore', icon: 'fa-tree', color: 'text-lime-400 bg-lime-950/40 border-lime-500/30' },
    'rock-smash':               { label: '🪨 Quebra-Rocha (Rock Smash)', icon: 'fa-hammer', color: 'text-stone-300 bg-stone-900 border-stone-600' },
    'max-raid':                 { label: '⚔️ Max Raid Battle', icon: 'fa-shield-halved', color: 'text-rose-400 bg-rose-950/40 border-rose-500/30' },
    'dynamax-adventure':        { label: '⚔️ Dynamax Adventure', icon: 'fa-dragon', color: 'text-violet-300 bg-violet-950/40 border-violet-500/40' },
    'wanderer':                 { label: '🚶 Andando no Overworld', icon: 'fa-person-walking', color: 'text-sky-300 bg-sky-950/40 border-sky-500/30' },
    'island-scan':              { label: '📱 Leitor QR (Island Scan)', icon: 'fa-qrcode', color: 'text-amber-400 bg-amber-950/40 border-amber-500/30' },
    'feebas-tile-fishing':      { label: '🎣 Azulejo Secreto de Feebas', icon: 'fa-circle-question', color: 'text-purple-400 bg-purple-950/40 border-purple-500/30' }
};

// Guias especializados de captura para Pokémon Únicos, Lendários, Iniciais e Especiais
const UNIQUE_CAPTURE_GUIDES = {
    // KANTO
    'bulbasaur': '🎁 Inicial de Kanto: Entregue pelo Prof. Carvalho em Pallet Town (Red/Blue/FireRed). Em Yellow, é doado por uma garota em Cerulean City se a felicidade de Pikachu estiver alta. Em X/Y, é dado pelo Prof. Sycamore em Lumiose. Em Scarlet/Violet, aparece selvagem no bioma costeiro da Terarium (DLC Indigo Disk).',
    'charmander': '🎁 Inicial de Fogo de Kanto: Entregue pelo Prof. Carvalho em Pallet Town (Red/Blue/FireRed). Em Yellow, é doado por um treinador na Rota 24 ao norte da Nugget Bridge. Em Scarlet/Violet, aparece no bioma de savana da Terarium (DLC Indigo Disk).',
    'squirtle': '🎁 Inicial de Água de Kanto: Entregue pelo Prof. Carvalho em Pallet Town. Em Yellow, é dado pela policial Jenny em Vermilion City após derrotar o líder Lt. Surge. Em Scarlet/Violet, pode ser capturado no bioma de cânion da Terarium (DLC Indigo Disk).',
    'snorlax': '⭐ Encontro Único Bloqueador (Gen I, III, IV): Bloqueia o caminho nas Rotas 12 e 16 de Kanto, e a entrada da Diglett Cave em Vermilion City (Johto). É OBRIGATÓRIO tocar a Poké Flute para acordá-lo e iniciar a batalha! Existem apenas 1 ou 2 por jogo. Salve antes de batalhar e prepare Heavy Balls / Ultra Balls pois a taxa de captura é de apenas 25.',
    'mewtwo': '⭐ Lendário Único de Pós-Jogo (Gen I, III, IV, Let\'s Go): Localizado no ponto mais profundo da Cerulean Cave (Subsolo B1F) no Nv. 70. Requer vencer a Liga Pokémon (Elite Four) para desbloquear a entrada da caverna. É recomendável salvar o jogo antes e guardar a Master Ball!',
    'mew': '🎁 Mítico Clássico: Em Red/Blue/Yellow, pode ser capturado usando o famoso "Trainer-Fly / Teleport Glitch" na Rota 8 / Nugget Bridge. Em Let\'s Go, vinha no acessório Poké Ball Plus. Em BDSP, é dado por uma senhora em Floaroma Town se você possuir um save de Let\'s Go no console.',
    'articuno': '⭐ Pássaro Lendário do Gelo: Localizado no fundo das Seafoam Islands (Subsolo B4F) no Nv. 50. Requer usar Strength para empurrar pedras e bloquear a correnteza violenta de água.',
    'zapdos': '⭐ Pássaro Lendário do Trovão: Localizado no final da Power Plant (Usina Elétrica Abandonada) de Kanto no Nv. 50. Apenas 1 no jogo.',
    'moltres': '⭐ Pássaro Lendário do Fogo: Encontrado na Victory Road (Gen I), no topo do Mt. Ember (Gen III FireRed/LeafGreen) e no Mt. Silver (Gen IV HeartGold/SoulSilver) no Nv. 50.',
    'lapras': '🎁 Silph Co. (7F): Entregue de presente por um funcionário resgatado do Team Rocket (Gen I e III). Em Gold/Silver/HeartGold, aparece nadando às sextas-feiras no fundo da Union Cave.',
    'eevee': '🎁 Celadon Condominiums: Entregue na cobertura entrando pelos fundos do prédio (Gen I e III). Em Johto (Gen II e IV), é entregue por Bill em Goldenrod City após encontrá-lo em Ecruteak.',
    'aerodactyl': '🦴 Fóssil Âmbar Velho (Old Amber): Obtido nos fundos do museu de Pewter City (requer Cut). Leve ao laboratório da Ilha de Cinnabar para revivê-lo no Nv. 20 (ou Nv. 5 na Gen III).',
    'omanyte': '🦴 Fóssil Hélice (Helix Fossil): Escolhido no final do Mt. Moon após derrotar o Super Nerd. Revivido no laboratório de Cinnabar.',
    'kabuto': '🦴 Fóssil Domo (Dome Fossil): Escolhido no final do Mt. Moon após derrotar o Super Nerd. Revivido no laboratório de Cinnabar.',

    // JOHTO
    'sudowoodo': '⭐ Encontro Único de Bloqueio (Gen II, IV): Bloqueia o cruzamento da Rota 36 disfarçado de árvore. É OBRIGATÓRIO usar o regador SquirtBottle (obtido na floricultura de Goldenrod City após derrotar Whitney) para fazê-lo atacar!',
    'gyarados': '⭐ Gyarados Vermelho (Shiny Garantido): Encontrado no centro do Lake of Rage (Lago da Fúria) no Nv. 30 (Gen II e IV). É o único Pokémon Shiny estático garantido na história de toda a franquia!',
    'ho-oh': '⭐ Guardião da Bell Tower / Tin Tower (Gen II, IV): No topo da torre no Nv. 40 (HeartGold/Gold) ou Nv. 70 (SoulSilver/Silver). Requer a Rainbow Wing e a Clear Bell tocada pelas Kimono Girls.',
    'lugia': '⭐ Guardião das Whirl Islands (Gen II, IV): No fundo da caverna submarina no Nv. 40 (SoulSilver/Silver) ou Nv. 70 (HeartGold/Gold). Requer a Silver Wing e a Tidal Bell.',
    'suicune': '🏃 Cão Lendário de Johto: Em Crystal e HeartGold/SoulSilver, possui encontros estáticos pela costa de Kanto e Johto, culminando na Rota 25 ao lado da casa de Bill no Nv. 40. Em Gold/Silver foge como errante (roaming).',
    'raikou': '🏃 Cão Lendário Errante: Foge pelo mapa de Johto após ser despertado na Burned Tower. Requer golpes de bloqueio (Mean Look, Spider Web) para não fugir no turno 1.',
    'entei': '🏃 Cão Lendário Errante: Foge pelo mapa de Johto após ser libertado na Burned Tower. Desloque-se entre rotas para fazê-lo aparecer na mesma área.',
    'celebi': '🎁 Mítico Guardião de Ilex Forest: Em Crystal do Virtual Console (3DS), ative o evento da GS Ball no Centro Pokémon de Goldenrod e leve ao altar na floresta para capturá-lo no Nv. 30.',

    // HOENN
    'rayquaza': '⭐ Dragão Supremo do Sky Pillar (Gen III, VI): No topo do Pilar Celeste no Nv. 70. Em Ruby, Sapphire e Emerald requer habilidade com a Mach Bike para passar pelas rachaduras do chão sem cair. Em ORAS é capturado durante a história do Delta Episode.',
    'kyogre': '⭐ Titã dos Mares: Encontrado na Cave of Origin (Sapphire/Alpha Sapphire) no Nv. 45. Em Emerald, fica na Marine Cave no Nv. 70 (o local exato é revelado pelo cientista do Weather Institute no pós-jogo).',
    'groudon': '⭐ Titã da Terra: Encontrado na Cave of Origin (Ruby/Omega Ruby) no Nv. 45. Em Emerald, fica na Terra Cave no Nv. 70 revelada pelo Weather Institute no pós-jogo.',
    'regirock': '⭐ Trio de Regis (Gen III, VI): Requer decifrar o enigma em braille na Sealed Chamber submarina com um Relicanth na primeira posição e um Wailord na última. Regirock fica na Desert Ruins da Rota 111.',
    'regice': '⭐ Island Cave (Rota 105): Requer abrir a porta em braille esperando 2 minutos imóvel sem apertar nenhum botão.',
    'registeel': '⭐ Ancient Tomb (Rota 120): Requer usar Fly no centro da sala para abrir a porta do santuário.',
    'latios': '🏃 Lendário Errante de Hoenn (Gen III): Foge pelas rotas de Hoenn em Ruby / Omega Ruby, ou via Eon Ticket na Southern Island.',
    'latias': '🏃 Lendário Errante de Hoenn (Gen III): Foge pelas rotas de Hoenn em Sapphire / Alpha Sapphire, ou via Eon Ticket na Southern Island.',
    'castform': '🎁 Doado no Weather Institute (Rota 119) após derrotar os membros da Equipe Aqua/Magma.',
    'beldum': '🎁 Casa de Steven Stone em Mossdeep City: Deixado em uma Pokébola sobre a mesa após vencer a Liga Pokémon.',

    // SINNOH
    'dialga': '⭐ Senhor do Tempo no Spear Pillar (Gen IV, BDSP): No cume do Monte Coronet no Nv. 47 em Pokémon Diamond e Brilliant Diamond.',
    'palkia': '⭐ Senhor do Espaço no Spear Pillar (Gen IV, BDSP): No cume do Monte Coronet no Nv. 47 em Pokémon Pearl e Shining Pearl.',
    'giratina': '⭐ Senhor da Antimatéria: No Distortion World (Mundo da Distorção) no Nv. 47 em Pokémon Platinum; ou na Turnback Cave após a Elite Four em Diamond/Pearl.',
    'rotom': '⭐ Old Chateau (Floresta Eterna): Interaja com a televisão ligada no 1º andar entre as 20h e 4h da manhã. Toca música especial de lendário!',
    'spiritomb': '⭐ Hallowed Tower (Rota 209): Coloque a Odd Keystone no poço de pedra quebrado e converse com 32 jogadores no Sinnoh Underground / Grand Underground.',
    'heatran': '⭐ Stark Mountain (Montanha Dura): No fundo da caverna no Nv. 70 (Gen IV) após devolver a Magma Stone ao local com Buck.',
    'cresselia': '🏃 Fullmoon Island: Cure o pesadelo do filho do marinheiro em Canalave City e persiga Cresselia errante pelo mapa.',
    'darkrai': '🎁 Newmoon Island: Requer o item Member Card distribuído por evento para dormir no hotel fechado de Canalave.',
    'arceus': '⭐ Hall of Origin: Requer a Azure Flute tocada no Spear Pillar (disponível em BDSP se tiver save com todas as missões concluídas de Legends Arceus).',

    // UNOVA
    'reshiram': '⭐ Dragão Branco da Verdade: Capturado no Castelo de N (Black) ou na Dragonspiral Tower (White 2) no Nv. 50.',
    'zekrom': '⭐ Dragão Negro dos Ideais: Capturado no Castelo de N (White) ou na Dragonspiral Tower (Black 2) no Nv. 50.',
    'kyurem': '⭐ Giant Chasm (Cratera Gigante): No fundo da cratera congelada no Nv. 75.',
    'volcarona': '⭐ Relic Castle (Castelo Relíquia): Encontro único estático no Nv. 70 (Black/White) ou Nv. 35 (Black 2/White 2).',

    // KALOS
    'xerneas': '⭐ Team Flare Secret HQ em Geosenge Town (Pokémon X) no Nv. 50 durante o clímax da história.',
    'yveltal': '⭐ Team Flare Secret HQ em Geosenge Town (Pokémon Y) no Nv. 50 durante o clímax da história.',
    'zygarde': '⭐ Terminus Cave: No fundo da caverna da mina no Nv. 70 após vencer a Liga Pokémon.',

    // ALOLA
    'solgaleo': '⭐ Altar of the Sunne no Nv. 60 em Pokémon Sun e Ultra Sun.',
    'lunala': '⭐ Altar of the Moone no Nv. 60 em Pokémon Moon e Ultra Moon.',
    'necrozma': '⭐ Mount Lanakila / Megalo Tower no Nv. 65.',
    'type-null': '🎁 Entregue de presente por Gladion no Aether Paradise após se tornar campeão da Liga.',
    'tapu-koko': '⭐ Ruins of Conflict: Desafiado imediatamente após os créditos da Liga Pokémon em Melemele Island.',

    // GALAR
    'zacian': '⭐ Slumbering Weald / Energy Plant: Capturável durante o pós-jogo de Pokémon Sword com a Rusted Sword.',
    'zamazenta': '⭐ Slumbering Weald / Energy Plant: Capturável durante o pós-jogo de Pokémon Shield com a Rusted Shield.',
    'eternatus': '⭐ Batalha de Raid da História Principal: Captura 100% garantida com qualquer Pokéball na Energy Plant.',
    'kubfu': '🎁 Master Dojo (DLC Isle of Armor): Entregue pelo Mestre Mustard após passar nas três provas do dojo.',

    // PALDEA
    'koraidon': '⭐ Lendário de Capa (Scarlet): O primeiro é obtido como montaria no início em Poco Path. Um segundo Koraidon (em modo de batalha) fica esperando na rampa atrás do Laboratório Zero no fundo da cratera da Área Zero após os créditos finais!',
    'miraidon': '⭐ Lendário de Capa (Violet): O primeiro é obtido como montaria no início em Poco Path. Um segundo Miraidon (em modo de batalha) fica esperando na rampa atrás do Laboratório Zero no fundo da cratera da Área Zero após os créditos finais!',
    'ting-lu': '⭐ Santuário Groundblight (Noroeste de Paldea): Requer encontrar e arrancar as 8 estacas verdes fincadas no chão da região.',
    'chien-pao': '⭐ Santuário Icersnow (Sudoeste de Paldea): Requer encontrar e arrancar as 8 estacas amarelas fincadas no chão da região.',
    'wo-chien': '⭐ Santuário Grasswither (Sudeste de Paldea): Requer encontrar e arrancar as 8 estacas roxas fincadas no chão da região.',
    'chi-yu': '⭐ Santuário Firescourge (Nordeste de Paldea): Requer encontrar e arrancar as 8 estacas azuis fincadas no chão da região.',
    'ogerpon': '⭐ DLC Teal Mask: Desafiada e capturada no Dreaded Den no fim da história principal de Kitakami.',
    'terapagos': '⭐ DLC Indigo Disk: Batalha de captura nas profundezas da Underdepths da Área Zero.',
    'pecharunt': '⭐ Mítico do Epílogo de Paldea: Requer a Mythical Pecha Berry de evento na loja de Mossui Town e derrotá-lo na praça da cidade.',
    'bloodmoon-ursaluna': '⭐ Ursa da Lua de Sangue (Kitakami): Missão com a fotógrafa Perrin no Timeless Woods durante a noite de neblina (requer 150 Pokémon registrados na Dex de Kitakami).',
    'gholdengo': '⭐ Evolução Especial: Colete 999 Gimmighoul Coins derrotando ou capturando Gimmighouls espalhados por ruínas e torres de Paldea, e suba de nível com Chest/Roaming Gimmighoul.'
};

// Cache em memória para evitar chamadas de API repetidas
const encountersCache = new Map();

/**
 * Formata strings de localização de forma limpa e amigável em Português
 */
function formatLocationName(name) {
    if (!name) return 'Local Desconhecido';
    let clean = name.replace(/-area$/, '');
    clean = clean.replace(/^kanto-/, 'Kanto: ');
    clean = clean.replace(/^johto-/, 'Johto: ');
    clean = clean.replace(/^hoenn-/, 'Hoenn: ');
    clean = clean.replace(/^sinnoh-/, 'Sinnoh: ');
    clean = clean.replace(/^unova-/, 'Unova: ');
    clean = clean.replace(/^kalos-/, 'Kalos: ');
    clean = clean.replace(/^alola-/, 'Alola: ');
    clean = clean.replace(/^galar-/, 'Galar: ');
    clean = clean.replace(/^paldea-/, 'Paldea: ');
    clean = clean.replace(/route-(\d+)/gi, (m, p) => 'Rota ' + p);
    clean = clean.replace(/-b(\d+)f/gi, (m, p) => ' (Subsolo B' + p + 'F)');
    clean = clean.replace(/-(\d+)f/gi, (m, p) => ' (' + p + 'º Andar)');
    clean = clean.replace(/-/g, ' ');
    
    // Capitaliza palavras
    return clean.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

/**
 * Busca dados da API e processa encontros organizados por versão
 */
async function fetchAndProcessEncounters(pokemon) {
    if (!pokemon) return null;
    const pokeId = (pokemon.id && pokemon.id > 0) ? pokemon.id : pokemon.name;
    const cleanName = String(pokemon.name || '').toLowerCase().trim();
    const baseSpecies = cleanName.split('-')[0];

    // Verifica se possui guia de encontro único/lendário
    const uniqueGuide = UNIQUE_CAPTURE_GUIDES[cleanName] || UNIQUE_CAPTURE_GUIDES[baseSpecies] || null;

    let rawData = [];
    if (encountersCache.has(pokeId)) {
        rawData = encountersCache.get(pokeId);
    } else {
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}/encounters`);
            if (res.ok) {
                rawData = await res.json();
                encountersCache.set(pokeId, rawData);
            }
        } catch (e) {
            console.warn('Não foi possível carregar encontros da PokéAPI:', e);
        }
    }

    // Processa os dados brutos e agrupa por versão
    const byGame = {};
    const gamesFound = new Set();

    rawData.forEach(item => {
        const rawLoc = item.location_area.name;
        const formattedLoc = formatLocationName(rawLoc);

        item.version_details.forEach(vd => {
            const vKey = vd.version.name;
            gamesFound.add(vKey);

            if (!byGame[vKey]) byGame[vKey] = [];

            // Agrupa por método dentro da mesma área para somar chances e calcular faixa de níveis
            const methodsMap = new Map();

            vd.encounter_details.forEach(ed => {
                const mKey = ed.method.name;
                if (!methodsMap.has(mKey)) {
                    methodsMap.set(mKey, {
                        location: formattedLoc,
                        method: mKey,
                        totalChance: 0,
                        minLevel: 999,
                        maxLevel: 0,
                        isUnique: (mKey === 'only-one' || mKey === 'static' || mKey === 'overworld-special' || mKey === 'pokeflute')
                    });
                }

                const entry = methodsMap.get(mKey);
                entry.totalChance += ed.chance;
                if (ed.min_level < entry.minLevel) entry.minLevel = ed.min_level;
                if (ed.max_level > entry.maxLevel) entry.maxLevel = ed.max_level;
            });

            methodsMap.forEach(val => {
                byGame[vKey].push(val);
            });
        });
    });

    // Se a PokéAPI não tiver encontros cadastrados (como nos iniciais ou lendários de Paldea)
    // Mas tivermos o guia único manual, criamos entradas ilustrativas baseadas na lore do jogo
    if (rawData.length === 0 && uniqueGuide) {
        if (cleanName.includes('koraidon')) {
            byGame['scarlet'] = [{
                location: 'Paldea: Área Zero (Cratera de Paldea - Rampa do Lab Zero)',
                method: 'static',
                totalChance: 100,
                minLevel: 72,
                maxLevel: 72,
                isUnique: true
            }];
            gamesFound.add('scarlet');
        } else if (cleanName.includes('miraidon')) {
            byGame['violet'] = [{
                location: 'Paldea: Área Zero (Cratera de Paldea - Rampa do Lab Zero)',
                method: 'static',
                totalChance: 100,
                minLevel: 72,
                maxLevel: 72,
                isUnique: true
            }];
            gamesFound.add('violet');
        }
    }

    // Identifica jogos onde o Pokémon NÃO aparece selvagem
    const majorGames = ['red', 'blue', 'yellow', 'gold', 'silver', 'crystal', 'ruby', 'sapphire', 'emerald', 'firered', 'leafgreen', 'diamond', 'pearl', 'platinum', 'heartgold', 'soulsilver', 'black', 'white', 'black-2', 'white-2', 'x', 'y', 'omega-ruby', 'alpha-sapphire', 'sun', 'moon', 'sword', 'shield', 'scarlet', 'violet'];
    const missingGames = majorGames.filter(g => !gamesFound.has(g));

    return {
        byGame,
        gamesFound: Array.from(gamesFound),
        uniqueGuide,
        missingGames
    };
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        GAME_VERSION_INFO,
        ENCOUNTER_METHODS_PT,
        UNIQUE_CAPTURE_GUIDES,
        formatLocationName,
        fetchAndProcessEncounters
    };
}

