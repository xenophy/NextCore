/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next Core
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Error.prototype.name

module.exports = function() {

    var me = this,
        className = me.className ? me.className  : '',
        methodName = me.methodName ? '.' + me.methodName + '(): ' : '',
        msg = me.msg || NX.$e("(No description provided)");

    return className + methodName + msg;
}

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
