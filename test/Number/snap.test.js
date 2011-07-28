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
// {{{ NX.Number.snap Tests

module.exports = {

    // {{{ 'test snap#pattern1'

    'test snap#pattern1': function() {

        NX.Number.snap(5, 1, 2, 10).should.equal(5);
        NX.Number.snap(5, 2, 2, 10).should.equal(6);
        NX.Number.snap(5, 3, 2, 10).should.equal(6);
        NX.Number.snap(5, null, 2, 10).should.equal(5);
        NX.Number.snap(5, 3, 2, 10).should.equal(6);
        NX.Number.snap(2, 6, 2, 10).should.equal(2);
        NX.Number.snap(3, 6, 2, 10).should.equal(6);
        NX.Number.snap(3, -6, 2, 10).should.equal(2);
        NX.Number.snap(-3, 6, 2, 10).should.equal(2);
        NX.Number.snap(-3, -6, 2, 10).should.equal(2);
        NX.Number.snap(-6, -6, 2, 10).should.equal(2);
        NX.Number.snap(-50, 48, 10, 100).should.equal(10);
        NX.Number.snap(-50, 26, 0, 100).should.equal(0);

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
