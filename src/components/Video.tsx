import { Player, DefaultUi, Youtube } from "@vime/react";
import { Footer } from "./Footer";

import { CaretRight, DiscordLogo, FileArrowDown, Image, Lightning, Play } from "phosphor-react";

import '@vime/core/themes/default.css'
import { Loading } from "./Loading";
import { useGetLessonBySlugQuery } from "../graphql/generated";

interface VideoProps {
    lessonSlug: string;
}

export function Video(props: VideoProps) {

    const { data, loading } = useGetLessonBySlugQuery({
        variables: {
            slug: props.lessonSlug,
        }
    })

    if (!data || !data.lesson) {
        return (
            <div className="flex-1">
                <Loading />
            </div>
        )
    }

    return (
        <div className="flex-1 ">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video z-0">

                    <Player>
                        <Youtube videoId={data.lesson.videoId} />
                        <DefaultUi />
                    </Player>
                </div>
            </div>

            <div className="p-8 max-w-[1100px] mx-auto">
                <div className="flex flex-col lg:flex-row items-start gap-16">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold text-white">{data.lesson.title}</h1>

                        <p className="mt-4 text-gray-200 leading-relaxed">
                            {data.lesson.description}
                        </p>

                        {data.lesson.teacher && (
                            <div className="flex items-center gap-4 mt-6">
                                <img
                                    src={data.lesson.teacher.avatarURL}
                                    alt=""
                                    className="h-16 w-16 rounded-full border-2 border-blue-500"
                                />

                                <div className="leading-relaxed">
                                    <strong className="font-bold text-2xl block">
                                        {data.lesson.teacher.name}
                                    </strong>

                                    <span className="text-gray-200 text-sm block">
                                        {data.lesson.teacher.bio}
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col gap-4 w-full lg:w-auto">
                        <a href="#" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase
                            gap-2 justify-center hover:bg-emerald-500 transition-colors ease-linear text-white">
                            <DiscordLogo size={24} />
                            Comunidade do discord
                        </a>
                        <a href="#" className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded 
                        font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors 
                        ease-linear">
                            <Lightning size={24} />
                            Canal do youtube
                        </a>
                    </div>
                </div>

                <div className="gap-8 mt-20 grid grid-cols-1 lg:grid-cols-2">
                    <a href="#" className="bg-gray-700 rounded-lg overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 
                    transition-colors ease-linear">
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <FileArrowDown size={40} />
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">
                                Material complementar
                            </strong>
                            <p className="text-sm text-gray-200 mt-2">
                                Acesse o material complementar para acelerar o seu desenvolvimento
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24} />
                        </div>
                    </a>

                    <a href="#" className="bg-gray-700 rounded-lg overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 
                    transition-colors ease-linear">
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <Image size={40} />
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">
                                Wallpapers exclusivos
                            </strong>
                            <p className="text-sm text-gray-200 mt-2">
                                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24} />
                        </div>
                    </a>
                </div>
            </div>

            <Footer />
        </div>
    )
}