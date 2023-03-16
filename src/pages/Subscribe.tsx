import { FormEvent, useState } from 'react';
import { gql, useMutation } from '@apollo/client';

import { useNavigate } from 'react-router-dom';
import coldMockup from '../assets/cold-mockup.png';
import reactIcon from '../assets/background-react.svg';
import logoHeader from '../assets/logo-header.svg';
import { Loading } from '../components/Loading';

const CREATE_SUBSCRIBER_MUTATION = gql`
    mutation CreateSubscriber ($name: String!, $email: String!) {
        createSubscriber(data: {name: $name, email: $email}) {
            id
        }
    }
  
`;

export function Subscribe() {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [createSubscriber, { loading }] = useMutation(CREATE_SUBSCRIBER_MUTATION)

    async function handleSubscribe(e: FormEvent) {
        e.preventDefault();

        try {
            await createSubscriber({
                variables: {
                    name,
                    email
                }
            })

            navigate('/event')
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center relative p-6">
            <img src={reactIcon} className='absolute -z-10 top-0 left-[50%] -translate-x-[50%]' alt="" />
            <div className="w-full max-w-[1100px] flex flex-col md:flex-row gap-20 md:gap-0  items-center justify-between mt-20 mx-auto">
                <div className="max-w-[640px] flex flex-col items-center md:items-start">
                    <img src={logoHeader} alt="" className='w-60 ' />
                    <h1 className="mt-8 text-[2.5rem] text-white leading-tight text-center md:text-left">
                        Ouça agora mesmo
                        <strong className='text-blue-500'>
                            {' '} nosso Podcast
                        </strong>
                        ! Conheça tudo sobre o
                        <strong className='text-blue-500'>
                            {' '}React
                        </strong>
                    </h1>

                    <p className="mt-4 text-gray-200 leading-relaxed">
                        Separamos 5 episodios maravilhosos para te ajudar a dominar o conceito de uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>

                <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                    <strong className='text-2xl mb-6 block'>
                        Acessar a plataforma
                    </strong>

                    <form className='w-full flex flex-col gap-2' onSubmit={handleSubscribe}>
                        <input
                            type="text"
                            placeholder="Seu nome completo"
                            className="bg-gray-900 rounded-lg px-5 h-14"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                        <input
                            type="email"
                            placeholder="Digite seu e-mail"
                            className="bg-gray-900 rounded-lg px-5 h-14"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <button
                            type='submit'
                            className='mt-4 uppercase bg-green-500 rounded-lg py-3 px-4 h-14 hover:bg-green-700 transition-colors ease-linear font-bold text-sm disabled:opacity-[0.7] disabled:cursor-not-allowed flex gap-2 items-center justify-center'
                            disabled={loading}
                        >
                            {loading && <Loading />}
                            Acessar agora
                        </button>
                    </form>
                </div>
            </div>
            <img src={coldMockup} className='mt-5' alt="" />
        </div>
    )
}