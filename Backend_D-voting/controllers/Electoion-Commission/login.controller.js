const login = async (req, res) => {
  // const user = process.env.LOGIN_USERNAME;
  // const pass = process.env.LOGIN_PASSWORD;
  const user = "admin";
  const pass = "pass123";

  try {
    const { username, password } = req.body;

    console.log(`username: ${username}, Password: ${password}`)
    if (user !== username || pass !== password) {
      return res.status(401).json({
        success: false,
        message: "Invalid username or password",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Login successful",
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Invalid request",
    });
  }
};

export { login };
