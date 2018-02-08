// Declaring the service
.
.
.

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

// Invoking the Service from inside some other Component
this.restService.getTodoItems().subscribe(res => {});