'use client';

import { useRouter } from 'next/navigation';
import { css } from '../../../styled-system/css';
import Form from '@/components/Form/Form';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from '@/validation/formValidation';
import { useForm } from 'react-hook-form';
import { MyForm } from '@/components/Form/Form.type';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/firebase/firebase';

const form_wrapper = css({
  padding: '40px 20px',
  textAlign: 'center',
});

function Feedback() {
  const router = useRouter();
  const [responseMessage, setResponseMessage] = useState('');
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: 'onChange', resolver: yupResolver(formSchema) });

  const submit = async (data: MyForm) => {
    const isValid = await formSchema.isValid(data);

    if (isValid) {
      const responseMessage = `Thank you for your interest, ${data.name},`;
      console.log(responseMessage);

      try {
        const docRef = await addDoc(collection(db, 'submissions'), data);
        console.log('Document written with ID: ', docRef.id);
        setResponseMessage(
          `Thank you for your interest, ${data.name}. Your message has been received!`
        );
        router.push('/feedback');
      } catch (error) {
        console.error('Error saving data to Firebase:', error);
        setResponseMessage(
          'There was an error submitting your message. Please try again.'
        );
      }
    }
  };

  return responseMessage ? (
    <p
      className={css({
        textAlign: 'center',
        margin: '30px',
        fontWeight: '500',
        fontSize: '1.2rem',
      })}
    >
      {responseMessage}
    </p>
  ) : (
    <div className={form_wrapper}>
      <h2
        className={css({
          fontSize: '1.3rem',
          fontWeight: '500',
        })}
      >
        We are waiting for your impressions
      </h2>
      <div
        className={css({
          maxWidth: '300px',
          margin: 'auto',
          marginTop: '20px',
        })}
      >
        <Form
          register={register}
          onsubmit={handleSubmit(submit)}
          errors={errors}
        />
      </div>
    </div>
  );
}

export default Feedback;
