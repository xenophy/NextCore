/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX Core

(function() {

require('./NX');
require('./Array');
require('./Date');
require('./Error');
require('./Function');
require('./JSON');
require('./Number');
require('./Object');
require('./String');
require('./util/Format');

// }}}
// {{{ Class System

require('./Loader');
require('./Base');
require('./Class');
require('./ClassManager');

// }}}
// {{{ ロケール設定

var locale = process.env.LANG || 'en';
if(NX.isString(process.env.LANG)) {
    var tmp = process.env.LANG.split('_');
    if(NX.isArray(tmp)) {
        locale = tmp[0];
    }
}
NX.setLocale(locale);

})();

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
