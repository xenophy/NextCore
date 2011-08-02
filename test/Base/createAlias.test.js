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
// {{{ NX.Base.createAlias Tests

module.exports = {

    // {{{ test createAlias#pattern1

    'test createAlias#pattern1': function() {

        NX.define('NXTest.Base.createAlias.p1cls', {
            method1: function() {
                return 'method1';
            },
            method2: function() {
                return 'method2';
            }
        });

        var test = new NXTest.Base.createAlias.p1cls();

        NXTest.Base.createAlias.p1cls.createAlias({
            method3: 'method1',
            method4: 'method2'
        });

        test.method3().should.equal('method1');

        NXTest.Base.createAlias.p1cls.createAlias('method5', 'method3');

        test.method5().should.equal('method1');

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
