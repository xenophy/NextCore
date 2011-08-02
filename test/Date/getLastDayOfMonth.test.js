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
// {{{ NX.Date.getLastDayOfMonth Tests

module.exports = {

    // {{{ 'test getLastDayOfMonth#pattern1'

    'test getLastDayOfMonth#pattern1': function() {

        var dt = new Date('1/10/2007'),

        lastDay = NX.Date.getLastDayOfMonth(dt);

        NX.Date.dayNames[lastDay].should.equal('Wednesday');

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
