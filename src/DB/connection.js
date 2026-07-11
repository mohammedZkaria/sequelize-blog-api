import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    logging: false,
    define:{
      paranoid:true
    }
  },
);
export const checkDBconnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
export const checkAsyncDBconnection = async () => {
  await sequelize
    .sync({ force: true, alter: false })
    .then(() => console.log("Database & tables created!"))
    .catch((error) => console.log(error));
};
