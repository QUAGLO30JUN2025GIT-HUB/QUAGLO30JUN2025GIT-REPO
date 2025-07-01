# :rocket: Developer Reference Sheet

A comprehensive conceptual map of Angular, related technologies, and surrounding ecosystems—designed for ongoing reference and context.

---

### :triangular_ruler: 1. Application Foundations

#### :bulb: Types of Applications

- **Console App**: Text-based user interface.
- **GUI**: Graphical User Interface apps.
- **Java **: Backend and desktop programming language used in enterprise-grade applications.

#### :gear: Specifications

- **JSR (Java Specification Request)**: Java platform standardization blueprint.

---

### :dart: 2. Web Ecosystem Overview

#### :gear: Core Technologies

| Tech           | Description                                      |
|----------------|--------------------------------------------------|
| HTML / CSS / JS| Web development triad for content, styling, logic|
| DOM / CSSOM    | APIs for document structure & style manipulation |

#### :shield: Standards Organizations

- **W3C** – World Wide Web Consortium
- **IETF** – Internet Engineering Task Force
- **WHATWG** – Web Hypertext Application Technology Working Group

---

### :test_tube: 3. Web Development Evolution

#### :gear: Tools & Shifts

| Tool         | Purpose                                         |
|--------------|-------------------------------------------------|
| jQuery       | Simplified JavaScript and DOM manipulation      |
| Bootstrap    | UI framework with responsive grid and components|
| Raw DOM | Direct DOM manipulation, now minimized for performance & abstraction |

---

### :rocket: 4. Angular Framework Evolution

#### :warning: AngularJS (1.x)

- Early single-page app framework
- Based on MVC
- Relied on `$scope` and two-way binding
- Faced issues with scope inheritance and maintainability

#### :white_check_mark: Angular (2+)

- Complete rewrite of AngularJS
- Built with TypeScript
- Component-based architecture
- Uses modules, services, and DI (Dependency Injection)
- Supports RxJS for reactive programming

---

### :brain: 5. Angular Concepts & Terminology

#### :bulb: Key Concepts

| Concept             | Description                          |
|---------------------|--------------------------------------|
| Component           | Self-contained UI + behavior block   |
| Service             | Business logic or shared utility     |
| Module              | Group of related components/services |
| Entity              | Data model or domain object          |
| Repository          | Data access abstraction              |
| Dependency Injection| Built-in support for loose coupling  |
| Routing             | Navigation between views or pages    |
| Core Module         | Application-wide singleton services  |

---

### :gear: 6. Framework vs Component Model

#### :gear: Framework

- Structure for building complete apps
- Often includes:
  - **MVC** (Model-View-Controller)
  - **ORM** (Object-Relational Mapping)

#### :gear: Component

- Reusable piece of UI logic
- Loosely coupled — usable in different modules
- Can include:
  - HTML template
  - Styling
  - Logic (TypeScript class)

---

### :white_check_mark: 7. Modular Reuse Pattern

#### :test_tube: Example: Reusability via Components

| Context      | Component Used   |
|--------------|------------------|
| Video Module | CommentComponent |
| Blog Module  | LikeComponent    |

#### :bulb: Analogy

- **Component** = SIM Card (works in many phones)
- **Application Context** = Mobile Brand (Samsung, OPPO, etc.)

---

### :triangular_ruler: 8. Folder Structure Convention

```plaintext
/core
  └── services/         # Business logic
  └── repositories/     # Data access logic
  └── entities/         # Interfaces/models
  └── core.module.ts    # Core app-wide providers

/components
  └── like/
  └── comment/
```

---

### :dart: 9. Terminology Index

| Term         | Meaning                      |
|--------------|-----------------------------|
| Component    | Reusable UI unit            |
| Service      | Shared logic or functionality|
| Repository   | Data abstraction layer      |
| Entity       | Domain object               |
| DOM/CSSOM    | Web interface APIs          |
| JSR          | Java API specification      |
| Bootstrap/jQuery | Early tools for web UI and JS abstraction |

---

### :rocket: Summary

- **This reference encapsulates the evolution, structure, and modular philosophy of Angular within the broader web ecosystem.**
- **It also aligns Angular’s component-oriented mindset with reusable patterns and core software engineering principles—making it relevant for frontend developers, architects, and backend integrators alike.**