// import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { CircleUser, LogOut, Settings } from "lucide-react"



const HeaderProfileComp = () => {
    return (
        <div>
            <DropdownMenu>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger >
                            <DropdownMenuTrigger asChild>
                                <Avatar className='cursor-pointer'>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    <AvatarFallback className="font-[Poppins]">CN</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p className="font-[Poppins]">Profile</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <DropdownMenuContent className="font-[Poppins]">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>

                        <CircleUser size={18} className="mr-2" />
                        Profile</DropdownMenuItem>
                    {/* <DropdownMenuItem>Billing</DropdownMenuItem> */}
                    <DropdownMenuItem>
                        <Settings size={18} className="mr-2" />
                        Settings</DropdownMenuItem>
                    <DropdownMenuItem>
                        <LogOut size={18} className="mr-2" />
                        Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default HeaderProfileComp