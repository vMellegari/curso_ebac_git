$(document).ready(function() {
    $('.container form').on('submit', function(e) {
        e.preventDefault();

        const valTarefa = $('#campo-tarefa').val();
        const novaTarefa = $('ul');

        $(`<li class="no-check"> <b>${valTarefa}</b> <img src="./images/trash-icon.png" alt="Lixo Icone" id="excluir" /></li>`).appendTo(novaTarefa);
        $('#campo-tarefa').val('');
    })

    $('ul').on('click', '#excluir', function() {
        $(this).parents('li').fadeOut(500);
    })

    $('ul').on('click', 'b', function() {
        
        if (!$(this).hasClass('check')) {
            $(this).toggleClass('check');
        } else {
            $(this).toggleClass('no-check');
        }
    })
})