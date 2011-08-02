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
// {{{ NX.Array.replace Tests

module.exports = {

    // {{{ 'test replace#pattern1'

    'test replace#pattern1': function() {

        var ret = NX.Array.replace([1,2,3,4,5], 2, 2);

        ret[0].should.equal(1);
        ret[1].should.equal(2);
        ret[2].should.equal(5);

        ret = NX.Array.replace([1,2,3,4,5], 2, 0, [9, 10]);

        ret[0].should.equal(1);
        ret[1].should.equal(2);
        ret[2].should.equal(9);
        ret[3].should.equal(10);
        ret[4].should.equal(3);
        ret[5].should.equal(4);
        ret[6].should.equal(5);

        ret = NX.Array.replace([1,2,3,4,5], 8, 0, [9, 10]);

        ret[0].should.equal(1);
        ret[1].should.equal(2);
        ret[2].should.equal(3);
        ret[3].should.equal(4);
        ret[4].should.equal(5);
        ret[5].should.equal(9);
        ret[6].should.equal(10);

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
