var expect = require('chai').expect;
var argon2i = require('../').i;


describe('$argon2i$', function() {

  it('should hash and verify password', function(done) {
    argon2i.hash('keyboard cat', function(err, hashstr) {
      if (err) { return done(err); }
    
      expect(hashstr).to.be.a('string');
      expect(hashstr).to.startWith('$argon2i$');
      
      argon2i.verify('keyboard cat', hashstr, function(err, ok) {
        if (err) { return done(err); }
      
        expect(ok).to.be.true;
        done();
      });
    });
  }); // should hash and verify password

}); // $argon2i$
