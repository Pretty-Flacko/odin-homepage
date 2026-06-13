/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 208
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after {
	box-sizing: border-box;
}

body {
	margin: 0;
	line-height: 1.5;
	font-family: "Roboto";
}

h1,
h2,
h3,
h4,
h5,
h6 {
	margin: 0;
	font-family: "Playfair Display";
}

p {
	margin: 0;
}

img {
	max-width: 100%;
	display: block;
}

a {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	color: #000;
	text-decoration: none;
	transition:
		color 300ms ease,
		transform 300ms ease;
}
a svg {
	fill: currentColor;
}

a:hover {
	color: #0891b2;
	transform: translateY(-2px);
}

.header {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	text-align: center;
	position: relative;
	overflow: hidden;
	margin-bottom: 90px;
}

.header::before {
	content: "";
	position: absolute;
	inset: 0;
	background-color: #0891b2;
	clip-path: polygon(0 0, 100% 0, 100% 40%, 0 50%);
	z-index: -1;
}

.header__photo {
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	padding: 56px clamp(24px, 16vw, 66px) 0;
	width: 100%;
	aspect-ratio: 618/990;
}

.header__photo img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.header__photo h1 {
	position: absolute;
	left: 66px;
	bottom: 0px;
	text-align: left;
	font-size: 3rem;
	font-weight: 400;
	line-height: 1.2;
	color: #fff;
	text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
	width: min-content;
}

.header__about {
	padding: 0 44px;
}

.header__about h2 {
	font-size: 2.5rem;
	font-weight: 400;
}

.header__about p {
	text-align: left;
	color: #6c6c6c;
}

.header__socials {
	margin-top: 15px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 1rem;
}

.header__socials svg {
	height: 26px;
	width: 26px;
}

.main {
	padding: 0 18px;
	margin-bottom: 90px;
}

.main h2 {
	text-align: center;
	font-size: 2.5rem;
	font-weight: 400;
	margin-bottom: 18px;
}

.work-grid {
	display: grid;
	grid-template-columns: 1fr;
	gap: 60px;
}

.work-card {
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
}

.work-image {
	display: flex;
	align-items: center;
	justify-content: center;
	aspect-ratio: 1 / 0.82;
	padding: 0 20px;
	text-align: center;
	font-size: 2.2rem;
	line-height: 1.15;
	font-family: "Playfair Display";
	color: #fff;
}

.work-card:nth-child(1) .work-image {
	background-color: #7c75ca;
}

.work-card:nth-child(2) .work-image {
	background-color: #d88f39;
}

.work-card:nth-child(3) .work-image {
	background-color: #5e8f4d;
}

.work-card:nth-child(4) .work-image {
	background-color: #ca7599;
}

.work-card:nth-child(5) .work-image {
	background-color: #4692d9;
}

.work-card:nth-child(6) .work-image {
	background-color: #5e8f4d;
}

.work-description {
	padding: 10px 18px 34px;
}

.work-description div {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 8px;
}

.work-description h3 {
	font-size: 1rem;
	font-weight: 400;
}

.work__links {
	display: flex;
	align-items: center;
	gap: 10px;
}

.work__links svg {
	height: 16px;
	width: 16px;
}

.work-description p {
	font-size: 0.78rem;
	line-height: 1.2;
	color: #565656;
}

.footer {
	display: flex;
	flex-direction: column;
	background-color: #0891b2;
}

.footer__contact {
	padding: 36px 24px 48px;
	color: #fff;
}

.footer__contact h2 {
	font-size: 2.5rem;
	font-weight: 400;
	margin-bottom: 14px;
	text-align: center;
}

.footer__contact p {
	line-height: 1.25;
}

.footer__contact p + p {
	margin-top: 22px;
}

.footer__contact-row {
	display: flex;
	align-items: center;
	gap: 12px;
	margin-top: 18px;
}

.footer__contact-row .icon {
	display: none;
	width: 20px;
	height: 20px;
	fill: #fff;
}

.footer__socials {
	display: flex;
	justify-content: center;
	gap: 1.5rem;
	margin-top: 26px;
}

.footer__socials a:hover {
	color: #fff;
}

.footer__socials svg {
	width: 28px;
	height: 28px;
}

.footer__image img {
	width: 100%;
	height: auto;
}

@media (min-width: 500px) {
	.header {
		display: block;
		padding: 40px 28px 0;
		margin-bottom: 45px;
		overflow: visible;
	}

	.header::before {
		clip-path: polygon(0 0, 100% 0, 100% 40%, 0 80%);
	}

	.header__photo {
		float: left;
		padding: 0;
		margin: 0 28px 12px 0;
		width: clamp(230px, 46vw, 360px);
		aspect-ratio: auto;
		z-index: 2;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
	}

	.header__photo h1 {
		top: 10px;
		left: 78%;
		bottom: auto;
		width: max-content;
		font-size: 2.5rem;
		line-height: 1;
	}

	.header__about {
		margin: 90px 0 0 clamp(28px, 7vw, 60px);
		padding: 60px 36px 36px;
		background-color: #fff;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
	}

	.header__about h2 {
		font-size: clamp(1.9rem, 5vw, 2.5rem);
		margin-bottom: 0.75rem;
	}

	.header__socials {
		justify-content: flex-end;
		margin-top: 1.5rem;
	}

	.main {
		padding: 0 70px;
		margin-bottom: 190px;
	}

	.main h2 {
		text-align: left;
		font-size: 2.4rem;
		margin-bottom: 12px;
	}

	.work-grid {
		grid-template-columns: repeat(2, 1fr);
		gap: 56px 38px;
	}

	.work-image {
		aspect-ratio: 1 / 0.72;
		font-size: 2rem;
	}

	.work-description {
		padding: 10px 20px 44px;
	}

	.footer {
		flex-direction: row;
		align-items: center;
		gap: 42px;
		padding: 60px 40px;
	}

	.footer__contact {
		flex: 1 1 0;
		padding: 0;
	}

	.footer__contact h2 {
		font-size: 2.4rem;
		text-align: left;
		margin-bottom: 16px;
	}

	.footer__contact p + p {
		margin-top: 24px;
	}

	.footer__contact-row .icon {
		display: block;
	}

	.footer__socials {
		justify-content: flex-start;
		margin-top: 28px;
	}

	.footer__image {
		flex: 0 1 320px;
	}

	.footer__image img {
		width: 100%;
		height: 420px;
		object-fit: cover;
		object-position: 20% center;
	}
}

@media (min-width: 1000px) {
	.header {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 0;
		padding: 56px 76px 100px;
		text-align: left;
		overflow: hidden;
	}

	.header::before {
		clip-path: polygon(0 0, 100% 0, 100% 42%, 0 95%);
	}

	.header__photo {
		float: none;
		flex: 0 0 460px;
		width: 460px;
		height: 530px;
		aspect-ratio: auto;
		margin: 0;
		padding: 0;
		z-index: 2;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
	}

	.header__photo h1 {
		left: 10px;
		bottom: 10px;
		top: auto;
		font-size: 3.6rem;
	}

	.header__about {
		flex: 0 1 640px;
		min-height: 390px;
		margin: 0;
		padding: 40px 40px 40px 20px;
	}

	.header__about h2 {
		font-size: 2.4rem;
		margin-bottom: 1rem;
	}

	.header__about p {
		font-size: 1.25rem;
	}

	.main {
		max-width: 1200px;
		margin: 0 auto 110px;
		padding: 0 76px;
	}

	.main h2 {
		font-size: 2.5rem;
	}

	.work-grid {
		grid-template-columns: repeat(3, 1fr);
		gap: 52px 42px;
	}

	.work-image {
		font-size: 2.4rem;
	}

	.work-description {
		padding: 14px 24px 58px;
	}

	.work-description div {
		margin-bottom: 12px;
	}

	.work-description h3 {
		font-size: 1.1rem;
	}

	.work-description p {
		font-size: 0.85rem;
	}

	.work__links svg {
		width: 18px;
		height: 18px;
	}

	.footer {
		gap: 80px;
		padding: 60px 76px;
		justify-content: center;
		align-items: start;
	}

	.footer__contact {
		flex: 0 1 420px;
		padding: 0px;
	}

	.footer__contact h2 {
		font-size: 2.6rem;
		margin-bottom: 18px;
	}

	.footer__contact p {
		font-size: 1.1rem;
	}

	.footer__contact p + p {
		margin-top: 28px;
	}

	.footer__contact-row .icon {
		width: 22px;
		height: 22px;
	}

	.footer__socials {
		justify-content: flex-start;
		gap: 1.75rem;
		margin-top: 32px;
	}

	.footer__socials svg {
		width: 34px;
		height: 34px;
	}

	.footer__image {
		flex: 0 1 650px;
	}

	.footer__image img {
		height: 480px;
	}
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n\tbox-sizing: border-box;\n}\n\nbody {\n\tmargin: 0;\n\tline-height: 1.5;\n\tfont-family: \"Roboto\";\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n\tmargin: 0;\n\tfont-family: \"Playfair Display\";\n}\n\np {\n\tmargin: 0;\n}\n\nimg {\n\tmax-width: 100%;\n\tdisplay: block;\n}\n\na {\n\tdisplay: inline-flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: #000;\n\ttext-decoration: none;\n\ttransition:\n\t\tcolor 300ms ease,\n\t\ttransform 300ms ease;\n}\na svg {\n\tfill: currentColor;\n}\n\na:hover {\n\tcolor: #0891b2;\n\ttransform: translateY(-2px);\n}\n\n.header {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 1rem;\n\ttext-align: center;\n\tposition: relative;\n\toverflow: hidden;\n\tmargin-bottom: 90px;\n}\n\n.header::before {\n\tcontent: \"\";\n\tposition: absolute;\n\tinset: 0;\n\tbackground-color: #0891b2;\n\tclip-path: polygon(0 0, 100% 0, 100% 40%, 0 50%);\n\tz-index: -1;\n}\n\n.header__photo {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tposition: relative;\n\tpadding: 56px clamp(24px, 16vw, 66px) 0;\n\twidth: 100%;\n\taspect-ratio: 618/990;\n}\n\n.header__photo img {\n\twidth: 100%;\n\theight: 100%;\n\tobject-fit: cover;\n}\n\n.header__photo h1 {\n\tposition: absolute;\n\tleft: 66px;\n\tbottom: 0px;\n\ttext-align: left;\n\tfont-size: 3rem;\n\tfont-weight: 400;\n\tline-height: 1.2;\n\tcolor: #fff;\n\ttext-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);\n\twidth: min-content;\n}\n\n.header__about {\n\tpadding: 0 44px;\n}\n\n.header__about h2 {\n\tfont-size: 2.5rem;\n\tfont-weight: 400;\n}\n\n.header__about p {\n\ttext-align: left;\n\tcolor: #6c6c6c;\n}\n\n.header__socials {\n\tmargin-top: 15px;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: center;\n\tgap: 1rem;\n}\n\n.header__socials svg {\n\theight: 26px;\n\twidth: 26px;\n}\n\n.main {\n\tpadding: 0 18px;\n\tmargin-bottom: 90px;\n}\n\n.main h2 {\n\ttext-align: center;\n\tfont-size: 2.5rem;\n\tfont-weight: 400;\n\tmargin-bottom: 18px;\n}\n\n.work-grid {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgap: 60px;\n}\n\n.work-card {\n\tbox-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);\n}\n\n.work-image {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\taspect-ratio: 1 / 0.82;\n\tpadding: 0 20px;\n\ttext-align: center;\n\tfont-size: 2.2rem;\n\tline-height: 1.15;\n\tfont-family: \"Playfair Display\";\n\tcolor: #fff;\n}\n\n.work-card:nth-child(1) .work-image {\n\tbackground-color: #7c75ca;\n}\n\n.work-card:nth-child(2) .work-image {\n\tbackground-color: #d88f39;\n}\n\n.work-card:nth-child(3) .work-image {\n\tbackground-color: #5e8f4d;\n}\n\n.work-card:nth-child(4) .work-image {\n\tbackground-color: #ca7599;\n}\n\n.work-card:nth-child(5) .work-image {\n\tbackground-color: #4692d9;\n}\n\n.work-card:nth-child(6) .work-image {\n\tbackground-color: #5e8f4d;\n}\n\n.work-description {\n\tpadding: 10px 18px 34px;\n}\n\n.work-description div {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tmargin-bottom: 8px;\n}\n\n.work-description h3 {\n\tfont-size: 1rem;\n\tfont-weight: 400;\n}\n\n.work__links {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 10px;\n}\n\n.work__links svg {\n\theight: 16px;\n\twidth: 16px;\n}\n\n.work-description p {\n\tfont-size: 0.78rem;\n\tline-height: 1.2;\n\tcolor: #565656;\n}\n\n.footer {\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: #0891b2;\n}\n\n.footer__contact {\n\tpadding: 36px 24px 48px;\n\tcolor: #fff;\n}\n\n.footer__contact h2 {\n\tfont-size: 2.5rem;\n\tfont-weight: 400;\n\tmargin-bottom: 14px;\n\ttext-align: center;\n}\n\n.footer__contact p {\n\tline-height: 1.25;\n}\n\n.footer__contact p + p {\n\tmargin-top: 22px;\n}\n\n.footer__contact-row {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 12px;\n\tmargin-top: 18px;\n}\n\n.footer__contact-row .icon {\n\tdisplay: none;\n\twidth: 20px;\n\theight: 20px;\n\tfill: #fff;\n}\n\n.footer__socials {\n\tdisplay: flex;\n\tjustify-content: center;\n\tgap: 1.5rem;\n\tmargin-top: 26px;\n}\n\n.footer__socials a:hover {\n\tcolor: #fff;\n}\n\n.footer__socials svg {\n\twidth: 28px;\n\theight: 28px;\n}\n\n.footer__image img {\n\twidth: 100%;\n\theight: auto;\n}\n\n@media (min-width: 500px) {\n\t.header {\n\t\tdisplay: block;\n\t\tpadding: 40px 28px 0;\n\t\tmargin-bottom: 45px;\n\t\toverflow: visible;\n\t}\n\n\t.header::before {\n\t\tclip-path: polygon(0 0, 100% 0, 100% 40%, 0 80%);\n\t}\n\n\t.header__photo {\n\t\tfloat: left;\n\t\tpadding: 0;\n\t\tmargin: 0 28px 12px 0;\n\t\twidth: clamp(230px, 46vw, 360px);\n\t\taspect-ratio: auto;\n\t\tz-index: 2;\n\t\tbox-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);\n\t}\n\n\t.header__photo h1 {\n\t\ttop: 10px;\n\t\tleft: 78%;\n\t\tbottom: auto;\n\t\twidth: max-content;\n\t\tfont-size: 2.5rem;\n\t\tline-height: 1;\n\t}\n\n\t.header__about {\n\t\tmargin: 90px 0 0 clamp(28px, 7vw, 60px);\n\t\tpadding: 60px 36px 36px;\n\t\tbackground-color: #fff;\n\t\tbox-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);\n\t}\n\n\t.header__about h2 {\n\t\tfont-size: clamp(1.9rem, 5vw, 2.5rem);\n\t\tmargin-bottom: 0.75rem;\n\t}\n\n\t.header__socials {\n\t\tjustify-content: flex-end;\n\t\tmargin-top: 1.5rem;\n\t}\n\n\t.main {\n\t\tpadding: 0 70px;\n\t\tmargin-bottom: 190px;\n\t}\n\n\t.main h2 {\n\t\ttext-align: left;\n\t\tfont-size: 2.4rem;\n\t\tmargin-bottom: 12px;\n\t}\n\n\t.work-grid {\n\t\tgrid-template-columns: repeat(2, 1fr);\n\t\tgap: 56px 38px;\n\t}\n\n\t.work-image {\n\t\taspect-ratio: 1 / 0.72;\n\t\tfont-size: 2rem;\n\t}\n\n\t.work-description {\n\t\tpadding: 10px 20px 44px;\n\t}\n\n\t.footer {\n\t\tflex-direction: row;\n\t\talign-items: center;\n\t\tgap: 42px;\n\t\tpadding: 60px 40px;\n\t}\n\n\t.footer__contact {\n\t\tflex: 1 1 0;\n\t\tpadding: 0;\n\t}\n\n\t.footer__contact h2 {\n\t\tfont-size: 2.4rem;\n\t\ttext-align: left;\n\t\tmargin-bottom: 16px;\n\t}\n\n\t.footer__contact p + p {\n\t\tmargin-top: 24px;\n\t}\n\n\t.footer__contact-row .icon {\n\t\tdisplay: block;\n\t}\n\n\t.footer__socials {\n\t\tjustify-content: flex-start;\n\t\tmargin-top: 28px;\n\t}\n\n\t.footer__image {\n\t\tflex: 0 1 320px;\n\t}\n\n\t.footer__image img {\n\t\twidth: 100%;\n\t\theight: 420px;\n\t\tobject-fit: cover;\n\t\tobject-position: 20% center;\n\t}\n}\n\n@media (min-width: 1000px) {\n\t.header {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tgap: 0;\n\t\tpadding: 56px 76px 100px;\n\t\ttext-align: left;\n\t\toverflow: hidden;\n\t}\n\n\t.header::before {\n\t\tclip-path: polygon(0 0, 100% 0, 100% 42%, 0 95%);\n\t}\n\n\t.header__photo {\n\t\tfloat: none;\n\t\tflex: 0 0 460px;\n\t\twidth: 460px;\n\t\theight: 530px;\n\t\taspect-ratio: auto;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tz-index: 2;\n\t\tbox-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);\n\t}\n\n\t.header__photo h1 {\n\t\tleft: 10px;\n\t\tbottom: 10px;\n\t\ttop: auto;\n\t\tfont-size: 3.6rem;\n\t}\n\n\t.header__about {\n\t\tflex: 0 1 640px;\n\t\tmin-height: 390px;\n\t\tmargin: 0;\n\t\tpadding: 40px 40px 40px 20px;\n\t}\n\n\t.header__about h2 {\n\t\tfont-size: 2.4rem;\n\t\tmargin-bottom: 1rem;\n\t}\n\n\t.header__about p {\n\t\tfont-size: 1.25rem;\n\t}\n\n\t.main {\n\t\tmax-width: 1200px;\n\t\tmargin: 0 auto 110px;\n\t\tpadding: 0 76px;\n\t}\n\n\t.main h2 {\n\t\tfont-size: 2.5rem;\n\t}\n\n\t.work-grid {\n\t\tgrid-template-columns: repeat(3, 1fr);\n\t\tgap: 52px 42px;\n\t}\n\n\t.work-image {\n\t\tfont-size: 2.4rem;\n\t}\n\n\t.work-description {\n\t\tpadding: 14px 24px 58px;\n\t}\n\n\t.work-description div {\n\t\tmargin-bottom: 12px;\n\t}\n\n\t.work-description h3 {\n\t\tfont-size: 1.1rem;\n\t}\n\n\t.work-description p {\n\t\tfont-size: 0.85rem;\n\t}\n\n\t.work__links svg {\n\t\twidth: 18px;\n\t\theight: 18px;\n\t}\n\n\t.footer {\n\t\tgap: 80px;\n\t\tpadding: 60px 76px;\n\t\tjustify-content: center;\n\t\talign-items: start;\n\t}\n\n\t.footer__contact {\n\t\tflex: 0 1 420px;\n\t\tpadding: 0px;\n\t}\n\n\t.footer__contact h2 {\n\t\tfont-size: 2.6rem;\n\t\tmargin-bottom: 18px;\n\t}\n\n\t.footer__contact p {\n\t\tfont-size: 1.1rem;\n\t}\n\n\t.footer__contact p + p {\n\t\tmargin-top: 28px;\n\t}\n\n\t.footer__contact-row .icon {\n\t\twidth: 22px;\n\t\theight: 22px;\n\t}\n\n\t.footer__socials {\n\t\tjustify-content: flex-start;\n\t\tgap: 1.75rem;\n\t\tmargin-top: 32px;\n\t}\n\n\t.footer__socials svg {\n\t\twidth: 34px;\n\t\theight: 34px;\n\t}\n\n\t.footer__image {\n\t\tflex: 0 1 650px;\n\t}\n\n\t.footer__image img {\n\t\theight: 480px;\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 314
(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ 354
(module) {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ },

/***/ 72
(module) {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ 659
(module) {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ },

/***/ 540
(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ 56
(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ 825
(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ },

/***/ 113
(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(72);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(56);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/style.css
var style = __webpack_require__(208);
;// ./src/style.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(style/* default */.A, options);




       /* harmony default export */ const src_style = (style/* default */.A && style/* default */.A.locals ? style/* default */.A.locals : undefined);

;// ./src/index.js


/******/ })()
;
//# sourceMappingURL=main.js.map