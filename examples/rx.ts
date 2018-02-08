
// ==================================





//emit value every 1s
const source = Rx.Observable.interval(1000);





// ==================================





// ---- INSIDE SOME SERVICE ----

@Injectable()
export class RestService {

    constructor(private http: HttpClient) {
    }

    getTodoItems() {
        return this.http.get("http://127.0.0.1:7777/api/todos");
    }

    saveTodoItems(todos: Todo[]) {
        return this.http.post("http://127.0.0.1:7777/api/todos", {todos: todos});
    }
}

// ----------------------------------

// ---- INSIDE SOME COMPONENT ----

this.someService.getDataFromServer()
    .map(item => {
        // do some op
        item.aggregateTotal = item.someVal + item.someOtherVal;
    }).subscribe(res = {
        // provide the res to your local scope
    });

