import * as yup from 'yup';

const schema = yup.object().shape({
  nome: yup
    .string()
    .min(2, 'Mínimo 2 caracteres')
    .required('Nome é obrigatório'),
  email: yup
    .string()
    .email('Digite um email válido')
    .required('Email é obrigatório'),
  senha: yup
    .string()
    .min(8, 'Mínimo de 8 dígitos')
    .required('Senha é obrigatória'),
  repetirSenha: yup
    .string()
    .oneOf([yup.ref('senha'), null], 'Senhas precisam ser iguais')
    .required('Senhas precisam ser iguais'),
  termos: yup.boolean().oneOf([true], 'Termos de serviço precisam ser aceitos'),
});

export default schema;
