// import React from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"


import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { Button } from '@/components/ui/button';
import { Bell, BellDot, CheckCheck } from 'lucide-react';

import { ScrollArea } from '@/components/ui/scroll-area';
 

const HeaderNotificaion = () => {
    return (
        <div>
            <Popover>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <PopoverTrigger>
                                <div className="relative inline-flex font-[Poppins]">
                                    <Button size={'icon'} variant={"ghost"}>
                                        <Bell size={19} />
                                    </Button>
                                    <span className="absolute top-2 right-2 grid min-h-[22px] min-w-[22px] translate-x-2/4 -translate-y-2/4 place-items-center rounded-full bg-red-600 py-1 px-1 text-[10px] text-white">
                                        50
                                    </span>
                                </div>
                            </PopoverTrigger>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p className="font-[Poppins]">Notification</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>


                <PopoverContent className='p-0 font-[Poppins] overflow-hidden'>
                    <div className='h-[500px] lg:h-[400px]  flex flex-col overflow-hidden '>
                        <div className='px-3 py-2 z-40 bg-background h-fit'>
                            <p className='text-sm'>
                                <span className='mr-1'>
                                    Notification
                                </span>
                                {/* <span>
                                    <Badge variant="destructive">2</Badge>
                                </span> */}
                            </p>
                        </div>
                        {/* <Separator /> */}
                        <div className='flex-1 w-full h-full overflow-hidden'>
                            <ScrollArea className='w-full h-full'>
                                {
                                    "12345678".split("").map(chat => (
                                        <div key={chat} className='p-3 hover:bg-gray-50 cursor-pointer dark:hover:bg-black'>
                                            {/* <div className='px-3 py-2'>
                                                <p className='text-sm font-semibold '>{chat} Saraboj</p>
                                                <p className='text-xs'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem molestiae nemo similique dignissimos assumenda! Iste ducimus, laudantium tenetur adipisci magnam aperiam. Numquam laudantium architecto ut! Est assumenda molestiae neque placeat.</p>
                                                <p className='text-xs font-light' >{new Date().toDateString()}</p>
                                            </div> */}

                                            <div>
                                                <h3 className="flex gap-x-1.5 items-center font-semibold text-sm text-gray-800 dark:text-white">
                                                    <span>
                                                        <BellDot size={15} />
                                                    </span>
                                                    SALES {" - "}
                                                    <span className=' text-[10px] font-normal'>{new Date().toDateString()}</span>
                                                </h3>
                                                <p className="mt-1 text-xs text-gray-600 dark:text-neutral-400">
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, nostrum illo. Harum, pariatur laborum iusto vel asperiores esse quas omnis?
                                                </p>
                                                <button
                                                    type="button"
                                                    className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                                >
                                                    <img
                                                        className="shrink-0 size-4 rounded-full"
                                                        src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                                                        alt="Avatar"
                                                    />
                                                    Saraboj M
                                                </button>
                                            </div>


                                        </div>
                                    ))
                                }
                            </ScrollArea>


                        </div>
                        <div className='px-2 py-1 z-40 bg-background h-fit'>
                            <Button variant={'link'} size={'sm'}>
                                <span>
                                    <CheckCheck size={15} className='mr-2' />
                                </span>
                                Make all as read
                            </Button>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    )
}




export default HeaderNotificaion