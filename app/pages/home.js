const Home = Vue.component('Home', {
    template: `
        <section class="container">
            <div class="row justify-content-center">
                <div class="col-12">
                    <h1>{{ title }}</h1>
                    <p>Proin lorem erat, mollis sit amet posuere pretium, scelerisque accumsan orci. Praesent tincidunt aliquet enim vitae fringilla. Suspendisse venenatis arcu neque, eget faucibus quam molestie eget. Proin elementum euismod quam, vitae pretium odio convallis vitae. Proin nec ipsum sed massa tempor efficitur. In hac habitasse platea dictumst. Pellentesque consectetur nunc ut interdum rutrum. In convallis sollicitudin mollis. Cras posuere a augue et ornare. Curabitur nec luctus ligula, ac tristique turpis. Fusce ligula ex, tincidunt mattis placerat quis, consectetur et velit. Curabitur eget volutpat dolor. Maecenas vitae blandit turpis. </p>
                </div>
            </div>
            <div>
            </div>
        </section>
    `,
    data() {
        return {
            title: 'Home'
        }
    },
    methods: {
        doSometing() {

        }
    }
});