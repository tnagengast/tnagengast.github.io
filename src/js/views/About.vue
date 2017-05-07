<template>
    <div class="content">
        <div class="hi">
            <div>Hi! My name is Tom Nagengast.</div>
            <div>I like to make things and solve problems.</div>
        </div>
        <div class="about">
			I was born and raised in California. I'm a Winemaker / Data Scientist / web jack-of-all-trades and currently live in San Luis Obispo working at MINDBODY.
			<br><br>
			Thanks for visiting.
        </div>

        <div class="links">
            <a href="https://www.behance.net/tnagengast" target="_blank"><i class="fa fa-behance" aria-hidden="true"></i></a>
            <a href="https://winewindow.io/" target="_blank"><img src="https://staging.winewindow.io/images/logo.svg"></a>
            <a href="mailto:tnagengast@gmail.com"><i class="fa fa-envelope-o" aria-hidden="true"></i></a>
            <a href="https://github.com/tnagengast" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
            <a href="https://github.com/tnagengast" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
        </div>

        <div class="projects">
            <a class="project bajka" href="https://www.facebook.com/bajkawine"></a>
            <a class="project winewindow" href="https://winewindow.io"></a>
			<a class="project couchsurfing" href="https://www.behance.net/gallery/13677425/Couchsurfing-Dashboard-Redesign"></a>
			<a class="project viporbit" href="https://www.behance.net/gallery/13618989/VIPorbit-UI-Redesign"></a>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<style scoped>
.content {
    grid-template-columns: repeat(1, auto);
    grid-template-rows: 100px 300px 100px auto 50px;
    grid-template-areas:
        "hi"
        "about"
        "links"
        "projects"
        "footer"
}

.about {
    grid-area: about;
    width: 800px;
    font-family: 'Bitter', serif;
    font-size: 2rem;
    text-align: center;
    align-self: center;
}
</style>
