import { useContext, useState } from "react";
import { signInUser } from "../utils/api/user";
import { UserContext } from "../context/UserContext";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const userContext = useContext(UserContext);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await signInUser(email, password);
      userContext.setUser({
        name: response?.data.user.fullName,
        email: response?.data.user.email,
        id: response?.data.user._id.toString(),
        token: response?.data.token,
        isAdmin: response?.data.user.isAdmin,
      });
    } catch (error) {
      setShowError(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <button type="submit">Sign In</button>
      </form>
      {showError && <p>Invalid email or password. Please try again</p>}
    </div>
  );
};

export default SignIn;
