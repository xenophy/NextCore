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
// {{{ NX.Function.bind Tests

module.exports = {

    // {{{ test bind#pattern1

    'test bind#pattern1': function() {

        var f = function(arg1, arg2, arg3) {
            return arg1 + ':' + arg2 + ':' + arg3;
        }

        f(1,2).should.equal('1:2:undefined');

        NX.Function.bind(f, this, [4,5,6], true)().should.equal('4:5:6');

    },

    // }}}
    // {{{ test bind#pattern2

    'test bind#pattern2': function() {

        var f = function(arg1, arg2, arg3) {
            return arg1 + ':' + arg2 + ':' + arg3;
        }

        f(1,2).should.equal('1:2:undefined');

        NX.Function.bind(f, this, [6], 1)(5,7).should.equal('5:6:7');

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
