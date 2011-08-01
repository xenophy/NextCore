/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next Core
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Base.prototype.callOverridden

module.exports = function(args) {

    var method = this.callOverridden.caller;

    if(!method.$owner) {

        NX.Error.raise({
            sourceClass: NX.getClassName(this),
            sourceMethod: "callOverridden",
            msg: NX.$e("Attempting to call a protected method from the public scope, which is not allowed")
        });

    }

    if(!method.$previous) {

        NX.Error.raise({
            sourceClass: NX.getClassName(this),
            sourceMethod: "callOverridden",
            msg: NX.$e("this.callOverridden was called in '{0}' but this method has never been overridden", method.$name)
        });

    }

    return method.$previous.apply(this, args || []);
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
