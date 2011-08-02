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
// {{{ NX.util.Format.jpMoney Tests

module.exports = {

    // {{{ 'test jpMoney#pattern1'

    'test jpMoney#pattern1': function(beforeExit) {

        var ret = NX.util.Format.jpMoney(5000).replace("Â", "");
        ret.should.equal("¥5,000");

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
