 
import HeaderNavigationLinks from './HeaderNavigationLinks'
import HeaderProfileComp from './HeaderProfileComp'
import { ModeToggle } from '@/components/mode-toggle'
import HeaderNotificaion from './HeaderNotificaion'
import HeaderMobileNav from './HeaderMobileNav'
 

const HeaderCompMain = () => {
    return (
        <header className='sticky top-0 z-50 w-full  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2'>
            <div className='w-[95%] lg:w-[90%] mx-auto flex items-center justify-between'>
                {/* LEFT SIDE HEADER COMPONENTS */}
                <div className='flex items-center gap-x-4'>
                    <div className='block lg:hidden'>
                        <HeaderMobileNav/>
                    </div>
                    <div className='w-[120px] hidden lg:block'>
                        <img src="https://sidharthhousing-app.firebaseapp.com/vendors/images/Sidharth-Logo-Final.png" alt="Sidharth-header-logo" />
                    </div>
                    <div className='hidden lg:block'>
                        <HeaderNavigationLinks />
                    </div>
                </div>
                {/* RIGHT SIDE HEADER COMPONENTS */}
                <div className='flex items-center gap-x-4'>
                    {/* NOTIFICATION */}
                    <div>
                        <HeaderNotificaion />
                    </div>
                 
                     {/* THEME */}
                    <div>
                        <ModeToggle />
                    </div>
                   
                      {/* PROFILE */}
                    <div>
                        <HeaderProfileComp />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderCompMain