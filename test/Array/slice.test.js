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
// {{{ NX.Array.slice Tests

module.exports = {

    // {{{ 'test slice#pattern1'

    'test slice#pattern1': function() {

        var array = ['a', 'b', 'c', 'd'];

        var ret = NX.Array.slice(array, 1);
        ret[0].should.equal('b');
        ret[1].should.equal('c');
        ret[2].should.equal('d');

        ret = NX.Array.slice(array, 2, 4);
        ret[0].should.equal('c');
        ret[1].should.equal('d');

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
