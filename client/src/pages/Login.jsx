import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "@/features/api/authApi";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });

  const [
    registerUser,
    {
      data: registerData,
      error: registerError,
      isLoading: registerIsLoading,
      isSuccess: registerIsSuccess,
    },
  ] = useRegisterUserMutation();

  const [
    loginUser,
    {
      data: loginData,
      error: loginError,
      isLoading: loginIsLoading,
      isSuccess: loginIsSuccess,
    },
  ] = useLoginUserMutation();

  const navigate = useNavigate();

  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignupInput({ ...signupInput, [name]: value });
    } else {
      setLoginInput({ ...loginInput, [name]: value });
    }
  };

  const handleRegistration = async (type) => {
    const inputData = type === "signup" ? signupInput : loginInput;
    const action = type === "signup" ? registerUser : loginUser;
    await action(inputData);
  };

  useEffect(() => {
    if (registerIsSuccess && registerData) {
      toast.success(registerData.message || "Signup successful.");
    }
    if (registerError) {
      toast.error(registerError.data.message || "Signup Failed");
    }
    if (loginIsSuccess && loginData) {
      toast.success(loginData.message || "Login successful.");
      navigate("/");
    }
    if (loginError) {
      toast.error(loginError.data.message || "Login Failed");
    }
  }, [
    loginIsLoading,
    registerIsLoading,
    loginData,
    registerData,
    loginError,
    registerError,
  ]);

  return (
    <div className="relative flex items-center w-full justify-center min-h-screen">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/videos2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Glassmorphism Effect Login Box */}
      <div className="relative z-10 w-[420px] bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-xl border border-white/20">
        <Tabs defaultValue="login">
          <TabsList className="grid w-full grid-cols-2 bg-white/20 rounded-lg p-1">
            <TabsTrigger
              value="signup"
              className="text-white text-lg font-semibold"
            >
              Signup
            </TabsTrigger>
            <TabsTrigger
              value="login"
              className="text-white text-lg font-semibold"
            >
              Login
            </TabsTrigger>
          </TabsList>

          <TabsContent value="signup">
            <Card className="bg-transparent border-0">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  Create an Account
                </CardTitle>
                <CardDescription className="text-gray-200">
                  Join us today! It takes less than a minute.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <Label htmlFor="name" className="text-white font-semibold">
                    Full Name
                  </Label>
                  <Input
                    type="text"
                    name="name"
                    value={signupInput.name}
                    onChange={(e) => changeInputHandler(e, "signup")}
                    placeholder="Eg. John Doe"
                    required
                    className="bg-white/20 text-white placeholder-gray-300 rounded-lg p-3"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white font-semibold">
                    Email Address
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    value={signupInput.email}
                    onChange={(e) => changeInputHandler(e, "signup")}
                    placeholder="Eg. john@gmail.com"
                    required
                    className="bg-white/20 text-white placeholder-gray-300 rounded-lg p-3"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="password"
                    className="text-white font-semibold"
                  >
                    Password
                  </Label>
                  <Input
                    type="password"
                    name="password"
                    value={signupInput.password}
                    onChange={(e) => changeInputHandler(e, "signup")}
                    placeholder="Enter strong password"
                    required
                    className="bg-white/20 text-white placeholder-gray-300 rounded-lg p-3"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  disabled={registerIsLoading}
                  onClick={() => handleRegistration("signup")}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 rounded-lg"
                >
                  {registerIsLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
                      wait
                    </>
                  ) : (
                    "Signup"
                  )}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="login">
            <Card className="bg-transparent border-0">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
                  Welcome Back!
                </CardTitle>
                <CardDescription className="text-gray-200">
                  Enter your credentials to continue.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <Label htmlFor="email" className="text-white font-semibold">
                    Email Address
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    value={loginInput.email}
                    onChange={(e) => changeInputHandler(e, "login")}
                    placeholder="Eg. john@gmail.com"
                    required
                    className="bg-white/20 text-white placeholder-gray-300 rounded-lg p-3"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="password"
                    className="text-white font-semibold"
                  >
                    Password
                  </Label>
                  <Input
                    type="password"
                    name="password"
                    value={loginInput.password}
                    onChange={(e) => changeInputHandler(e, "login")}
                    placeholder="Enter your password"
                    required
                    className="bg-white/20 text-white placeholder-gray-300 rounded-lg p-3"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex gap-4">
                  {/* 🔙 Back Button */}
                  <Button
                    onClick={() =>
                      (window.location.href = "http://localhost:5173")
                    }
                    className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded-lg"
                  >
                    🔙 Back
                  </Button>

                  {/* 🔗 Forgot Password Link */}
                </div>
                <Button
                  disabled={loginIsLoading}
                  onClick={() => handleRegistration("login")}
                  className="w-full bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700 text-white font-bold py-2 rounded-lg"
                >
                  {loginIsLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
                      wait
                    </>
                  ) : (
                    "Login"
                  )}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Login;
