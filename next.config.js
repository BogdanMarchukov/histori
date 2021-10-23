/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    MONGO_URL: "mongodb+srv://ADMIN:pXxyS8RTF31Y6Xvw@cluster0.yif0l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    JWT_ACCESS_SECRET: "History_olga",
    JWT_REFRESH_SECRET: "History_olga-REF"
  }
}
