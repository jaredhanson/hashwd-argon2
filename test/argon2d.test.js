var expect = require('chai').expect;
var argon2d = require('../').d;


describe('$argon2d$', function() {

  it('should hash and verify password', function(done) {
    argon2d.hash('keyboard cat', function(err, hashstr) {
      if (err) { return done(err); }
    
      expect(hashstr).to.be.a('string');
      expect(hashstr).to.startWith('$argon2d$');
      
      argon2d.verify('keyboard cat', hashstr, function(err, ok) {
        if (err) { return done(err); }
      
        expect(ok).to.be.true;
        done();
      });
    });
  }); // should hash and verify password

}); // $argon2d$
