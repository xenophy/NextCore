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
// {{{ NX.Date.getWeekOfYear Tests

module.exports = {

    // {{{ 'test getWeekOfYear#pattern1'

    'test getWeekOfYear#pattern1': function() {

        var dt = new Date('1/23/2007');
        NX.Date.getWeekOfYear(dt).should.equal(4);

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
