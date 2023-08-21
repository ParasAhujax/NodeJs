const authorize = ((req, res, next) => {
    const { user } = req.query;
    if (user === 'paras') {
        req.user = { name: 'paras', id: 16 };
        next();
    } else {
        res.status(401).send("unauthorized");
    }
})

module.exports = authorize;