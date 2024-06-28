function openWhatsApp() {
    var phoneNumber = "966508764175"; // Saudi Arabia WhatsApp number without the '+'
    var message = "مرحبًا، أود الاستفسار عن خدمة نقل العفش.";
    var url = "https://wa.me/" + 966508764175 + "?text=" + encodeURIComponent(message);
    window.open(url, '_blank');
}
