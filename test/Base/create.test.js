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
// {{{ NX.Base.create Tests

module.exports = {

    // {{{ test create#pattern1

    'test create#pattern1': function() {

        NX.ClassManager.create('NXTest.Base.create.p1cls', {
            foo: 'bar',
            constructor: function(config) {
                NX.apply(this, config || {});
            }
        });

        var cls = NXTest.Base.create.p1cls.create({foo: 'piyo'});
        cls.foo.should.equal('piyo');

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
