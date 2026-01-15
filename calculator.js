        const display = document.getElementById("display");
        function toDisplay(input) {
            display.value += input;
        }
        function remove() {
            display.value = "";
        }
        function calculate() {
            try {
                display.value = math.evaluate(display.value);
            }
            catch (error) {
                display.value = "Error";
            }
        }
        function backSpace(){
            display.value = display.value.slice(0,-1);
        }
        