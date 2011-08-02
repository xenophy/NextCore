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
// {{{ NX.Base.getName Tests

module.exports = {

    // {{{ test getName#pattern1

    'test getName#pattern1': function() {

        NX.define('NXTest.Base.getName.p1cls', {
        });

        NXTest.Base.getName.p1cls.getName().should.equal('NXTest.Base.getName.p1cls');
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
