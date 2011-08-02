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
// {{{ NX.Date.getFirstDayOfMonth Tests

module.exports = {

    // {{{ 'test getFirstDayOfMonth#pattern1'

    'test getFirstDayOfMonth#pattern1': function() {

        var dt = new Date('1/10/2007'),
        firstDay = NX.Date.getFirstDayOfMonth(dt);
        NX.Date.dayNames[firstDay].should.equal('Monday');
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
