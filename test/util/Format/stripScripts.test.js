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
// {{{ NX.util.Format.stripScripts Tests

module.exports = {

    // {{{ 'test stripScripts#pattern1'

    'test stripScripts#pattern1': function(beforeExit) {

        var str = [
            '<html>',
            '<head>',
            '<script src="./test.js"></script>',
            '</head>',
            '</html>'
        ].join("");

        var ret = [
            '<html>',
            '<head>',
            '</head>',
            '</html>'
        ].join("");

        NX.util.Format.stripScripts(str).should.equal(ret);

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
