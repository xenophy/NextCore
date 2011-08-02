/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next Core
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Error

(function() {

var NXError = NX.Error = function(config) {

    if(NX.isString(config)) {
        config = { msg: config };
    }

    NX.apply(this, config);
    this.message = this.message || this.msg;
};
NXError.prototype = new Error();

NX.$implements(__dirname + '/', NX.Error);

})();

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
