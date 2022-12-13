<script lang="ts">
	import Speaker from "../../lib/Speaker.svelte";
    import type {PageData} from "./$types"
    export let data: PageData;
</script>

<section class="p-10 bg-blue-900 h-screen">
    <div class="mx-auto max-w-screen-xl">
        <h1 class="text-3xl font-extrabold text-white">Featured Speakers</h1>

        <div class="grid grid-cols-1 gap-6 mt-12 max-w-2xl mx-auto">
            {#each data.keynoteSpeakers as keynoteSpeaker}
                <Speaker speaker={keynoteSpeaker}/>
            {/each}
        </div>

        <div class="grid grid-cols-5 gap-6 mt-12">
            {#each data.speakers as speaker}
                <Speaker speaker={speaker}/>
            {/each}
        </div>
    </div>
</section>
