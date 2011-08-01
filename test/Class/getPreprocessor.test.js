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
// {{{ NX.Class.getPreprocessor Tests

module.exports = {

    // {{{ test getPreprocessor#pattern1

    'test getPreprocessor#pattern1': function() {

        NX.Class.registerPreprocessor('foo', function() { return 'foo' });

        var foo = NX.Class.getPreprocessor('foo');
        foo.name.should.equal('foo');
        foo.always.should.equal(false);
        foo.fn().should.equal('foo');
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
