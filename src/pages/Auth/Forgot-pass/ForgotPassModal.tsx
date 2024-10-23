import React, { useEffect } from 'react'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight } from 'lucide-react'
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/hooks/use-toast"
import { useForm, SubmitHandler } from "react-hook-form"

type ModalProps = {
    showModal: boolean;
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}
type Inputs = {
    email: string
}

const ForgotPassModal = ({ showModal, setModal }: ModalProps) => {
    const { toast } = useToast();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
        toast({
            title: "Email send successfully!",
            description: "Please check your mail and reset your password",
            action: (
                <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            ),
        })
        setTimeout(() => {
            setModal(false)
        }, 1000);
    }

    useEffect(() => {
        if (showModal) {
            reset({ email: "" })
        }
    }, [showModal, reset])

    return (
        <div>
            <Dialog open={showModal} onOpenChange={setModal}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Forgot Password</DialogTitle>
                        <DialogDescription>
                            Please provide your registered email address, and we will send you a password reset email.
                        </DialogDescription>
                    </DialogHeader>
                    <div>
                        <div className='space-y-3'>
                            <div>
                                <Label htmlFor='forgot-email-address'>
                                    Email address
                                </Label>
                            </div>
                            <div>
                                <Input
                                    {...register("email", {
                                        required: "Email is required.",
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                            message: "Please enter a valid email address."
                                        }
                                    })}
                                    placeholder='Email address...'
                                    name='email'
                                    id='forgot-email-address'
                                    className='shadow-none'
                                    type='email'
                                />
                                {errors.email && <p className="text-red-600 text-sm italic mt-2">{errors.email.message}</p>}
                            </div>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button
                            onClick={handleSubmit(onSubmit)}
                            type="submit" className='space-x-2'>
                            <span>
                                Send Email
                            </span>
                            <span>
                                <ArrowRight size={14} />
                            </span>
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default ForgotPassModal