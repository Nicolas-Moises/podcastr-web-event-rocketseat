import logoFooter from '../assets/logo-footer.svg';

export function Footer() {
    return (
        <footer className='p-8 max-w-[1036px] mx-auto border-t border-gray-500 flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between '>
            <div className="flex gap-6 items-center">
                <img className="w-40" src={logoFooter} alt="" />
                <p className='text-sm text-gray-300'>
                    Rocketseat - Todos os direitos reservados
                </p>
            </div>
            <a href="#" className="text-sm text-gray-300 hover:text-white hover:underline transition-all ease-linear">
                Política de privacidade
            </a>
        </footer>
    )
}