import { VFC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';
import backgroundPc from '../pages/images/bg.jpg';

type Inputs = {
  name: string;
  companyName: string;
  email: string;
  contactForm: string;
};

export const Contact: VFC = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    alert(JSON.stringify(data));
  };

  // console.log(watch('name'));

  return (
    <>
      <SContainer>
        <SWrapper>
          <STitle>Contact</STitle>
          <SForm onSubmit={handleSubmit(onSubmit)}>
            <SLabel>お名前</SLabel>
            <SInput
              type='text'
              placeholder='お名前'
              {...register('name', { required: true })}
            />
            {errors.name && (
              <p style={{ color: 'red', fontWeight: 'bold', margin: '0px' }}>
                ※お名前を入力してください
              </p>
            )}

            <SLabel>会社名</SLabel>
            <SInput {...register('companyName', { required: true })} />
            {errors.companyName && (
              <p style={{ color: 'red', fontWeight: 'bold', margin: '0px' }}>
                ※会社名を入力してください
              </p>
            )}

            <SLabel>メールアドレス</SLabel>
            <SInput type='email' {...register('email', { required: true })} />
            {errors.companyName && (
              <p style={{ color: 'red', fontWeight: 'bold', margin: '0px' }}>
                ※メールアドレスを入力してください
              </p>
            )}

            <SLabel>問い合わせ内容</SLabel>
            <STextarea
              placeholder='問い合わせ内容を入力'
              {...register('contactForm', { required: true })}
            />
            {errors.companyName && (
              <p style={{ color: 'red', fontWeight: 'bold', margin: '0px' }}>
                ※問い合わせ内容を入力してください
              </p>
            )}

            <SSubmit type='submit' />
          </SForm>
        </SWrapper>
      </SContainer>
    </>
  );
};

const SContainer = styled.div`
  text-align: center;
  height: 80vh;
  min-height: 600px;
  width: 100%;
  background-image: url(${backgroundPc});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SWrapper = styled.div`
  height: 600px;
  width: 800px;
  background-color: #fff;
  margin: 10px;
`;

const STitle = styled.h2`
  font-family: 'Noto Serif', serif;
  text-align: center;
  font-size: 41px;
  letter-spacing: 0.08em;
  margin: 0 auto;
`;

const SForm = styled.form`
  min-width: 300px;
  max-width: 550px;
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const SLabel = styled.label`
  padding: 8px;
`;

const SInput = styled.input`
  margin: 4px;
`;

const STextarea = styled.textarea`
  height: 80px;
  padding: 10px;
  margin-bottom: 4px;
`;

const SSubmit = styled.input`
  height: 40px;
  margin: 15px 0 0 0;
  background: #bea76f;
  border: none;
  outline: none;
  :disabled {
    background: gray;
  }
  &:hover {
    cursor: pointer;
    background-color: #59b1eb;
    color: #fff;
  }
`;
