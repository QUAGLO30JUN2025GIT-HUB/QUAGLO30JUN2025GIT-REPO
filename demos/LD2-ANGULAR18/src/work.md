    httpclient: HttpClient;
    // The consturctor is defined to inject the HttpClient service into the EmployeeService class.

    constructor(httpClient: HttpClient) {
        this.httpclient = httpClient;
    // Initialize the call to the backend API endpoint.
    }

    constructor(private httpClient: HttpClient){
        
    }