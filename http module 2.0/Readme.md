# HTTP HEADER

HTTP headers are components of the HTTP protocol that allow the client and the server to pass additional information with an HTTP request or response. These headers provide crucial metadata about the message being sent, which helps in various aspects of communication and processing between the client (usually a web browser or an API consumer) and the server (which hosts the web application or API).

## Types of HTTP Headers

### 1. Request Headers

Request headers are sent by the client to the server along with an HTTP request. They typically include information such as:

- **Host**: Specifies the domain name of the server.
- **User-Agent**: Provides information about the client making the request (e.g., browser type).
- **Accept**: Informs the server about the types of content the client can accept (e.g., JSON, HTML).
- **Authorization**: Contains credentials for authenticating the client with the server (e.g., OAuth tokens, Basic Auth credentials).
- **Cookie**: Contains previously stored cookies sent by the server to the client.
- **Content-Type**: Indicates the media type of the request body (e.g., application/json, text/plain).

### 2. Response Headers

Response headers are sent by the server to the client along with an HTTP response. They include information such as:

- **Content-Type**: Specifies the media type of the response body sent to the client (e.g., application/json, text/html).
- **Cache-Control**: Directives to control caching behavior (e.g., no-cache, max-age).
- **Set-Cookie**: Sets a cookie on the client's browser for subsequent requests.
- **Content-Length**: Specifies the size of the response body in bytes.
- **Location**: Used in redirect responses (3xx status codes) to specify the new location for the requested resource.
- **Access-Control-Allow-Origin**: Specifies which origins are allowed to access the resource in cross-origin requests (CORS).

---

# SETHEADER

- In Node.js, res.setHeader is a method used to set an HTTP header for the response. It allows you to define custom headers or override default headers before sending the response back to the client.

---

# RES.END()

- In Node.js, res.end is a method used to signal the end of the response. It is a key part of the HTTP response lifecycle and is used to indicate that the server has finished sending data to the client. This method can optionally take a string or a Buffer argument, which will be sent as the final part of the response body.

---

# RES.ON()

- In Node.js, `res.on` is a method used to attach event listeners to an HTTP response object (`res`). This method is particularly useful when working with the low-level HTTP module and needing to handle various stages of the response lifecycle.

### Available Events:

#### 'data' Event:

- **Description**: Emitted when a chunk of data is received in the response body. Useful for handling streaming data.
- **Usage**: Process the received data as it arrives.

#### 'end' Event:

- **Description**: Emitted when the entire response has been received. Signifies the end of the data stream.
- **Usage**: Perform final processing or trigger actions dependent on complete data reception.

#### 'error' Event:

- **Description**: Emitted when there is an error receiving the response. Helps manage network errors or other issues during the request.
- **Usage**: Handle errors gracefully and manage fallback strategies.

#### 'aborted' Event:

- **Description**: Emitted when the request is aborted by the client or server.
- **Usage**: Useful for cleanup operations or logging when a request is unexpectedly aborted.

#### 'close' Event:

- **Description**: Emitted when the underlying connection is closed.
- **Usage**: Helpful for cleanup tasks or resource management after the connection is terminated.
