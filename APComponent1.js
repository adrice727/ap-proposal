/*eslint-env es6 */
(() => {
    
    const createdHandler = event => {
        //handle event
    };
    
    const destroyedHandler = event => {
        //handle event
    };
    
    class Comp1 {
        constructor(options) {
            this.options = options
        }

        getListeners() {
            return {
                connectionCreated: createdHandler,
                connectionDestroyed: destroyedHandler
            }
        }
    }

    this.APComponent1 = Comp1;

})(this);