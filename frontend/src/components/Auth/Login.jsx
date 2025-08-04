import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner"; // ✅ Correct import
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const showPass = () => setShow(!show);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!email || !password) {
      toast.error("Please fill all the fields"); //Updated toast call
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: { "Content-type": "application/json" },
      };

      const { data } = await axios.post(
        "/api/user/login",
        {
          email,
          password,
        },
        config
      );
      toast.success("Login Successful", {
        // ✅ Updated toast call
        description: "Logged in successfully!",
        duration: 5000,
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/home");
    } catch (error) {
      toast.error("An error occurred", {
        //Updated toast call
        description: error.response?.data?.message || "Something went wrong!",
        duration: 5000,
      });
      setLoading(false);
    }
  };

  return (
    <div className="">
      <form onSubmit={onSubmit}>
        <h2>Email</h2>
        <Input
          value={email}
          placeholder="Enter your Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <h2>Password</h2>
        <div className="flex justify-between gap-2">
          <Input
            value={password}
            type={show ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="ghost"
            type="button"
            onClick={showPass}
            className="w-10"
          >
            {show ? "Hide" : "Show"}
          </Button>
        </div>
        <Button
          variant="outline"
          type="submit"
          className="w-full mt-2"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>
    </div>
  );
};

export default Login;
