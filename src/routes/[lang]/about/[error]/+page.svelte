<script>
  import ErrorPage from "$lib/components/ErrorPage.svelte";
 export let data;

  // Ensure that the langParam is always present

</script>

<ErrorPage
urlPath={`/${data.langParam}/about`}
/>
