<script>
    import Page from "./+page.svelte";

    export let finalScore = 0.0;
    let returnToMainPage = false;
</script>

{#if returnToMainPage == false}
    <div id="endScreen">
        <div class="content">
            <br>
            <br>
            {#if finalScore < 1000}
                <h2>Your final score is: <span class="scoreHighlight">{finalScore}</span></h2><p>Could be better...</p>
            {:else if finalScore < 3000}
                <h2>Your final score is: <span class="scoreHighlight">{finalScore}</span></h2><p>That was pretty nice!</p>
            {:else if finalScore < 10000}
                <h2>Your final score is: <span class="scoreHighlight">{finalScore}</span></h2><p>Astounding!</p>
            {:else}
                <h2>Your final score is: <span class="scoreHighlight">{finalScore}</span></h2><p>You're UNSTOPPABLE!!!</p>
            {/if}
            <button class="btn" on:click={() => returnToMainPage = true}>Return to main page</button>
        </div>
    </div>
{:else}
    <Page/>
{/if}

<style>
    #endScreen {
        background-color: antiquewhite;
        width: 100%;
        height: 100vh;
        text-align: center;
    }

    .content {
        color: black;
        font-size: 26px;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
        /*text-shadow: -1px -1px 1px #000, 1px 1px 1px #000;*/
        position: relative;
        z-index: 100;
        margin: auto;
        text-align: center;
        width: 100%;
    }

    .btn {
        font-size: 20px;
        height: 50px;
        width: 300px;
        background-color: white;
        color: black;
        border: 2px solid #555555;
    }

    .btn:hover {
        background-color: #555555;
        color: white;
    }

    .scoreHighlight {
        color: red;
    }
</style>