  
import { model, Schema, Document } from 'mongoose'
import bcrypt from 'bcrypt'


export interface Interface extends Document {
    name: string
    username: string
    password: string
    comparePassword: (password: string) => Promise<boolean>
    encryptPassword: (password: string) => Promise<string>
}

const modelSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        username:{
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },

    },
    { versionKey: false }
)

modelSchema.pre<Interface>('save', async function (next) {
    const schema = this
    if (!schema.isModified('password')) return next()

    schema.password = await schema.encryptPassword(schema.password)
    next()
})

modelSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password)
}

modelSchema.methods.encryptPassword = async function (password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    return hash
}

export default model<Interface>('users', modelSchema)