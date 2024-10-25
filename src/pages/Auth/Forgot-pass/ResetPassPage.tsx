import { useState, ChangeEvent, FormEvent } from "react";
import {   CircleArrowLeft, Eye, EyeOff, Loader } from "lucide-react";
import LogoImage from '../../../assets/images/logo2.png';
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

interface FormData {
  newPassword: string;
  confirmPassword: string;
}

interface Errors {
  newPassword: string;
  confirmPassword: string;
}

const API_URL = import.meta.env.VITE_API_URL;
const AUTH_URL = import.meta.env.VITE_API_AUTH_PATH;

const PasswordResetForm: React.FC = () => {
  const navigate = useNavigate()
  const { token } = useParams()
  const [formData, setFormData] = useState<FormData>({
    newPassword: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState<Errors>({
    newPassword: "",
    confirmPassword: ""
  });
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validatePasswords = (): boolean => {
    let isValid = true;
    const newErrors: Errors = {
      newPassword: "",
      confirmPassword: ""
    };

    if (formData.newPassword.length < 8) {
      newErrors.newPassword = "Password must be at least 8 characters long";
      isValid = false;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validatePasswords()) return;

    setIsLoading(true);
    setErrorMessage(null); // Reset error message

    try {
      const fetchResponse = await fetch(`${API_URL}${AUTH_URL}/reset-password`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token,
          newPassword: formData.newPassword
        })
      });

      if (!fetchResponse.ok) {
        const errorData = await fetchResponse.json();
        throw new Error(errorData.message || "Password reset failed.");
      }

      toast(
        {
          "title": "Reset Password Successfully",
          "description": "Your password has been reset. You can now log in with your new password."
        }

      )

      navigate("/")
    } catch (error) {
      setErrorMessage(error.message);
      console.error("Error during password reset:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Clear errors when user starts typing
    if (errors[name as keyof Errors]) {
      setErrors((prev) => ({
        ...prev,
        [name as keyof Errors]: ""
      }));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-purple-50 p-4 font-[Poppins]">
      <div className="w-full max-w-md space-y-4">
        <div className='w-[120px] mx-auto'>
          <img src={LogoImage} alt="Loading-logo-image" />
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Reset Password
        </h2>
        {errorMessage && (
          <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="newPassword"
              className="block text-sm font-medium text-gray-700"
            >
              New Password
            </label>
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                id="newPassword"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${errors.newPassword ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200`}
                aria-invalid={errors.newPassword ? "true" : "false"}
                aria-describedby="newPassword-error"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                aria-label={showNewPassword ? "Hide password" : "Show password"}
              >
                {showNewPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
            {errors.newPassword && (
              <p
                id="newPassword-error"
                className="text-red-500 text-sm mt-1 animate-fade-in"
                role="alert"
              >
                {errors.newPassword}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${errors.confirmPassword ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200`}
                aria-invalid={errors.confirmPassword ? "true" : "false"}
                aria-describedby="confirmPassword-error"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
              >
                {showConfirmPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p
                id="confirmPassword-error"
                className="text-red-500 text-sm mt-1 animate-fade-in"
                role="alert"
              >
                {errors.confirmPassword}
              </p>
            )}
          </div>



          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transform transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <Loader className="animate-spin mr-2" />
                Processing...
              </span>
            ) : (
              "Reset Password"
            )}
          </button>
        </form>

        <div className="mt-5">
        <Link to={"/"}>
          <Button className="w-full" variant={'link'}>
            <CircleArrowLeft className="mr-2 mt-1" />
            Home page
          </Button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetForm;
