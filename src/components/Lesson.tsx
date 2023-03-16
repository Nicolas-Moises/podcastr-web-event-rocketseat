import { CaretLeft, CheckCircle, Lock } from "phosphor-react";

import { Link, useParams } from 'react-router-dom'
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
    const { slug } = useParams<{ slug: string }>();

    const isLessonAvailable = isPast(props.availableAt);

    const availableDateFormat = format(props.availableAt, "EEEE' • 'd' de ' MMMM' • 'k'h'mm", {
        locale: ptBR,
    })

    const isActiveLession = slug === props.slug;

    return (
        <>
            {isLessonAvailable ? (
                <Link to={`/event/lesson/${props.slug}`} className="group ">
                    <span className="text-gray-300 text-sm capitalize">
                        {availableDateFormat}
                    </span>

                    <div
                        className={`rounded-lg border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors ease-linear ${isActiveLession && 'bg-green-500 relative'}`}
                    >
                        {isActiveLession && (
                            <CaretLeft className="absolute top-[50%] -translate-y-[50%] -left-[15px] md:hidden text-green-500" weight="fill" size={24} />
                        )}
                        <header className="flex items-center justify-between">
                            {isLessonAvailable ? (
                                <span className={`text-sm font-medium flex items-center gap-2 ${isActiveLession ? 'text-white' : 'text-blue-500'}`}>
                                    <CheckCircle size={20} />
                                    Conteúdo liberado
                                </span>
                            ) : (
                                <span className={`text-sm font-medium flex items-center gap-2 ${isActiveLession ? 'text-white' : 'text-orange-500'}`}>
                                    <Lock size={20} />
                                    Em breve
                                </span>
                            )}

                            <span className={`uppercase text-xs rounded px-2 py-[2px]  border  font-bold ${isActiveLession ? 'text-white border-white' : 'text-green-300 border-green-300'} `}>
                                {props.type === 'live' ? 'Ao vivo' : 'Gravado'}
                            </span>
                        </header>

                        <strong className={`font-bold mt-5 block  ${isActiveLession ? 'text-white' : 'text-gray-200'}`}>
                            {props.title}
                        </strong>
                    </div>
                </Link>
            ) : (
                <div className="group cursor-not-allowed">
                    <span className="text-gray-300 text-sm capitalize">
                        {availableDateFormat}
                    </span>

                    <div
                        className={`rounded-lg border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors ease-linear ${isActiveLession ? 'bg-green-500' : ''}`}
                    >
                        <header className="flex items-center justify-between">
                            {isLessonAvailable ? (
                                <span className={`text-sm font-medium flex items-center gap-2 ${isActiveLession ? 'text-white' : 'text-blue-500'}`}>
                                    <CheckCircle size={20} />
                                    Conteúdo liberado
                                </span>
                            ) : (
                                <span className={`text-sm font-medium flex items-center gap-2 ${isActiveLession ? 'text-white' : 'text-orange-500'}`}>
                                    <Lock size={20} />
                                    Em breve
                                </span>
                            )}

                            <span className={`uppercase text-xs rounded px-2 py-[2px]  border  font-bold ${isActiveLession ? 'text-white border-white' : 'text-green-300 border-green-300'} `}>
                                {props.type === 'live' ? 'Ao vivo' : 'Gravado'}
                            </span>
                        </header>

                        <strong className={`font-bold mt-5 block  ${isActiveLession ? 'text-white' : 'text-gray-200'}`}>
                            {props.title}
                        </strong>
                    </div>
                </div>)}
        </>

    )
}


