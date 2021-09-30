import * as getUserService from '../service/user/get'
import * as putUserService from '../service/user/put'
import * as postUserService from '../service/user/post'
import * as deleteUserService from '../service/user/delete'

export const fetchUser = async (req, res) => {
    try {
        res.status(200).json((await getUserService.ById(req.params.id)))
    } catch (e) {
        res.status(500).json(e)
    }
}
export const fetchUser = async (req, res) => {
    try {
        res.status(200).json((await getUserService.ById(req.params.id)))
    } catch (e) {
        res.status(500).json(e)
    }
}

export const createUser = async (req, res) => {
    try {
        const {
            name,
            email,
            password
        } = req.body
        res.status(201).json((await postUserService.create({
            name,
            email,
            password
        })))
    } catch (e) {
        res.status(500).json(e)
    }
}
export const updateUser = async (req, res) => {
    try {
        const {
            name,
            email,
            password
        } = req.body
        res.status(200).json((await putUserService.byId(req.params.id, {
            name,
            email,
            password
        })))
    } catch (e) {
        res.status(500).json(e)
    }
}
export const deleteUser = async (req, res) => {
    try {
        res.status(200).json((await deleteUserService.byId(req.params.id)))
    } catch (e) {
        res.status(500).json(e)
    }
}
