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
// {{{ NX.isDefined Tests

module.exports = {

    // {{{ test isDefined#pattern1

    'test isDefined#pattern1': function(){

        // undefinedテスト
        NX.isDefined(undefined).should.not.equal(true);

    },

    // }}}
    // {{{ test isDefined#pattern2

    'test isDefined#pattern2': function(){

        // nullテスト
        NX.isDefined(null).should.equal(true);

    },

    // }}}
    // {{{ test isDefined#pattern3

    'test isDefined#pattern3': function(){

        // 文字列テスト
        NX.isDefined('Next JS').should.equal(true);

    },

    // }}}
    // {{{ test isDefined#pattern4

    'test isDefined#pattern4': function(){

        // 数値テスト
        NX.isDefined(8124).should.equal(true);

    },

    // }}}
    // {{{ test isDefined#pattern5

    'test isDefined#pattern5': function(){

        // 真偽値テスト
        NX.isDefined(true).should.equal(true);
        NX.isDefined(false).should.equal(true);

    },

    // }}}
    // {{{ test isDefined#pattern6

    'test isDefined#pattern6': function(){

        // オブジェクトテスト
        NX.isDefined({}).should.equal(true);

    },

    // }}}
    // {{{ test isDefined#pattern7

    'test isDefined#pattern7': function(){

        // 配列オブジェクトテスト
        NX.isDefined([]).should.equal(true);

    },

    // }}}
    // {{{ test isDefined#pattern8

    'test isDefined#pattern8': function(){

        // 関数オブジェクトテスト
        NX.isDefined((function(){})).should.equal(true);

    },

    // }}}
    // {{{ test isDefined#pattern9

    'test isDefined#pattern9': function(){

        // 日付オブジェクトテスト
        NX.isDefined(new Date()).should.equal(true);

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
