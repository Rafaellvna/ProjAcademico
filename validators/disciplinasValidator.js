
const disciplinasValidator = {
    nome: {
        required: 'O campo é obrigatório',
        minLength: {
            value: 3,
            message: 'A quantidade de caracteres mínima é 3'
        },
        maxLength: {
            value: 12,
            message: 'A quantidade de caracteres máxima é 12'
        },

        pattern: /[A-Z a-z]{12}/
    },

    cursos: {
        required: 'O campo é obrigatório',
        pattern: /[A-Z a-z]{12}/
    }
}
export default disciplinasValidator