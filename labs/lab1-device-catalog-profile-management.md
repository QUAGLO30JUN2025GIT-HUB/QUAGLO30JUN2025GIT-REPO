## Task : Restructuring the project, migrating forwards/ backwards on components, implement routing, creating custom modules, one component dynamically injected into another when a matching route is navigated.  : till :11:30.

### :rocket: Case Study Lab 1 
### Angular Core: Device Catalog & Profile Management

---

#### :dart: User Story

> As an engineer, I want to view the list of connected devices, edit their configurations (like refresh rate and telemetry settings), and update the data through a REST API backend, so that I can manage device settings remotely.

---

#### :bulb: Learning Objectives

- **Fetch Data from REST API:** Learn how to consume data from an external REST API using Angular's HttpClient.
- **Display Data Dynamically:** Display device data dynamically in the form of a table, using `ngFor` to iterate over devices.
- **Create Forms to Edit Device Data:** Implement a dynamic form using Angular’s Reactive Forms to update device configurations like `refreshRate` and `sendTelemetry`.
- **Submit Data Back to the Server:** Once changes are made in the form, submit the data back to the backend and update the device configuration.

---

#### :gear: Prerequisites

- Angular and `json-server` (or a similar mock backend) are set up as the data source.
- Basic usage of Angular services and HTTP client to interact with REST APIs.

---

#### :triangular_ruler: Tasks

##### Step 1: Device Catalog View

- **Fetch Devices from API:** Make an HTTP GET request to retrieve the list of devices from the backend.
- **Display Devices:** Use Angular’s `ngFor` directive to display the device name, status, location, and firmware version in a table.
- **View Device Profile:** When clicking on a device, navigate to the device profile form for editing.

##### Step 2: Device Profile Form

- **Fetch Device Data:** Fetch the selected device’s data via an API request when the engineer clicks the "Edit" button.
- **Populate Form:** Use Angular's Reactive Forms to create an editable form where fields like `refreshRate` and `sendTelemetry` can be updated.
- **Submit Changes:** When the form is submitted, update the backend with the new device configurations by making an HTTP PUT request.

##### Step 3: Data Validation and Saving

- **Form Validation:** Ensure that the input fields are validated (e.g., ensuring `refreshRate` is within a valid range).
- **Submit Data to Backend:** Once the form is validated, submit the updated device data to the REST API backend to persist the changes.

---

#### :brain: User Flow

1. Engineer logs in to the application (already set up in Lab 1).
2. Device Catalog displays a list of devices fetched from the backend.
3. The engineer clicks "Edit" next to a device.
4. The Device Profile Form is displayed with existing data (fetched from the backend).
5. The engineer makes changes (e.g., updates the `refreshRate`, toggles `sendTelemetry`), then submits the form.
6. The updated data is sent to the backend using a PUT request and saved in the database.

---

#### :white_check_mark: Expected Outcome

By the end of this lab, learners will:

- **Understand how to interact with a REST API to fetch and update data.**
- **Be able to display a dynamic list of devices in the catalog.**
- **Be comfortable with Angular Reactive Forms for data editing.**
- **Know how to handle form validation and submit data to the backend.**

---

#### :test_tube: Bonus Challenges

- :warning: **Implement error handling** in case the device update fails (e.g., network issues, invalid data).
- **Add loading indicators** when fetching data from the API.
- **Implement pagination or filtering** for large device catalogs.

---

#### :shield: Sample JSON Data for Backend (Mock API)

```json
{
  "devices": [
    {
      "id": "dev123",
      "name": "Smart Sensor 1",
      "status": "online",
      "location": "Building 5 - Floor 2",
      "lastSeen": "2025-07-01T09:45:00Z",
      "firmwareVersion": "1.2.3",
      "type": "sensor",
      "tags": ["iot", "sensor", "smart"],
      "config": {
        "refreshRate": 30,
        "sendTelemetry": true
      }
    },
    {
      "id": "dev124",
      "name": "Smart Camera 2",
      "status": "offline",
      "location": "Building 3 - Floor 1",
      "lastSeen": "2025-07-01T08:30:00Z",
      "firmwareVersion": "1.0.0",
      "type": "camera",
      "tags": ["iot", "camera", "security"],
      "config": {
        "refreshRate": 60,
        "sendTelemetry": false
      }
    }
  ]
}
```

---

This lab gives learners a hands-on understanding of working with RESTful APIs in Angular, making it highly applicable to real-world use cases in device management systems like those Qualcomm would use.