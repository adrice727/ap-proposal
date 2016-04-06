/*eslint-env es6 */
(() => {

    class AP {

        constructor(options) {
            this.options = options;
            this.session = options.session;
            this.setListeners(options.compListeners);
        }

        setListeners(...compListeners) {
            let listeners = compListeners.reduce((acc, l) => {
                return Object.assign(acc, l);
            }, {});

            this.session.on(listeners);
        }
    }
    
    this.AP = AP;

})(this);