export const login = (req, res) => {
    console.log(req.body)
    res.json({ loginResponse: true })
}

export const register = (req, res) => {
    console.log(req.body)
    res.json({ register: true })
}