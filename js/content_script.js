/**
* @functionName ContentScript
*
* @functionOverview

* @param 
* @api none
*/

(function() {

    // function sendMessage(message) {
    //     window.InputEvent = window.Event || window.InputEvent;

    //     var event = new InputEvent('input', {
    //         bubbles: true
    //     });

    //     document.querySelectorAll('.p3_M1')[0].click();

    //     var textbox = document.querySelectorAll('._13NKt')[1];

    //     textbox.innerText = message;
    //     textbox.dispatchEvent(event);

    //     document.querySelector("button._4sWnG").click();
    // }

    // function groupName(name) {
    //     window.InputEvent = window.Event || window.InputEvent;

    //     var event = new InputEvent('input', {
    //         bubbles: true
    //     });

    //     var groupbox = document.querySelectorAll('._13NKt')[0];

    //     groupbox.innerText = nomeGrupo;
    //     groupbox.dispatchEvent(event);
    // }

    // var NonStopMessenger = function() {
    //         function n(n) {
    //             window.InputEvent = window.Event || window.InputEvent
    //             var t = (new Date, new InputEvent("input", { bubbles: !0 })),
    //                 e = document.querySelector("div > div.input")
    //             e.textContent = n, e.dispatchEvent(t), setTimeout(function() { document.querySelector(".icon.icon-send").click() }, 200)
    //         }
    //         var t = 0,
    //             e = 0
    //         this.send = function(o, i) {
    //             function u() { n(o), t++, t < e && setTimeout(u, 300) }
    //             t = 0, e = i, u()
    //         }, this.stop = function() { e = t }
    //     },
    //     mes = new NonStopMessenger

    var Assistant = $('<div id="web-assistant"class="panel panel-primary">' +
        '<div class="panel-heading minimize-icon">' +
        '<span id="minimize" class="panel-title">Whatsapp +</span></div>' +

        '<div id="createGroupGui" style="padding: 12px;">' + '<div class="d-flex flex-bottom mb-5" id="voltarCreateGroup"><h2>👈 Criador de Grupos</h2></div><br>' +
        '<div class="d-flex flex-bottom mb-5"><label for="groupqtd">Quantos grupos você deseja criar?</label><input type="number" id="groupqtd" value="1" Placeholder="1" class="elm bttn"></input></div>' +
        '<label for="groupqtd" class="mb-3">Qual o nome destes grupos?</label><input type="text" id="groupTitle" Placeholder="Nome do grupo" class="form-control underform mb-4 elm bttn"></input>' + '<a id="criar" class="mb-4 bttn form-control btn-outline-warning elm" style="margin-right: 8px;">Criar</a></div>' +

        '</div></div>' +
        '<div style="margin-right: 12px; font-size: 28px;font-weight: 800;text-align: right;" id="opener"><h1 style="font-size: 48px;text-shadow: black 0px 0px 20px;color: #ffffff;/* margin-right: 0px; */">+</h1></div>');

    $('body').append(Assistant);

    $('#web-assistant').hide();
    $('#opener').show(250);

    // OPENERS E CLOSERS
    $("#minimize", Assistant).click(function(e) {
        $('#web-assistant').hide(50);
        $('#opener').show(200);
    });

    $("#opener h1").click(function(e) {
        $('#web-assistant').show(200);
        $('#opener').hide(50);
    });

    // // FUNÇÕES
    // $("#abrir", Assistant).click(function(e) {
    //     document.querySelector("._24-Ff").click();
    //     document.querySelector("._24-Ff").click();
    //     document.querySelectorAll('._1YLup')[4].click();
    //     document.querySelectorAll('._1ER5I')[1].click();
    //     document.querySelectorAll('.QzWWL')[0].click();
    //     document.querySelectorAll('.tvf2evcx')[1].click();
    //     document.querySelector('._18eKe').click();
    //     document.querySelector('._18eKe').click();
    //     console.log("Grupo aberto");
    // });

    // $("#adiciona", Assistant).click(function(e) {
    //     (async() => {
    //         document.querySelector("._24-Ff").click();
    //         document.querySelector("._24-Ff").click();
    //         await sleep(200);
    //         // document.querySelectorAll('._1YLup')[4].click();

    //         // Adicionar membro
    //         document.querySelectorAll('.zoWT4')[0].click();
    //         await sleep(200);

    //         // Seleciona o coringa
    //         document.querySelectorAll('._2nY6U')[9].click();
    //         await sleep(200);

    //         // Dá pronto
    //         document.querySelectorAll('._165_h._2HL9j')[0].click()
    //         document.querySelectorAll('.p357zi0d')[1].click()
    //         await sleep(200);

    //         // // Editar Administradores
    //         // document.querySelectorAll('._1YLup')[4].click();
    //         // await sleep(200);
    //         // document.querySelectorAll('._1ER5I')[3].click();
    //         // await sleep(200);
    //         // document.querySelectorAll('._2nY6U')[9].click();
    //         // await sleep(200);
    //         // // document.querySelectorAll('.tvf2evcx')[1].click();

    //         // // Dá pronto
    //         // document.querySelectorAll('._165_h._2HL9j')[0].click()
    //         // await sleep(200);

    //         //Fecha o menu
    //         document.querySelector('._18eKe').click();
    //         await sleep(50);
    //         document.querySelector('._18eKe').click();
    //         console.log("Coringa adicionado no grupo como administrador");
    //     })()
    // });

    // $("#enviar", Assistant).click(function(e) {
    //     sendMessage("Oi");
    // });

    // $("#fechar", Assistant).click(function(e) {
    //     document.querySelector("._24-Ff").click();
    //     document.querySelector("._24-Ff").click();
    //     document.querySelectorAll('._1YLup')[4].click();
    //     document.querySelectorAll('._1ER5I')[1].click();
    //     document.querySelectorAll('.QzWWL')[1].click();
    //     document.querySelectorAll('.tvf2evcx')[1].click();
    //     document.querySelector('._18eKe').click();
    //     document.querySelector('._18eKe').click();
    //     console.log("Grupo fechado");
    // });

    // ///////////

    // $("#mudar", Assistant).click(function(e) {

    //     document.querySelector("._24-Ff").click();
    //     document.querySelector("._24-Ff").click();
    //     document.querySelectorAll('._1YLup')[4].click();

    //     //Editar dados do grupo
    //     document.querySelectorAll('._1ER5I')[0].click();
    //     document.querySelectorAll('.QzWWL')[1].click();
    //     document.querySelectorAll('.tvf2evcx')[1].click();

    //     // Enviar mensagens
    //     document.querySelectorAll('._1ER5I')[1].click();
    //     document.querySelectorAll('.QzWWL')[1].click();
    //     document.querySelectorAll('.tvf2evcx')[1].click();

    //     // Mensagens encaminhadas com frenquência
    //     document.querySelectorAll('._1ER5I')[2].click();
    //     document.querySelectorAll('.QzWWL')[1].click();
    //     document.querySelectorAll('.tvf2evcx')[1].click();

    //     //Fecha o menu
    //     document.querySelector('._18eKe').click();
    //     document.querySelector('._18eKe').click();
    //     console.log("Grupo pronto para lançamento");

    // });

    // const sleep = m => new Promise(r => setTimeout(r, m));
    // var nomeGrupo = 'unnamed';
    // var quantidade = 30;

    // $("#criar", Assistant).click(function(e) {

    //     (async() => {

    //         quantos = document.querySelectorAll('#groupqtd')[0].value;

    //         for (var i = 1; i <= quantos; i++) {

    //             nomeGrupo = '#' + i + ' ' + document.querySelectorAll('#groupTitle')[0].value;

    //             // Abre o lugar para adicionar membros
    //             document.querySelectorAll('._26lC3')[2].click()
    //             document.querySelectorAll('._2oldI')[0].click()

    //             await sleep(250)

    //             // Seleciona o primeiro de cima
    //             document.querySelectorAll('._3OvU8')[9].click()

    //             // Clica em concluido
    //             document.querySelectorAll('._165_h')[0].click()

    //             await sleep(250)

    //             // Abre os emojis
    //             // document.querySelectorAll('._27Yui')[0].click();
    //             // await sleep(100)
    //             // document.querySelectorAll('.emojik')[0].click()

    //             // Atribui nome
    //             groupName(nomeGrupo);
    //             // document.querySelectorAll('._13NKt')[0].innerText = nomeGrupo;
    //             // document.querySelectorAll('._2Pq6r')[0].classList.add("_3zbxJ");
    //             // document.querySelectorAll('._2vbn4')[0].style[0] = 'hidden';

    //             await sleep(100);

    //             // Clica para criar grupo
    //             document.querySelectorAll('._165_h')[0].click()

    //             await sleep(1000);

    //             // Grupo criado.
    //             document.querySelector("._24-Ff").click();
    //             await sleep(200);
    //             document.querySelector("._24-Ff").click();
    //             await sleep(200);
    //             document.querySelectorAll('._1YLup')[4].click();

    //             // Editar dados do grupo
    //             document.querySelectorAll('._1ER5I')[0].click();
    //             await sleep(200);
    //             document.querySelectorAll('.QzWWL')[1].click();
    //             await sleep(200);
    //             document.querySelectorAll('.tvf2evcx')[1].click();

    //             // Enviar mensagens
    //             document.querySelectorAll('._1ER5I')[1].click();
    //             await sleep(200);
    //             document.querySelectorAll('.QzWWL')[1].click();
    //             await sleep(200);
    //             document.querySelectorAll('.tvf2evcx')[1].click();

    //             // Mensagens encaminhadas com frenquência
    //             document.querySelectorAll('._1ER5I')[2].click();
    //             await sleep(200);
    //             document.querySelectorAll('.QzWWL')[1].click();
    //             await sleep(200);
    //             document.querySelectorAll('.tvf2evcx')[1].click();

    //             // Fecha o menu
    //             document.querySelector('._18eKe').click();
    //             await sleep(200);
    //             document.querySelector('._18eKe').click();
    //             await sleep(200);
    //             console.log("Grupo pronto para lançamento");

    //         }

    //     })()





    // })

    // $("#disparador", Assistant).click(function(e) {

    //     (async() => {

    //         // var tmpPeople = 'Igor, +54 9 11 6227-9816, +55 11 95417-9794, +55 11 96382-5880, +55 12 93618-0558, +55 12 99108-0478, +55 19 99699-9975, +55 21 96865-1580, +55 21 96877-4340, +55 21 97146-2759, +55 21 97409-5080, +55 21 97420-9393, +55 21 97445-1973, +55 21 97588-9447, +55 21 97690-4831, +55 21 98046-6949, +55 21 99138-5957, +55 21 99728-4852, +55 21 99875-4551, +55 22 99946-8544, +55 33 9919-5936, +55 43 9823-2726, +55 77 9939-8825, +55 81 9640-9409, +55 85 8599-5481, +55 85 9444-9523, +55 88 9367-4809, +55 91 8193-7496, Você';

    //         //lista de usuários do grupo
    //         // var peopleOnGroup = tmpPeople.split(', ')
    //         var peopleOnGroup = document.querySelectorAll('._2YPr_')[0].innerText.split(', ')
    //         var validPeople = 0;

    //         var corpoMensagem = document.querySelector('#corpoMensagem').value;
    //         var delay = document.querySelector('#delay').innerText;

    //         for (var i = 0; i < 3; i++) {
    //             if (peopleOnGroup[i][0] == '+') {
    //                 openChat(peopleOnGroup[i]);
    //                 await sleep(2000);
    //                 validPeople++;
    //                 sendMessage(corpoMensagem);
    //                 await sleep(delay * 1000);
    //             }
    //         }

    //         console.log("Tentamos enviar para: " + i + " pessoas.")
    //         console.log("Tivemos sucesso em: " + validPeople + " das tentativas.")

    //     })()

    // })


})();