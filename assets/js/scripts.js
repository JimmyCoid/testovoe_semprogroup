document.addEventListener("DOMContentLoaded", function () {
    const openButtons = document.querySelectorAll(".open-popup");
    const popups = document.querySelectorAll(".popup");
    const closeButtons = document.querySelectorAll(".popup__close");

    // Открытие попапа
    openButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const popupName = this.getAttribute("data-popup");
            const targetPopup = document.querySelector(
                `.popup[data-name="${popupName}"]`
            );

            if (targetPopup) {
                // Закрываем все открытые попапы (если нужно)
                popups.forEach((popup) => popup.classList.remove("open"));

                // Открываем нужный
                targetPopup.classList.add("open");
            }
        });
    });

    // Закрытие по кнопке
    closeButtons.forEach((closeBtn) => {
        closeBtn.addEventListener("click", function () {
            const popup = this.closest(".popup");
            if (popup) {
                popup.classList.remove("open");
            }
        });
    });

    // Закрытие по Esc
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            popups.forEach((popup) => {
                popup.classList.remove("open");
            });
        }
    });

    // маска для телефона

    var phoneInput = document.querySelector(".phone");
    phoneInput.addEventListener("keydown", function (event) {
        if (
            !(
                event.key == "ArrowLeft" ||
                event.key == "ArrowRight" ||
                event.key == "Backspace" ||
                event.key == "Tab"
            )
        ) {
            event.preventDefault();
        }
        var mask = "+7 (111) 111-11-11"; // Задаем маску

        if (/[0-9\+\ \-\(\)]/.test(event.key)) {
            // Здесь начинаем сравнивать this.value и mask
            // к примеру опять же
            var currentString = this.value;
            var currentLength = currentString.length;
            if (/[0-9]/.test(event.key)) {
                if (mask[currentLength] == "1") {
                    this.value = currentString + event.key;
                } else {
                    for (var i = currentLength; i < mask.length; i++) {
                        if (mask[i] == "1") {
                            this.value = currentString + event.key;
                            break;
                        }
                        currentString += mask[i];
                    }
                }
            }
        }
    });

    // отправка формы

    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(this);
        const data = {};

        for (let [key, value] of formData.entries()) {
            if (value.trim()) {
                data[key] = value;
            }
        }

        console.log("Форма отправлена:", data);
    });
});
