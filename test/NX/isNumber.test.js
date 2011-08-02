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
// {{{ NX.isNumber Tests

module.exports = {

    // {{{ test isNumber#pattern1

    'test isNumber#pattern1': function(){

        // undefinedテスト
        NX.isNumber(undefined).should.not.equal(true);

    },

    // }}}
    // {{{ test isNumber#pattern2

    'test isNumber#pattern2': function(){

        // nullテスト
        NX.isNumber(null).should.not.equal(true);

    },

    // }}}
    // {{{ test isNumber#pattern3

    'test isNumber#pattern3': function(){

        // 文字列テスト
        NX.isNumber('Next JS').should.not.equal(true);
        NX.isNumber('8124').should.not.equal(true);

    },

    // }}}
    // {{{ test isNumber#pattern4

    'test isNumber#pattern4': function(){

        // 数値テスト
        NX.isNumber(8124).should.equal(true);
        NX.isNumber(0).should.equal(true);

    },

    // }}}
    // {{{ test isNumber#pattern5

    'test isNumber#pattern5': function(){

        // 真偽値テスト
        NX.isNumber(true).should.not.equal(true);
        NX.isNumber(false).should.not.equal(true);

    },

    // }}}
    // {{{ test isNumber#pattern6

    'test isNumber#pattern6': function(){

        // オブジェクトテスト
        NX.isNumber({}).should.not.equal(true);

    },

    // }}}
    // {{{ test isNumber#pattern7

    'test isNumber#pattern7': function(){

        // 配列オブジェクトテスト
        NX.isNumber([]).should.not.equal(true);

    },

    // }}}
    // {{{ test isNumber#pattern8

    'test isNumber#pattern8': function(){

        // 関数オブジェクトテスト
        NX.isNumber((function(){})).should.not.equal(true);

    },

    // }}}
    // {{{ test isNumber#pattern9

    'test isNumber#pattern9': function(){

        // 日付オブジェクトテスト
        NX.isNumber(new Date()).should.not.equal(true);

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
