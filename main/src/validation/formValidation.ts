import * as yup from 'yup';

export const formSchema = yup.object().shape({
  name: yup
    .string()
    .required('field must not be empty')
    .matches(/^[A-Z][a-zA-Z]*$/, 'only latin letters, first letter capital'),
  email: yup
    .string()
    .required('field must not be empty')
    .email('email must be valid'),

  text: yup.string().required('field must not be empty'),
});
