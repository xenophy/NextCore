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
// {{{ NX.util.Format.plural Tests

module.exports = {

    // {{{ 'test plural#pattern1'

    'test plural#pattern1': function(beforeExit) {

        var ret = NX.util.Format.plural(1, "Comment");
        ret.should.equal('1 Comment');

        var ret = NX.util.Format.plural(2, "Comment");
        ret.should.equal('2 Comments');

        var ret = NX.util.Format.plural(2, "Comment", "Comment[S]");
        ret.should.equal('2 Comment[S]');


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
