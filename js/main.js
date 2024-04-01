$(document).ready(function() {
    $('input[required]').each(function() {
        var label = $('label[for="' + $(this).attr('id') + '"]');
        label.append('<span style="color: #ec5353">*</span>');
    });

    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    });
    $('#cel').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    });
    $('#tel').mask('(00) 0000-0000', {
        placeholder: '(00) 0000-0000'
    });
    $('#cep').mask('00000-000', {
        placeholder: '00000-000'
    });

    $('form').on('submit', function(e) {
        e.preventDefault();

        $('form').validate ({
            rules: {
                nome: {required: true, minlength: 10},
                cpf: {required: true, minlength: 11},
                email: {required: true,email: true},
                cel: {required: true, minlength: 15},
                tel: {required: false, minlength: 14},
                cep: {required: true, maxlength: 9},
                endereco: {required: true},
                numero: {required: true},
                endereco: {required: true},
                estado: {required: true},
                bairro: {required: false},
                cidade: {required: true},
                complemento: {required: false},
            }, messages: {
                cel: { minlength: "Por favor, insira pelo menos 11 números." },
                tel: { minlength: "Por favor, insira pelo menos 10 números." },
                nome: { minlength: "Por favor, insira seu nome completo." }
            }
        })


        alert(`Seu cadastro foi enviado`);
    })

})