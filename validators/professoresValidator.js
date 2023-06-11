
const professoresValidator = {
    nome: {
        required: 'O campo é obrigatório',
        minLength: {
            value: 3,
            message: 'A quantidade de caracteres mínima é 3'
        },
        maxLength: {
            value: 10,
            message: 'A quantidade de caracteres máxima é 10'
        },
    },

    cpf: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 11,
            message: 'A quantidade de caracteres máxima é 11'
        },
        min: {
            value: 99999999999,
            message: 'O valor mínimo é 99999999999'
        },

        pattern: /[0-9]{3}[/.][0-9]{3}[/.][0-9]{3}[/.][0-9]{2}/
    },

    matricula: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 11,
            message: 'A quantidade de caracteres máxima é 11'
        },
        min: {
            value: 99999999999,
            message: 'O valor mínimo é 99999999999'
        }
    },

    salario: {
        required: 'O campo é obrigatório',
        pattern: /[0-9]{2}[/.][0-9]{3}/
    },

    email: {
        required: 'O campo é obrigatório',
    },

    telefone: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 11,
            message: 'A quantidade máxima de caracteres é 11'
        },

        pattern: /[0-9]{2}[0-9]{5}[/-][0-9]{4}/
    },

    cep: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 8
        },

        pattern: /[0-9]{5}[/-][0-9]{3}/
    },

    logradouro: {
        required: 'O campo é obrigatório'
    },

    complemento: {
        required: 'O campo é obrigatório'
    },

    numero: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 3,
            message: 'A quantidade máxima de caracteres é 3'
        },
        min: {
            value: 1,
            message: 'O valor mínimo é 1'
        },

        pattern: /[0-9]{3}/
    },

    bairro: {
        required: 'O campo é obrigatório',
    }
}
export default professoresValidator