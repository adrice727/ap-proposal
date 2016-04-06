/*eslint-env es6 */
(() => {

    class AP {

        constructor(options) {
            this.options = options;
            this.session = options.session;
            this.setListeners(options.compListeners);
        }

        setListeners(...compListeners) {

            let listeners = compListeners.reduce((outerAcc, listenerSet) => {

                let combinedListener = Object.keys(listenerSet).reduce((innerAcc, event) => {

                    let existingHandler = outerAcc[event];

                    if (existingHandler) {
                        innerAcc[event] = () => [existingHandler, listenerSet[event]].forEach(fn => fn());
                    } else {
                        innerAcc[event] = listenerSet[event];
                    }

                    return innerAcc;
                }, {});

                return Object.assign(outerAcc, combinedListener);

            }, {});

            this.session.on(listeners);
        }
    };

    this.AP = AP;

})(this);