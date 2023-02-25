var argon2 = require('./argon2');

exports = module.exports = argon2;

/**
 * `argon2.id` is an instance of {@link Argon2Crypt} that implements the
 * Argon2id variant.   Argon2id works as Argon2i for the first half of the first
 * pass over the memory and as Argon2d for the rest, thus providing both
 * side-channel attack protection and brute-force cost savings due to
 * time-memory trade-offs.
 *
 * @type {Argon2Crypt}
 */
exports.id = argon2('id');

/**
 * `argon2.d` is an instance of {@link Argon2Crypt} that implements the Argon2d
 * variant.   Argon2d uses data-dependent memory access, which makes it suitable
 * for cryptocurrencies and proof-of-work applications with no threats from
 * side-channel timing attacks.
 *
 * @type {Argon2Crypt}
 */
exports.d = argon2('d');

/**
 * `argon2.i` is an instance of {@link Argon2Crypt} that implements the Argon2i
 * variant.   Argon2i uses data-independent memory access, which is preferred
 * for password hashing and password-based key derivation.
 *
 * @type {Argon2Crypt}
 */
exports.i = argon2('i');
