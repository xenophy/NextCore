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
// {{{ NX.Class.inheritableStatics Tests

module.exports = {

    // {{{ test inheritableStatics#pattern1

    'test inheritableStatics#pattern1': function() {

        var test, test2;
        var f = function() {
        };
        var g = function() {
        };
        var clsDef = new NX.Class(f, {
            extend: g,
            inheritableStatics: {
                foo: 'bar'
            }
        });
        var cls = new clsDef();

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
