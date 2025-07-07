document.querySelector(".about-video__frame").addEventListener("click", function () {
	// Создаем модальное окно
	const modal = document.createElement("div");
	modal.style.position = "fixed";
	modal.style.top = "0";
	modal.style.left = "0";
	modal.style.width = "100%";
	modal.style.height = "100%";
	modal.style.background = "rgba(0, 0, 0, 0.95)";
	modal.style.display = "flex";
	modal.style.justifyContent = "center";
	modal.style.alignItems = "center";
	modal.style.zIndex = "9999";
	modal.style.overflow = "auto";
	modal.style.backdropFilter = "blur(4px)";
	modal.style.webkitBackdropFilter = "blur(4px)";

	// Идентификатор видео на YouTube (заменить можно на нужное)
	const videoId = "dQw4w9WgXcQ";
	const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

	// Создаем iframe с автозапуском
	const iframe = document.createElement("iframe");
	iframe.src = videoUrl;
	iframe.width = "100%";
	iframe.height = "90%";
	iframe.frameBorder = "0";
	iframe.allow =
		"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
	iframe.allowFullscreen = true;

	// Размеры iframe подстраиваем под размер окна
	iframe.style.maxWidth = "90%";
	iframe.style.maxHeight = "90vh";

	// Добавляем iframe в модалку
	modal.appendChild(iframe);

	// Закрытие по клику вне видео
	modal.addEventListener("click", function (e) {
		if (e.target === modal) {
			modal.remove();
		}
	});

	document.addEventListener("keydown", function (e) {
		if (e.key === "Escape") {
			modal.remove();
		}
	});

	// Добавляем модалку на страницу
	document.body.appendChild(modal);
});