# High-level and low-level api

- Low-Level APIs: When you need high performance and fine control, like in a game engine.
- High-Level APIs: When you need to get something working quickly and don’t need as much control, like a simple web app.

# Reading in a low key api has following parameter

- fd: File descriptor returned by fs.open() method.
- buffer: Stores the data fetched from the file.
- offset: Offset in the buffer indicating where to start writing.
- length: An integer that specifies the number of bytes to read.
- position: An integer that specifies where to begin reading from in the file. If the position is null, data is read from the current file position.
- callback: The callback function accepts the three arguments ie. (err, bytesRead, buffer).
  - err: An Error object is provided if an error occurs during the read operation. Otherwise, it is null.
  - bytesRead: The number of bytes read from the file.
  - buffer: The buffer object passed to the method, filled with the data read from the file.
