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
// {{{ NX.Base.setConfig Tests

module.exports = {

    // {{{ test setConfig#pattern1

    'test setConfig#pattern1': function() {

         NX.define('NXTest.Base.setConfig.p1cls1', {
             config: {
                 name: 'test'
             },
             constructor: function(config) {
                 this.initConfig(config);
                 return 'hoge';
             }
        });

        var cls = new NXTest.Base.setConfig.p1cls1();

        cls.name.should.equal('test');

        cls.setConfig({
            name: 'foo'
        });

        cls.name.should.equal('foo');

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
