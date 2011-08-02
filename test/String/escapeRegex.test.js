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
// {{{ NX.String.escapeRegex Tests

module.exports = {

    // {{{ test escapeRegex#standard

    'test escapeRegex#standard': function() {
        assert.equal('\\-', NX.String.escapeRegex('-'), 'Test with single char');
        assert.equal('\\*\\.', NX.String.escapeRegex('*.'), 'Test with multiple characters next to each other');
        assert.equal('foo', NX.String.escapeRegex('foo'), 'Test with no escapeable chars');
        assert.equal('\\{baz\\}', NX.String.escapeRegex('{baz}'), 'Test with mixed set');
        assert.equal('\\-\\.\\*\\+\\?\\^\\$\\{\\}\\(\\)\\|\\[\\]\\/\\\\', NX.String.escapeRegex('-.*+?^${}()|[]/\\'), 'Test with every character');
        NX.String.escapeRegex("<a href='test'>Test</a>").should.equal("<a href=\'test\'>Test<\\/a>");
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
