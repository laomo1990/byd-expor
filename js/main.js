// ===== Configuration =====
const CONFIG = {
    zaloNumber: '8615750711697',
    whatsappNumber: '8613338467295',
    phoneNumber: '+86 133 3846 7295',
    email: 'youqianxu913@gmail.com',
    wechatId: '',
    formspreeEndpoint: '',
    feishuWebhook: 'https://open.feishu.cn/open-apis/bot/v2/hook/b6326912-2e53-4daf-ba16-2d6eeb6f476c',
    exchangeRate: 3500
};

// ===== Common JS Functions =====

// Mobile Menu Toggle
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}

// Close mobile menu on link click
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('navLinks').classList.remove('active');
        });
    });

    // Set active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Initialize sticky bottom bar if on car detail page
    initStickyBar();
});

// FAQ Toggle
function toggleFaq(el) {
    const item = el.parentElement;
    const wasActive = item.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
    if (!wasActive) item.classList.add('active');
}

// Generate Zalo link with prefilled message
function getZaloLink(carName) {
    const message = carName 
        ? `Xin chào, tôi muốn hỏi giá xe ${carName}. Vui lòng gửi báo giá chi tiết.`
        : 'Xin chào, tôi muốn hỏi giá xe BYD. Vui lòng tư vấn.';
    return `https://zalo.me/${CONFIG.zaloNumber}?g=${encodeURIComponent(message)}`;
}

// Generate WhatsApp link with prefilled message
function getWhatsAppLink(carName) {
    const message = carName 
        ? `Hello, I want to inquire about ${carName}. Please send detailed pricing.`
        : 'Hello, I want to inquire about BYD cars. Please advise.';
    return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// Format VND price
function formatVND(million) {
    if (million >= 1000) {
        return (million / 1000).toFixed(2) + ' tỷ VNĐ';
    }
    return million + ' triệu VNĐ';
}

// ===== Form Submit (Feishu Webhook + Mailto fallback) =====
function submitForm(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const name = formData.get('name') || 'Khách hàng';
    const submitBtn = form.querySelector('.form-submit');
    const successMsg = form.querySelector('.form-success');
    
    // Show loading
    submitBtn.disabled = true;
    submitBtn.textContent = 'Đang gửi...';
    
    // Priority 1: Feishu Webhook (方案B)
    if (CONFIG.feishuWebhook) {
        const data = {
            msg_type: 'text',
            content: {
                text: `【BYD越南-新客户询价】\n\n姓名: ${formData.get('name')}\n公司: ${formData.get('company') || 'N/A'}\n电话: ${formData.get('phone')}\n邮箱: ${formData.get('email') || 'N/A'}\n车型: ${formData.get('model') || 'N/A'}\n数量: ${formData.get('quantity') || 'N/A'}\n角色: ${formData.get('role') || 'N/A'}\n留言: ${formData.get('message') || 'N/A'}`
            }
        };
        fetch(CONFIG.feishuWebhook, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        }).then(response => {
            if (response.ok) {
                showSuccess();
            } else {
                showFallback();
            }
        }).catch(() => {
            showFallback();
        });
    } 
    // Priority 2: Formspree (备选)
    else if (CONFIG.formspreeEndpoint) {
        fetch(CONFIG.formspreeEndpoint, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        }).then(response => {
            if (response.ok) {
                showSuccess();
            } else {
                showFallback();
            }
        }).catch(() => {
            showFallback();
        });
    } 
    // Priority 3: Mailto fallback
    else {
        setTimeout(showFallback, 500);
    }
    
    function showSuccess() {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span class="icon-svg"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.5c3.5 0 7 2 7 6.5 0 3-1.5 5.5-3 7l-1 1.5v3l-3-1.5h-1L8 20.5v-3L7 16c-1.5-1.5-3-4-3-7.5 0-4.5 3.5-6 8-6zM12 4c-3 0-5.5 1.5-5.5 5 0 2.5 1 4.5 2.2 5.8.5.5 1 .8 1.3.8h4c.3 0 .8-.3 1.3-.8C16.5 13.5 17.5 11.5 17.5 9c0-3.5-2.5-5-5.5-5zm-1.5 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/></svg></span> Gửi yêu cầu nhận báo giá';
        if (successMsg) {
            successMsg.classList.add('show');
            successMsg.innerHTML = '<span class="icon-svg"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></span> Cảm ơn ' + name + '! Chúng tôi đã nhận được thông tin và sẽ liên hệ trong 2 giờ làm việc.';
        } else {
            alert('Cảm ơn ' + name + '! Chúng tôi đã nhận được thông tin của bạn và sẽ liên hệ trong 2 giờ làm việc.');
        }
        form.reset();
        setTimeout(() => { if (successMsg) successMsg.classList.remove('show'); }, 5000);
    }
    
    function showFallback() {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span class="icon-svg"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.5c3.5 0 7 2 7 6.5 0 3-1.5 5.5-3 7l-1 1.5v3l-3-1.5h-1L8 20.5v-3L7 16c-1.5-1.5-3-4-3-7.5 0-4.5 3.5-6 8-6zM12 4c-3 0-5.5 1.5-5.5 5 0 2.5 1 4.5 2.2 5.8.5.5 1 .8 1.3.8h4c.3 0 .8-.3 1.3-.8C16.5 13.5 17.5 11.5 17.5 9c0-3.5-2.5-5-5.5-5zm-1.5 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/></svg></span> Gửi yêu cầu nhận báo giá';
        const subject = encodeURIComponent('Yêu cầu báo giá xe BYD từ ' + name);
        const body = encodeURIComponent(
            `Họ tên: ${formData.get('name')}\n` +
            `Công ty: ${formData.get('company')}\n` +
            `Điện thoại: ${formData.get('phone')}\n` +
            `Email: ${formData.get('email')}\n` +
            `Mẫu xe quan tâm: ${formData.get('model')}\n` +
            `Số lượng: ${formData.get('quantity')}\n` +
            `Nội dung: ${formData.get('message')}`
        );
        window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;
        if (successMsg) {
            successMsg.classList.add('show');
            successMsg.innerHTML = '<span class="icon-svg"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></span> Đã mở ứng dụng email. Vui lòng gửi email để hoàn tất.';
        }
    }
}

// Quick quote form (Hero section)
function submitQuickQuote(e) {
    e.preventDefault();
    const phone = e.target.querySelector('input').value;
    if (!phone) {
        alert('Vui lòng nhập số điện thoại');
        return;
    }
    // Open Zalo with prefilled message
    const message = `Xin chào, tôi số điện thoại ${phone}, muốn nhận báo giá xe BYD.`;
    window.open(`https://zalo.me/${CONFIG.zaloNumber}?g=${encodeURIComponent(message)}`, '_blank');
}

// ===== Car Card Rendering (used in multiple pages) =====
function renderCarCard(car) {
    const tagMap = {
        'hot': '<span class="icon-svg"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/></svg></span> HOT',
        'new': '<span class="icon-svg"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5L12 2zm7 10l.8 2.8L22.5 16l-2.7.8L19 19.5l-.8-2.7L15.5 16l2.7-.8L19 12z"/></svg></span> NEW',
        'best': '<span class="icon-svg"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg></span> BEST',
        'flagship': '<span class="icon-svg"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg></span> FLAGSHIP'
    };

    return `
        <div class="car-card">
            <a href="car-detail.html?id=${car.id}">
                <div class="car-image">
                    ${car.tag ? `<span class="car-tag tag-${car.tag}">${tagMap[car.tag]}</span>` : ''}
                    ${car.sold ? `<span class="car-sold">Đã bán ${car.sold}+</span>` : ''}
                    <img src="${car.img}" alt="${car.name}" loading="lazy" onerror="this.style.display='none'">
                </div>
            </a>
            <div class="car-body">
                <a href="car-detail.html?id=${car.id}">
                    <div class="car-name">${car.name}</div>
                    <div class="car-name-cn">${car.nameCn}</div>
                </a>
                <div class="car-specs">
                    <span class="spec-item ${car.type==='BEV'?'bev':'dmi'}">${car.type}</span>
                    <span class="spec-item">${car.range}</span>
                    <span class="spec-item">${car.power}</span>
                </div>
                <div class="car-prices">
                    <div class="car-price-main">
                        <span class="car-fob">¥${car.fob}万</span>
                        <span class="car-fob-vnd">~${formatVND(car.vndFob)}</span>
                    </div>
                    <div class="car-market">¥${car.market}万 thị trường (~${formatVND(car.vndMarket)})</div>
                </div>
                <div class="car-actions">
                    <a href="car-detail.html?id=${car.id}" class="car-btn car-btn-detail">Chi tiết</a>
                    <a href="${getZaloLink(car.name)}" target="_blank" class="car-btn car-btn-zalo"><span class="icon-svg"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 8.5h-3v3h-1.5v-3h-3V9h3V6h1.5v3h3v1.5z"/></svg></span> Zalo</a>
                </div>
            </div>
        </div>
    `;
}

// ===== Filter Cars =====
let currentFilter = { type: 'all', price: 'all' };

function filterCars(type, btn) {
    currentFilter.type = type;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    applyFilters();
}

function filterByPrice(price) {
    currentFilter.price = price;
    applyFilters();
}

function applyFilters() {
    let filtered = cars;

    // Type filter
    if (currentFilter.type === 'BEV') filtered = filtered.filter(c => c.type === 'BEV');
    else if (currentFilter.type === 'DM-i') filtered = filtered.filter(c => c.type === 'DM-i');
    else if (currentFilter.type === 'sedan') filtered = filtered.filter(c => c.body === 'sedan');
    else if (currentFilter.type === 'suv') filtered = filtered.filter(c => c.body === 'suv');
    else if (currentFilter.type === 'under10') filtered = filtered.filter(c => c.fob < 10);

    // Price filter
    if (currentFilter.price === 'under10') filtered = filtered.filter(c => c.fob < 10);
    else if (currentFilter.price === '10-15') filtered = filtered.filter(c => c.fob >= 10 && c.fob < 15);
    else if (currentFilter.price === '15-20') filtered = filtered.filter(c => c.fob >= 15 && c.fob < 20);
    else if (currentFilter.price === 'over20') filtered = filtered.filter(c => c.fob >= 20);

    const grid = document.getElementById('carGrid');
    if (grid) {
        if (filtered.length === 0) {
            grid.innerHTML = '<p style="text-align:center;grid-column:1/-1;padding:40px;color:#6c757d;">Không tìm thấy xe phù hợp với bộ lọc.</p>';
        } else {
            grid.innerHTML = filtered.map(car => renderCarCard(car)).join('');
        }
    }
}

// ===== Sticky Bottom Bar (Car Detail Page) =====
function initStickyBar() {
    const stickyBar = document.getElementById('stickyBottomBar');
    if (!stickyBar) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 600) {
            stickyBar.classList.add('show');
        } else {
            stickyBar.classList.remove('show');
        }
    });
}

// ===== Floating Buttons (Mobile close) =====
function closeFloatingButtons() {
    const floats = document.querySelector('.floating-buttons');
    if (floats) {
        floats.style.display = 'none';
    }
}

// ===== Smooth scroll for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ===== Navbar scroll effect =====
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    }
    lastScroll = currentScroll;
});

// ===== Update all Zalo links on page load =====
window.addEventListener('load', function() {
    // Update floating buttons
    const floatZalo = document.querySelector('.float-zalo');
    if (floatZalo) floatZalo.href = getZaloLink();
    
    const floatWhatsapp = document.querySelector('.float-whatsapp');
    if (floatWhatsapp) floatWhatsapp.href = getWhatsAppLink();
    
    const floatPhone = document.querySelector('.float-phone');
    if (floatPhone) floatPhone.href = 'tel:' + CONFIG.phoneNumber.replace(/\s/g, '');
});

// ===== QR Code Modal (WeChat) =====
function showWeChatQR() {
    // Remove existing modal if any
    const existing = document.querySelector('.qr-modal-overlay');
    if (existing) existing.remove();
    
    const overlay = document.createElement('div');
    overlay.className = 'qr-modal-overlay';
    overlay.onclick = function(e) {
        if (e.target === overlay) overlay.remove();
    };
    
    overlay.innerHTML = `
        <div class="qr-modal">
            <div class="qr-modal-close" onclick="this.closest('.qr-modal-overlay').remove()">×</div>
            <h4>WeChat (微信)</h4>
            <p>Quét mã QR để thêm liên hệ</p>
            <img src="images/qr-wechat.png" alt="WeChat QR Code">
        </div>
    `;
    
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';
    
    // Restore scroll when closed
    const observer = new MutationObserver(() => {
        if (!document.body.contains(overlay)) {
            document.body.style.overflow = '';
            observer.disconnect();
        }
    });
    observer.observe(document.body, { childList: true });
}

function showWhatsAppQR() {
    const existing = document.querySelector('.qr-modal-overlay');
    if (existing) existing.remove();
    
    const overlay = document.createElement('div');
    overlay.className = 'qr-modal-overlay';
    overlay.onclick = function(e) {
        if (e.target === overlay) overlay.remove();
    };
    
    overlay.innerHTML = `
        <div class="qr-modal">
            <div class="qr-modal-close" onclick="this.closest('.qr-modal-overlay').remove()">×</div>
            <h4>WhatsApp</h4>
            <p>Quét mã QR hoặc mở trực tiếp</p>
            <img src="images/qr-whatsapp.jpg" alt="WhatsApp QR Code" style="margin-bottom:14px">
            <a href="https://wa.me/8613338467295" target="_blank" class="qr-action-btn qr-btn-whatsapp" style="display:inline-block;width:auto;padding:10px 30px">Mở WhatsApp</a>
        </div>
    `;
    
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';
    
    const observer = new MutationObserver(() => {
        if (!document.body.contains(overlay)) {
            document.body.style.overflow = '';
            observer.disconnect();
        }
    });
    observer.observe(document.body, { childList: true });
}
