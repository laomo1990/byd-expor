// ===== Configuration =====
const CONFIG = {
    zaloNumber: '84123456789', // ← Replace with your real Zalo number
    whatsappNumber: '8613338467295', // ← Replace with your real WhatsApp number
    phoneNumber: '+86 133 3846 7295',
    email: 'youqianxu913@gmail.com',
    wechatId: '', // WeChat via QR code only
    formspreeEndpoint: 'https://formspree.io/f/your-form-id', // ← Replace with your Formspree ID
    feishuWebhook: '', // ← Optional: your Feishu webhook URL
    exchangeRate: 3500 // 1 RMB = 3500 VND
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

// ===== Form Submit (Formspree + Feishu integration) =====
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

    // Try Formspree first if configured
    if (CONFIG.formspreeEndpoint && !CONFIG.formspreeEndpoint.includes('your-form-id')) {
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
    } else if (CONFIG.feishuWebhook) {
        // Send to Feishu webhook
        const data = {
            msg_type: 'text',
            content: {
                text: `🚗 新客户询价\n\n姓名: ${formData.get('name')}\n公司: ${formData.get('company') || 'N/A'}\n电话: ${formData.get('phone')}\n邮箱: ${formData.get('email') || 'N/A'}\n车型: ${formData.get('model') || 'N/A'}\n数量: ${formData.get('quantity') || 'N/A'}\n留言: ${formData.get('message') || 'N/A'}`
            }
        };
        fetch(CONFIG.feishuWebhook, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        }).then(() => showSuccess()).catch(() => showFallback());
    } else {
        // Fallback: open mail client
        setTimeout(showFallback, 800);
    }

    function showSuccess() {
        submitBtn.disabled = false;
        submitBtn.textContent = '🚀 Gửi yêu cầu nhận báo giá';
        if (successMsg) {
            successMsg.classList.add('show');
            successMsg.textContent = '✅ Cảm ơn ' + name + '! Chúng tôi đã nhận được thông tin và sẽ liên hệ trong 2 giờ làm việc.';
        } else {
            alert('Cảm ơn ' + name + '! Chúng tôi đã nhận được thông tin của bạn và sẽ liên hệ trong 2 giờ làm việc.');
        }
        form.reset();
        setTimeout(() => { if (successMsg) successMsg.classList.remove('show'); }, 5000);
    }

    function showFallback() {
        submitBtn.disabled = false;
        submitBtn.textContent = '🚀 Gửi yêu cầu nhận báo giá';
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
            successMsg.textContent = '✅ Đã mở ứng dụng email. Vui lòng gửi email để hoàn tất.';
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
        'hot': '🔥 HOT',
        'new': '✨ NEW',
        'best': '⭐ BEST',
        'flagship': '🏆 FLAGSHIP'
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
