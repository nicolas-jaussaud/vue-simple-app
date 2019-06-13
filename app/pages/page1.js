const Page1 = Vue.component('Page1', {
    template: `
        <section class="container">
            <div class="row justify-content-center">
                <div class="col-12">
                    <h1>{{ title }}</h1>
                    <p>Integer suscipit urna in mauris rutrum, volutpat ullamcorper odio laoreet. Sed varius vel nunc in efficitur. Curabitur elementum et arcu sed dictum. Maecenas a mi feugiat, pellentesque tortor nec, consequat purus. Vivamus porttitor, diam eleifend auctor tristique, massa diam maximus enim, eu blandit elit neque eu nulla. Mauris ligula nibh, consectetur in lacus sed, euismod efficitur justo. Etiam ac lectus dignissim, venenatis quam sit amet, dignissim lorem. Quisque molestie volutpat nisl, a commodo diam scelerisque et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis lectus orci. Aenean imperdiet porta augue, ut tristique ex ornare rutrum. Nunc justo neque, mattis id lacus ac, eleifend pharetra lectus. Donec aliquet est in nisl tincidunt pretium. Sed hendrerit ut velit sit amet maximus. Nunc sit amet leo mollis, faucibus felis eget, convallis orci. </p>
                </div>
            </div>
        </section>
    `,
    data() {
        return {
            title: 'Page1'
        }
    },
    methods: {
        doSometing() {

        }
    }
});