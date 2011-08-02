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
// {{{ NX.String.toggle Tests

module.exports = {

    // {{{ test toggle#pattern1

    'test toggle#pattern1': function() {

        var sort = 'ASC';
        sort = NX.String.toggle(sort, 'ASC', 'DESC');
        sort.should.equal('DESC');
        sort = NX.String.toggle(sort, 'ASC', 'DESC');
        sort.should.equal('ASC');

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
