// import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"


import { ScrollArea } from "@/components/ui/scroll-area"
import { navigationsLinks } from "@/data/header-data"


const HeaderNavigationLinks = () => {
    return (
        <div>
            <NavigationMenu>
                <NavigationMenuList>
                    {
                        navigationsLinks.map(menubx => (
                            <NavigationMenuItem>
                                {
                                    menubx.type === "Sub-Link" && (
                                        <>
                                            <NavigationMenuTrigger className='bg-transparent hover:bg-transparent   font-[Poppins] text-sm font-normal'>{menubx.headerNavigateName}</NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <div className=' w-[400px] h-[360px]'>
                                                    <div className="p-2 w-full h-full flex flex-col overflow-hidden">
                                                        <h4 className="mb-2  font-medium text-lg px-3 py-2">{menubx.headerNavigateName}</h4>
                                                        <ScrollArea className="flex-1 h-full w-full px-3">
                                                            {menubx.subLinks && menubx.subLinks.map((tag) => (
                                                                <NavigationMenuLink href='#'  >
                                                                    <div key={tag.subName} className="p-4  rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-black flex items-center gap-4    ">
                                                                        <div className='w-[70px]'>
                                                                            <img src={tag.imgUrl} alt="" />
                                                                        </div>
                                                                        <div>
                                                                            <p className=' text-sm font-semibold font-[Poppins]'>
                                                                                {tag.subName}
                                                                            </p>
                                                                            <p className=' text-xs font-[Poppins]  '>{tag.desc}</p>
                                                                        </div>
                                                                    </div>

                                                                </NavigationMenuLink>
                                                            ))}
                                                        </ScrollArea>
                                                    </div>

                                                </div>
                                            </NavigationMenuContent>
                                        </>
                                    )
                                }

                                {
                                    menubx.type === 'Link' && (
                                        <>
                                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent font-[Poppins] text-sm font-normal cursor-pointer `}>
                                                {menubx.headerNavigateName}
                                            </NavigationMenuLink>
                                        </>
                                    )
                                }
                            </NavigationMenuItem>
                        ))
                    }
                </NavigationMenuList>

            </NavigationMenu>

        </div >
    )
}

export default HeaderNavigationLinks