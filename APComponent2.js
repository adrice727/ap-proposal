/*eslint-env es6 */
(() => {

    class Comp2 {
        constructor(options) {
            this.options = options
        }

        getListeners() {
            return {
                messageReceived: messageReceivedHandler
            }
        }
    }

    this.APComponent2 = Comp2;

})(this);