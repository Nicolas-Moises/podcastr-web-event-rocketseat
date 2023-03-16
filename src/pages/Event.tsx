import { useParams } from 'react-router-dom'
import eventHome from '../assets/event-home.png'
import { Footer } from '../components/Footer'
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Video } from "../components/Video"


export function Event() {

    const { slug } = useParams<{ slug: string }>()

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
                {slug ? <Video lessonSlug={slug} /> : (
                    <div className='flex-1 p-8 w-full bg-gray-700 '>
                        <h1 className='text-2xl font-bold mb-4'>
                            Como começar na programação em 2021 do jeito certo
                        </h1>
                        <img src={eventHome} className="flex-1 w-full mb-4" alt="" />

                        <div className='flex gap-4 items-center'>
                            <span className='text-gray-400 text-sm'>Diego e Richard</span>
                            <span className='text-gray-400 text-sm'>3 min de leitura</span>
                            <span className='text-gray-400 text-sm'>8 Jan 22</span>
                        </div>

                        <p className='text-[1.125rem] text-gray-200 mt-8 '>
                            Nesse episódio do Faladev, Diego Fernandes se reúne com João Pedro Schmitz, Bruno Lemos e Diego
                            Haz, para discutir sobre a importância da contribuição open source e quais desafios circulam
                            na comunidade.
                        </p>

                        <p className='text-[1.125rem] text-gray-200 mt-8 '>
                            A gente passa a maior parte do tempo escrevendo código. Agora chegou o momento de falar sobre isso.
                            Toda semana reunimos profissionais da tecnologia para discutir sobre tudo que circula na órbita
                            da programação. O Faladev é um podcast original Rocketseat.
                        </p>
                    </div>
                )}
                <Sidebar />
            </main>
        </div>
    )
}