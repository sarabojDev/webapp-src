import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Loader } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useForm, SubmitHandler } from "react-hook-form";

type ModalProps = {
    showModal: boolean;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

type Inputs = {
    email: string;
};

const API_URL = import.meta.env.VITE_API_URL;
const AUTH_URL = import.meta.env.VITE_API_AUTH_PATH;

const ForgotPassModal = ({ showModal, setModal }: ModalProps) => {
    const { toast } = useToast();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>();
    
    const [isLoading, setIsLoading] = useState<boolean>(false); // Loading state

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        setIsLoading(true); // Set loading state to true
        try {
            const response = await fetch(`${API_URL}${AUTH_URL}/forgot-password`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: data.email }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to send email.");
            }

            // Success toast
            toast({
                title: "Email sent successfully!",
                description: "Please check your mail and reset your password.",
            });

            // Close modal after a short delay
            setTimeout(() => {
                setModal(false);
            }, 1000);
        } catch (error: any) {
            // Error handling
            toast({
                title: "Error",
                description: error.message || "Something went wrong. Please try again.",
                variant: "destructive"
            });
            console.error("Error sending reset password email:", error);
        } finally {
            setIsLoading(false); // Reset loading state
        }
    };

    useEffect(() => {
        if (showModal) {
            reset({ email: "" });
        }
    }, [showModal, reset]);

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
                            type="submit"
                            className='space-x-2'
                            disabled={isLoading} // Disable button while loading
                        >
                            {isLoading ? (
                                <>
                                    <Loader className="animate-spin mr-2" size={14} />
                                    <span>Sending...</span>
                                </>
                            ) : (
                                <>
                                    <span>Send Email</span>
                                    <ArrowRight size={14} />
                                </>
                            )}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ForgotPassModal;
