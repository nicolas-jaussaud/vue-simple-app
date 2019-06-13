const Page2 = Vue.component('Page2', {
    template: `
        <section class="container">
            <div class="row justify-content-center">
                <div class="col-12">
                    <h1>{{ title }}</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie sagittis sem ac porta. Praesent nec iaculis mi, sit amet convallis quam. Curabitur faucibus sollicitudin leo, quis pharetra nulla porttitor sed. Aenean congue lectus quis pulvinar dapibus. Morbi sit amet commodo ante. Nam suscipit augue enim, a aliquet lacus venenatis vel. Duis semper erat metus, in consequat dolor laoreet et. Aliquam facilisis velit mauris. Suspendisse eu metus urna. Donec elementum consequat lorem, ut accumsan velit tristique vestibulum. Donec dignissim est lacus. Mauris at magna ac magna dictum scelerisque et in ex. Phasellus ultrices neque in eros semper, non vehicula nisl vehicula. Vivamus vel eros eget enim facilisis volutpat</p>. 
                </div>
            </div>
        </section>
    `,
    data() {
        return {
            title: 'Page2'
        }
    },
    methods: {
        doSometing() {

        }
    }
});