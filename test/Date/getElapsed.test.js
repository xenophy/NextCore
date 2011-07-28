/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next Core
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('NX.Core');
require('should');
assert = require('assert');

// }}}
// {{{ NX.Date.getElapsed Tests

module.exports = {

    // {{{ 'test getElapsed#pattern1'

    'test getElapsed#pattern1': function() {

        var dt = new Date('2011-01-15');
        var dt2 = new Date('2011-01-17');

        NX.Date.getElapsed(dt, dt2).should.equal(172800000);

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
