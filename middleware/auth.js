const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    try {
        const token = req.header('Authorization')
        if(!token) return res.status(400).json({msg:'Xác nhận không hợp lệ'})
    } catch (err) {
        
    }
}

module.exports = auth