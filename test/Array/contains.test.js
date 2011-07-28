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
// {{{ NX.Array.contains Tests

module.exports = {

    // {{{ 'test contains#pattern1'

    'test contains#pattern1': function() {

        var o = {foo: 'bar'};
        var a = [1, o, 'hoge'];

        NX.Array.contains(a, 1).should.equal(true);
        NX.Array.contains(a, 2).should.equal(false);
        NX.Array.contains(a, o).should.equal(true);
        NX.Array.contains(a, {}).should.equal(false);
        NX.Array.contains(a, 'hoge').should.equal(true);
        NX.Array.contains(a, 'piyo').should.equal(false);
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
