/*eslint-env es6 */
(() => {

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