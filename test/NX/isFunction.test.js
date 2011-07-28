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
// {{{ NX.isFunction Tests

module.exports = {

    // {{{ test isFunction#pattern1

    'test isFunction#pattern1': function(){

        // undefinedテスト
        NX.isFunction(undefined).should.not.equal(true);

    },

    // }}}
    // {{{ test isFunction#pattern2

    'test isFunction#pattern2': function(){

        // nullテスト
        NX.isFunction(null).should.not.equal(true);

    },

    // }}}
    // {{{ test isFunction#pattern3

    'test isFunction#pattern3': function(){

        // 文字列テスト
        NX.isFunction('Next JS').should.not.equal(true);

    },

    // }}}
    // {{{ test isFunction#pattern4

    'test isFunction#pattern4': function(){

        // 数値テスト
        NX.isFunction(8124).should.not.equal(true);

    },

    // }}}
    // {{{ test isFunction#pattern5

    'test isFunction#pattern5': function(){

        // 真偽値テスト
        NX.isFunction(true).should.not.equal(true);
        NX.isFunction(false).should.not.equal(true);

    },

    // }}}
    // {{{ test isFunction#pattern6

    'test isFunction#pattern6': function(){

        // オブジェクトテスト
        NX.isFunction({}).should.not.equal(true);

    },

    // }}}
    // {{{ test isFunction#pattern7

    'test isFunction#pattern7': function(){

        // 配列オブジェクトテスト
        NX.isFunction([]).should.not.equal(true);

    },

    // }}}
    // {{{ test isFunction#pattern8

    'test isFunction#pattern8': function(){

        // 関数オブジェクトテスト
        NX.isFunction((function(){})).should.equal(true);

    },

    // }}}
    // {{{ test isFunction#pattern9

    'test isFunction#pattern9': function(){

        // 日付オブジェクトテスト
        NX.isFunction(new Date()).should.not.equal(true);

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
