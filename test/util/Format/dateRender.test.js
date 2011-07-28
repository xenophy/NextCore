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
// {{{ NX.util.Format.dateRender Tests

module.exports = {

    // {{{ 'test dateRender#pattern1'

    'test dateRender#pattern1': function(beforeExit) {

        var f = NX.util.Format.dateRenderer('Y-m-d');
        var dt = new Date('2006-01-01');
        f(dt).should.equal('2006-01-01');

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
