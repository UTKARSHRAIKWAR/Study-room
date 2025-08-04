import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { toast } from "sonner";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const showPass = () => setShow(!show);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!name || !email || !password || !confirmPassword) {
      toast.error("Please fill all the fields"); //Updated toast call
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match"); //Updated toast call
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/user",
        {
          name,
          email,
          password,
        },
        config
      );
      toast.success("Registration Successful", {
        //Updated toast call
        description: "Your account has been created successfully!",
        duration: 5000,
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/home");
    } catch (error) {
      toast.error("An error occurred", {
        //
        description: error.response?.data?.message || "Something went wrong!",
        duration: 5000,
      });
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2>Name</h2>
        <Input
          value={name}
          placeholder="Enter your Name"
          onChange={(e) => setName(e.target.value)}
        />

        <h2>Email</h2>
        <Input
          value={email}
          placeholder="Enter your Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <h2>Password</h2>
        <Input
          value={password}
          type={show ? "text" : "password"}
          placeholder="Enter your Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <h2>Confirm password</h2>
        <div className="flex justify-between gap-2">
          <Input
            value={confirmPassword}
            type={show ? "text" : "password"}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
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
          variant="destructive"
          type="submit"
          className="w-full mt-2"
          disabled={loading}
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
