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
// {{{ NX.Loader.getPath Tests

module.exports = {

    // {{{ test getPath#pattern1

    'test getPath#pattern1': function() {

        NX.Loader.setConfig('paths', {
            'getPath#pattern1': '/foo/'
        });
        NX.Loader.getPath('getPath#pattern1').should.equal('/foo/');

    },

    // }}}
    // {{{ test getPath#pattern2

    'test getPath#pattern2': function() {

        NX.Loader.setConfig('paths', {
            'getPath#pattern1': '/foo/'
        });
        NX.Loader.getPath('getPath#pattern1.Web').should.equal('/foo/Web.js');

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
