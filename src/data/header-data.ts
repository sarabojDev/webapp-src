import taskImg from '@/assets/images/link-images/task-link-image.png'
import ticketImg from '@/assets/images/link-images/ticket-link-img.png'
import salesImg from '@/assets/images/link-images/sales-link-image.png'
import telemarketingImg from '@/assets/images/link-images/telemarketing-link-image.png'
import crmImg from '@/assets/images/link-images/crm-link-image.png'
import momImg from '@/assets/images/link-images/mom-link-image.png'





export const navigationsLinks = [
    {
        headerNavigateName: "Dashboard",
        type: "Link"
    },
    {
        headerNavigateName: "Admin",
        type: "Sub-Link",
        subLinks: [
            {
                subName: "Task",
                desc: "Tracks progress, prioritizes work, and simplifies project management.",
                imgUrl: taskImg
            },
            {
                subName: "Tickets",
                desc: "Simplifies support requests, tracks issues, and enhances customer service.",
                imgUrl: ticketImg
            },
            {
                subName: "MOM",
                desc: "Facilitates scheduling, enhances collaboration, and records meeting notes.",
                imgUrl: momImg
            },
        ]
    },

    {
        headerNavigateName: "Marketing",
        type: "Sub-Link",
        subLinks: [
            {
                subName: "Telemarketing",
                desc: "Schedules campaigns, monitors performance, and optimizes customer interactions.",
                imgUrl: telemarketingImg
            },
            {
                subName: "Sales",
                desc: "Tracks leads, manages customer relationships, and boosts sales efficiency.",
                imgUrl: salesImg
            },
            {
                subName: "CRM",
                desc: "Centralizes customer data, streamlines communication, and improves relationship management.",
                imgUrl: crmImg
            },
        ]
    },
]