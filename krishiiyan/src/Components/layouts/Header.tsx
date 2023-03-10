import React from 'react'

const Header = (props: any) => {
    return (
        <header className='bg-[#F3FFF1] w-full h-[12vh] xl:h-[14vh] flex flex-row items-center rounded-2xl ml-1 shadow-[0_8px_16px_rgba(0,0,0,0.1)] 
        pr-[1vw]'>
            <div className='text-[#13490A] text-center font-roboto font-black text-lg leading-7 mt-4 flex-[6] lg:text-sm xl:text-base'>
                <h1>{props?.title}</h1>
                <h1>{props?.subtitle}</h1>
            </div>
            <div className='flex items-center justify-center font-roboto flex-[2] lg:space-x-2'>
                <div className='flex flex-[1] justify-between mt-[2%]'>
                    <img src='Images/Chat.png' alt='chat' className='w-4 h-4 lg:w-4 lg:h-4 xl:w-5 xl:h-5' />
                    <img src='Images/Notification.png' alt='notification' className='w-4 h-4 lg:w-4 lg:h-4 xl:w-5 xl:h-5' />
                    <img src='Images/settings.png' alt='settings' className='w-4 h-4 lg:w-4 lg:h-4 xl:w-5 xl:h-5' />
                </div>
                <div className='flex flex-[2] justify-around items-center border border-[#F0F0F0] rounded-lg'>
                    <img src='Images/Dropdown.png' alt='dropdown.png' className='w-3 h-3 lg:w-3 lg:h-3 xl:w-4 xl:h-4' />
                    <p className='text-[#000000] font-normal text-xs lg:text-xs xl:text-sm'>Dennis Ritche</p>
                    <img src='Images/Ritche.png' alt='Dennis Ritche' width='15%' className='lg:w-[18%]' />
                </div>
            </div>
        </header>
    )
}

export default Header