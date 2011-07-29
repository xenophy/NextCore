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
// {{{ NX.Loader.setConfig Tests

module.exports = {

    // {{{ test setConfig#pattern1

    'test setConfig#pattern1': function() {

        NX.Loader.setConfig('setConfig#pattern1', true);
        NX.Loader.config['setConfig#pattern1'].should.equal(true);

        delete NX.Loader.config['setConfig#pattern1'];

        NX.Loader.setConfig({
            'setConfig#pattern1-1': true,
            'setConfig#pattern1-2': false
        });
        NX.Loader.config['setConfig#pattern1-1'].should.equal(true);
        NX.Loader.config['setConfig#pattern1-2'].should.equal(false);

        delete NX.Loader.config['setConfig#pattern1-1'];
        delete NX.Loader.config['setConfig#pattern1-2'];

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
