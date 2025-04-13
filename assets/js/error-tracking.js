/**
 * Basit JavaScript Hata İzleme Sistemi
 * 
 * Bu script, JavaScript hatalarını izleyerek kullanıcı deneyimini geliştirmeye yardımcı olur.
 * PageSpeed Insights puanını artırmak için gerekli özelliklerden biridir.
 */

(function() {
    // Hata izleme verilerini tutacak nesne
    const errorData = {
        errors: [],
        userAgent: navigator.userAgent,
        url: window.location.href,
        timestamp: new Date().toISOString()
    };

    // Sayfa görünürlük durumlarını takip et
    let pageVisibilityState = document.visibilityState;
    
    // Hata izleme fonksiyonu
    function trackError(error, errorType) {
        try {
            const errorInfo = {
                type: errorType || 'runtime',
                message: error.message || 'Unknown error',
                stack: error.stack || '',
                timestamp: new Date().toISOString(),
                pageVisibility: pageVisibilityState,
                location: window.location.pathname
            };
            
            // Hata verisini diziye ekle
            errorData.errors.push(errorInfo);
            
            // Tarayıcı konsoluna log yaz (geliştirme modunda)
            if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
                console.error('Error tracked:', errorInfo);
            }
            
            // LocalStorage'a kaydet (eğer kullanıcı izin verdiyse)
            if (localStorage.getItem('cookies-accepted') === 'true') {
                const storedErrors = JSON.parse(localStorage.getItem('js-errors') || '[]');
                storedErrors.push(errorInfo);
                
                // En fazla 10 hata sakla
                if (storedErrors.length > 10) {
                    storedErrors.shift();
                }
                
                localStorage.setItem('js-errors', JSON.stringify(storedErrors));
            }
            
            // İsteğe bağlı: Hataları bir API'ye gönder
            // sendErrorToAPI(errorInfo);
        } catch (e) {
            // Hata izleme sistemi içinde hata oluşursa, döngüye girmemek için sessizce devam et
            console.error('Error in error tracking system:', e);
        }
    }
    
    // Global window.onerror işleyicisi
    window.onerror = function(message, source, lineno, colno, error) {
        trackError(error || { message, source, lineno, colno }, 'global');
        return false; // Hatanın normal şekilde işlenmesine izin ver
    };
    
    // Promise hatalarını yakala
    window.addEventListener('unhandledrejection', function(event) {
        trackError(event.reason || { message: 'Unhandled Promise rejection' }, 'promise');
    });
    
    // Sayfa görünürlük değişikliklerini takip et
    document.addEventListener('visibilitychange', function() {
        pageVisibilityState = document.visibilityState;
    });
    
    // Sayfa kapatılırken LocalStorage'daki hata verilerini kaydet
    window.addEventListener('beforeunload', function() {
        if (errorData.errors.length > 0 && localStorage.getItem('cookies-accepted') === 'true') {
            const storedErrors = JSON.parse(localStorage.getItem('js-errors') || '[]');
            const combinedErrors = [...storedErrors, ...errorData.errors].slice(-10);
            localStorage.setItem('js-errors', JSON.stringify(combinedErrors));
        }
    });
    
    // İsteğe bağlı: API'ye hataları gönderme fonksiyonu
    /*
    function sendErrorToAPI(errorInfo) {
        if (navigator.onLine) {
            fetch('/api/track-error', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(errorInfo),
                // Kullanıcı deneyimini bozmamak için keep-alive modunda gönder
                keepalive: true
            }).catch(e => console.error('Failed to send error to API:', e));
        }
    }
    */
    
    // Hata izleme sistemini global olarak erişilebilir yap
    window.errorTracker = {
        trackError,
        getErrors: function() {
            return errorData.errors;
        },
        clearErrors: function() {
            errorData.errors = [];
            if (localStorage.getItem('cookies-accepted') === 'true') {
                localStorage.removeItem('js-errors');
            }
        }
    };
})(); 