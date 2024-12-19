const handleError = (res, msg, status) => {
    res.status(status).json({ msg: msg })
}

module.exports = handleError
