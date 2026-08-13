// ===== Car Data - 19 Models with VND Pricing =====
// Exchange rate: 1万 RMB ≈ 3500万 VND (1 RMB ≈ 3500 VND)

const cars = [
    {
        id: 1, name: "BYD Atto 2 301KM", nameCn: "元UP智驾版 301KM领航型", nameVn: "BYD Atto 2 301KM",
        type: "BEV", body: "suv", range: "301km", power: "70kW", battery: "Blade Battery 32kWh",
        fob: 8.94, market: 13.35, vndFob: 313, vndMarket: 467, sold: 86,
        tag: "hot", desc: "SUV điện phổ thông, giá rẻ nhất phân khúc",
        descLong: "BYD Atto 2 (元UP) là mẫu SUV điện nhỏ gọn, được thiết kế dành riêng cho thị trường thành thị. Với giá FOB chỉ 8.94万 nhân dân tệ (~313 triệu VNĐ), đây là mẫu xe điện hợp lý nhất trên thị trường Việt Nam, rẻ hơn 30% so với đại lý chính hãng. Xe đã có chứng nhận VTA, thông quan dễ dàng.",
        img: "https://aka.doubaocdn.com/s/zwRYAhAIaz",
        gallery: [["https://aka.doubaocdn.com/s/zwRYAhAIaz"]],
        specs: {"Kích thước":"4310×1830×1675mm","Chiều dài cơ sở":"2620mm","Quãng đường CLTC":"301km","Công suất động cơ":"70kW (95 mã lực)","Mô-men xoắn":"180Nm","Dung lượng pin":"32kWh","Loại pin":"Blade Battery (LFP)","Sạc nhanh DC":"30%-80% trong 30 phút","Sạc chậm AC":"6.6kW","Tốc độ tối đa":"150km/h","0-100km/h":"~10 giây","Số chỗ ngồi":"5 chỗ"},
        features: ["Màn hình trung tâm 12.8 inch","Đèn LED toàn xe","Camera 360 độ","Cảnh báo điểm mù","Giữ làn đường","Phanh khẩn cấp tự động","Điều hòa tự động","Lốp 16 inch","Khe cắm sạc Type 2","Khởi động không chìa khóa"],
        competitor: { name: "VinFast VF 5", price: 14.2, range: "300km" }
    },
    {
        id: 2, name: "BYD Atto 2 401KM", nameCn: "元UP智驾版 401KM活力型", nameVn: "BYD Atto 2 401KM",
        type: "BEV", body: "suv", range: "401km", power: "70kW", battery: "Blade Battery 45kWh",
        fob: 11.08, market: 16.38, vndFob: 388, vndMarket: 573, sold: 52,
        tag: "", desc: "SUV điện phổ thông, quãng đường dài hơn",
        descLong: "Phiên bản cao cấp của Atto 2 với dung lượng pin lớn hơn 45kWh, cho quãng đường lên đến 401km theo chuẩn CLTC. Phù hợp cho những người cần quãng đường di chuyển xa hơn mà vẫn muốn sở hữu một chiếc xe điện giá hợp lý.",
        img: "https://aka.doubaocdn.com/s/zwRYAhAIaz",
        gallery: [["https://aka.doubaocdn.com/s/zwRYAhAIaz"]],
        specs: {"Kích thước":"4310×1830×1675mm","Chiều dài cơ sở":"2620mm","Quãng đường CLTC":"401km","Công suất động cơ":"70kW (95 mã lực)","Mô-men xoắn":"180Nm","Dung lượng pin":"45kWh","Loại pin":"Blade Battery (LFP)","Sạc nhanh DC":"30%-80% trong 30 phút","Sạc chậm AC":"6.6kW","Tốc độ tối đa":"150km/h","0-100km/h":"~10 giây","Số chỗ ngồi":"5 chỗ"},
        features: ["Màn hình trung tâm 12.8 inch","Đèn LED toàn xe","Camera 360 độ","Cảnh báo điểm mù","Giữ làn đường","Phanh khẩn cấp tự động","Điều hòa tự động","Lốp 16 inch","Khe cắm sạc Type 2","Khởi động không chìa khóa"],
        competitor: { name: "VinFast VF 5 Plus", price: 15.1, range: "350km" }
    },
    {
        id: 3, name: "BYD Atto 3 510KM", nameCn: "第二代元PLUS智驾版 510KM领先型", nameVn: "BYD Atto 3 510KM",
        type: "BEV", body: "suv", range: "510km", power: "150kW", battery: "Blade Battery 60.5kWh",
        fob: 14.92, market: 21.82, vndFob: 522, vndMarket: 764, sold: 120,
        tag: "best", desc: "SUV điện bán chạy nhất, đã có mặt tại Việt Nam",
        descLong: "BYD Atto 3 (元PLUS) là mẫu SUV điện cỡ紧凑 bán chạy nhất của BYD tại thị trường quốc tế. Với quãng đường 510km, công suất 150kW và thiết kế hiện đại, đây là lựa chọn hoàn hảo cho gia đình. Xe đã được phân phối chính hãng tại Việt Nam, có sẵn mạng lưới bảo hành.",
        img: "https://aka.doubaocdn.com/s/FhJW2dpNYJ",
        gallery: [["https://aka.doubaocdn.com/s/FhJW2dpNYJ"]],
        specs: {"Kích thước":"4455×1875×1615mm","Chiều dài cơ sở":"2720mm","Quãng đường CLTC":"510km","Công suất động cơ":"150kW (201 mã lực)","Mô-men xoắn":"310Nm","Dung lượng pin":"60.5kWh","Loại pin":"Blade Battery (LFP)","Sạc nhanh DC":"30%-80% trong 30 phút","Sạc chậm AC":"7kW","Tốc độ tối đa":"160km/h","0-100km/h":"7.3 giây","Số chỗ ngồi":"5 chỗ"},
        features: ["Màn hình trung tâm 12.8 inch xoay được","Đèn LED matrix","Camera 360 độ","Cảnh báo điểm mù","Giữ làn đường chủ động","Phanh khẩn cấp tự động","Điều hòa tự động 2 vùng","Lốp 18 inch","Khe cắm sạc Type 2","Ghế da tổng hợp","Cửa sổ trời","Âm thanh 8 loa"],
        competitor: { name: "VinFast VF 7", price: 22.5, range: "450km" }
    },
    {
        id: 4, name: "BYD Qin Plus DM-i 128KM", nameCn: "2026款秦PLUS DM-i 128KM进取型", nameVn: "BYD Qin Plus DM-i 128KM",
        type: "DM-i", body: "sedan", range: "128km (điện)", power: "1.5L", battery: "DM-i 5.0 18kWh",
        fob: 9.59, market: 18.26, vndFob: 336, vndMarket: 639, sold: 95,
        tag: "", desc: "Sedan lai sạc, tổng hợp 1200km+, tiết kiệm nhiên liệu",
        descLong: "BYD Qin Plus DM-i là mẫu sedan lai cắm điện bán chạy nhất Trung Quốc. Với công nghệ DM-i 5.0 thế hệ mới, xe có quãng đường chạy điện 128km và tổng hợp lên đến 1200km. Mức tiêu thụ nhiên liệu chỉ 2.9L/100km, cực kỳ tiết kiệm. Đây là mẫu xe độc quyền, không bán chính hãng tại Việt Nam.",
        img: "https://aka.doubaocdn.com/s/HaQsVAMJWv",
        gallery: [["https://aka.doubaocdn.com/s/HaQsVAMJWv"]],
        specs: {"Kích thước":"4765×1837×1495mm","Chiều dài cơ sở":"2718mm","Quãng đường điện":"128km (CLTC)","Quãng đường tổng hợp":"1200km+","Động cơ xăng":"1.5L 101 mã lực","Động cơ điện":"120kW (163 mã lực)","Dung lượng pin":"18kWh","Loại pin":"Blade Battery (LFP)","Mức tiêu thụ":"2.9L/100km","Sạc nhanh DC":"30%-80% trong 30 phút","Hộp số":"E-CVT","Số chỗ ngồi":"5 chỗ"},
        features: ["Màn hình trung tâm 10.1 inch","Đèn LED toàn xe","Camera lùi","Cảm biến khoảng cách","Điều hòa tự động","Khởi động không chìa khóa","Ghế vải cao cấp","Lốp 16 inch","Hỗ trợ đi lên dốc","Phanh điện tử giữ xe"],
        competitor: { name: "Toyota Corolla Cross Hybrid", price: 22.0, range: "Hybrid" }
    },
    {
        id: 5, name: "BYD Qin Plus DM-i 210KM", nameCn: "2026款秦PLUS DM-i 210KM进取型", nameVn: "BYD Qin Plus DM-i 210KM",
        type: "DM-i", body: "sedan", range: "210km (điện)", power: "1.5L", battery: "DM-i 5.0 26kWh",
        fob: 10.89, market: 20.63, vndFob: 381, vndMarket: 722, sold: 68,
        tag: "", desc: "Sedan lai sạc, quãng đường điện 210km",
        descLong: "Phiên bản cao cấp của Qin Plus DM-i với dung lượng pin lớn hơn 26kWh, cho quãng đường chạy điện lên đến 210km. Với quãng đường này, hầu hết các chuyến đi hàng ngày có thể hoàn toàn bằng điện, không cần dùng xăng. Tổng hợp quãng đường lên đến 1400km.",
        img: "https://aka.doubaocdn.com/s/HaQsVAMJWv",
        gallery: [["https://aka.doubaocdn.com/s/HaQsVAMJWv"]],
        specs: {"Kích thước":"4765×1837×1495mm","Chiều dài cơ sở":"2718mm","Quãng đường điện":"210km (CLTC)","Quãng đường tổng hợp":"1400km+","Động cơ xăng":"1.5L 101 mã lực","Động cơ điện":"120kW (163 mã lực)","Dung lượng pin":"26kWh","Loại pin":"Blade Battery (LFP)","Mức tiêu thụ":"2.9L/100km","Sạc nhanh DC":"30%-80% trong 30 phút","Hộp số":"E-CVT","Số chỗ ngồi":"5 chỗ"},
        features: ["Màn hình trung tâm 12.8 inch","Đèn LED toàn xe","Camera 360 độ","Cảm biến khoảng cách","Điều hòa tự động","Khởi động không chìa khóa","Ghế da tổng hợp","Lốp 17 inch","Cửa sổ trời","Phanh điện tử giữ xe"],
        competitor: { name: "Toyota Corolla Altis Hybrid", price: 23.3, range: "Hybrid" }
    },
    {
        id: 6, name: "BYD Qin Plus EV 510KM", nameCn: "第二代秦PLUS EV智驾版510KM进取型", nameVn: "BYD Qin Plus EV 510KM",
        type: "BEV", body: "sedan", range: "510km", power: "100kW", battery: "Blade Battery 57kWh",
        fob: 12.64, market: 18.59, vndFob: 442, vndMarket: 651, sold: 73,
        tag: "new", desc: "Sedan điện, quãng đường 510km",
        descLong: "BYD Qin Plus EV là phiên bản thuần điện của dòng Qin Plus. Với thiết kế sedan thể thao, quãng đường 510km và giá hợp lý, đây là lựa chọn tuyệt vời cho những người thích kiểu dáng sedan. Xe thế hệ thứ hai được nâng cấp về công nghệ và thiết kế.",
        img: "https://aka.doubaocdn.com/s/Ox5Ydjkwmo",
        gallery: [["https://aka.doubaocdn.com/s/Ox5Ydjkwmo"]],
        specs: {"Kích thước":"4765×1837×1515mm","Chiều dài cơ sở":"2718mm","Quãng đường CLTC":"510km","Công suất động cơ":"100kW (136 mã lực)","Mô-men xoắn":"180Nm","Dung lượng pin":"57kWh","Loại pin":"Blade Battery (LFP)","Sạc nhanh DC":"30%-80% trong 30 phút","Sạc chậm AC":"7kW","Tốc độ tối đa":"150km/h","0-100km/h":"~9 giây","Số chỗ ngồi":"5 chỗ"},
        features: ["Màn hình trung tâm 12.8 inch","Đèn LED toàn xe","Camera 360 độ","Cảnh báo điểm mù","Giữ làn đường","Phanh khẩn cấp tự động","Điều hòa tự động","Lốp 17 inch","Ghế da tổng hợp","Khởi động không chìa khóa"],
        competitor: { name: "VinFast VF 6", price: 19.7, range: "400km" }
    },
    {
        id: 7, name: "BYD Qin L DM-i 128KM", nameCn: "2026款秦L DM-i 128KM进取型", nameVn: "BYD Qin L DM-i 128KM",
        type: "DM-i", body: "sedan", range: "128km (điện)", power: "1.5L", battery: "DM-i 5.0 18kWh",
        fob: 11.13, market: 21.07, vndFob: 390, vndMarket: 737, sold: 45,
        tag: "", desc: "Sedan lai sạc cao cấp, thiết kế mới",
        descLong: "BYD Qin L là mẫu sedan cỡ trung thế hệ mới, với thiết kế thể thao và công nghệ DM-i 5.0. Xe có kích thước lớn hơn Qin Plus, mang lại không gian nội thất rộng rãi hơn. Đây là mẫu xe độc quyền, không bán chính hãng tại Việt Nam.",
        img: "https://aka.doubaocdn.com/s/bWMQdjWt2z",
        gallery: [["https://aka.doubaocdn.com/s/bWMQdjWt2z"]],
        specs: {"Kích thước":"4830×1900×1495mm","Chiều dài cơ sở":"2790mm","Quãng đường điện":"128km (CLTC)","Quãng đường tổng hợp":"1200km+","Động cơ xăng":"1.5L 101 mã lực","Động cơ điện":"120kW (163 mã lực)","Dung lượng pin":"18kWh","Loại pin":"Blade Battery (LFP)","Mức tiêu thụ":"2.9L/100km","Sạc nhanh DC":"30%-80% trong 30 phút","Hộp số":"E-CVT","Số chỗ ngồi":"5 chỗ"},
        features: ["Màn hình trung tâm 12.8 inch xoay được","Đèn LED matrix","Camera 360 độ","Cảnh báo điểm mù","Giữ làn đường chủ động","Phanh khẩn cấp tự động","Điều hòa tự động 2 vùng","Lốp 17 inch","Ghế da tổng hợp","Khởi động không chìa khóa","Cửa sổ trời"],
        competitor: { name: "Toyota Camry Hybrid", price: 30.0, range: "Hybrid" }
    },
    {
        id: 8, name: "BYD Qin L DM-i 128KM Premium", nameCn: "2026款秦L DM-i 128KM领先型", nameVn: "BYD Qin L DM-i 128KM Premium",
        type: "DM-i", body: "sedan", range: "128km (điện)", power: "1.5L", battery: "DM-i 5.0 18kWh",
        fob: 12.36, market: 23.31, vndFob: 433, vndMarket: 816, sold: 38,
        tag: "", desc: "Sedan lai sạc cao cấp, đầy đủ trang bị",
        descLong: "Phiên bản cao cấp của Qin L DM-i với đầy đủ trang bị an toàn và tiện nghi. Bao gồm hệ thống hỗ trợ lái xe tiên tiến DiPilot, ghế điện, âm thanh cao cấp và nhiều công nghệ khác. Lựa chọn hoàn hảo cho những người muốn một chiếc sedan sang trọng mà giá hợp lý.",
        img: "https://aka.doubaocdn.com/s/bWMQdjWt2z",
        gallery: [["https://aka.doubaocdn.com/s/bWMQdjWt2z"]],
        specs: {"Kích thước":"4830×1900×1495mm","Chiều dài cơ sở":"2790mm","Quãng đường điện":"128km (CLTC)","Quãng đường tổng hợp":"1200km+","Động cơ xăng":"1.5L 101 mã lực","Động cơ điện":"120kW (163 mã lực)","Dung lượng pin":"18kWh","Loại pin":"Blade Battery (LFP)","Mức tiêu thụ":"2.9L/100km","Sạc nhanh DC":"30%-80% trong 30 phút","Hộp số":"E-CVT","Số chỗ ngồi":"5 chỗ"},
        features: ["Màn hình trung tâm 15.6 inch xoay được","Đèn LED matrix","Camera 360 độ 3D","Cảnh báo điểm mù","Giữ làn đường chủ động","Phanh khẩn cấp tự động","Điều hòa tự động 2 vùng","Lốp 18 inch","Ghế da thật điện","Ghế lái có nhớ vị trí","Âm thanh 8 loa cao cấp","Cửa sổ trời panorama"],
        competitor: { name: "Honda Accord Hybrid", price: 33.4, range: "Hybrid" }
    },
    {
        id: 9, name: "BYD Qin L DM-i 210KM", nameCn: "2026款秦L DM-i 210KM超越型", nameVn: "BYD Qin L DM-i 210KM",
        type: "DM-i", body: "sedan", range: "210km (điện)", power: "1.5L", battery: "DM-i 5.0 26kWh",
        fob: 14.38, market: 26.99, vndFob: 503, vndMarket: 945, sold: 29,
        tag: "", desc: "Sedan lai sạc cao cấp nhất, quãng đường 210km",
        descLong: "Phiên bản cao cấp nhất của dòng Qin L với dung lượng pin 26kWh, cho quãng đường chạy điện lên đến 210km. Với thiết kế sang trọng, công nghệ tiên tiến và hiệu suất tuyệt vời, đây là mẫu sedan cắm điện đáng mua nhất trong phân khúc.",
        img: "https://aka.doubaocdn.com/s/bWMQdjWt2z",
        gallery: [["https://aka.doubaocdn.com/s/bWMQdjWt2z"]],
        specs: {"Kích thước":"4830×1900×1495mm","Chiều dài cơ sở":"2790mm","Quãng đường điện":"210km (CLTC)","Quãng đường tổng hợp":"1400km+","Động cơ xăng":"1.5L 101 mã lực","Động cơ điện":"120kW (163 mã lực)","Dung lượng pin":"26kWh","Loại pin":"Blade Battery (LFP)","Mức tiêu thụ":"2.9L/100km","Sạc nhanh DC":"30%-80% trong 30 phút","Hộp số":"E-CVT","Số chỗ ngồi":"5 chỗ"},
        features: ["Màn hình trung tâm 15.6 inch xoay được","Đèn LED matrix","Camera 360 độ 3D","Cảnh báo điểm mù","Giữ làn đường chủ động","Phanh khẩn cấp tự động","Điều hòa tự động 2 vùng","Lốp 18 inch","Ghế da thật điện","Ghế lái có nhớ vị trí","Âm thanh 8 loa cao cấp","Cửa sổ trời panorama"],
        competitor: { name: "Honda CR-V e:HEV", price: 34.5, range: "Hybrid" }
    },
    {
        id: 10, name: "BYD Qin L EV 545KM", nameCn: "秦L EV 545KM超越型", nameVn: "BYD Qin L EV 545KM",
        type: "BEV", body: "sedan", range: "545km", power: "160kW", battery: "Blade Battery 70kWh",
        fob: 15.63, market: 22.83, vndFob: 547, vndMarket: 799, sold: 41,
        tag: "new", desc: "Sedan điện cao cấp, quãng đường 545km",
        descLong: "BYD Qin L EV là phiên bản thuần điện của dòng Qin L, với thiết kế sedan thể thao và công nghệ tiên tiến. Với quãng đường 545km, công suất 160kW và nội thất sang trọng, đây là đối thủ đáng gờm của các mẫu sedan điện cao cấp.",
        img: "https://aka.doubaocdn.com/s/TJADqe6sP5",
        gallery: [["https://aka.doubaocdn.com/s/TJADqe6sP5"]],
        specs: {"Kích thước":"4830×1900×1495mm","Chiều dài cơ sở":"2790mm","Quãng đường CLTC":"545km","Công suất động cơ":"160kW (218 mã lực)","Mô-men xoắn":"320Nm","Dung lượng pin":"70kWh","Loại pin":"Blade Battery (LFP)","Sạc nhanh DC":"30%-80% trong 25 phút","Sạc chậm AC":"7kW","Tốc độ tối đa":"170km/h","0-100km/h":"6.5 giây","Số chỗ ngồi":"5 chỗ"},
        features: ["Màn hình trung tâm 15.6 inch xoay được","Đèn LED matrix","Camera 360 độ 3D","Cảnh báo điểm mù","Giữ làn đường chủ động","Phanh khẩn cấp tự động","Điều hòa tự động 2 vùng","Lốp 18 inch","Ghế da thật điện","Âm thanh 8 loa cao cấp","Cửa sổ trời panorama","Hệ thống hỗ trợ lái DiPilot"],
        competitor: { name: "VinFast VF 7", price: 23.95, range: "450km" }
    },
    {
        id: 11, name: "BYD Song Pro DM-i 133KM", nameCn: "2026款宋Pro DM-i 133KM进取型", nameVn: "BYD Song Pro DM-i 133KM",
        type: "DM-i", body: "suv", range: "133km (điện)", power: "1.5L", battery: "DM-i 5.0 18kWh",
        fob: 11.66, market: 22.03, vndFob: 408, vndMarket: 771, sold: 88,
        tag: "", desc: "SUV lai sạc, gia đình phổ thông",
        descLong: "BYD Song Pro DM-i là mẫu SUV lai cắm điện bán chạy nhất Trung Quốc. Với không gian rộng rãi, công nghệ DM-i 5.0 và giá hợp lý, đây là lựa chọn hoàn hảo cho gia đình. Đây là mẫu xe độc quyền, không bán chính hãng tại Việt Nam.",
        img: "https://aka.doubaocdn.com/s/U0Ve2tQK5C",
        gallery: [["https://aka.doubaocdn.com/s/U0Ve2tQK5C"]],
        specs: {"Kích thước":"4730×1860×1710mm","Chiều dài cơ sở":"2712mm","Quãng đường điện":"133km (CLTC)","Quãng đường tổng hợp":"1200km+","Động cơ xăng":"1.5L 101 mã lực","Động cơ điện":"120kW (163 mã lực)","Dung lượng pin":"18kWh","Loại pin":"Blade Battery (LFP)","Mức tiêu thụ":"3.8L/100km","Sạc nhanh DC":"30%-80% trong 30 phút","Hộp số":"E-CVT","Số chỗ ngồi":"5 chỗ"},
        features: ["Màn hình trung tâm 12.8 inch xoay được","Đèn LED toàn xe","Camera 360 độ","Cảnh báo điểm mù","Giữ làn đường","Điều hòa tự động","Khởi động không chìa khóa","Ghế da tổng hợp","Lốp 18 inch","Cửa sổ trời"],
        competitor: { name: "Toyota Corolla Cross Hybrid", price: 23.35, range: "Hybrid" }
    },
    {
        id: 12, name: "BYD Song Pro DM-i 133KM Premium", nameCn: "2026款宋Pro DM-i 133KM超越型", nameVn: "BYD Song Pro DM-i 133KM Premium",
        type: "DM-i", body: "suv", range: "133km (điện)", power: "1.5L", battery: "DM-i 5.0 18kWh",
        fob: 12.90, market: 24.29, vndFob: 452, vndMarket: 850, sold: 62,
        tag: "", desc: "SUV lai sạc, đầy đủ trang bị",
        descLong: "Phiên bản cao cấp của Song Pro DM-i với đầy đủ trang bị an toàn và tiện nghi. Hệ thống hỗ trợ lái xe tiên tiến, ghế điện, âm thanh cao cấp. Lựa chọn hoàn hảo cho gia đình muốn một chiếc SUV đầy đủ tính năng.",
        img: "https://aka.doubaocdn.com/s/U0Ve2tQK5C",
        gallery: [["https://aka.doubaocdn.com/s/U0Ve2tQK5C"]],
        specs: {"Kích thước":"4730×1860×1710mm","Chiều dài cơ sở":"2712mm","Quãng đường điện":"133km (CLTC)","Quãng đường tổng hợp":"1200km+","Động cơ xăng":"1.5L 101 mã lực","Động cơ điện":"120kW (163 mã lực)","Dung lượng pin":"18kWh","Loại pin":"Blade Battery (LFP)","Mức tiêu thụ":"3.8L/100km","Sạc nhanh DC":"30%-80% trong 30 phút","Hộp số":"E-CVT","Số chỗ ngồi":"5 chỗ"},
        features: ["Màn hình trung tâm 15.6 inch xoay được","Đèn LED matrix","Camera 360 độ 3D","Cảnh báo điểm mù","Giữ làn đường chủ động","Phanh khẩn cấp tự động","Điều hòa tự động 2 vùng","Ghế da thật điện","Lốp 19 inch","Cửa sổ trời panorama","Âm thanh 8 loa"],
        competitor: { name: "Honda CR-V e:HEV", price: 34.5, range: "Hybrid" }
    },
    {
        id: 13, name: "BYD Song Pro DM-i 220KM", nameCn: "2026款宋Pro DM-i 220KM超越型", nameVn: "BYD Song Pro DM-i 220KM",
        type: "DM-i", body: "suv", range: "220km (điện)", power: "1.5L", battery: "DM-i 5.0 27kWh",
        fob: 14.67, market: 27.51, vndFob: 513, vndMarket: 963, sold: 35,
        tag: "", desc: "SUV lai sạc, quãng đường điện 220km",
        descLong: "Phiên bản cao cấp nhất của Song Pro DM-i với dung lượng pin 27kWh, cho quãng đường chạy điện lên đến 220km. Với quãng đường này, hầu hết các chuyến đi hàng ngày có thể hoàn toàn bằng điện. Tổng hợp quãng đường lên đến 1500km.",
        img: "https://aka.doubaocdn.com/s/U0Ve2tQK5C",
        gallery: [["https://aka.doubaocdn.com/s/U0Ve2tQK5C"]],
        specs: {"Kích thước":"4730×1860×1710mm","Chiều dài cơ sở":"2712mm","Quãng đường điện":"220km (CLTC)","Quãng đường tổng hợp":"1500km+","Động cơ xăng":"1.5L 101 mã lực","Động cơ điện":"120kW (163 mã lực)","Dung lượng pin":"27kWh","Loại pin":"Blade Battery (LFP)","Mức tiêu thụ":"3.8L/100km","Sạc nhanh DC":"30%-80% trong 30 phút","Hộp số":"E-CVT","Số chỗ ngồi":"5 chỗ"},
        features: ["Màn hình trung tâm 15.6 inch xoay được","Đèn LED matrix","Camera 360 độ 3D","Cảnh báo điểm mù","Giữ làn đường chủ động","Phanh khẩn cấp tự động","Điều hòa tự động 2 vùng","Ghế da thật điện","Lốp 19 inch","Cửa sổ trời panorama","Âm thanh 8 loa"],
        competitor: { name: "Honda CR-V e:HEV", price: 34.5, range: "Hybrid" }
    },
    {
        id: 14, name: "BYD Song Pro DM-i Racing 220KM", nameCn: "宋Pro DM-i飞驰版220KM领先型", nameVn: "BYD Song Pro DM-i Racing 220KM",
        type: "DM-i", body: "suv", range: "220km (điện)", power: "1.5L", battery: "DM-i 5.0 27kWh",
        fob: 12.82, market: 24.14, vndFob: 449, vndMarket: 845, sold: 52,
        tag: "", desc: "SUV lai sạc thể thao, giá tốt",
        descLong: "Phiên bản Racing (飞驰版) của Song Pro DM-i với thiết kế thể thao và giá cạnh tranh. Với quãng đường điện 220km và đầy đủ trang bị, đây là lựa chọn tuyệt vời cho những người thích phong cách thể thao.",
        img: "https://aka.doubaocdn.com/s/U0Ve2tQK5C",
        gallery: [["https://aka.doubaocdn.com/s/U0Ve2tQK5C"]],
        specs: {"Kích thước":"4730×1860×1710mm","Chiều dài cơ sở":"2712mm","Quãng đường điện":"220km (CLTC)","Quãng đường tổng hợp":"1500km+","Động cơ xăng":"1.5L 101 mã lực","Động cơ điện":"120kW (163 mã lực)","Dung lượng pin":"27kWh","Loại pin":"Blade Battery (LFP)","Mức tiêu thụ":"3.8L/100km","Sạc nhanh DC":"30%-80% trong 30 phút","Hộp số":"E-CVT","Số chỗ ngồi":"5 chỗ"},
        features: ["Màn hình trung tâm 12.8 inch xoay được","Đèn LED toàn xe","Camera 360 độ","Cảnh báo điểm mù","Giữ làn đường","Điều hòa tự động","Khởi động không chìa khóa","Ghế da tổng hợp","Lốp 18 inch","Cửa sổ trời"],
        competitor: { name: "Toyota Corolla Cross Hybrid", price: 23.35, range: "Hybrid" }
    },
    {
        id: 15, name: "BYD Song Pro DM-i Racing 220KM Premium", nameCn: "宋Pro DM-i飞驰版220KM超越型", nameVn: "BYD Song Pro DM-i Racing 220KM Premium",
        type: "DM-i", body: "suv", range: "220km (điện)", power: "1.5L", battery: "DM-i 5.0 27kWh",
        fob: 15.05, market: 28.18, vndFob: 527, vndMarket: 986, sold: 28,
        tag: "", desc: "SUV lai sạc thể thao cao cấp",
        descLong: "Phiên bản cao cấp của dòng Racing với đầy đủ trang bị cao cấp. Thiết kế thể thao, nội thất sang trọng và công nghệ tiên tiến. Lựa chọn cho những người muốn một chiếc SUV vừa thể thao vừa tiện nghi.",
        img: "https://aka.doubaocdn.com/s/U0Ve2tQK5C",
        gallery: [["https://aka.doubaocdn.com/s/U0Ve2tQK5C"]],
        specs: {"Kích thước":"4730×1860×1710mm","Chiều dài cơ sở":"2712mm","Quãng đường điện":"220km (CLTC)","Quãng đường tổng hợp":"1500km+","Động cơ xăng":"1.5L 101 mã lực","Động cơ điện":"120kW (163 mã lực)","Dung lượng pin":"27kWh","Loại pin":"Blade Battery (LFP)","Mức tiêu thụ":"3.8L/100km","Sạc nhanh DC":"30%-80% trong 30 phút","Hộp số":"E-CVT","Số chỗ ngồi":"5 chỗ"},
        features: ["Màn hình trung tâm 15.6 inch xoay được","Đèn LED matrix","Camera 360 độ 3D","Cảnh báo điểm mù","Giữ làn đường chủ động","Phanh khẩn cấp tự động","Điều hòa tự động 2 vùng","Ghế da thật điện","Lốp 19 inch","Cửa sổ trời panorama","Âm thanh 8 loa"],
        competitor: { name: "Honda CR-V e:HEV", price: 34.5, range: "Hybrid" }
    },
    {
        id: 16, name: "BYD Song Pro DM-i Racing 301KM", nameCn: "宋Pro DM-i飞驰版301KM超越型", nameVn: "BYD Song Pro DM-i Racing 301KM",
        type: "DM-i", body: "suv", range: "301km (điện)", power: "1.5L", battery: "DM-i 5.0 36kWh",
        fob: 15.43, market: 28.89, vndFob: 540, vndMarket: 1011, sold: 22,
        tag: "flagship", desc: "SUV lai sạc, quãng đường điện dài nhất 301km",
        descLong: "Phiên bản cao cấp nhất của dòng Song Pro với dung lượng pin 36kWh, cho quãng đường chạy điện lên đến 301km. Đây là một trong những mẫu SUV cắm điện có quãng đường chạy điện dài nhất trên thị trường, hoàn toàn có thể sử dụng hàng ngày chỉ bằng điện.",
        img: "https://aka.doubaocdn.com/s/U0Ve2tQK5C",
        gallery: [["https://aka.doubaocdn.com/s/U0Ve2tQK5C"]],
        specs: {"Kích thước":"4730×1860×1710mm","Chiều dài cơ sở":"2712mm","Quãng đường điện":"301km (CLTC)","Quãng đường tổng hợp":"1600km+","Động cơ xăng":"1.5L 101 mã lực","Động cơ điện":"120kW (163 mã lực)","Dung lượng pin":"36kWh","Loại pin":"Blade Battery (LFP)","Mức tiêu thụ":"3.8L/100km","Sạc nhanh DC":"30%-80% trong 30 phút","Hộp số":"E-CVT","Số chỗ ngồi":"5 chỗ"},
        features: ["Màn hình trung tâm 15.6 inch xoay được","Đèn LED matrix","Camera 360 độ 3D","Cảnh báo điểm mù","Giữ làn đường chủ động","Phanh khẩn cấp tự động","Điều hòa tự động 2 vùng","Ghế da thật điện","Lốp 19 inch","Cửa sổ trời panorama","Âm thanh 8 loa"],
        competitor: { name: "Honda CR-V e:HEV", price: 34.5, range: "Hybrid" }
    },
    {
        id: 17, name: "BYD Song L DM-i 200KM", nameCn: "2026款宋L DM-i 200KM超越型", nameVn: "BYD Song L DM-i 200KM",
        type: "DM-i", body: "suv", range: "200km (điện)", power: "1.5T", battery: "DM-i 5.0 26kWh",
        fob: 18.59, market: 34.78, vndFob: 651, vndMarket: 1217, sold: 18,
        tag: "flagship", desc: "SUV cỡ trung lai sạc cao cấp, thiết kế coupe",
        descLong: "BYD Song L là mẫu SUV cỡ trung cao cấp với thiết kế coupe thể thao. Với công nghệ DM-i 5.0, quãng đường điện 200km và nội thất sang trọng, đây là mẫu SUV cao cấp đáng mua nhất trong phân khúc. Đây là mẫu xe độc quyền, không bán chính hãng tại Việt Nam.",
        img: "https://aka.doubaocdn.com/s/ap1C5s3vnc",
        gallery: [["https://aka.doubaocdn.com/s/ap1C5s3vnc"]],
        specs: {"Kích thước":"4840×1950×1560mm","Chiều dài cơ sở":"2930mm","Quãng đường điện":"200km (CLTC)","Quãng đường tổng hợp":"1400km+","Động cơ xăng":"1.5T 139 mã lực","Động cơ điện":"160kW (218 mã lực)","Dung lượng pin":"26kWh","Loại pin":"Blade Battery (LFP)","Mức tiêu thụ":"4.5L/100km","Sạc nhanh DC":"30%-80% trong 25 phút","Hộp số":"E-CVT","Số chỗ ngồi":"5 chỗ"},
        features: ["Màn hình trung tâm 15.6 inch xoay được","Đèn LED matrix","Camera 360 độ 3D","Cảnh báo điểm mù","Giữ làn đường chủ động","Phanh khẩn cấp tự động","Điều hòa tự động 2 vùng","Ghế da thật điện","Lốp 20 inch","Cửa sổ trời panorama","Âm thanh 12 loa Dynaudio","Hệ thống hỗ trợ lái DiPilot 100"],
        competitor: { name: "Honda CR-V e:HEV", price: 34.5, range: "Hybrid" }
    },
    {
        id: 18, name: "BYD Song Ultra EV 605KM", nameCn: "宋Ultra EV 605KM领先型", nameVn: "BYD Song Ultra EV 605KM",
        type: "BEV", body: "suv", range: "605km", power: "180kW", battery: "Blade Battery 87kWh",
        fob: 20.09, market: 37.59, vndFob: 703, vndMarket: 1316, sold: 15,
        tag: "flagship", desc: "SUV điện cỡ lớn, quãng đường 605km",
        descLong: "BYD Song Ultra EV là mẫu SUV điện cỡ lớn cao cấp nhất của BYD. Với quãng đường 605km, công suất 180kW, không gian 7 chỗ và nội thất sang trọng, đây là đối thủ đáng gờm của các mẫu SUV điện cao cấp như Tesla Model Y.",
        img: "https://aka.doubaocdn.com/s/ChMHOIU3ve",
        gallery: [["https://aka.doubaocdn.com/s/ChMHOIU3ve"]],
        specs: {"Kích thước":"4910×1950×1720mm","Chiều dài cơ sở":"2930mm","Quãng đường CLTC":"605km","Công suất động cơ":"180kW (245 mã lực)","Mô-men xoắn":"350Nm","Dung lượng pin":"87kWh","Loại pin":"Blade Battery (LFP)","Sạc nhanh DC":"30%-80% trong 25 phút","Sạc chậm AC":"11kW","Tốc độ tối đa":"180km/h","0-100km/h":"6.9 giây","Số chỗ ngồi":"5-7 chỗ"},
        features: ["Màn hình trung tâm 15.6 inch xoay được","Đèn LED matrix","Camera 360 độ 3D","Cảnh báo điểm mù","Giữ làn đường chủ động","Phanh khẩn cấp tự động","Điều hòa tự động 3 vùng","Ghế da thật điện","Lốp 21 inch","Cửa sổ trời panorama","Âm thanh 12 loa Dynaudio","Hệ thống hỗ trợ lái DiPilot 100"],
        competitor: { name: "Tesla Model Y", price: 40.0, range: "554km" }
    },
    {
        id: 19, name: "BYD Song Ultra EV 605KM Premium", nameCn: "宋Ultra EV 605KM超越型", nameVn: "BYD Song Ultra EV 605KM Premium",
        type: "BEV", body: "suv", range: "605km", power: "230kW", battery: "Blade Battery 87kWh",
        fob: 21.90, market: 40.99, vndFob: 767, vndMarket: 1435, sold: 12,
        tag: "flagship", desc: "SUV điện cao cấp nhất, hiệu suất mạnh",
        descLong: "Phiên bản cao cấp nhất của Song Ultra EV với công suất 230kW (313 mã lực), hiệu suất mạnh mẽ. Với đầy đủ trang bị cao cấp, nội thất sang trọng và công nghệ tiên tiến, đây là mẫu SUV điện đỉnh cao của BYD.",
        img: "https://aka.doubaocdn.com/s/ChMHOIU3ve",
        gallery: [["https://aka.doubaocdn.com/s/ChMHOIU3ve"]],
        specs: {"Kích thước":"4910×1950×1720mm","Chiều dài cơ sở":"2930mm","Quãng đường CLTC":"605km","Công suất động cơ":"230kW (313 mã lực)","Mô-men xoắn":"420Nm","Dung lượng pin":"87kWh","Loại pin":"Blade Battery (LFP)","Sạc nhanh DC":"30%-80% trong 25 phút","Sạc chậm AC":"11kW","Tốc độ tối đa":"190km/h","0-100km/h":"5.5 giây","Số chỗ ngồi":"5-7 chỗ"},
        features: ["Màn hình trung tâm 15.6 inch xoay được","Đèn LED matrix","Camera 360 độ 3D","Cảnh báo điểm mù","Giữ làn đường chủ động","Phanh khẩn cấp tự động","Điều hòa tự động 3 vùng","Ghế da thật điện thông gió","Lốp 21 inch","Cửa sổ trời panorama","Âm thanh 12 loa Dynaudio","Hệ thống hỗ trợ lái DiPilot 100","Màn hình HUD"],
        competitor: { name: "Tesla Model Y Performance", price: 50.0, range: "514km" }
    }
];

// ===== Helper Functions =====

function getCarById(id) {
    return cars.find(c => c.id === parseInt(id)) || cars[0];
}

function getRelatedCars(currentId, count = 3) {
    const current = getCarById(currentId);
    return cars
        .filter(c => c.id !== parseInt(currentId) && c.body === current.body)
        .slice(0, count);
}

function calculateLandedCost(car) {
    const fob = car.fob;
    const seaFreight = 0.3;
    const cif = +(fob + seaFreight).toFixed(2);
    
    let taxRate, landed;
    if (car.type === 'BEV') {
        taxRate = 0.134;
        landed = +(cif * 1.134 + 0.5).toFixed(2);
    } else {
        taxRate = 0.457;
        landed = +(cif * 1.457 + 0.637).toFixed(2);
    }
    
    const retail = +(landed * 1.25).toFixed(2);
    const profit = +(retail - landed).toFixed(2);
    
    return {
        cif: cif,
        taxRate: (taxRate * 100).toFixed(1) + '%',
        landed: landed,
        retail: retail,
        profit: profit,
        vndLanded: Math.round(landed * 350),
        vndRetail: Math.round(retail * 350),
        vndProfit: Math.round(profit * 350)
    };
}

function formatVND(million) {
    if (million >= 1000) {
        return (million / 1000).toFixed(2) + ' tỷ';
    }
    return million + ' triệu';
}
