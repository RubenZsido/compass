const LoginPage = () => {
  return (
    <div>
      <input type="text" name="username" placeholder="Username" required />
      <input type="password" name="password" placeholder="Password" required />
      <input type="submit" value="Login" />
    </div>
  );
};

export default LoginPage;
