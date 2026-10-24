/**
 * POKÉDEX INFINITY - Base de Dados & Motor Meta Competitivo (Smogon & VGC)
 * Contém movesets otimizados, razões táticas, compatibilidade de jogos/gerações,
 * combos históricos quebrados e guias de pilotagem em batalha.
 */

const COMPETITIVE_META_DATA = {
    // -------------------------------------------------------------
    // SHEDINJA - O CASO CLÁSSICO DE POKÉMON QUEBRADO / BUGADO
    // -------------------------------------------------------------
    'shedinja': {
        tier: 'Smogon AG (Banido do NatDex) / Gen III-VIII Ubers Niche',
        role: 'Wonder Guard Wall / Imunidade Absoluta',
        sets: [
            {
                id: 'shedinja-tera-electric',
                name: 'Tera Elétrico + Balão de Ar (O Combo da Invulnerabilidade)',
                format: 'National Dex AG (Banido no NatDex OU)',
                item: 'Air Balloon (Balão de Ar)',
                ability: 'Wonder Guard (Guarda Maravilha)',
                nature: 'Jolly (+Velocidade, -Sp. Atk) ou Adamant',
                teraType: 'Elétrico (Obrigatório)',
                evs: '252 Atk / 4 Def / 252 Spe (1 HP fixo)',
                moves: [
                    { name: 'Swords Dance', type: 'normal', role: 'Aumenta Ataque em +2 com total impunidade' },
                    { name: 'Shadow Sneak', type: 'ghost', role: 'Prioridade para finalizar oponentes' },
                    { name: 'Poltergeist', type: 'ghost', role: 'STAB de 110 de poder físico brutal' },
                    { name: 'Will-O-Wisp', type: 'fire', role: 'Queima e neutraliza atacantes físicos' }
                ],
                why: 'Wonder Guard faz Shedinja só receber dano de ataques que sejam SUPER EFETIVOS contra ele. Ao Teracristalizar para o tipo Elétrico, sua única fraqueza no jogo passa a ser o tipo Terrestre. Porém, com o item Air Balloon, ele fica completamente imune a golpes Terrestres! Resultado: NENHUM ATAQUE DIRETO DO JOGO CONSEGUE TOCAR SHEDINJA!',
                howToPlay: '1. Ative o Teracristal Elétrico no primeiro turno.\n2. Enquanto o Balão de Ar estiver intacto, você é 100% imune a qualquer ataque direto.\n3. Use Swords Dance até atingir +6 de Ataque e varra a partida.\n4. Cuidado único: Você ainda pode morrer por dano indireto (clima de Tempestade de Areia/Granizo, dano passivo de Veneno/Fogo, Stealth Rock na entrada ou habilidades como Mold Breaker).',
                playableIn: 'Pokémon Showdown (Formatos Anything Goes / Custom Game), ROM Hacks e Batalhas Especiais.',
                incompatibleWith: 'Jogos oficiais da Gen IX (Scarlet & Violet). A Game Freak CORTOU Shedinja do jogo intencionalmente para impedir esse combo invencível! Também não funciona na Gen III até VIII pois o Teracristal não existia.',
                historicalNote: '🔥 O MAIOR BANIMENTO POR QUEBRA DE JOGO DA HISTÓRIA: Nos primeiros dias da Gen 9 no Pokémon Showdown, jogadores usaram Tera Elétrico + Air Balloon em Shedinja e criaram um monstro imortal que venceu torneios sem tomar dano. O conselho do Smogon realizou uma votação de emergência e BANIU Shedinja permanentemente do National Dex! Nos jogos antigos (Gen 3 a 5), jogadores usavam o bug de trocar habilidades em batalhas em dupla com Sturdy (Robustez) para deixá-lo infinito!'
            }
        ]
    },

    // -------------------------------------------------------------
    // GEN I (KANTO)
    // -------------------------------------------------------------
    'venusaur': {
        tier: 'Smogon UU / VGC Sun Sweeper',
        role: 'Special Sweeper / Chlorophyll Cleaner',
        sets: [
            {
                id: 'venusaur-chlorophyll',
                name: 'Chlorophyll Sun Sweeper (Sol Ofensivo)',
                format: 'Singles / VGC Doubles',
                item: 'Life Orb',
                ability: 'Chlorophyll (Clorofila)',
                nature: 'Modest (+Sp. Atk, -Ataque)',
                teraType: 'Fogo ou Planta',
                evs: '252 SpA / 4 SpD / 252 Spe',
                moves: [
                    { name: 'Weather Ball', type: 'fire', role: 'Dano de Fogo 100 de poder no sol' },
                    { name: 'Giga Drain', type: 'grass', role: 'STAB com cura de HP' },
                    { name: 'Sludge Bomb', type: 'poison', role: 'STAB contra tipos Fada e Planta' },
                    { name: 'Growth', type: 'normal', role: 'Buff de +2 Atk e +2 Sp.Atk sob o sol' }
                ],
                why: 'Sob clima de Sol (ativado por Torkoal, Ninetales ou Koraidon), a habilidade Clorofila dobra a Velocidade de Venusaur, ultrapassando praticamente todo o meta sem precisar de Choice Scarf. Com o movimento Growth sob sol, ele recebe +2 em ambos os ataques em um único turno. Weather Ball se torna um ataque devastador de Fogo de 100 de poder, cobrindo fraquezas contra Aço e Gelo.',
                howToPlay: '1. Nunca entre em campo antes que o Sol esteja ativo ou garantido no turno.\n2. Coloque Venusaur em campo via troca segura (após nocaute de aliado ou U-turn/Parting Shot).\n3. Se o oponente for forçado a trocar, use Growth para atingir poder avassalador.\n4. Use Weather Ball em Pokémon de Aço (Corviknight, Gholdengo) e Giga Drain para regenerar o recuo da Life Orb.',
                playableIn: 'Scarlet & Violet (via DLC Indigo Disk), Sword & Shield (Gen VIII), Pokémon Showdown.',
                incompatibleWith: 'Jogos da Gen I e II (habilidades como Clorofila não existiam; Weather Ball só foi criado na Gen III; Growth só dava +1 SpA nas primeiras gerações).',
                historicalNote: 'Nas gerações antigas (Gen 1-4), o golpe Growth aumentava apenas o Ataque Especial em +1. Foi apenas a partir de Black & White (Gen 5) que a Game Freak alterou o golpe para conceder +2 em Ataque e +2 em Sp. Atk quando usado sob a luz do Sol, transformando Venusaur em um terror absoluto de times de clima.'
            }
        ]
    },

    'charizard': {
        tier: 'Smogon PU / NatDex OU / VGC',
        role: 'Wallbreaker Especial / Dragon Dance Sweeper',
        sets: [
            {
                id: 'charizard-sun-specs',
                name: 'Solar Power Specs (Canhão Solar)',
                format: 'Singles & VGC Doubles',
                item: 'Choice Specs',
                ability: 'Solar Power (Poder Solar)',
                nature: 'Timid (+Velocidade, -Ataque)',
                teraType: 'Fogo',
                evs: '4 Def / 252 SpA / 252 Spe',
                moves: [
                    { name: 'Weather Ball', type: 'fire', role: 'Dano colossal sob o Sol' },
                    { name: 'Solar Beam', type: 'grass', role: 'Cobertura instantânea contra Água/Pedra' },
                    { name: 'Scorching Sands', type: 'ground', role: 'Cobertura contra tipos Fogo e Elétrico' },
                    { name: 'Overheat', type: 'fire', role: 'Nuke para nocaute instantâneo garantido' }
                ],
                why: 'A habilidade Solar Power aumenta o Ataque Especial de Charizard em impressionantes 50% quando o Sol está brilhando. Combinado com Choice Specs e o bônus de 50% de dano que o Sol já concede a golpes de Fogo, Weather Ball ou Overheat conseguem nocautear até Pokémon que resistem a Fogo.',
                howToPlay: '1. Requer suporte estrito de ativadores de Sol (como Torkoal ou Koraidon) e removedores de Stealth Rock.\n2. Evite deixá-lo sofrer dano passivo de Stealth Rock (que remove 50% do HP de Charizard).\n3. Entre no momento certo para disparar um ataque decisivo. Pouquíssimos Pokémon no jogo conseguem aguentar dois golpes desse set.',
                playableIn: 'Scarlet & Violet (Gen IX), Sword & Shield (Gen VIII), Pokémon Showdown.',
                incompatibleWith: 'Gen I a VII (Scorching Sands só foi criado na DLC da Gen VIII Isle of Armor; Weather Ball com Solar Power em Charizard só virou viável com a mecânica moderna).',
                historicalNote: 'Na Gen I (Red/Blue), Charizard era incapaz de aprender o golpe Fly (HM02), algo que virou piada mundial até Pokémon Yellow corrigir! Além disso, nas primeiras gerações o golpe Fire Blast tinha uma chance absurda de 30% de queimar o oponente, o que tornava Charizard imprevisível.'
            },
            {
                id: 'charizard-mega-x',
                name: 'Dragon Dance Tough Claws (Mega X)',
                format: 'National Dex OU / Gen VII OU',
                item: 'Charizardite X',
                ability: 'Tough Claws (Garras Rígidas)',
                nature: 'Jolly (+Velocidade, -Sp. Atk)',
                teraType: 'Nenhum (Mega)',
                evs: '252 Atk / 4 SpD / 252 Spe',
                moves: [
                    { name: 'Dragon Dance', type: 'dragon', role: 'Aumenta Ataque e Velocidade em +1' },
                    { name: 'Flare Blitz', type: 'fire', role: 'STAB físico brutal com Tough Claws' },
                    { name: 'Dragon Claw', type: 'dragon', role: 'STAB secundário sem recuo' },
                    { name: 'Earthquake', type: 'ground', role: 'Cobertura contra Heatran e Toxapex' }
                ],
                why: 'Mega Charizard X muda seu tipo para Fogo/Dragão, eliminando a fraqueza quádrupla para Pedra e recebendo Tough Claws (+30% de dano em ataques de contato). Após um único Dragon Dance, ele se torna uma das maiores ameaças físicas do formato.',
                howToPlay: '1. Encontre uma oportunidade de setup contra alvos defensivos que não causem dano alto (como Ferrothorn ou Tangrowth).\n2. Use Dragon Dance na troca do oponente.\n3. Varra o time com Flare Blitz e Earthquake.',
                playableIn: 'Pokémon X/Y (Gen VI), Omega Ruby/Alpha Sapphire, Sun/Moon (Gen VII), Ultra Sun/Ultra Moon e National Dex no Showdown.',
                incompatibleWith: '⚠️ TOTALMENTE INCOMPATÍVEL nos jogos Sword/Shield e Scarlet/Violet! A Nintendo removeu todas as Mega Evoluções dos jogos modernos da franquia!',
                historicalNote: '🔥 O POKÉMON MAIS POPULAR DO META DE KALOS: Em X & Y, Charizard X dominou o competitivo porque ninguém sabia se o adversário usaria a Mega X (Fogo/Dragão Físico) ou a Mega Y (Fogo/Voador Especial com Sol instantâneo), forçando o oponente a adivinhar sob pena de ser aniquilado no turno 1.'
            }
        ]
    },

    'dragonite': {
        tier: 'Smogon OU / VGC Staple',
        role: 'Extreme Speed Dragon Dance Sweeper',
        sets: [
            {
                id: 'dragonite-dd-boots',
                name: 'Dragon Dance Bulky Sweeper (O Terror do OU)',
                format: 'Singles OU & VGC',
                item: 'Heavy-Duty Boots',
                ability: 'Multiscale (Multiescala)',
                nature: 'Adamant (+Ataque, -Sp. Atk)',
                teraType: 'Normal (Essencial)',
                evs: '252 Atk / 4 SpD / 252 Spe',
                moves: [
                    { name: 'Extreme Speed', type: 'normal', role: 'Prioridade +2 que vira STAB atômico no Tera Normal' },
                    { name: 'Dragon Dance', type: 'dragon', role: 'Aumenta Ataque e Velocidade' },
                    { name: 'Earthquake', type: 'ground', role: 'Cobertura contra Aço e Rocha (Gholdengo/Kingambit)' },
                    { name: 'Roost', type: 'flying', role: 'Recupera HP e reativa o escudo de Multiscale' }
                ],
                why: 'Multiscale reduz o dano de qualquer golpe em 50% enquanto o HP estiver cheio. Com Heavy-Duty Boots, Dragonite nunca perde HP ao entrar em Stealth Rock. Ao ativar Teracristal Normal, Extreme Speed passa a ter 120 de poder com prioridade +2, atropelando sweepers mais rápidos.',
                howToPlay: '1. Guarde Dragonite para o meio ou fim de jogo.\n2. Entre em campo com HP 100% garantido pelo Multiscale e use Dragon Dance com segurança.\n3. Teracristalize para Normal para obliterar ameaças enfraquecidas com Extreme Speed sem dar chance de reação.',
                playableIn: 'Scarlet & Violet (Gen IX), Pokémon Showdown.',
                incompatibleWith: 'Jogos da Gen I a IV (a habilidade Multiscale só foi criada na Gen V, e as Heavy-Duty Boots na Gen VIII). Além disso, o Tera Normal é exclusivo da Gen IX.',
                historicalNote: '🔥 O FAMOSO "WRAP" INFINITO DE RED/BLUE: Na Gen 1, o golpe Wrap (Constrição) de Dragonite era bugado: o oponente atingido ficava completamente congelado e impedido de escolher qualquer ação por 2 a 5 turnos seguidos! Se Dragonite fosse mais rápido (com Agility), o rival morria sem poder apertar nenhum botão!'
            }
        ]
    },

    'gengar': {
        tier: 'Smogon UU / National Dex OU',
        role: 'Fast Special Wallbreaker & Stallbreaker',
        sets: [
            {
                id: 'gengar-nasty-plot',
                name: 'Nasty Plot Focus Sash Breaker',
                format: 'Singles',
                item: 'Focus Sash (Faixa de Foco)',
                ability: 'Cursed Body (Corpo Amaldiçoado)',
                nature: 'Timid (+Velocidade, -Ataque)',
                teraType: 'Fantasma ou Lutador',
                evs: '4 Def / 252 SpA / 252 Spe',
                moves: [
                    { name: 'Shadow Ball', type: 'ghost', role: 'STAB fantasma spammável com chance de baixar SpD' },
                    { name: 'Sludge Wave', type: 'poison', role: 'STAB venenoso de alto dano contra Fadas' },
                    { name: 'Focus Blast', type: 'fighting', role: 'Cobertura perfeita contra Noturno e Aço (Kingambit/Heatran)' },
                    { name: 'Nasty Plot', type: 'dark', role: 'Dobra o Ataque Especial em +2' }
                ],
                why: 'Com 130 de SpA e 110 de Velocidade, Gengar pune trocas com maestria. A combinação de Ghost + Fighting oferece cobertura neutra contra quase todos os Pokémon do jogo. Com Focus Sash, ele garante sobrevivência a 1 golpe para dar Nasty Plot ou finalizar o rival.',
                howToPlay: '1. Mantenha o campo livre de Stealth Rock para não quebrar a Focus Sash.\n2. Force Pokémon que não podem te tocar a trocar e use Nasty Plot.\n3. Castigue Kingambit e Ting-Lu na troca com Focus Blast.',
                playableIn: 'Gen VII, VIII e IX (Sword/Shield, Scarlet/Violet, Showdown).',
                incompatibleWith: 'Gen I a III (antes da divisão Físico/Especial na Gen 4, todos os golpes Fantasma eram categorizados como FÍSICOS, logo Shadow Ball usava o péssimo ataque de 65 do Gengar!).',
                historicalNote: '⚡ O NERF DO LEVITATE: Por mais de 14 anos (da Gen 3 à Gen 6), Gengar possuía a habilidade Levitate (Levitação), o que eliminava completamente sua fraqueza contra o tipo Terrestre (Earthquake). Em Pokémon Sun & Moon (Gen 7), a Game Freak removeu Levitate e deu a ele Cursed Body para balancear o monstro.'
            }
        ]
    },

    'garchomp': {
        tier: 'Smogon OU Staple',
        role: 'Offensive Hazard Lead / Scale Shot Sweeper',
        sets: [
            {
                id: 'garchomp-tank',
                name: 'TankChomp (O Muro Espinhoso)',
                format: 'Singles OU',
                item: 'Rocky Helmet (Capacete Dentado)',
                ability: 'Rough Skin (Pele Áspera)',
                nature: 'Impish (+Defesa, -Sp. Atk)',
                teraType: 'Fantasma ou Aço',
                evs: '252 HP / 216 Def / 40 Spe',
                moves: [
                    { name: 'Earthquake', type: 'ground', role: 'STAB terrestre devastador' },
                    { name: 'Dragon Tail', type: 'dragon', role: 'Phazing: força o oponente a trocar e tomar dano' },
                    { name: 'Stealth Rock', type: 'rock', role: 'Espalha pedras pontiagudas no campo' },
                    { name: 'Spikes', type: 'ground', role: 'Acumula espinhos no chão para dano passivo' }
                ],
                why: 'A combinação de Rocky Helmet + Rough Skin pune qualquer atacante de contato com a perda de quase 30% do HP a cada soco desferido contra Garchomp. Com Dragon Tail, ele impede que adversários usem Swords Dance ou Calm Mind na sua frente.',
                howToPlay: '1. Entre contra atacantes físicos como Great Tusk, Cinderace ou Kingambit.\n2. Coloque Stealth Rock e Spikes.\n3. Quando o oponente tentar setupar, use Dragon Tail para arremessá-lo de volta à Pokébola.',
                playableIn: 'Scarlet & Violet (Gen IX) e Showdown.',
                incompatibleWith: 'Jogos da Gen IV, V, VI, VII e VIII (Garchomp NUNCA aprendeu o golpe Spikes no passado; Spikes só foi adicionado ao seu moveset no lançamento de Scarlet & Violet na Gen IX!).',
                historicalNote: '🔥 O BANIMENTO HISTÓRICO DE DIAMOND & PEARL (GEN 4): Garchomp foi o PRIMEIRO Pokémon não-lendário da história a ser banido para a categoria Ubers pelo Smogon! O motivo era o combo quebrado de sua habilidade Sand Veil com o item Bright Powder sob tempestade de areia de Tyranitar: os golpes de gelo dos oponentes tinham quase 30% de chance de errar por pura sorte!'
            },
            {
                id: 'garchomp-scale-shot',
                name: 'Swords Dance Scale Shot Sweeper',
                format: 'Singles OU',
                item: 'Loaded Dice',
                ability: 'Rough Skin',
                nature: 'Jolly (+Velocidade, -Sp. Atk)',
                teraType: 'Fogo ou Aço',
                evs: '252 Atk / 4 SpD / 252 Spe',
                moves: [
                    { name: 'Swords Dance', type: 'normal', role: 'Dobra o Ataque em +2' },
                    { name: 'Scale Shot', type: 'dragon', role: 'Golpe múltiplo garantido (4-5 hits) que dá +1 Spe' },
                    { name: 'Earthquake', type: 'ground', role: 'STAB com 100 de poder e 100% de precisão' },
                    { name: 'Fire Fang', type: 'fire', role: 'Quebra Corviknight e Skarmory com Tera Fogo' }
                ],
                why: 'Loaded Dice garante que Scale Shot sempre acerte 4 ou 5 vezes, gerando dano absurdo e concedendo +1 de Velocidade garantido, transformando Garchomp em um monstro veloz e imparável.',
                howToPlay: '1. Aguarde até que atacantes de gelo com prioridade estejam fora de combate.\n2. Use Swords Dance e em seguida Scale Shot para ganhar velocidade e limpar o jogo.',
                playableIn: 'Scarlet & Violet (Gen IX via DLC Teal Mask) e Showdown.',
                incompatibleWith: 'Brilliant Diamond / Shining Pearl (BDSP), Sword & Shield e jogos anteriores (o item Loaded Dice não existia).',
                historicalNote: 'Em Sword & Shield, Scale Shot tinha o risco constante de acertar apenas 2 vezes (causando dano medíocre de 50 de poder). Foi a criação do item Loaded Dice na 9ª geração que consertou o golpe e devolveu Garchomp ao topo do meta.'
            }
        ]
    },

    'snorlax': {
        tier: 'Smogon NU / Retro OU',
        role: 'CurseLax Special Tank & Wincon',
        sets: [
            {
                id: 'snorlax-curselax',
                name: 'CurseLax Imortal (RestTalk)',
                format: 'Singles (Famoso no Gen II GSC)',
                item: 'Leftovers (Restos)',
                ability: 'Thick Fat (Gordura Grossa)',
                nature: 'Careful (+Sp. Def, -Sp. Atk)',
                teraType: 'Aço ou Fada',
                evs: '252 HP / 4 Def / 252 SpD',
                moves: [
                    { name: 'Curse', type: 'ghost', role: 'Aumenta Ataque e Defesa em troca de Velocidade' },
                    { name: 'Body Slam', type: 'normal', role: 'STAB de alto impacto com 30% de chance de paralisia' },
                    { name: 'Rest', type: 'psychic', role: 'Cura 100% do HP e remove qualquer status' },
                    { name: 'Sleep Talk', type: 'normal', role: 'Permite continuar atacando ou buffando enquanto dorme' }
                ],
                why: 'Snorlax possui uma Defesa Especial natural gigantesca e muito HP. Com Curse, ele conserta sua única fraqueza estatística (Defesa Física baixa). Thick Fat reduz dano de Fogo e Gelo pela metade.',
                howToPlay: '1. Entre contra atacantes especiais ou Pokémon passivos.\n2. Acumule 2 a 3 Curses enquanto o oponente falha em causar dano relevante.\n3. Quando o HP baixar, use Rest e pressione com Sleep Talk.',
                playableIn: 'Gold/Silver/Crystal (Gen II), FireRed/LeafGreen, HeartGold/SoulSilver, e todas as gerações modernas.',
                incompatibleWith: 'Gen I (o golpe Curse e o item Leftovers só foram introduzidos a partir de Pokémon Gold & Silver na Gen II).',
                historicalNote: '👑 O POKÉMON MAIS DOMINANTE DA HISTÓRIA COMPETITIVA: No cenário oficial de Pokémon Gold, Silver & Crystal (Gen 2), Snorlax atingiu 100% DE PRESENÇA nos campeonatos! Não existia NENHUM time competitivo sem Snorlax. O formato era literalmente definido por "CurseLax contra CurseLax". Na Gen 1, o golpe Amnesia subia tanto Ataque Especial quanto Defesa Especial em +2, tornando Snorlax uma aberração inquebrável.'
            }
        ]
    },

    'scizor': {
        tier: 'Smogon OU / UU',
        role: 'Technician Priority Revenge Killer',
        sets: [
            {
                id: 'scizor-choice-band',
                name: 'Choice Band Technician Bullet Punch',
                format: 'Singles & VGC',
                item: 'Choice Band',
                ability: 'Technician (Técnico)',
                nature: 'Adamant (+Ataque, -Sp. Atk)',
                teraType: 'Aço',
                evs: '236 HP / 252 Atk / 20 Spe',
                moves: [
                    { name: 'Bullet Punch', type: 'steel', role: 'Prioridade impulsionada por Technician + STAB' },
                    { name: 'U-turn', type: 'bug', role: 'STAB com recuo tático de momentum' },
                    { name: 'Close Combat', type: 'fighting', role: 'Dano massivo contra Aço, Rocha e Normal' },
                    { name: 'Knock Off', type: 'dark', role: 'Remove itens e atinge tipos Fantasma' }
                ],
                why: 'Technician multiplica o poder de golpes fracos (<= 60) por 1.5x. Isso transforma Bullet Punch em um projétil de alta prioridade que destrói alvos rápidos e frágeis.',
                howToPlay: '1. Use Bullet Punch para limpar atacantes frágeis como Flutter Mane, Chien-Pao, Weavile e Iron Valiant.\n2. Use U-turn para criar pressão no início de jogo mantendo o controle do ritmo.',
                playableIn: 'Pokémon Platinum em diante (Gen IV, V, VI, VII, VIII, IX).',
                incompatibleWith: '⚠️ Pokémon Diamond & Pearl originais e Gen II/III! Scizor NÃO aprendia Bullet Punch nos jogos clássicos de lançamento!',
                historicalNote: '⚡ O RENASCIMENTO EM POKÉMON PLATINUM: Nos jogos Diamond & Pearl originais de 2006, Scizor era um Pokémon mediano e pouco usado. Em 2008, o lançamento de Pokémon Platinum adicionou um Move Tutor que ensinava Bullet Punch. Naquele dia nasceu o combo "Technician + STAB + Bullet Punch + Choice Band", transformando Scizor no Pokémon número 1 do mundo da noite para o dia!'
            }
        ]
    },

    'volcarona': {
        tier: 'Smogon OU (ou Ubers)',
        role: 'Quiver Dance Sweeper Supremo',
        sets: [
            {
                id: 'volcarona-quiver-dance',
                name: 'Quiver Dance Sweeper Imparável',
                format: 'Singles OU',
                item: 'Heavy-Duty Boots',
                ability: 'Flame Body (Corpo em Chamas)',
                nature: 'Timid (+Velocidade, -Ataque)',
                teraType: 'Grama ou Fada',
                evs: '252 SpA / 4 SpD / 252 Spe',
                moves: [
                    { name: 'Quiver Dance', type: 'bug', role: 'Aumenta Sp. Atk, Sp. Def e Velocidade em +1' },
                    { name: 'Fiery Dance', type: 'fire', role: 'STAB com 50% de chance de dar mais +1 Sp. Atk' },
                    { name: 'Bug Buzz', type: 'bug', role: 'STAB que atravessa Substitutos' },
                    { name: 'Giga Drain', type: 'grass', role: 'Cura vida e destrói Dondozo, Great Tusk e Garganacl' }
                ],
                why: 'Quiver Dance é o melhor golpe de setup especial do jogo (+1 SpA, +1 SpD, +1 Spe). Com Heavy-Duty Boots, Volcarona ignora sua mortal fraqueza de 50% para Stealth Rock. Com Tera Grama + Giga Drain, ela vira suas fraquezas contra seus checks.',
                howToPlay: '1. Entre contra um atacante especial incapaz de perfurar suas defesas.\n2. Use Quiver Dance 1 ou 2 vezes.\n3. Fiery Dance pode gerar buffs contínuos enquanto você varre a partida.',
                playableIn: 'Sword & Shield (Gen VIII) e Scarlet & Violet (Gen IX).',
                incompatibleWith: 'Gen V (Black/White), Gen VI e Gen VII com este nível de liberdade. Nestes jogos antigos, as Heavy-Duty Boots não existiam!',
                historicalNote: 'A MALDIÇÃO DE STEALTH ROCK: Antes da Gen 8 criar o item Heavy-Duty Boots, jogar de Volcarona era um pesadelo: se o oponente colocasse Stealth Rock no campo, Volcarona perdia instantaneamente METADE (50%) de sua vida máxima só de pisar na arena! Era obrigatório ter um spinner como Starmie ou Excadrill para limpá-la antes de colocá-la.'
            }
        ]
    },

    'toxapex': {
        tier: 'Smogon OU Wall Lendário',
        role: 'Regenerator Defensive Anchor',
        sets: [
            {
                id: 'toxapex-bulky-wall',
                name: 'Regenerator Toxic Stall (A Muralha Venenosa)',
                format: 'Singles OU',
                item: 'Leftovers ou Black Sludge',
                ability: 'Regenerator (Regeneração)',
                nature: 'Bold (+Defesa, -Ataque)',
                teraType: 'Grama ou Fada',
                evs: '252 HP / 192 Def / 64 SpD',
                moves: [
                    { name: 'Toxic', type: 'poison', role: 'Envenena gravemente acumulando dano por turno' },
                    { name: 'Recover', type: 'normal', role: 'Restaura 50% de HP' },
                    { name: 'Haze', type: 'ice', role: 'Zera todos os buffs de status do adversário' },
                    { name: 'Surf', type: 'water', role: 'Dano direto consistente' }
                ],
                why: 'Regenerator recupera 33% da vida de Toxapex toda vez que ele sai de campo. Haze impede totalmente que qualquer sweeper inimigo use Swords Dance, Dragon Dance ou Calm Mind para quebrar sua defesa.',
                howToPlay: '1. Espalhe veneno com Toxic em tudo que puder ser afetado.\n2. Use Haze imediatamente se o rival tentar usar buffs.\n3. Saia de campo para reativar o Regenerator sem gastar turnos com Recover.',
                playableIn: 'Sun & Moon (Gen VII), Sword & Shield (Gen VIII) e Scarlet & Violet (Gen IX).',
                incompatibleWith: 'O clássico golpe Scald (Água Fervente) NÃO PODE MAIS SER USADO na Gen IX (Scarlet/Violet), pois a Game Freak removeu Scald do moveset de Toxapex!',
                historicalNote: '⚠️ O NERF HISTÓRICO DA GEN 9: Em Sun & Moon e Sword & Shield, Toxapex era quase invencível porque spammava Scald (com 30% de queimar e quebrar atacantes físicos) e tinha 16 PPs de Recover. Em Scarlet & Violet, a Game Freak decidiu castigá-lo: removeu Scald do jogo para quase todos os Pokémon de água e cortou os PPs de Recover pela metade (de 16 para apenas 8)!'
            }
        ]
    },

    'kingambit': {
        tier: 'Smogon OU Terror Absoluto',
        role: 'Supreme Overlord Late-Game Wincon',
        sets: [
            {
                id: 'kingambit-supreme-overlord',
                name: 'Supreme Overlord Swords Dance (O General Imbatível)',
                format: 'Singles OU',
                item: 'Leftovers ou Black Glasses',
                ability: 'Supreme Overlord (Soberano Supremo)',
                nature: 'Adamant (+Ataque, -Sp. Atk)',
                teraType: 'Voador ou Fada',
                evs: '212 HP / 252 Atk / 44 Spe',
                moves: [
                    { name: 'Sucker Punch', type: 'dark', role: 'Prioridade +1 com dano assustador no fim de jogo' },
                    { name: 'Kowtow Cleave', type: 'dark', role: 'STAB de 85 de poder que NUNCA erra' },
                    { name: 'Iron Head', type: 'steel', role: 'STAB de aço para destruir tipos Fada' },
                    { name: 'Swords Dance', type: 'normal', role: 'Dobra o Ataque em +2' }
                ],
                why: 'A habilidade Supreme Overlord concede +10% de poder a Kingambit para CADA membro do time derrotado antes dele. Quando ele entra como o último Pokémon vivo (5 aliados caídos), ele recebe um bônus passivo permanente de +50% de dano em TODOS os seus ataques!',
                howToPlay: '1. Guarde Kingambit como seu trunfo absoluto de fim de jogo.\n2. Quando os 5 companheiros caírem, traga Kingambit.\n3. Teracristalize para Voador para anular completamente sua fraqueza 4x para Lutador e Terrestre.\n4. Use Sucker Punch prioritário para nocautear todo o time remanescente do adversário.',
                playableIn: 'Exclusivo de Scarlet & Violet (Gen IX) e Pokémon Showdown.',
                incompatibleWith: 'Incompatível com todos os jogos anteriores à Gen IX (Kingambit não existia da Gen I até a Gen VIII).',
                historicalNote: '🔥 A CRIAÇÃO DE UMA NOVA EVOLUÇÃO: Bisharp era um Pokémon clássico da Gen 5 que durante mais de 10 anos não evoluía. Em Scarlet & Violet, a Game Freak deu a ele a evolução Kingambit junto com a habilidade Supreme Overlord e o Teracristal, criando o Pokémon de finalização de jogo mais temido da história moderna.'
            }
        ]
    },

    'flutter-mane': {
        tier: 'Smogon Ubers / VGC Rainha do Meta',
        role: 'Ultra-Fast Special Cleaner',
        sets: [
            {
                id: 'flutter-mane-booster-speed',
                name: 'Booster Energy Fast Cleaner',
                format: 'VGC & Singles Ubers',
                item: 'Booster Energy',
                ability: 'Protosynthesis (Protossíntese)',
                nature: 'Timid (+Velocidade, -Ataque)',
                teraType: 'Fada ou Fantasma',
                evs: '116 HP / 140 Def / 132 SpA / 4 SpD / 116 Spe',
                moves: [
                    { name: 'Moonblast', type: 'fairy', role: 'STAB com chance de reduzir o Sp. Atk do rival' },
                    { name: 'Shadow Ball', type: 'ghost', role: 'STAB com excelente cobertura neutra' },
                    { name: 'Dazzling Gleam', type: 'fairy', role: 'STAB em área em partidas de duplas (VGC)' },
                    { name: 'Protect', type: 'normal', role: 'Proteção essencial em duplas' }
                ],
                why: 'Com 135 de Ataque Especial, 135 de Defesa Especial e 135 de Velocidade base, Flutter Mane possui a melhor distribuição estatística ofensiva rápida do jogo. Com Booster Energy ativando Protossíntese na Velocidade, ela se torna inalcançável.',
                howToPlay: '1. Em duplas (VGC), use ao lado de ativadores de Tailwind ou suporte como Incineroar e Chi-Yu.\n2. Dispare Dazzling Gleam para derreter o campo adversário e finalize com Moonblast.',
                playableIn: 'Exclusivo de Pokémon Scarlet (Gen IX) e Showdown.',
                incompatibleWith: 'Jogos da Gen I até VIII (Pokémon Paradox não existiam).',
                historicalNote: '⚡ O BANIMENTO RECORDISTA DO SMOGON: No lançamento de Scarlet & Violet, Flutter Mane durou menos de 48 HORAS no formato OU antes de receber um Quickban unânime para Ubers, sendo um dos banimentos mais rápidos de toda a história competitiva!'
            }
        ]
    },

    'great-tusk': {
        tier: 'Smogon OU #1 em Uso',
        role: 'Rapid Spin Offensive Utility Tank',
        sets: [
            {
                id: 'great-tusk-offensive-utility',
                name: 'Rapid Spin Utility Sweeper (O Dono da Gen 9)',
                format: 'Singles OU',
                item: 'Booster Energy ou Leftovers',
                ability: 'Protosynthesis (Protossíntese)',
                nature: 'Jolly (+Velocidade, -Sp. Atk)',
                teraType: 'Gelo ou Aço',
                evs: '252 Atk / 4 Def / 252 Spe',
                moves: [
                    { name: 'Rapid Spin', type: 'normal', role: 'Limpa hazards do seu lado e dá +1 de Velocidade' },
                    { name: 'Headlong Rush', type: 'ground', role: 'STAB brutal de 120 de poder' },
                    { name: 'Close Combat', type: 'fighting', role: 'STAB lutador devastador' },
                    { name: 'Ice Spinner', type: 'ice', role: 'Cobertura perfeita contra Dragões, Planta e Voadores' }
                ],
                why: 'Great Tusk combina atributos físicos colossais com a capacidade de remover hazards do campo com Rapid Spin enquanto ganha velocidade.',
                howToPlay: '1. Remova hazards adversários com Rapid Spin.\n2. Ataque com Headlong Rush e Ice Spinner para causar estragos irreparáveis.',
                playableIn: 'Exclusivo de Pokémon Scarlet (Gen IX) e Showdown.',
                incompatibleWith: 'Gen I a VIII.',
                historicalNote: 'Great Tusk quebrou o recorde de uso no Smogon OU, ultrapassando 50% de presença em quase todas as equipes competitivas no primeiro ano de Scarlet & Violet, substituindo Landorus-Therian como o utilitário terrestre supremo.'
            }
        ]
    },

    'koraidon': {
        tier: 'Smogon Ubers / VGC Campeão',
        role: 'Sun Setter & Apex Physical Breaker',
        sets: [
            {
                id: 'koraidon-apex',
                name: 'Collision Course Sun Wallbreaker',
                format: 'Singles Ubers & VGC Reg G',
                item: 'Loaded Dice ou Clear Amulet',
                ability: 'Orichalcum Pulse (Pulso de Oricalco)',
                nature: 'Jolly (+Velocidade, -Sp. Atk)',
                teraType: 'Fogo ou Lutador',
                evs: '252 Atk / 4 Def / 252 Spe',
                moves: [
                    { name: 'Collision Course', type: 'fighting', role: 'Poder sobe para 133 se o golpe for super efetivo' },
                    { name: 'Flare Blitz', type: 'fire', role: 'Dano de Fogo apocalíptico sob seu próprio Sol' },
                    { name: 'Scale Shot', type: 'dragon', role: 'Múltiplos acertos + boost de velocidade com Loaded Dice' },
                    { name: 'Swords Dance', type: 'normal', role: 'Dobra seu ataque já colossal' }
                ],
                why: 'Orichalcum Pulse ativa o Sol imediatamente ao entrar em campo e concede a Koraidon um aumento brutal de +33% no seu Ataque físico.',
                howToPlay: '1. Ative o Sol para beneficiar Koraidon e seus parceiros.\n2. Teracristalize para Fogo para que seu Flare Blitz sob o sol cause dano suficiente para nocautear praticamente qualquer coisa no jogo.',
                playableIn: 'Pokémon Scarlet (Gen IX) e Showdown.',
                incompatibleWith: 'Gen I a VIII.',
                historicalNote: 'Em VGC Regulação G, Koraidon formou a dupla lendária mais temida do circuito mundial ao lado de Flutter Mane, dominando os regionais internacionais da Pokémon Company.'
            }
        ]
    },

    'miraidon': {
        tier: 'Smogon Ubers / VGC Campeão',
        role: 'Electric Terrain Apex Special Wallbreaker',
        sets: [
            {
                id: 'miraidon-apex',
                name: 'Hadron Engine Electro Drift Nuke',
                format: 'Singles Ubers & VGC Reg G',
                item: 'Choice Specs ou Life Orb',
                ability: 'Hadron Engine (Motor de Hádrons)',
                nature: 'Timid (+Velocidade, -Ataque)',
                teraType: 'Elétrico ou Dragão',
                evs: '252 SpA / 4 SpD / 252 Spe',
                moves: [
                    { name: 'Electro Drift', type: 'electric', role: 'Golpe assinatura com 100 de base que sobe para 133 em super efetivo' },
                    { name: 'Draco Meteor', type: 'dragon', role: 'Nocaute instantâneo garantido em qualquer dragão' },
                    { name: 'Volt Switch', type: 'electric', role: 'Dano absurdo de saída garantindo controle' },
                    { name: 'Dazzling Gleam', type: 'fairy', role: 'Cobertura contra outros dragões' }
                ],
                why: 'Hadron Engine cria o Campo Elétrico ao entrar e concede a Miraidon +33% de Ataque Especial. No Campo Elétrico, golpes elétricos ganham mais 30% de poder adicional.',
                howToPlay: '1. Crie o terreno elétrico e dispare Electro Drift.\n2. Use Volt Switch para desgastar as trocas adversárias com dano equiparável a golpes finais de outros Pokémon.',
                playableIn: 'Pokémon Violet (Gen IX) e Showdown.',
                incompatibleWith: 'Gen I a VIII.',
                historicalNote: 'No Smogon Ubers, o dano de Electro Drift com Choice Specs de Miraidon foi calculado como o maior dano elétrico da história dos videogames Pokémon sem necessidade de turnos de setup.'
            }
        ]
    }
};

/**
 * Cache global para dados do Smogon Gen 9
 */
let smogonGen9Cache = null;

/**
 * Busca dados competitivos:
 * 1. Primeiro verifica na base com curadoria em Português (COMPETITIVE_META_DATA)
 * 2. Em seguida, busca dinamicamente no Smogon Gen 9
 * 3. Se não tiver formato competitivo viável (ex: Caterpie, Magikarp, Unown), retorna null
 */
async function getCompetitiveData(pokemonName) {
    if (!pokemonName) return null;
    const cleanName = pokemonName.toLowerCase().trim();

    // 1. Curadoria Local
    if (COMPETITIVE_META_DATA[cleanName]) {
        return COMPETITIVE_META_DATA[cleanName];
    }

    const baseName = cleanName.split('-')[0];
    if (COMPETITIVE_META_DATA[baseName]) {
        return COMPETITIVE_META_DATA[baseName];
    }

    // 2. Smogon Gen 9 Fallback
    try {
        if (!smogonGen9Cache) {
            const res = await fetch('https://pkmn.github.io/smogon/data/sets/gen9.json');
            if (res.ok) {
                smogonGen9Cache = await res.json();
            }
        }

        if (smogonGen9Cache) {
            const matchingKey = Object.keys(smogonGen9Cache).find(k => 
                k.toLowerCase() === cleanName || 
                k.toLowerCase() === baseName ||
                k.toLowerCase().replace(/[^a-z0-9]/g, '') === cleanName.replace(/[^a-z0-9]/g, '')
            );

            if (matchingKey && smogonGen9Cache[matchingKey]) {
                return parseSmogonSetsToMeta(matchingKey, smogonGen9Cache[matchingKey]);
            }
        }
    } catch (e) {
        console.warn('Smogon dataset indisponível ou offline:', e);
    }

    // Não possui dados competitivos -> ABA NÃO DEVE APARECER
    return null;
}

/**
 * Converte dados brutos do Smogon Gen 9 para o padrão visual da Pokédex Infinity
 */
function parseSmogonSetsToMeta(speciesName, smogonData) {
    if (!smogonData || typeof smogonData !== 'object') return null;

    const sets = [];
    const preferredTiers = ['ou', 'vgc2025', 'nationaldex', 'ubers', 'uu', 'ru', 'nu', 'pu', 'lc', 'monotype'];
    
    const availableTiers = Object.keys(smogonData).sort((a, b) => {
        const idxA = preferredTiers.indexOf(a);
        const idxB = preferredTiers.indexOf(b);
        return (idxA !== -1 ? idxA : 99) - (idxB !== -1 ? idxB : 99);
    });

    availableTiers.slice(0, 3).forEach(tierKey => {
        const tierSets = smogonData[tierKey];
        if (!tierSets || typeof tierSets !== 'object') return;

        Object.keys(tierSets).forEach(setName => {
            const rawSet = tierSets[setName];
            if (!rawSet || !rawSet.moves) return;

            const itemStr = Array.isArray(rawSet.item) ? rawSet.item.join(' ou ') : (rawSet.item || 'Item Livre');
            const abilityStr = Array.isArray(rawSet.ability) ? rawSet.ability.join(' ou ') : (rawSet.ability || 'Habilidade Padrão');
            const natureStr = Array.isArray(rawSet.nature) ? rawSet.nature.join(' ou ') : (rawSet.nature || 'Jolly');
            const teraStr = Array.isArray(rawSet.teratypes) ? rawSet.teratypes.join(' ou ') : (rawSet.teratypes || 'Padrão');

            let evsStr = '252 Atk / 4 Def / 252 Spe';
            if (rawSet.evs) {
                const parts = [];
                const statMap = { hp: 'HP', atk: 'Atk', def: 'Def', spa: 'SpA', spd: 'SpD', spe: 'Spe' };
                Object.keys(statMap).forEach(k => {
                    if (rawSet.evs[k]) parts.push(`${rawSet.evs[k]} ${statMap[k]}`);
                });
                if (parts.length > 0) evsStr = parts.join(' / ');
            }

            const moves = rawSet.moves.slice(0, 4).map(m => {
                const mName = Array.isArray(m) ? m.join(' / ') : m;
                return {
                    name: mName,
                    type: 'normal',
                    role: 'Golpe tático do meta competitivo'
                };
            });

            const tierUpper = tierKey.toUpperCase();

            sets.push({
                id: `${speciesName}-${tierKey}-${setName}`.toLowerCase().replace(/[^a-z0-9]/g, '-'),
                name: `${setName} (${tierUpper})`,
                format: `Smogon ${tierUpper}`,
                item: itemStr,
                ability: abilityStr,
                nature: natureStr,
                teraType: teraStr,
                evs: evsStr,
                moves: moves,
                why: `Configuração padrão competitiva recomendada para ${speciesName} no formato ${tierUpper}. A combinação de EVs e Natureza (${natureStr}) é calculada para maximizar velocidade e poder ofensivo ou resistência defensiva, enquanto o item (${itemStr}) consolida sua função tática em jogo.`,
                howToPlay: `1. Coloque ${speciesName} em campo em turnos de vantagem de matchup ou após a queda de um companheiro de equipe.\n2. Force a troca do adversário ou utilize a vantagem de velocidade/resistência para punir o campo inimigo.\n3. Explore o Teracristal (${teraStr}) caso necessite inverter uma fraqueza defensiva ou garantir um nocaute crucial.`,
                playableIn: `Pokémon Scarlet & Violet (Gen IX), Showdown formato ${tierUpper}.`,
                incompatibleWith: `Jogos das gerações passadas onde golpes de Gen IX, Teracristal ou o item ${itemStr} não existiam.`,
                historicalNote: `Este moveset foi otimizado para as regras vigentes do formato ${tierUpper} da 9ª geração. Mudanças de geração frequentemente alteram a distribuição de golpes e os itens permitidos.`
            });
        });
    });

    if (sets.length === 0) return null;

    return {
        tier: availableTiers[0].toUpperCase(),
        role: 'Atacante / Suporte Competitivo',
        sets: sets.slice(0, 3)
    };
}

/**
 * Gera texto formatado para importação direta no Pokémon Showdown
 */
function generateShowdownText(pokemonName, set) {
    const lines = [];
    const itemStr = set.item ? ` @ ${set.item.split(' ou ')[0]}` : '';
    lines.push(`${pokemonName}${itemStr}`);
    if (set.ability) lines.push(`Ability: ${set.ability.split(' (')[0]}`);
    if (set.teraType && set.teraType !== 'Nenhum' && !set.teraType.includes('Não se aplica') && set.teraType !== 'Padrão') {
        lines.push(`Tera Type: ${set.teraType.split(' ou ')[0]}`);
    }
    if (set.evs) lines.push(`EVs: ${set.evs}`);
    if (set.nature) lines.push(`${set.nature.split(' (')[0]} Nature`);
    
    if (set.moves && set.moves.length > 0) {
        set.moves.forEach(m => {
            lines.push(`- ${m.name.split(' / ')[0]}`);
        });
    }

    return lines.join('\n');
}
