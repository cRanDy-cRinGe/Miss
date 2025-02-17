// Чекаємо, поки завантажиться весь сайт
window.addEventListener('load', function() {
    const header = document.querySelector('.header');
    header.classList.add('slide-in');
});
window.addEventListener('load', function() {
    const leftContent = document.querySelector('.main-content-left');
    const rightContent = document.querySelector('.main-content-right');

    leftContent.classList.add('slide-in-left');
    rightContent.classList.add('slide-in-right');
});

window.addEventListener('load', function() {
    const caSection = document.querySelector('.ca');
    caSection.classList.add('fade-in');
});

document.addEventListener('DOMContentLoaded', function() {
    const howToBuySection = document.querySelector('#how-to-buy');

    if (howToBuySection) {
        const observerOptions = {
            root: null,            // спостерігаємо за viewport
            threshold: 0.1         // коли 10% елемента видно, тригеримо анімацію
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // припиняємо спостереження після появи
                }
            });
        }, observerOptions);

        observer.observe(howToBuySection);
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const aboutUsSection = document.querySelector('#About-us');

    if (aboutUsSection) {
        const observerOptions = {
            root: null,      // спостерігаємо за viewport
            threshold: 0.1   // коли 10% елемента видно, запускаємо анімацію
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // припиняємо спостереження після появи
                }
            });
        }, observerOptions);

        observer.observe(aboutUsSection);
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const tokenomicsSection = document.querySelector('#Tokenomics');

    if (tokenomicsSection) {
        const observerOptions = {
            root: null,      // спостерігаємо за viewport
            threshold: 0.1   // коли 10% елемента видно, запускаємо анімацію
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // припиняємо спостереження після появи
                }
            });
        }, observerOptions);

        observer.observe(tokenomicsSection);
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const gallerySection = document.querySelector('.gallery');

    if (gallerySection) {
        const observerOptions = {
            root: null,      // спостерігаємо за viewport
            threshold: 0.1   // коли 10% елемента видно, запускаємо анімацію
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // припиняємо спостереження після появи
                }
            });
        }, observerOptions);

        observer.observe(gallerySection);
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const videoSection = document.querySelector('.video');

    if (videoSection) {
        const observerOptions = {
            root: null,      // спостерігаємо за viewport
            threshold: 0.1   // коли 10% елемента видно, запускаємо анімацію
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // припиняємо спостереження після появи
                }
            });
        }, observerOptions);

        observer.observe(videoSection);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const aboutUsLink = document.querySelector('.menu-item a[href="#About-us"]');
    if (aboutUsLink) {
        aboutUsLink.addEventListener('click', function(e) {
            e.preventDefault(); // Зупиняємо стандартну поведінку посилання
            const targetSection = document.getElementById('About-us');
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Обробка кліку для пункту меню "How to buy"
    const howToBuyLink = document.querySelector('.menu-item a[href="#how-to-buy"]');
    if (howToBuyLink) {
        howToBuyLink.addEventListener('click', function(e) {
            e.preventDefault(); // Блокуємо стандартну поведінку посилання
            const targetSection = document.getElementById('how-to-buy');
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Обробка кліку для пункту меню "Tokenomics"
    const tokenomicsLink = document.querySelector('.menu-item a[href="#Tokenomics"]');
    if (tokenomicsLink) {
        tokenomicsLink.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = document.getElementById('Tokenomics');
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});


window.addEventListener('load', function() {
    const preloader = document.querySelector('.preload');

    // Починаємо анімацію зникнення (fade out)
    preloader.style.opacity = '0';

    // Після завершення переходу приховуємо блок повністю
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500); // 500 мс співпадає з transition у CSS
});
document.querySelector('.container').addEventListener('click', function () {
    const address = "8oEHKQYYYavrfVXnF8qAHmJF18DWJwnvhwz6Wqktpump";

    navigator.clipboard.writeText(address)
        .then(() => {
            console.log('Адресу успішно скопійовано!');
            // За бажанням можна додати додатковий візуальний ефект, наприклад, змінити клас іконки
        })
        .catch(err => {
            console.error('Помилка копіювання адреси: ', err);
        });
});

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const sideMenu = document.querySelector('.side-menu');
    const closeMenu = document.querySelector('.close-menu');

    menuToggle.addEventListener('click', () => {
        sideMenu.classList.add('open');
    });

    closeMenu.addEventListener('click', () => {
        sideMenu.classList.remove('open');
    });
});



// Чекаємо, поки завантажиться DOM
document.addEventListener("DOMContentLoaded", function () {
    // Масив об'єктів із даними для кожного кроку
    const contents = [
        {
            image: "/static/meme_2.jpg",
            text: "Navigate to the ‘Settings’ option within your wallet and locate the networks section. Manually include a new network, and input the following details for Base:"
        },
        {
            image: "/static/meme_3.jpg", // замініть на потрібне зображення
            text: "Step 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            image: "/static/meme_4.jpg", // замініть на потрібне зображення
            text: "Step 3: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            image: "/static/meme_5.jpg", // замініть на потрібне зображення
            text: "Step 4: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        }
    ];

    // Отримуємо всі кнопки та елементи контейнера
    const buttons = document.querySelectorAll(".htb-buttons .htb-buy");
    const imageElement = document.querySelector(".htb-container .htb-img img");
    const textElement = document.querySelector(".htb-container .htb-con-text p");

    // Додаємо обробник події для кожної кнопки
    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            // Змінюємо зображення
            imageElement.src = contents[index].image;
            imageElement.alt = `Step ${index + 1}`;

            // Змінюємо текст
            textElement.textContent = contents[index].text;
        });
    });
});

