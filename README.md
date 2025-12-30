# 🚀 My First Portfolio

Chào mừng bạn đến với dự án đầu tay trong hành trình học Front-end của mình! Đây không chỉ là một trang web giới thiệu bản thân mà còn là dấu ấn riêng trên hành trình phát triển của mình: https://kh0a.netlify.app/ 

## 🌟 Tổng quan dự án
Đây là một trang **Single Page Application (SPA)** cơ bản, được thiết kế với phong cách tối giản, sử dụng bảng màu trầm ấm (Xám hồng & Cam pastel) để tạo cảm giác dễ chịu cho người dùng.

- **Chủ nhân dự án:** Nguyễn Trương Văn Khoa (Khoa Nguyễn).
- **Mục tiêu:** Giới thiệu kỹ năng, các sản phẩm đã thực hiện và tạo kênh liên hệ trực tiếp.

## ✨ Các tính năng nổi bật
Dự án tích hợp nhiều hiệu ứng tương tác giúp giao diện sinh động và chuyên nghiệp:

### 1. Hiệu ứng giao diện (UI/UX)
- **Typing Effect:** Hiệu ứng gõ chữ tự động nội dung "Hi, It's KhoaNguyn" ngay khi tải trang.
- **Scroll Reveal:** Các khối nội dung (`div`) sẽ tự động trượt lên và hiển thị khi người dùng cuộn chuột tới.
- **Intro Animation:** Sử dụng hiệu ứng `slideOut` để màn hình chào (Banner) trượt ra, để lộ nội dung chính sau khi hoàn tất tải trang.
- **Responsive Design:** Giao diện tương thích hoàn toàn với điện thoại, máy tính bảng và PC thông qua các điểm ngắt (media queries) tại 1200px, 991px, 768px và 400px.

### 2. Chức năng tương tác
- **Trình phát nhạc:** Tích hợp nút Play/Pause nhạc nền trực tiếp trên giao diện.
- **Form liên hệ:** Kết nối gửi tin nhắn qua Google Apps Script kèm thông báo xác nhận: "Đã Nhận Được Tin Nhắn Của Bạn 💌".
- **Smooth Scroll:** Điều hướng mượt mà giữa các mục Home, About, Projects... nhờ thuộc tính `scroll-behavior: smooth`.

## 🛠 Chi tiết kỹ thuật (Technical Stack)
Mình đã áp dụng các kiến thức cốt lõi để xây dựng nên sản phẩm này:

- **HTML5 Semantic:** Sử dụng thẻ meta tối ưu SEO (description, keywords) và các thẻ cấu trúc chuẩn như `header`, `section`, `footer`.
- **CSS3 Advanced:**
  - Sử dụng hệ thống **CSS Variables** (`:root`) để quản lý bảng màu đồng nhất.
  - Các hiệu ứng **Keyframes Animation** như `glow` (phát sáng), `gradientShift` (chuyển màu chữ) và `appear`.
  - Tận dụng `backdrop-filter: blur` tạo hiệu ứng kính mờ cho thanh điều hướng.
- **Pure JavaScript:** Tự viết logic cho menu di động, hiệu ứng gõ chữ và xử lý sự kiện cuộn trang.

## 📁 Cấu trúc thư mục chính
```
Portfolio/
├── index.html       # Cấu trúc nội dung chính của trang
├── style.css        # Định dạng giao diện và hiệu ứng
├── script.js        # Xử lý logic và tương tác
├── Blog/            # Thư mục chứa bài viết chia sẻ
├── Project/         # Các dự án nhỏ đi kèm (Snake Game, Profile Card)
└── assets/          # Chứa hình ảnh (Banner, QR...), âm thanh và icon
```
## 📈 Những điểm mình tự hào
- ✅ **Thiết kế UI cá nhân hóa:** Tự xây dựng hệ thống màu sắc riêng biệt (Xám hồng & Cam hồng pastel), mang lại cảm giác hài hòa và dịu mắt cho người xem.
- ✅ **Tối ưu hóa mã nguồn:** Sử dụng **CSS Variables** giúp quản lý code khoa học, dễ dàng bảo trì hoặc thay đổi chủ đề giao diện sau này.
- ✅ **Trải nghiệm tương tác:** Tích hợp thành công thư viện **Boxicons**, giúp các thành phần điều hướng trở nên trực quan và sinh động hơn.

## 📈 Những điểm cảm thấy cần khắc phục
- ❌ **Phân bố code và thư mục chưa thật sự hợp lý: ** Code nhìn trông khá rối mắt, có nhiều cấu trúc lồng nhau. Thư mục đặt tên chưa thật sự hợp lý.
- ❌ **Công nghệ dùng khá hạn chế: ** Sử dụng hầu như là thuần HTML, CSS, JS và các cấu trúc dùng là góp nhặt lại. Chưa đạt được sự thống nhất.
- ❌ **Hiệu ứng load trang: ** Đây là mình cảm thấy tiếc nhất vì phần tử calendar load trang của mình không thật sự mượt mà, dễ thấy nhất là trong lần tải trang đầu tiên, do các tài nguyên bị tải cùng lúc và hiệu ứng chuyển animation làm cho thanh slide calendar không lấp đầy màn hình -> Tạo cảm giác 'khựng' không được mượt mà.


## 🌱 Định hướng phát triển (Roadmap)
- [ ] **Performance:** Tối ưu hóa dung lượng hình ảnh để tăng tốc độ phản hồi và đạt điểm số hiệu năng cao hơn trên PageSpeed.
- [ ] **Modern Tech:** Học hỏi thêm các Framework để quản lý các thành phần (components) chuyên nghiệp hơn.
- [ ] **Smooth Animation:** Tiếp tục trau chuốt các hiệu ứng chuyển động để đạt độ mượt mà tuyệt đối trên mọi trình duyệt và thiết bị.

## 📫 Kết nối với mình
Nếu bạn có bất kỳ góp ý hay muốn trao đổi về dự án, đừng ngần ngại liên hệ với mình qua:

- 📘 **Facebook:** [Khoa Đang Nghỉ Hè](https://www.facebook.com/share/1ASMNTqMNv/)
- 📸 **Instagram:** [@vankhoant01](https://www.instagram.com/vankhoant01/)
- 🐙 **GitHub:** [MeoCam-lazy](https://github.com/MeoCam-lazy)

---
*Dự án được thực hiện bởi **Nguyễn Trương Văn Khoa** — "Đại Sứ Sen Đá" 🌵*
