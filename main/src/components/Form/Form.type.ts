import { FieldErrors, UseFormRegister } from 'react-hook-form';

export type MyForm = {
  name: string;
  email: string;
  text: string;
};

export type FormProps = {
  register: UseFormRegister<MyForm>;
  onsubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  errors: FieldErrors<MyForm>;
};
