/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    MONGO_URL: "mongodb+srv://ADMIN:pXxyS8RTF31Y6Xvw@cluster0.yif0l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    JWT_ACCESS_SECRET: "History_olga",
    JWT_REFRESH_SECRET: "History_olga-REF",
    SMTP_HOST: "smtp.gmail.com",
    SMTP_PORT: 587,
    SMTP_USER: "historiroot@gmail.com",
    SMTP_PASSWORD: "rootroot",
    API_URL: "http://localhost:3000"

  }
}
