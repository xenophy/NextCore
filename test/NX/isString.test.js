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
// {{{ NX.isString Tests

module.exports = {

    // {{{ test isString#pattern1

    'test isString#pattern1': function(){

        // undefinedテスト
        NX.isString(undefined).should.not.equal(true);

    },

    // }}}
    // {{{ test isString#pattern2

    'test isString#pattern2': function(){

        // nullテスト
        NX.isString(null).should.not.equal(true);

    },

    // }}}
    // {{{ test isString#pattern3

    'test isString#pattern3': function(){

        // 文字列テスト
        NX.isString('Next JS').should.equal(true);
        NX.isString('1234').should.equal(true);

    },

    // }}}
    // {{{ test isString#pattern4

    'test isString#pattern4': function(){

        // 数値テスト
        NX.isString(8124).should.not.equal(true);

    },

    // }}}
    // {{{ test isString#pattern5

    'test isString#pattern5': function(){

        // 真偽値テスト
        NX.isString(true).should.not.equal(true);
        NX.isString(false).should.not.equal(true);

    },

    // }}}
    // {{{ test isString#pattern6

    'test isString#pattern6': function(){

        // オブジェクトテスト
        NX.isString({}).should.not.equal(true);

    },

    // }}}
    // {{{ test isString#pattern7

    'test isString#pattern7': function(){

        // 配列オブジェクトテスト
        NX.isString([]).should.not.equal(true);

    },

    // }}}
    // {{{ test isString#pattern8

    'test isString#pattern8': function(){

        // 関数オブジェクトテスト
        NX.isString((function(){})).should.not.equal(true);

    },

    // }}}
    // {{{ test isString#pattern9

    'test isString#pattern9': function(){

        // 日付オブジェクトテスト
        NX.isString(new Date()).should.not.equal(true);

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
