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
// {{{ NX.isPrimitive Tests

module.exports = {

    // {{{ test isPrimitive#pattern1

    'test isPrimitive#pattern1': function(){

        // undefinedテスト
        NX.isPrimitive(undefined).should.not.equal(true);

    },

    // }}}
    // {{{ test isPrimitive#pattern2

    'test isPrimitive#pattern2': function(){

        // nullテスト
        NX.isPrimitive(null).should.not.equal(true);

    },

    // }}}
    // {{{ test isPrimitive#pattern3

    'test isPrimitive#pattern3': function(){

        // 文字列テスト
        NX.isPrimitive('Next JS').should.equal(true);

    },

    // }}}
    // {{{ test isPrimitive#pattern4

    'test isPrimitive#pattern4': function(){

        // 数値テスト
        NX.isPrimitive(8124).should.equal(true);

    },

    // }}}
    // {{{ test isPrimitive#pattern5

    'test isPrimitive#pattern5': function(){

        // 真偽値テスト
        NX.isPrimitive(true).should.equal(true);
        NX.isPrimitive(false).should.equal(true);

    },

    // }}}
    // {{{ test isPrimitive#pattern6

    'test isPrimitive#pattern6': function(){

        // オブジェクトテスト
        NX.isPrimitive({}).should.not.equal(true);

    },

    // }}}
    // {{{ test isPrimitive#pattern7

    'test isPrimitive#pattern7': function(){

        // 配列オブジェクトテスト
        NX.isPrimitive([]).should.not.equal(true);

    },

    // }}}
    // {{{ test isPrimitive#pattern8

    'test isPrimitive#pattern8': function(){

        // 関数オブジェクトテスト
        NX.isPrimitive((function(){})).should.not.equal(true);

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
