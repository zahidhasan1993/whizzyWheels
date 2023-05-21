import React from "react";
import { TabTitle } from "../changeTitle";

const Blogs = () => {
  TabTitle("Blogs | WheezyWheels");
  return (
    <div className="my-14">
      <h1 className="text-2xl font-bold text-amber-700 mb-6">
        1. What is an access token and refresh token? How do they work and where
        should we store them on the client-side?
      </h1>

      <p className="text-gray-500 mb-6">
        An access token is a credential used by a client to access protected
        resources on behalf of a user. It represents the authorization granted
        to the client by the resource owner and is used to authenticate
        subsequent requests to the server. Access tokens typically have a
        limited lifespan and need to be periodically refreshed. <br />A refresh
        token is a credential used to obtain a new access token without the need
        for the user to reauthenticate. It is issued alongside the access token
        and has a longer lifespan. When the access token expires, the client can
        use the refresh token to obtain a new access token from the server.{" "}
        <br />
        When a user logs in or grants authorization to a client application, an
        access token and a refresh token are issued by the authentication
        server. The access token is sent with each request to the server's
        protected resources, proving the user's authorization. If the access
        token expires, the client can use the refresh token to request a new
        access token from the authentication server without requiring the user
        to log in again.
      </p>

      <h1 className="text-2xl font-bold text-amber-700 mb-6">
        2. Compare SQL and NoSQL databases?
      </h1>

      <p className="text-gray-500 mb-6">
        SQL Databases: Structure: SQL databases use a structured and predefined
        schema. Data Model: Relational data model with tables, rows, and
        columns. Query Language: SQL (Structured Query Language) is used to
        query and manipulate data. Scalability: Vertical scalability is common,
        with limited horizontal scalability options. ACID Compliance: Strong
        ACID (Atomicity, Consistency, Isolation, Durability) guarantees. Use
        Cases: Well-suited for complex transactions, structured data, and
        maintaining data integrity. NoSQL Databases: Structure: NoSQL databases
        have a flexible schema or schemaless design. Data Model: Non-relational
        data models like key-value, document, columnar, or graph. Query
        Language: Varies across different NoSQL databases (e.g., MongoDB uses a
        JSON-like query language). Scalability: Designed for horizontal
        scalability, enabling distributed and large-scale deployments. ACID
        Compliance: NoSQL databases often prioritize availability and
        scalability over strong ACID guarantees. Use Cases: Well-suited for
        unstructured or semi-structured data, high scalability, and agility.
        Overall, SQL databases excel in handling structured data, complex
        relationships, and maintaining data integrity, making them suitable for
        applications with strict consistency requirements. NoSQL databases, on
        the other hand, provide more flexibility, scalability, and performance
        for handling unstructured or rapidly changing data, making them ideal
        for scenarios like big data, real-time analytics, and agile development.
      </p>

      <h1 className="text-2xl font-bold text-amber-700 mb-6">
        3. What is express js? What is Nest JS?
      </h1>

      <p className="text-gray-500 mb-6">
        Express.js is a popular web application framework for Node.js. It
        provides a minimal and flexible set of features for building web
        applications and APIs. Express.js allows developers to handle HTTP
        requests and responses, define routes, manage middleware, and implement
        server-side logic efficiently. It is known for its simplicity,
        lightweight nature, and extensive ecosystem of middleware and
        extensions, making it a widely adopted choice for building web
        applications in Node.js. NestJS, on the other hand, is a framework for
        building scalable and maintainable server-side applications using
        TypeScript or JavaScript. It is built on top of Express.js and takes
        inspiration from Angular, leveraging concepts such as modules,
        decorators, and dependency injection. NestJS provides a structured and
        opinionated architecture that encourages best practices and code
        organization. It offers features like routing, middleware, dependency
        injection, database integration, authentication, and more, making it
        well-suited for building complex, enterprise-grade applications. NestJS
        supports both monolithic and microservices architectures, making it
        adaptable to various project sizes and requirements. In summary,
        Express.js is a minimalistic and flexible web application framework for
        Node.js, while NestJS builds upon Express.js to provide a structured and
        opinionated framework for building scalable and maintainable server-side
        applications.
      </p>

      <h1 className="text-2xl font-bold text-amber-700 mb-6">
        4. What is MongoDB aggregate and how does it work?
      </h1>

      <p className="text-gray-500 mb-6">
        In MongoDB, the aggregate framework is a powerful feature that allows
        for advanced data processing and analysis. The aggregate method in
        MongoDB performs data aggregation operations on a collection and returns
        computed results. It can perform various operations, such as filtering,
        grouping, sorting, joining, and transforming data. The MongoDB aggregate
        framework works on the principle of a pipeline. The pipeline consists of
        multiple stages, each representing a specific operation or
        transformation to be applied to the data. The stages are executed in
        order, and the output of one stage serves as the input for the next
        stage.
      </p>
    </div>
  );
};

export default Blogs;
