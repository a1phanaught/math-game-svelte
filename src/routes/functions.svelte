<script context="module">
    export function getRandomInt(lowerBound, upperBound) {
        return Math.floor(Math.random() * (upperBound+1 - lowerBound) + lowerBound);
    }

    export function getRandomOperation(operLimit) {
        // operLimit is basically how many operands are allowed in the game
        // with respect to difficulty
        let random = getRandomInt(1, operLimit);

        switch (random) {
            case 1: return "+"; break;
            case 2: return "-"; break;
            case 3: return "x"; break;
            case 4: return "/"; break;
        }

        alert("Error on random operation selection.");

        return "";
    }

    export function getResultValue(operation, rVal, lVal) {
        switch (operation) {
            case "+":
                return rVal + lVal;
            case "-":
                return rVal - lVal;
            case "x":
                return rVal * lVal;
            case "/":
                return rVal / lVal;
        }
    }

    export function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
</script>