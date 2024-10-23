// import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '@/components/ui/button'
import { ChartNoAxesColumn } from 'lucide-react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { navigationsLinks } from "@/data/header-data"


const HeaderMobileNav = () => {
    return (
        <div>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant={'ghost'} size={"icon"} >
                        {/* <Menu size={20} /> */}
                        <ChartNoAxesColumn className="rotate-90" size={24} />
                    </Button>
                </SheetTrigger>
                <SheetContent side={"left"}>
                    <SheetHeader className='py-3'>
                        <SheetTitle>
                            <div className='w-[120px]'>
                                <img src="https://sidharthhousing-app.firebaseapp.com/vendors/images/Sidharth-Logo-Final.png" alt="Sidharth-header-logo" />
                            </div>
                        </SheetTitle>
                        {/* <SheetDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </SheetDescription> */}
                    </SheetHeader>
                    <ScrollArea className="w-full h-full font-[Poppins] mt-4">
                        <div className="space-y-5">
                            {navigationsLinks.map(navLink => (
                                <div key={navLink.headerNavigateName}>
                                    {
                                        navLink.type === "Sub-Link" && (<>
                                            <h4 className="font-medium mb-2">{navLink.headerNavigateName}</h4>
                                            <div className="space-y-3">
                                                {
                                                    navLink.subLinks && navLink.subLinks.map(subNavLink => (
                                                        <p className="text-muted-foreground cursor-pointer">{subNavLink.subName}</p>
                                                    ))
                                                }
                                            </div>
                                        </>)
                                    }

                                    {
                                        navLink.type === "Link" && (
                                            <>
                                                <p className="text-muted-foreground cursor-pointer">{navLink.headerNavigateName}</p>
                                            </>
                                        )
                                    }

                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                </SheetContent>
            </Sheet>

        </div>
    )
}

export default HeaderMobileNav