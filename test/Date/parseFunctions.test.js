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
// {{{ NX.Date.parseFunctions Tests

module.exports = {

    // {{{ 'test parseFunctions#pattern1'

    'test parseFunctions#pattern1': function() {

        var pf = NX.Date.parseFunctions['MS'];

        var dt = pf('\/Date(1238606590509+0800)\/');

        NX.Date.format(dt, 'Y-m-d h:i:s').should.equal('2009-04-02 02:23:10');

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
