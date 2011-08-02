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
// {{{ NX.Array.clone Tests

module.exports = {

    // {{{ 'test clone#pattern1'

    'test clone#pattern1': function() {

        var a = [1,2,3];
        var ret = NX.Array.clone(a);

        ret.length.should.equal(3);
        ret[0].should.equal(1);
        ret[1].should.equal(2);
        ret[2].should.equal(3);
        ret.should.not.equal(a);
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
