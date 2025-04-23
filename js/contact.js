// 初始化EmailJS
(function() {
    // 请替换为你的EmailJS公共密钥
    emailjs.init("ayVmfKsXxFXWNgunI");
})();

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 显示发送中状态
            formStatus.innerHTML = '<p class="sending">正在发送...</p>';
            
            // 准备发送的参数
            const templateParams = {
                from_name: this.name.value,
                from_email: this.email.value,
                subject: this.subject.value,
                message: this.message.value
            };
            
            // 发送邮件 (替换为你的服务ID和模板ID)
            emailjs.send('service_9qesdua', 'template_48xpxid', templateParams)
                .then(function() {
                    formStatus.innerHTML = '<p class="success">消息发送成功！</p>';
                    contactForm.reset();
                }, function(error) {
                    console.log('发送失败:', error);
                    formStatus.innerHTML = '<p class="error">发送失败，请稍后再试。</p>';
                });
        });
    }
});