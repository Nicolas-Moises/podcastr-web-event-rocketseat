import { List, X } from 'phosphor-react';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logoHeader from '../assets/logo-header.svg'

import { Lesson } from "./Lesson";

import { gql, useQuery } from '@apollo/client'

const GET_LESSONS_QUERY = gql`
    query {
        lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
          id
          slug
          title
          availableAt
          lessonType
        }
      }
`

interface GetLessonsQueryResponse {
    lessons: {
        id: string;
        title: string;
        slug: string;
        availableAt: string;
        lessonType: 'live' | 'class';
    }[]
}

export function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);

    function handleActiveMenu() {
        if (!toggleMenu) {
            setToggleMenu(true)
            setIsActive(true)
        } else {
            setToggleMenu(false)
            setIsActive(false)
        }
    }

    return (
        <header className='py-5 w-full z-50 flex items-center md:justify-center justify-between bg-gray-700 border-b border-gray-600 px-6 relative'>
            <Link to="/event">
                <img src={logoHeader} alt="" />
            </Link>

            <nav className="flex items-center gap-2 md:hidden cursor-pointer transition-all" onClick={handleActiveMenu}>
                <span className='text-sm'>
                    Aulas
                </span>
                {toggleMenu ? <X size={24} /> : <List size={24} />}
            </nav>

            {isActive && (
                <div className='absolute top-[76px] right-0 z-50 w-screen bg-gray-700 p-6 min-h-screen md:hidden menu-sidebar'>
                    <div className="flex flex-col gap-8">
                        {data?.lessons.map((lesson) => {
                            return (
                                <Lesson
                                    key={lesson.id}
                                    title={lesson.title}
                                    slug={lesson.slug}
                                    availableAt={new Date(lesson.availableAt)}
                                    type={lesson.lessonType}
                                />
                            )
                        })}
                    </div>
                </div>
            )}
        </header>
    )
}