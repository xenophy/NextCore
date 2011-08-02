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
// {{{ NX.isBoolean Tests

module.exports = {

    // {{{ test isBoolean#pattern1

    'test isBoolean#pattern1': function(){

        // undefinedテスト
        NX.isBoolean(undefined).should.not.equal(true);

    },

    // }}}
    // {{{ test isBoolean#pattern2

    'test isBoolean#pattern2': function(){

        // nullテスト
        NX.isBoolean(null).should.not.equal(true);

    },

    // }}}
    // {{{ test isBoolean#pattern3

    'test isBoolean#pattern3': function(){

        // 文字列テスト
        NX.isBoolean('Next JS').should.not.equal(true);

    },

    // }}}
    // {{{ test isBoolean#pattern4

    'test isBoolean#pattern4': function(){

        // 数値テスト
        NX.isBoolean(8124).should.not.equal(true);

    },

    // }}}
    // {{{ test isBoolean#pattern5

    'test isBoolean#pattern5': function(){

        // 真偽値テスト
        NX.isBoolean(true).should.equal(true);
        NX.isBoolean(false).should.equal(true);

    },

    // }}}
    // {{{ test isBoolean#pattern6

    'test isBoolean#pattern6': function(){

        // オブジェクトテスト
        NX.isBoolean({}).should.not.equal(true);

    },

    // }}}
    // {{{ test isBoolean#pattern7

    'test isBoolean#pattern7': function(){

        // 配列オブジェクトテスト
        NX.isBoolean([]).should.not.equal(true);

    },

    // }}}
    // {{{ test isBoolean#pattern8

    'test isBoolean#pattern8': function(){

        // 関数オブジェクトテスト
        NX.isBoolean((function(){})).should.not.equal(true);

    },

    // }}}
    // {{{ test isBoolean#pattern9

    'test isBoolean#pattern9': function(){

        // 日付オブジェクトテスト
        NX.isBoolean(new Date()).should.not.equal(true);

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
