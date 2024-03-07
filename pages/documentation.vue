<script setup></script>

<template>
    <section class="section-left">
        <h1>Documentation</h1>
        <div class="container">
            <h1>White paper</h1>
        </div>
        <NuxtLink to="/blog" class="nav-button">Blog</NuxtLink>
        <h2>Wikipage</h2>
        <h3 class="text-xl font-semibold mb-2">Technologies Used</h3>
        <p>Strades is built using a variety of modern technologies, including:</p>
        <ul>
            <li class="category">Frontend:</li>
            <ul>
                <li>Nuxt</li>
                <li>Vue3</li>
                <li>Vite</li>
                <li>Libraries: </li>
                <ul class="container">
                    <h1></h1>
                    <li>Tailwindcss</li>
                    <li>Axios</li>
                    <li>Stripes:
                        Payment processing
                    </li>
                    <li>supabase: database</li>
                    <li>pinia:

                        @pinia/nuxt</li>
                    <li>prisma:
                        database manager
                        @prisma/client</li>
                    <li>vite-pwa
                        @vite-pwa/nuxt
                    </li>
                    <li>nuxt-icon: icons library</li>
                    <li>uuid</li>
                </ul>

            </ul>
            <li class="category">Backend:</li>
            <ul>
                <li>Python3.9</li>
                <li>Django</li>
                <li>Tensorflow</li>
                <li>PostgreSQL</li>
                <li>Redis</li>
                <li>Celery</li>
                <li>RabbitMQ</li>
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>AWS</li>
                <li>GCP</li>
                <li>Azure</li>
            </ul>
        </ul>
        <h2>Github</h2>
    </section>
</template>

<style scoped>
.section-left {
    color: rgb(255, 255, 255);
    margin: 0 auto;
    max-width: 1200px;
    width: calc(100% - 4rem);
}

li {
    color: rgb(255, 255, 255);
    justify-content: center;
    list-style-type: none;
}
</style>