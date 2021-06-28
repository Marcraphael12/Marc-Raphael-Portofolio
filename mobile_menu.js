let hamburger = document.querySelector(".class-side-menu");
hamburger.addEventListener("click", mobileMenu);
hamburger.addEventListener("mouseover", hover);

function hover () 
	{
		hamburger.style.visibility ="hidden";
	}

	

function mobileMenu () 
	{
		// create menu element
		let menuContainer = document.createElement("menu");
		menuContainer.style.height = "568px";
		menuContainer.style.width = "320";
		menuContainer.style.backgroundColor = "white";
		menuContainer.style.backgroundImage = "url(./mobile-menu-image/image_geometry_menu_1.png), url(./mobile-menu-image/image_geometry_menu_1.png)";
		menuContainer.style.backgroundPosition = "top left, bottom center";
		menuContainer.style.backgroundRepeat = "no-repeat, no-repeat"
		menuContainer.style.fontFamily = "'Poppins', sans-serif";
		menuContainer.style.color = "rgba(26, 34, 54, 1)";


		// create menu links
		let link1 = document.createElement("a").createTextNode ("Hello");
		link1.style.fontFamily = "'Poppins', sans-serif"
		let link2 = document.createElement("a").createTextNode ("Portofolio");
		let link3 = document.createElement("a").createTextNode ("About");
		let link4 = document.createElement("a").createTextNode ("Contact");
	}