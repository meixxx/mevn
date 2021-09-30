import User from '../../models/user'
export const all = async () => {
    console.log("Pass 1")
}
export const byId = async (id) => User.findById(id)



