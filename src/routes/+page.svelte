<script>

    import Math from "./Math.svelte";

    let start = false;
    // difficulty string is shared with <Math/>
    let difficultyChosen = "";

    function startGameEasy() {
        start = true;
        difficultyChosen = "easy";
    }

    function startGameMedium() {
        start = true;
        difficultyChosen = "medium";
    }

    function startGameHard() {
        start = true;
        difficultyChosen = "hard";
    }
    
</script>
{#if start != true}
    <div id="startScreen">
        <br>
        <h2>Mental Arithmetic</h2>
        <p>How well do you fare in mental math?</p>
        <button class="btn" on:click = {startGameEasy}>Beginner (+, -)</button>
        <button class="btn" on:click = {startGameMedium}>Intermediate (+, -, x)</button>
        <button class="btn" on:click = {startGameHard}>Expert (+, -, x, /)</button>
        <br>
        <br>
        <a href="https://github.com/a1phanaught/math-game-svelte"><img src="img/github.png" alt="github.com/a1phanaught" style="width: 30px !important; height: 30px !important; margin: 5px;"></a>
        <a href="https://svelte.dev"><img src="img/svelte.png" alt="Powered by Svelte" style="width: 25px !important; height: 30px !important; margin: 5px;"></a>
    </div>
{:else}
    <Math difficulty={difficultyChosen}></Math>
{/if}

<style>
    #startScreen {
        background-color: antiquewhite;
        width: 100%;
        height: 100vh;
        text-align: center;
        font-family: arial,sans-serif;
        font-size: 30px;
    }

    .btn {
        margin: 10px;
        height: 50px;
        width: 75%;
        font-size: 20px;
        background-color: white;
        color: black;
        border: 2px solid #555555;
    }

    .btn:hover {
        background-color: #555555;
        color: white;
    }
</style>
