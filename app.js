/*eslint-env es6 */
(() => {
    
    class App {
        constructor(options) {
            this.options = options
        }
        
        init() {
            
            let comp1 = new APComponent1(this.options);
            let comp2 = new APComponent2(this.options);
                      
            this.options.compListeners = Object.assign({}, comp1.getListeners(), comp2.getListeners());
            
            AP.init(options);
             
        }
    }
    
    this.App = App;
    
})(this);