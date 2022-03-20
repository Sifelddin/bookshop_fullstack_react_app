import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "ali",
      email: "ali@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "tarek",
      email: "tarek@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
};

export default data;
