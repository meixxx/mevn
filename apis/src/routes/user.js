import { Router } from 'express'
import * as userController from '../controllers/user'
const User = Router()

User.get('/', userController.fetchUsers)

User.get('/:id', userController.fetchUsers)

User.post('/', userController.createUser)

User.put('/:id', userController.updateUser)

User.delete('/', userController.deleteUser)

export default User