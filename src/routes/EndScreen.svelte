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
                <p>Your score was: {finalScore}. Could be better...</p>
            {:else if finalScore < 3000}
                <p>Your score was: {finalScore}. That was pretty nice!</p>
            {:else if finalScore < 10000}
                <p>Your score was: {finalScore}. Astounding!</p>
            {:else}
                <p>Your score was: {finalScore}. You're unstoppable!</p>
            {/if}
            <button on:click={() => returnToMainPage = true}>Return to main page</button>
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
        /*text-shadow: -1px -1px 1px #000, 1px 1px 1px #000;*/
        position: relative;
        z-index: 100;
        margin: auto;
        text-align: center;
        width: 50%;
    }
</style>