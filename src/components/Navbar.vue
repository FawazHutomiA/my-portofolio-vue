<template>
    <div class="bg-white flex px-32 min-h-[3.25rem] place-items-center my-6 justify-between">
        <img src="/icon.png" class="w-24 cursor-pointer hover:border-2 hover:rounded-full hover:border-violet-500 hover:transition hover:duration-300 hover:ease-in-out p-2" alt="">
        <div class="flex gap-x-6 text-lg">
            <div class="py-1 cursor-pointer hover:text-violet-500 transition duration-300 ease-in-out">Portofolio</div>
            <div class="border-2 border-violet-500 text-violet-700 hover:bg-violet-500 hover:text-white transition duration-300 ease-in-out rounded-md px-3 py-1 cursor-pointer">
                <span>Say Hello</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Navbar'
}
</script>