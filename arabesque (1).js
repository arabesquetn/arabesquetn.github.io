document.addEventListener('DOMContentLoaded', function() {
    var languageBtn = document.getElementById('language-btn');
    var languageOptions = document.getElementById('language-options');

    languageBtn.addEventListener('click', function() {
        languageOptions.classList.toggle('active');
    });
});

function translateTo(language) {
    var translatedContent;

    if (language === 'en') {
        translatedContent = {
            header: {
                title: "Cafe Arabesque",
                menu: ["Home", "Menu", "About", "Contact"]
            },
            banner: {
                heading: "Welcome to Our Traditional Coffee Shop",
                subheading: "Experience the rich flavors of Tunisia"
            },
            menu: {
                heading: "Our Menu"
            },
            about: {
                heading: "About Us",
                text: "Discover the heritage and passion behind our coffee."
            },
            contact: {
                address: "Avenue Habib Bourguiba",
                phone: "+216 26 382 063"
            }
        };
    }
    else if (language === 'fr') {
        translatedContent = {
            header: {
                title: "Cafe Arabesque",
                menu: ["Accueil", "Menu", "À Propos", "Contact"]
            },
            banner: {
                heading: "Bienvenue dans notre café traditionnel",
                subheading: "Découvrez les saveurs riches de la Tunisie"
            },
            menu: {
                heading: "Notre Menu"
            },
            about: {
                heading: "À Propos de Nous",
                text: "Découvrez l'héritage et la passion derrière notre café."
            },
            contact: {
                address: "Avenue Habib Bourguiba",
                phone: "+216 26 382 063"
            }
        };
    }
    else if (language === 'ar') {
        translatedContent = {
            header: {
                title: "قهوة أرابيسك",
                menu: ["الصفحة الرئيسية", "قائمتنا", "معلومات عنا", "اتصل بنا"]
            },
            banner: {
                heading: "مرحبًا بكم في مقهى القهوة التقليدية",
                subheading: "استمتع بنكهات تونس الغنية"
            },
            menu: {
                heading: "قائمتنا"
            },
            about: {
                heading: "معلومات عنا",
                text: "اكتشف التراث والعاطفة وراء قهوتنا."
            },
            contact: {
                address: "شارع الحبيب بورقيبة",
                phone: "+216 26 382 063"
            }
        };
    }

    updateContent(translatedContent, language);
}

function updateContent(translatedContent, language) {
    
    document.querySelector('header h1').textContent = translatedContent.header.title;
    var menuItems = document.querySelectorAll('nav ul li a');
    menuItems.forEach(function(item, index) {
        item.textContent = translatedContent.header.menu[index];
    });

    
    document.getElementById('banner').innerHTML = `
        <div class="container">
            <h2>${translatedContent.banner.heading}</h2>
            <p>${translatedContent.banner.subheading}</p>
        </div>
    `;

    document.getElementById('menu').innerHTML = `
        <div class="container">
            <h2>${translatedContent.menu.heading}</h2>
        </div>
    `;

    document.getElementById('about').innerHTML = `
        <div class="container">
            <h2>${translatedContent.about.heading}</h2>
            <p>${translatedContent.about.text}</p>
        </div>
    `;

    var address = translatedContent.contact.address;
    var phone = translatedContent.contact.phone;

    if (language !== 'ar') {
        address = address.replace('Tunisian Coffee', 'قهوة أرابيسك');
    }

    document.querySelector('.contact-info').innerHTML = `
        <p>
            <strong>${language === 'ar' ? 'العنوان:' : 'Address:'}</strong>
            <br>${address}
        </p>

        <p>
            <strong>${language === 'ar' ? 'الهاتف:' : 'Phone:'}</strong>
            <br>${phone}
        </p>
    `;
}