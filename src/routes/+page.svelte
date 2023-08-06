<script>

    import Math from "./math.svelte";

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
    <h2>Mental Arithmetic?</h2>
    <p>How well do you fare in mental math?</p>
    <button on:click = {startGameEasy}>Beginner (High School Student)</button>
    <button on:click = {startGameMedium}>Intermediate (Accountant)</button>
    <button on:click = {startGameHard}>Expert (Asian)</button>
{:else}
    <Math difficulty={difficultyChosen}></Math>
{/if}

