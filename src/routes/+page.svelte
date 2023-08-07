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
        <h2>Mental Arithmetic?</h2>
        <p>How well do you fare in mental math?</p>
        <button class="btn" on:click = {startGameEasy}>Beginner (Student)</button>
        <button class="btn" on:click = {startGameMedium}>Intermediate (Accountant)</button>
        <button class="btn" on:click = {startGameHard}>Expert (Asian)</button>
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
        width: 500px;
        font-size: 20px;
    }
</style>
