module.exports = {
    jwtSecret: process.env.JWT_SECRET || "is it secret? is it safe?",
    rounds: process.env.HASH_ROUNDS || 14,
    PORT: process.env.PORT || 5000,
};