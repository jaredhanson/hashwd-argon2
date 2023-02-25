var expect = require('chai').expect;
var argon2id = require('..').id;


describe('$argon2id$', function() {

  it('should hash and verify password', function(done) {
    argon2id.hash('keyboard cat', function(err, hashstr) {
      if (err) { return done(err); }
    
      expect(hashstr).to.be.a('string');
      expect(hashstr).to.startWith('$argon2id$');
      
      argon2id.verify('keyboard cat', hashstr, function(err, ok) {
        if (err) { return done(err); }
      
        expect(ok).to.be.true;
        done();
      });
    });
  }); // should hash and verify password

}); // $argon2id$
