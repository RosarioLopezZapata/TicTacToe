console.log('hello');
const App = {
    // All of our selected HTML elements
    $: {
        menu: document.querySelector('[data-id="menu"]'),
        menuItems: document.querySelector('[data-id="menu-items"]'),
        resetBtn: document.querySelector('[data-id="reset-btn"]'),
        newRoundBtn: document.querySelector('[data-id="new-round-btn"]'),
        squares: document.querySelectorAll('[data-id="square"]'),
    },
    state: {
        currentPlayer: 1,
    },
    init() {
        App.registerEventListeners();
    },
    registerEventListeners() {
        this.$.menu.addEventListener('click', event => {
            this.$.menuItems.classList.toggle('hidden');
        });
        this.$.resetBtn.addEventListener('click', event => {
            console.log('reset the game')
        });
        this.$.newRoundBtn.addEventListener('click', event => {
            console.log('Add a new round')
        });

        this.$.squares.forEach(square => {
            square.addEventListener('click', event => {


                console.log(`Square with id ${event.target.id} was clicked`);
                console.log(`Current player is ${this.state.currentPlayer}`);
                if (square.hasChildNodes()) {
                    return
                }
                const icon = document.createElement('i');
                const currentPlayer = App.state.currentPlayer;
                if (currentPlayer === 1) {

                    icon.classList.add('fa-solid', 'fa-x', 'yellow');
                } else {

                    icon.classList.add('fa-solid', 'fa-o', 'turquoise');
                }

                App.state.currentPlayer = App.state.currentPlayer === 1 ? 2 : 1;
                square.replaceChildren(icon);
            });
        });

    },
};
window.addEventListener('load', () => App.init())