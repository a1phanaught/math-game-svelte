<script>
    import EndScreen from "./EndScreen.svelte";
    import {getRandomInt, getRandomOperation, getResultValue, sleep} from "./functions.svelte";

    export let difficulty;
    let score = 0.0;

    const timeout = async ms => new Promise(res => setTimeout(res, ms));
    let next = false;

    let scoreStreakMultiplier = 1.0;
    let questionString = "";
    let heartString = "";
    let resultValue = 0;
    let answers = new Array();
    let correct = false;
    let start = true;
    let waitTime = 5000;
    let timeLeft;

    // Reactive variables must be assigned first
    // for them to be functional
    $: seconds = timeLeft;
    $: message = "";
    $: buttonDisabled = false;

    function setEasyQuestionAndAnswers() {
        let randomIndex = getRandomInt(0, 3);
        let leftValue = getRandomInt(10, 50);
        let rightValue = getRandomInt(10, 50);
        let operation = getRandomOperation(2);
        
        resultValue = getResultValue(operation, rightValue, leftValue);
        questionString = rightValue + " " + operation + " " + leftValue;

        for (let i = 0; i < 4; i++) {
            if (i == randomIndex) 
                answers.push(resultValue);
            else {
                let val = getRandomInt(1,20);
                // just wanna make sure that the answers do not repeat
                val = answers.includes(resultValue + val) ? -val : val;
                if (answers.includes(resultValue + val)) val+1;
                answers.push(resultValue + val);
            }   
        }

    }

    function setMediumQuestionAndAnswers() {
        let randomIndex = getRandomInt(0, 3);
        let operation = getRandomOperation(3);
        let leftValue;
        let rightValue;

        if (operation == "x") {
            leftValue = getRandomInt(1, 20);
            rightValue = getRandomInt(1, 20);
        }
        else {
            leftValue = getRandomInt(10, 100);
            rightValue = getRandomInt(10, 100);
        }

        resultValue = getResultValue(operation, rightValue, leftValue);
        questionString = rightValue + " " + operation + " " + leftValue;

        for (let i = 0; i < 4; i++) {
            if (i == randomIndex) 
                answers.push(resultValue);
            else {
                // Let's confuse them, yeah?
                let val = getRandomInt(0,1) ? 10 : -10;
                val = answers.includes(resultValue + val) ? -val : val;
                if (answers.includes(resultValue + val)) val = 5;
                answers.push(resultValue + val);
            }   
        }

    }

    function setHardQuestionAndAnswers() {
        let randomIndex = getRandomInt(0, 3);
        let operation = getRandomOperation(4);
        let leftValue = getRandomInt(10, 100);
        let rightValue = getRandomInt(10, 100);

        resultValue = getResultValue(operation, rightValue, leftValue);
        if (operation == "/") resultValue = parseFloat(resultValue.toFixed(2));
        questionString = rightValue + " " + operation + " " + leftValue;

        for (let i = 0; i < 4; i++) {
            if (i == randomIndex) 
                answers.push(resultValue);
            else {
                // Let's confuse them, yeah?
                let val = getRandomInt(0,1) ? 10 : -10;
                val = answers.includes(resultValue + val) ? -val : val;
                if (answers.includes(resultValue + val)) val = 5;
                answers.push(resultValue + val);
            }   
        }

    }

    function evaluateAnswer(value) {
        if (value == resultValue && timeLeft > 0) {
            correct = true;
            score += 100 * scoreStreakMultiplier;
        }
        else correct = false;
        next = true;
    }


    async function gameStart() {
        let lives = ["♥️", "♥️", "♥️"];
         // We'll run the game until all lives are lost
        while (lives.length > 0) {

            correct = false;
            message = "";
            answers = new Array();
            heartString = lives.join(" ");
            buttonDisabled = false;

            switch (difficulty) {
                case "easy":
                    setEasyQuestionAndAnswers();
                    break;
                case "medium":
                    setMediumQuestionAndAnswers();
                    break;
                case "hard":
                    setHardQuestionAndAnswers();
            }

            // Wait for a question to be chosen by player at a given duration
            timeLeft = waitTime;
            let timer = setInterval(() => {
                if (timeLeft > 0) timeLeft -= 10;
            }, 10);
            
            // Do not freeze the site while waiting
            while (next === false && timeLeft > 0) {
                await timeout(50);
                seconds = timeLeft;
            }
            next = false;
            buttonDisabled = true;

            // Finally... check if player chose the correct answer
            if (correct) {
                message = "Nice one!";
                scoreStreakMultiplier += .1;
                // Time gets shorter with every correct answer
                if (waitTime > 2000) waitTime -= 100;
            }
            else {
                lives.pop();
                message = "Nope!";
                scoreStreakMultiplier = 1.0;
            }

            clearInterval(timer);
            await sleep(2000);
        }

        gameEnd();
    }
    
    function gameEnd() {
        start = false;
    }

    gameStart();

</script>

{#if start == true}
    <div id="wrapper">
        <div id="timeBar" style="width: {seconds/waitTime * 100}% !important"></div>
        <div class="content">
            <br>
            <h3>Lives left: {heartString}</h3>
            <p>Score: {score} ({scoreStreakMultiplier.toFixed(1)}x)</p>
            <h1>{questionString}</h1>
            {#each answers as ans}
                <button class="btn" disabled={buttonDisabled} on:click={() => evaluateAnswer(ans)}>{ans}</button>
            {/each}
            <p>{message}</p>
        </div>
    </div>
{:else}
    <EndScreen finalScore={score}/>
{/if}

<style>
    .content {
        color: #FFFFFF;
        font-size: 26px;
        font-weight: bold;
        text-shadow: -1px -1px 1px #000, 1px 1px 1px #000;
        position: relative;
        z-index: 100;
        margin: auto;
        text-align: center;
        width: 50%;
    }

    #wrapper {
        position: relative;
        width: 100%;
        height: 1000px;
        z-index: 0;
        background-color: maroon;
    }

    #timeBar {
        height: 100%;
        width: 0%;
        background-color: grey;
        color: #999999;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -100;
    }

    .btn {
        margin: 10px;
        width: 100px;
        height: 100px;
        font-size: 20px;
    }

</style>