/*eslint-env es6 */
(() => {

    class AP {

        constructor(options) {
            this.options = options;
            this.session = options.session;
            this.setListeners(options.compListeners);
        }
        
        /** 
         * Accepts event listeners for one or multiple components and combines them into a single
         * object that can be passed to 'session.on()'.  When multiple components listen for the 
         * same event, their event handlers will be combined into a single callback in which each
         * is fired.
         * 
         * Example:
         *  comp1Listeners = {
         *      x: doComp1X(),
         *      y: doComp1Y()
         *  };
         * 
         *  comp2Listeners = {
         *      x: doComp2X(),
         *      y: doComp2Y(),
         *      z: doComp2Z()
         *  };
         * 
         *  comp3Listeners = {
         *      z: doComp3Z()
         *  };
         * 
         *  let finalListenrs = setListners(comp1Listeners, comp2Listeners, comp3Listeners)
         * 
         *  console.log(finalListenrs);
         * 
         *  {
         *      x: function(){ 
         *            doComp1X();
         *            doComp2X();
         *      },
         *      y: function(){ 
         *            doComp1Y();
         *            doComp2Y();
         *      },
         *      z: function(){ 
         *            doComp2Z();
         *            doComp3Z();
         *      }
         *  }
         * 
         * @param {...Object} compListeners - A set of event listeners
         */

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