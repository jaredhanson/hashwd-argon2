var argon2 = require('phc-argon2');

var defer = typeof setImmediate === 'function'
  ? setImmediate
  : function(fn){ process.nextTick(fn.bind.apply(fn, arguments)); };
  

exports = module.exports = function(variant) {
  
  /**
   * @classdesc Instances of the `Argon2Crypt` class are used to hash and verify
   * passwords using the Argon2 password hashing function.  The hash strings are
   * formatted in {@link https://github.com/P-H-C/phc-string-format/blob/master/phc-sf-spec.md PHC string format}
   * with {@link https://github.com/P-H-C/phc-string-format/blob/master/phc-sf-spec.md#argon2-encoding Argon2 encoding}.
   *
   * @name Argon2Crypt
   * @class
   * @hideconstructor
   */
  return {
    /**
     * Symbolic name of the hash function, either `argon2id`, `argon2d` or
     * `argon2i`.
     *
     * @name Argon2Crypt#name
     * @type {string}
     * @readonly
     */
    name: 'argon2' + variant,
    
    /**
     * Hash password.
     *
     * @name Argon2Crypt#hash
     * @function
     * @param {string} password
     * @param {object} options
     * @param {function} callback
     */
    hash: function(password, options, cb) {
      if (typeof options == 'function') {
        cb = options;
        options = undefined;
      }
      options = options || {};
  
      var salt = options.salt;
      //var iterations = options.iterations || 310000;
      //var keylen = options.keylen || 32;
      //var digest = options.digest || 'sha256';
  
      var opts = {
        //iterations: options.iterations || 310000,
        variant: variant
      };
  
      var p = argon2.hash(password, opts);
      p.then(function(str) {
        return defer(cb, null, str)
      }, function(err) {
        return defer(cb, err);
      });
    },
    
    verify: function(password, hash, cb) {
      if (typeof options == 'function') {
        cb = options;
        options = undefined;
      }
  
      var p = argon2.verify(hash, password);
      p.then(function(ok) {
        return defer(cb, null, ok);
      }, function(err) {
        return defer(cb, err);
      });
    },
    
    needsUpgrade: function(hash, options) {
  
    }
  };
};