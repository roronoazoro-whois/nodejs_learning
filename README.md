- npm init: Lệnh npm init được sử dụng để khởi tạo một dự án Node.js mới bằng cách tạo một file package.json. File này chứa thông tin về dự án, bao gồm tên, phiên bản, mô tả, các phụ thuộc (dependencies), và các script.

- npm i express -> cài đặt thư viện express js

- web browser: http://localhost:3000/
  -> đồng nghĩa với gửi một get http request đến server nodejs

- Thư viện Nodemon -> debug
  - Hổ trợ restart lại ứng dụng nodejs khi có thay đổi
  - npm install -g nodemon
  - "scripts": {
    "start": "nodemon --inspect index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
    }
  - npm start

- Thư viện morgan:
  + Logger http request 
  + npm i morgan --save-dev

- Template engine (handlebars): giúp viết code html, css trong trường hợp này
  + npm install express-handlebars

- npm install node-sass --save-dev
  + npm run watch

- Các HTTP METHODS:
  + GET: xảy ra mặc định khi dùng web browser truy cập vào một url, thẻ a,... 
    *Query parameters: https://example.com/products?category=shoes&sort=price_asc (sau dấu ?, ngăng cách nhau bởi &, key = value)
    -> category=shoes&sort=price_asc
    *METHODS nào cũng dùng được Query param nhưng thường dùng ở GET METHOD, các METHODS khác thường có cách truyền dữ liệu riêng
  + POST: gửi dữ liệu từ client -> server
    *Không được gửi đi dưới dạng query param mà thay vào đó là Form Data và không nhìn thấy được ở URL

- Cài đặt: npm i prettier lint-staged husky --save-dev
- Nosql (Mongodb):
  + Collection <=> Table
    * Trong Collection có các Documents, ví dụ mỗi khóa học trong Collections Courses gọi là Documents, các Documents có thể không cùng khuôn với nhau
    -> Ưu điểm: linh hoạt
    -> Nhược điểm: thiếu chặt chẽ (thư viện Mongoose sẽ giải quyết vấn đề này: quản lí các documents dưới dạng object, khi đó không cần cài mongodb)
