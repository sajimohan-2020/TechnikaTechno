<!-- src/routes/+error.svelte -->
<script>
  import { browser } from "$app/environment";
  import { page } from "$app/stores";
  import Menu from "$lib/components/menu/Menu.svelte";

  export let urlPath = "/";
</script>

<svelte:head>
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

{#if $page.status === 404}
  <div class="error-wrapper">
    <img src="/assets/error/error404.webp" alt="404 Error" class="error-img" />
  </div>
{:else}
  <div class="error-wrapper">
    <img src="/assets/error/error404.webp" alt="404 Error" class="error-img" />
  </div>
  <!-- <div class="error-container">
    <h1>Error {$page.status}</h1>
    <p>{$page.error?.message}</p>
  </div> -->
{/if}

<div class="btn-div">
  <a href={urlPath} class="btn">Go Back</a>
</div>

<style>
  * {
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }
  .error-wrapper {
    padding-top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
  }

  .error-img {
    max-width: 400px;
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  .error-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    text-align: center;
    padding: 20px;
  }

  .btn-div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    padding-bottom: 90px;
  }

  .btn {
    padding: 10px 40px;
    border: 2px solid #0b60b0;
    background-color: #0b60b0; /* Blue border */
    border-radius: 50px;
    text-decoration: none; /* Remove underline */
    color: #ffffff;
    font-weight: 600;
    transition: 0.3s ease;
  }

  .btn:hover {
    background-color: #0b60b0;
    color: white;
  }
</style>
