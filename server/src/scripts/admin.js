const User = require("../models/user");

async function createAdminAccount() {
  try {
    const existingadmin = User.findOne({ email: "admin@test.com" });

    if (!existingadmin) {
      const newAdmin = new User({
        email: "admin@test.com",
        name: "Admin",
        password: "password",
        role: "admin",
      })

      await newAdmin.save();
      console.log("admin created successfully")
    } else {
      console.log("admin already exist");
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = createAdminAccount;
