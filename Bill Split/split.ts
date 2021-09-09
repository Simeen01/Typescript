//greetings
var customerName = prompt("Welcome! Please enter your name", "Your name please..");

if (customerName!= null) {
    document.getElementById("welcome").innerHTML =
    "Hello " + customerName + "! Hope you are doing well today!";
}   

class billSplit
{
    constructor(
        public description: string,
        public total: number,
        public no_of_people: number,
    ) {}
}

class inputBill
{
    formElement: HTMLFormElement;
    totalElement: HTMLInputElement;
    no_of_peopleElement: HTMLInputElement;

    constructor()
    {
        this.formElement = document.querySelector('form') as HTMLFormElement;
        this.totalElement = document.getElementById('total') as HTMLInputElement;
        this.no_of_peopleElement = document.getElementById('no_of_people') as HTMLInputElement;
        this.configure();
    }

    private configure()
    {
        this.formElement.addEventListener('submit', this.submitHandler.bind(this));
    }

    private submitHandler(event: Event)
    {
        event.preventDefault();
        const total = parseInt(this.totalElement.value);
        const no_of_people = parseInt(this.no_of_peopleElement.value);

        alert("Split Amount: "+"Rs. "+(total/no_of_people).toFixed(2)+"/per person");

        document.querySelector('#resetBtn').addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelector('form').reset();
          })
    }
}
  
const input = new inputBill();