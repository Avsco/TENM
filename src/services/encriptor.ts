import bcrypt from 'bcrypt'

async function comparePassword (password: string, encrytedPassword: string): Promise<boolean>{
    return await bcrypt.compare(password, encrytedPassword)
}


async function encryptPassword (password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

export { encryptPassword, comparePassword }