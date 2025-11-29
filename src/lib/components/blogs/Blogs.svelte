<script lang="ts">
    export let imgSrc: string; 
    export let title: string; 
    export let link: string;
</script>

<a href={link} class="block bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div class="flex flex-col">
        <img src={imgSrc} alt={title} class="w-full aspect-square object-cover rounded-t-lg" />
        <h3 class="text-lg font-semibold text-gray-800 p-4 text-center">{title}</h3>
    </div>
</a>

<style>   
</style> 