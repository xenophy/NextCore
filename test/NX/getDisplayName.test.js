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
// {{{ NX.getDisplayName Tests

module.exports = {

    // {{{ test getDisplayName#pattern1

    'test getDisplayName#pattern1': function() {

        NX.define('cls_NX_getDisplayName_pattern1', {});

        var x = new cls_NX_getDisplayName_pattern1();

        NX.getDisplayName(x).should.equal('cls_NX_getDisplayName_pattern1');
        NX.getDisplayName(NX).should.equal('Anonymous');

    },

    // }}}
    // {{{ test getDisplayName#pattern2

    'test getDisplayName#pattern2': function() {

        NX.ClassManager.create('cls_NX_getDisplayName_pattern2', {});

        var ret = NX.getDisplayName({
            $name: 'foo',
            $class: cls_NX_getDisplayName_pattern2
        });

        ret.should.equal('cls_NX_getDisplayName_pattern2#foo');

    },

    // }}}
    // {{{ test getDisplayName#pattern3

    'test getDisplayName#pattern3': function() {

        var ret = NX.getDisplayName({
            displayName: 'hoge'
        });

        ret.should.equal('hoge');

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
