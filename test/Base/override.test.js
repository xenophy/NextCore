/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next Core
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('nx-core');
require('should');
assert = require('assert');

// }}}
// {{{ NX.Base.override Tests

module.exports = {

    // {{{ test override#pattern1

    'test override#pattern1': function() {

        NX.define('NXTest.Base.override.p1cls', {
            hoge: function() {
                return  'piyo';
            },
            foo: 123
        });
        NXTest.Base.override.p1cls.override({
            hoge: function() {
                return this.callOverridden() + '2';
            },
            foo: 'bar'
        });

        var cls = new NXTest.Base.override.p1cls();
        cls.hoge().should.equal('piyo2');
        cls.foo.should.equal('bar');

    }

    // }}}

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
