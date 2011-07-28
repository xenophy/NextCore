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
// {{{ NX.isNumeric Tests

module.exports = {

    // {{{ test isNumeric#pattern1

    'test isNumeric#pattern1': function(){

        // undefinedテスト
        NX.isNumeric(undefined).should.not.equal(true);

    },

    // }}}
    // {{{ test isNumeric#pattern2

    'test isNumeric#pattern2': function(){

        // nullテスト
        NX.isNumeric(null).should.not.equal(true);

    },

    // }}}
    // {{{ test isNumeric#pattern3

    'test isNumeric#pattern3': function(){

        // 文字列テスト
        NX.isNumeric('Next JS').should.not.equal(true);
        NX.isNumeric('8124').should.equal(true);

    },

    // }}}
    // {{{ test isNumeric#pattern4

    'test isNumeric#pattern4': function(){

        // 数値テスト
        NX.isNumeric(8124).should.equal(true);
        NX.isNumeric(0).should.equal(true);

    },

    // }}}
    // {{{ test isNumeric#pattern5

    'test isNumeric#pattern5': function(){

        // 真偽値テスト
        NX.isNumeric(true).should.not.equal(true);
        NX.isNumeric(false).should.not.equal(true);

    },

    // }}}
    // {{{ test isNumeric#pattern6

    'test isNumeric#pattern6': function(){

        // オブジェクトテスト
        NX.isNumeric({}).should.not.equal(true);

    },

    // }}}
    // {{{ test isNumeric#pattern7

    'test isNumeric#pattern7': function(){

        // 配列オブジェクトテスト
        NX.isNumeric([]).should.not.equal(true);

    },

    // }}}
    // {{{ test isNumeric#pattern8

    'test isNumeric#pattern8': function(){

        // 関数オブジェクトテスト
        NX.isNumeric((function(){})).should.not.equal(true);

    },

    // }}}
    // {{{ test isNumeric#pattern9

    'test isNumeric#pattern9': function(){

        // 日付オブジェクトテスト
        NX.isNumeric(new Date()).should.not.equal(true);

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
