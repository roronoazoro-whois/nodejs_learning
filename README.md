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
