const mongoose = require("mongoose");
const express = require("express");
const helmet = require("helmet");
const compression = require("compression");

const app = express();
app.use(helmet());
app.use(compression());

const clinics = require("./routes/clinics");
const patients = require("./routes/patients");
const appointmenttimes = require("./routes/appointmenttimes");
const auth = require("./routes/auth");
const profileRoutes = require("./routes/profile-routes");
const { use } = require("./routes/clinics");
const passportSetup = require("./config/passport-setup");
const cookieSession = require("cookie-session");
const keys = require("./config/keys");
const passport = require("passport");
const config = require("config");

if (!config.get("jwtPrivateKey")) {
  console.error("FATAL ERROR : jwtPrivateKey is not defined");
  process.exit(1);
}

mongoose
  .connect(process.env.docbook_db || "mongodb://localhost/docbook", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch((err) => console.error("Could not connect to MongoDB.. ", err));

app.use(express.json());
app.use("/api/clinics", clinics);
app.use("/api/appointmenttimes", appointmenttimes);
app.use("/api/patients", patients);

app.use(
  cookieSession({
    //day in milli second
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey],
  })
);

//initialize
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", auth);
app.use("/profile", profileRoutes);

//PORT

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on Port ${port}....`));
