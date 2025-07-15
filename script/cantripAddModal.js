document.writeln(`    
    <dialog id="amigos" class="spellDescriptionModal"> 
        <div class="spellDescription">
            <div>
                <h2 class="nameSpell">Amigos</h2> <p>encantamento 0</p>
            </div>
            <hr>
            <nav>
                <p> <img src="style/images/cast.svg" alt="" height="17px" style="margin-left: 0;"> 1 Ação <img src="style/images/area.svg" alt="" height="17px"> Você <img src="style/images/components.svg" alt="" height="17px"> S <img src="style/images/duration.svg" alt="" height="17px"> 1 minuto </p>
            </nav>
            <p>Você ganha vantagem em testes de Carisma contra uma criatura à sua escolha, por 1 minuto. Quando a magia termina, a criatura percebe que foi influenciada por mágica.</p>
            <button type="button" class="closeSpellModal" data-modal="amigos"> Fechar </button>
        </div>
    </dialog>

    <dialog id="chamaSagrada" class="spellDescriptionModal"> 
        <div class="spellDescription">
            <div>
                <h2 class="nameSpell">Chama Sagrada</h2> <p>evocação 0</p>
            </div>
            <hr>
            <nav>
                <p> <img src="style/images/cast.svg" alt="" height="17px" style="margin-left: 0;"> 1 Ação <img src="style/images/area.svg" alt="" height="17px"> 18 Metros <img src="style/images/components.svg" alt="" height="17px"> V <img src="style/images/duration.svg" alt="" height="17px"> Instantânea </p>
            </nav>
            <p>Você invoca uma chama radiante que envolve uma criatura. Faça um ataque à distância com magia; em acerto, ela sofre 1d8 de dano radiante. Ela pode tentar um teste de resistência de Destreza; em sucesso, sofre metade do dano.</p>
            <p>O dano dessa magia aumenta em 1d8 nos níveis 5º (2d8), 11º (3d8) e 17º (4d8).</p>
            <button type="button" class="closeSpellModal" data-modal="chamaSagrada"> Fechar </button>
        </div>
    </dialog>

    <dialog id="golpeVerdadeiro" class="spellDescriptionModal"> 
        <div class="spellDescription">
            <div>
                <h2 class="nameSpell">Golpe Verdadeiro</h2> <p>adivinhação 0</p>
            </div>
            <hr>
            <nav>
                <p> <img src="style/images/cast.svg" alt="" height="17px" style="margin-left: 0;"> 1 Ação <img src="style/images/area.svg" alt="" height="17px"> Toque <img src="style/images/components.svg" alt="" height="17px"> V <img src="style/images/duration.svg" alt="" height="17px"> Concentração, até 1 minuto </p>
            </nav>
            <p>Você focaliza sua mente no alvo, ganhando vantagem em seu próximo ataque contra ele se você conjurar no seu próximo turno. Se o ataque atingir, ele tem dano extra igual ao seu modificador de habilidade de conjuração (mínimo +1).</p>
            <button type="button" class="closeSpellModal" data-modal="golpeVerdadeiro"> Fechar </button>
        </div>
    </dialog>

    <dialog id="ilusaoMenor" class="spellDescriptionModal"> 
        <div class="spellDescription">
            <div>
                <h2 class="nameSpell">Ilusão Menor</h2> <p>ilusão 0</p>
            </div>
            <hr>
            <nav>
                <p> <img src="style/images/cast.svg" alt="" height="17px" style="margin-left: 0;"> 1 Ação <img src="style/images/area.svg" alt="" height="17px"> 9 Metros <img src="style/images/components.svg" alt="" height="17px"> S, M <img src="style/images/duration.svg" alt="" height="17px"> Concentração, até 1 minuto </p>
            </nav>
            <p><strong>Material:</strong> um pedaço de giz e um pequeno objeto</p>
            <p>Você cria um som ou imagem visual simples dentro do alcance que dura enquanto você mantiver a concentração.</p>
            <button type="button" class="closeSpellModal" data-modal="ilusaoMenor"> Fechar </button>
        </div>
    </dialog>

    <dialog id="jatoDeVeneno" class="spellDescriptionModal"> 
        <div class="spellDescription">
            <div>
                <h2 class="nameSpell">Jato de Veneno</h2> <p>conjuração 0</p>
            </div>
            <hr>
            <nav>
                <p> <img src="style/images/cast.svg" alt="" height="17px" style="margin-left: 0;"> 1 Ação <img src="style/images/area.svg" alt="" height="17px"> 9 Metros <img src="style/images/components.svg" alt="" height="17px"> V <img src="style/images/duration.svg" alt="" height="17px"> Instantânea </p>
            </nav>
            <p>Você expõe uma gota de veneno em uma criatura dentro do alcance. Faça um ataque à distância com magia; em acerto, ela sofre 1d12 de dano venenoso.</p>
            <button type="button" class="closeSpellModal" data-modal="jatoDeVeneno"> Fechar </button>
        </div>
    </dialog>

    <dialog id="luz" class="spellDescriptionModal"> 
        <div class="spellDescription">
            <div>
                <h2 class="nameSpell">Luz</h2> <p>evocação 0</p>
            </div>
            <hr>
            <nav>
                <p> <img src="style/images/cast.svg" alt="" height="17px" style="margin-left: 0;"> 1 Ação <img src="style/images/area.svg" alt="" height="17px"> Toque <img src="style/images/components.svg" alt="" height="17px"> V, M </p>
            </nav>
            <p><strong>Material:</strong> um pedaço de carvão</p>
            <p>Você faz um objeto brilhar, criando luz intensa em 6 metros de raio e luz fraca em mais 6 metros. Conjurar em itens que vestem ou carregam criaturas acende normalmente.</p>
            <button type="button" class="closeSpellModal" data-modal="luz"> Fechar </button>
        </div>
    </dialog>

    <dialog id="luzesDancantes" class="spellDescriptionModal"> 
        <div class="spellDescription">
            <div>
                <h2 class="nameSpell">Luzes Dançantes</h2> <p>evocação 0</p>
            </div>
            <hr>
            <nav>
                <p> <img src="style/images/cast.svg" alt="" height="17px" style="margin-left: 0;"> 1 Ação <img src="style/images/area.svg" alt="" height="17px"> 18 Metros <img src="style/images/components.svg" alt="" height="17px"> V, S <img src="style/images/duration.svg" alt="" height="17px"> Concentração, até 1 minuto </p>
            </nav>
            <p>Você cria até quatro orbes de luz flutuantes que iluminam 3 metros de raio. Em cada turno, você pode mover até 9 metros no espaço, sem provocar ataques de oportunidade.</p>
            <button type="button" class="closeSpellModal" data-modal="luzesDancantes"> Fechar </button>
        </div>
    </dialog>

    <dialog id="maoMagica" class="spellDescriptionModal"> 
        <div class="spellDescription">
            <div>
                <h2 class="nameSpell">Mão Mágica</h2> <p>conjuração 0</p>
            </div>
            <hr>
            <nav>
                <p> <img src="style/images/cast.svg" alt="" height="17px" style="margin-left: 0;"> 1 Ação <img src="style/images/area.svg" alt="" height="17px"> 18 Metros <img src="style/images/components.svg" alt="" height="17px"> V, S <img src="style/images/duration.svg" alt="" height="17px"> Concentração, até 1 minuto </p>
            </nav>
            <p>Você cria uma mão espectral flutuante que pode manipular objetos, abrir portas e entregar itens. A mão não pode atacar, ativar itens mágicos ou afetar criaturas.</p>
            <button type="button" class="closeSpellModal" data-modal="maoMagica"> Fechar </button>
        </div>
    </dialog>

    <dialog id="mensagem" class="spellDescriptionModal"> 
        <div class="spellDescription">
            <div>
                <h2 class="nameSpell">Mensagem</h2> <p>transmutação 0</p>
            </div>
            <hr>
            <nav>
                <p> <img src="style/images/cast.svg" alt="" height="17px" style="margin-left: 0;"> 1 Ação <img src="style/images/area.svg" alt="" height="17px"> 36 Metros <img src="style/images/components.svg" alt="" height="17px"> V, S, M <img src="style/images/duration.svg" alt="" height="17px"> 1 rodada </p>
            </nav>
            <p><strong>Material:</strong> lacre de cera e pedaço de fio</p>
            <p>Você sussurra uma mensagem que é entregue a uma criatura dentro do alcance, que pode responder da mesma forma.</p>
            <button type="button" class="closeSpellModal" data-modal="mensagem"> Fechar </button>
        </div>
    </dialog>

    <dialog id="prestidigitacao" class="spellDescriptionModal"> 
        <div class="spellDescription">
            <div>
                <h2 class="nameSpell">Prestidigitação</h2> <p>ilusão 0</p>
            </div>
            <hr>
            <nav>
                <p> <img src="style/images/cast.svg" alt="" height="17px" style="margin-left: 0;"> 1 Ação <img src="style/images/area.svg" alt="" height="17px"> 9 Metros <img src="style/images/components.svg" alt="" height="17px"> V <img src="style/images/duration.svg" alt="" height="17px"> Até 1 hora </p>
            </nav>
            <p>Você realiza pequenos truques mágicos, como acender velas, limpar objetos ou criar efeitos sensoriais simples.</p>
            <button type="button" class="closeSpellModal" data-modal="prestidigitacao"> Fechar </button>
        </div>
    </dialog>

    <dialog id="protecaoComLamina" class="spellDescriptionModal"> 
        <div class="spellDescription">
            <div>
                <h2 class="nameSpell">Proteção com Lâmina</h2> <p>abjuração 0</p>
            </div>
            <hr>
            <nav>
                <p> <img src="style/images/cast.svg" alt="" height="17px" style="margin-left: 0;"> 1 Ação <img src="style/images/area.svg" alt="" height="17px"> Você <img src="style/images/components.svg" alt="" height="17px"> V <img src="style/images/duration.svg" alt="" height="17px"> 1 turno </p>
            </nav>
            <p>Você ergue uma barreira mística de lâminas etéreas que envolvem você. Até o fim do seu próximo turno, toda vez que você receber dano corpo a corpo, você pode usar sua reação para sofrer metade desse dano.</p>
            <button type="button" class="closeSpellModal" data-modal="protecaoComLamina"> Fechar </button>
        </div>
    </dialog>

    <dialog id="rajadaDeFogo" class="spellDescriptionModal"> 
        <div class="spellDescription">
            <div>
                <h2 class="nameSpell">Rajada de Fogo</h2> <p>evocação 0</p>
            </div>
            <hr>
            <nav>
                <p> <img src="style/images/cast.svg" alt="" height="17px" style="margin-left: 0;"> 1 Ação <img src="style/images/area.svg" alt="" height="17px"> 36 Metros <img src="style/images/components.svg" alt="" height="17px"> V, S <img src="style/images/duration.svg" alt="" height="17px"> Instantânea </p>
            </nav>
            <p>Você arremessa um cisco de fogo em uma criatura ou objeto dentro do alcance. Faça um ataque à distância com magia contra o alvo. Se atingir, o alvo sofre 1d10 de dano de fogo. Um objeto inflamável atingido por essa magia incendeia-se se não estiver sendo vestido ou carregado.</p>
            <p>O dano dessa magia aumenta em 1d10 quando você alcança os níveis 5º (2d10), 11º (3d10) e 17º (4d10).</p>
            <button type="button" class="closeSpellModal" data-modal="rajadaDeFogo"> Fechar </button>
        </div>
    </dialog>

    <dialog id="raioDeGelo" class="spellDescriptionModal"> 
        <div class="spellDescription">
            <div>
                <h2 class="nameSpell">Raio de Gelo</h2> <p>evocação 0</p>
            </div>
            <hr>
            <nav>
                <p> <img src="style/images/cast.svg" alt="" height="17px" style="margin-left: 0;"> 1 Ação <img src="style/images/area.svg" alt="" height="17px"> 36 Metros <img src="style/images/components.svg" alt="" height="17px"> V, S <img src="style/images/duration.svg" alt="" height="17px"> Instantânea </p>
            </nav>
            <p>Você lança um raio de energia gelada contra uma criatura. Faça um ataque à distância com magia; em acerto, ela sofre 1d8 de dano de frio, e seu deslocamento diminui em 3 metros até o início do seu próximo turno.</p>
            <p>O dano dessa magia aumenta em 1d8 nos níveis 5º (2d8), 11º (3d8) e 17º (4d8).</p>
            <button type="button" class="closeSpellModal" data-modal="raioDeGelo"> Fechar </button>
        </div>
    </dialog>

    <dialog id="reparo" class="spellDescriptionModal"> 
        <div class="spellDescription">
            <div>
                <h2 class="nameSpell">Reparo</h2> <p>transmutação 0</p>
            </div>
            <hr>
            <nav>
                <p> <img src="style/images/cast.svg" alt="" height="17px" style="margin-left: 0;"> 1 Ação <img src="style/images/area.svg" alt="" height="17px"> Toque <img src="style/images/components.svg" alt="" height="17px"> V, S <img src="style/images/duration.svg" alt="" height="17px"> Instantânea </p>
            </nav>
            <p>Conserta um objeto não mágico tocado, o restaurando em até 1d8 + seu modificador de habilidade de conjuração em pontos de durabilidade.</p>
            <button type="button" class="closeSpellModal" data-modal="reparo"> Fechar </button>
        </div>
    </dialog>

    <dialog id="salpicosDeAcido" class="spellDescriptionModal"> 
        <div class="spellDescription">
            <div>
                <h2 class="nameSpell">Salpicos de Ácido</h2> <p>evocação 0</p>
            </div>
            <hr>
            <nav>
                <p> <img src="style/images/cast.svg" alt="" height="17px" style="margin-left: 0;"> 1 Ação <img src="style/images/area.svg" alt="" height="17px"> 18 Metros <img src="style/images/components.svg" alt="" height="17px"> V, S <img src="style/images/duration.svg" alt="" height="17px"> Instantânea </p>
            </nav>
            <p>Você conjura dois projéteis de ácido que atingem até duas criaturas diferentes dentro do alcance. Cada alvo faz um teste de resistência de Destreza; em falha, recebe 1d6 de dano ácido.</p>
            <p>O dano dessa magia aumenta em 1d6 quando você alcança os níveis 5º (2d6), 11º (3d6) e 17º (4d6).</p>
            <button type="button" class="closeSpellModal" data-modal="salpicosDeAcido"> Fechar </button>
        </div>
    </dialog>

    <dialog id="toqueChocante" class="spellDescriptionModal"> 
        <div class="spellDescription">
            <div>
                <h2 class="nameSpell">Toque Chocante</h2> <p>evocação 0</p>
            </div>
            <hr>
            <nav>
                <p> <img src="style/images/cast.svg" alt="" height="17px" style="margin-left: 0;"> 1 Ação <img src="style/images/area.svg" alt="" height="17px"> Toque <img src="style/images/components.svg" alt="" height="17px"> V, S <img src="style/images/duration.svg" alt="" height="17px"> Instantânea </p>
            </nav>
            <p>Você estende a mão e toca uma criatura, causando 1d8 de dano elétrico. Uma criatura metálica pode ter desvantagem no teste de resistência de Força.</p>
            <button type="button" class="closeSpellModal" data-modal="toqueChocante"> Fechar </button>
        </div>
    </dialog>

    <dialog id="toqueGelido" class="spellDescriptionModal"> 
        <div class="spellDescription">
            <div>
                <h2 class="nameSpell">Toque Gélido</h2> <p>necromancia 0</p>
            </div>
            <hr>
            <nav>
                <p> <img src="style/images/cast.svg" alt="" height="17px" style="margin-left: 0;"> 1 Ação <img src="style/images/area.svg" alt="" height="17px"> 18 Metros <img src="style/images/components.svg" alt="" height="17px"> V, S <img src="style/images/duration.svg" alt="" height="17px"> Instantânea </p>
            </nav>
            <p>Você estende a mão e invoca uma mão espectral fria que toca um alvo à distância. Faça um ataque à distância com magia contra a criatura; em acerto, ela sofre 1d8 de dano necrótico e não pode se beneficiar de cura até o início do seu próximo turno.</p>
            <p>O dano dessa magia aumenta em 1d8 nos níveis 5º (2d8), 11º (3d8) e 17º (4d8).</p>
            <button type="button" class="closeSpellModal" data-modal="toqueGelido"> Fechar </button>
        </div>
    </dialog>
`)