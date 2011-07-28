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
// {{{ NX.Date.getDayOfYear Tests

module.exports = {

    // {{{ 'test getDayOfYear#pattern1'

    'test getDayOfYear#pattern1': function() {

        var dt = new Date('2011-01-15');
        NX.Date.getDayOfYear(dt).should.equal(14);

        var dt = new Date('2011-11-11');
        NX.Date.getDayOfYear(dt).should.equal(314);

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
