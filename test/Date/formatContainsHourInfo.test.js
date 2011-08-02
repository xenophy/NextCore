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
// {{{ NX.Date.formatContainsHourInfo Tests

module.exports = {

    // {{{ 'test formatContainsHourInfo#pattern1'

    'test formatContainsHourInfo#pattern1': function() {

        NX.Date.formatContainsHourInfo('2006-01-01').should.equal(false);
        NX.Date.formatContainsHourInfo('Y-m-d').should.equal(false);
        NX.Date.formatContainsHourInfo('Y-m-d h:i:s').should.equal(true);

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
