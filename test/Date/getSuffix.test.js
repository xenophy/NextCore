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
// {{{ NX.Date.getSuffix Tests

module.exports = {

    // {{{ 'test getSuffix#pattern1'

    'test getSuffix#pattern1': function() {

        var dt = new Date('1/10/2007');
        NX.Date.getSuffix(dt).should.equal('th');

        var dt = new Date('1/31/2007');
        NX.Date.getSuffix(dt).should.equal('st');

        var dt = new Date('1/22/2007');
        NX.Date.getSuffix(dt).should.equal('nd');

        var dt = new Date('1/23/2007');
        NX.Date.getSuffix(dt).should.equal('rd');

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
