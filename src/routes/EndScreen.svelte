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
            <p>Your score was: {finalScore}. Satisfied?</p>
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