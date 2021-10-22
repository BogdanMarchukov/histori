import mongoose from 'mongoose'

const connection = {}

async function dbConnect() {
    if (connection.isConnected) {
        return false
    }
    const db = await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    connection.isConnected = db.connections[0].readyState
    console.log(connection.isConnected, 'ok')
}

export default dbConnect