<template>
    <div class="content">
        <!-- <img class="project-logo" src="https://mir-s3-cdn-cf.behance.net/projects/404/13618989.548458dd0474e.png"> -->
        <div class="headline">Oh The Places You'll Go</div>
        <div class="sub-headline">Butting My Nose In Other Peoples Business.</div>
        <div class="detail">This was one of the first really great projects that I produced when I was consulting in Lisbon.</div>
        <div class="headline">Discover</div>
        <div class="detail">When I went to tackle this, I first when through and captured every view with states that I wanted to focus on. I preferred to go a little overboard here to really get the lay of the land and understand where the strengths and weaknesse from my perspective were.</div>
        <div class="headline">Explore</div>
        <div class="detail">Once I had everything laid out in from of me, it was time to dig in!</div>
        <div class="headline">Test</div>
        <div class="detail">This is apparently a tough part for some people to do but I love it. You finally get to see what actually works and makes sense to people who aren't in this design world all day.</div>
        <div class="headline">Listen</div>
        <div class="detail">After testing, it was time to shut my mouth and listen. I like to prod but if someone can think of a descriptor, I found it was way more helpful to be patient and wait until the pulled out their thesaurus and found it than to jump in and try to help them find the work</div>
        <div class="headline">Iterate</div>
        <div class="detail">I only ran a few iterations on my test findings for this project, but given the time constraints I think I was able to deliver a solid product. Even better, I had a happy client! The best source of repeat business and more travelling.</div>

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
@font-face {
    font-family: "detail-regular";
    src: url("/dist/fonts/TiemposTextWeb-Regular.eot") format("eot"),
         url("/dist/fonts/TiemposTextWeb-Regular.woff") format("woff"),
         url("/dist/fonts/TiemposTextWeb-Regular.ttf") format("truetype");
}
@font-face {
    font-family: "header-bold";
    src: url("/dist/fonts/circular-black.woff") format("woff"),
         url("/dist/fonts/circular-black.ttf") format("truetype");

}
@font-face {
    font-family: "header-light";
    src: url("/dist/fonts/circular-book.woff") format("woff"),
         url("/dist/fonts/circular-book.ttf") format("truetype");

}
.content {
    display: flex;
    flex-direction: column;
    width: 1000px;
    margin: 0 auto;
}
.headline {
    margin: 0;
    font-size: 2.5rem;
    font-family: 'header-bold', cursive;
    color: #2b2b2b;
}
.sub-headline {
    margin: 0;
    font-size: 2.25rem;
    font-family: 'header-light', cursive;
    font-weight: 200px;
    opacity: .7;
    color: #767676;
}
.detail {
    margin: 1.75rem 0;
    padding-left: 10rem;

    font-family: 'detail-regular', Georgia, serif;
    color: #2b2b2b;
    font-size: 1.15rem;
    font-weight: 200;
    line-height: 2;
}
.project-logo {
    background-color: #F5F5F5;
    width: 350px;
    height: 200px;
    overflow: hidden;
    border-radius: 2px;
    padding: 0 3rem;
}
</style>
