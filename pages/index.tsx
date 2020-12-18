import React, { useState, useEffect, useRef, useCallback} from 'react'
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import Head from 'next/head'

import Header from '../components/Header';
import Input from '../components/Input';
import ReposNotRegistered from '../components/ReposNotRegistered';
import Box from '../components/Box';

import api from '../services/api';

import {Title, FormCustom} from '../styles/pages/Home'

interface IUser {
  id: string;
  login: string;
  name: string;
  bio: string;
  avatar_url: string;
}

const Home = () => {
  const formRef  = useRef<FormHandles>(null);
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const storagedUsers = localStorage.getItem('@GithubExplorer:users');

    if (storagedUsers) {
      setUsers(JSON.parse(storagedUsers));
    }
  }, [setUsers])

  const handleSearchUser = useCallback(async (data) => {
    try {
       formRef.current?.setErrors({});
 
       const schema = Yup.object().shape({
         nameRepo: Yup.string().required(),
       });
 
       await schema.validate(data, {
         abortEarly: false,
       });
 
       const responseApi = await api.get<IUser>(`users/${data.nameRepo}`);
 
       const {id, login, name, bio, avatar_url} = responseApi.data;
 
       const user = { id, login, name, bio, avatar_url};
 
       setUsers([...users, user])
 
       localStorage.setItem('@GithubExplorer:users', JSON.stringify([...users, user]))
       
       formRef.current.setFieldValue('nameRepo', '');
    } catch (err) {
      const validationErrors = {};
 
       if (err instanceof Yup.ValidationError) {
         err.inner.forEach(error => {
           validationErrors[error.path] = error.message;
         });
 
         formRef.current.setErrors(validationErrors);
       }
    }
   }, [users])

  return (
    <>
    <Head>
      <script data-ad-client="ca-pub-7020394555307984" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    </Head>
      <Header />

      <main>
        <Title>Explore repositórios no Github</Title>

        <FormCustom ref={formRef} onSubmit={handleSearchUser}>
            <Input 
            name="nameRepo"
            placeholder="Digite aqui" 
            />
            <input type="submit"/>
        </FormCustom>

        {users.length === 0 && (
          <ReposNotRegistered />
        )}
        
        {users.length > 0 && (
          users.map(user => (
            <Box key={user.id} user={user}/>
          ))
        )}
      </main>
    </>
  )
}

export default Home;
