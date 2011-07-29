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
// {{{ NX.uid Tests

module.exports = {

    // {{{ test uid#pattern1

    'test uid#pattern1': function() {

        var ret = [];

        for(var i=0; i<2; i++) {

            var v = NX.uid(24);

            NX.Array.contains(ret, v).should.equal(false);

            ret.push(v);

        }

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
