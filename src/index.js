require("dotenv").config();

const PORT = process.env.PORT;
const express = require("express");
const userRoutes = require("./routes/user");
const carRoutes = require("./routes/car");
const brandRoutes = require("./routes/brand");
const typeRoutes = require("./routes/type");
const app = express();

app.use(express.json());

// Routes
app.use("/user", userRoutes);
app.use("/car", carRoutes);
app.use("/brand", brandRoutes);
app.use("/type", typeRoutes);

app.listen(PORT, () => {
  console.log(`Server berhasil berjalan di port ${PORT}`);
});
