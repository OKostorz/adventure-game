document.getElementById('level_title').innerHTML = 'Witaj w …, widzę ze udało Ci wygrać w Memory Card! Ale nie ciesz się tak wcześnie bo to nie koniec zabawy!  Abyś mógł dalej żyć swoim nudnym życiem musisz odpowiedz na kilka pytań. Pamiętaj zła odpowiedz a zostaniesz tutaj ze mną na zawsze! *śmiech* Zaczynajmy!';
 
var opt3 = document.getElementById('option3');
opt3.style.display = "none";

var opt4 = document.getElementById('option4');
opt4.style.display = "none";

var Maths = false;
var Lion = false;
var Geography = false;
var hasScissors = false;
var hasWo1 = false;
var hasMicroscope = false;
var Labo = false;
var Physics = false; 

/*/--------BEGIN VAN SPEL--------/*/

function Start(){

	var opt1 = document.getElementById('option1');
		opt1.setAttribute("onClick", "javascript:Level1();");
		opt1.innerHTML = 'Speel';
		opt1.style.display = "inline-block";
}

function Level1() {
	document.getElementById('level_title').innerHTML = '*Hohoho* widzę ze trafiłeś na lekcje „Matematyka”. Mam nadzieje ze dobry z tego przedmiotu w szkole byleś! Oto pierwsze zadanie: Zagadka 1. Jaka liczbę otrzymamy po pomnożeniu wszystkich cyfr z telefonu?';
	document.getElementById('level_image').src = 'img/math.jpg';
	
    microscope.style.display = "none";
    
	console.log("Level1()");

	var opt1 = document.getElementById('option1');
		opt1.innerHTML = '362880 ';
		opt1.onclick = function(){
            Maths = false;
            gameOverA();
        }

	var opt2 = document.getElementById('option2');
		opt2.innerHTML = '5040';
		opt2.style.display = "inline-block";
		opt2.onclick = function(){
            Maths = false;
            gameOverA();
        }

	var opt3 = document.getElementById('option3');
		opt3.innerHTML = '0';
		opt3.style.display = "inline-block";
		opt3.onclick = function(){
			Maths = true;
            Level2();
		}
    
    var opt4 = document.getElementById('option4');
        opt4.style.display = "none";
}

function gameOverA() {
	document.getElementById('level_title').innerHTML = 'Widzę ze wybrałeś zła odpowiedz w pierwszej zagadce. Wiesz co to oznacza? Ale dam Ci jedna szanse iż ze to pierwsza zagadka a zabawa dopiero się musi zacząć!  Wiec słuchaj uważnie o to twoja zagadka abyś mógł dalej ze mną spędzić swój nudny czas. Musisz teraz wybrać pomieszczenie do dalszej gry.';
	document.getElementById('level_image').src = 'img/black.jpg';
    
	var opt1 = document.getElementById('option1');
		opt1.innerHTML = 'pokój w którym jest seryjny morderca';
		opt1.onclick = function(){
            alert('Ups, jesteś martwy');
            Level1();
        }
        
	var opt2 = document.getElementById('option2');
        opt2.innerHTML = 'pokój z wygłodniałym lwem, który nie jadł nic od 6 miesięcy'; 
		opt2.onclick = function(){
            Lion = true;
            Level2();
        }

	var opt3 = document.getElementById('option3');
        opt3.innerHTML = 'pokój w którym szaleje pożar';
        opt3.onclick = function(){
            alert('Spłonąłeś...');
            Level1();
        }		
}

function Level2() {
	document.getElementById('level_title').innerHTML = 'Brawo, udało Ci się! Jak sam widzisz jesteś w sali „Geografia”. Zagadka to : W ilu krajach język włoski jest językiem urzędowym?';
	document.getElementById('level_image').src = 'img/geography.jpg';

	console.log("Level2()");

	var opt1 = document.getElementById('option1');
		opt1.innerHTML = 'w jednym ';
		opt1.onclick = function(){
            Level1();
	    }

	var opt2 = document.getElementById('option2');
		opt2.innerHTML = 'w dwoch';
		opt2.onclick = function(){
			if(Geography){
				Level3();
			} 
			else {
				alert('No wez...');
			}
	}

	var opt3 = document.getElementById('option3');
		opt3.innerHTML = 'w trzech';
		opt3.onclick = function(){
            alert('eh...');
		}
    
    var opt4 = document.getElementById('option4');
        opt4.innerHTML = 'w czterech';
        opt4.style.display = "inline-block";
        opt4.onclick = function(){
            Geography = true;
            Level3();
        }
}

function Level3() {
	document.getElementById('level_title').innerHTML = 'Oho widzę ze idzie Ci dobrze i znasz odpowiedzi na moje zagadki. Może troszkę zaostrzymy grę ? Widzisz tam po prawej jest skrzynka z kabelkami a po lewej nożyczki. Aby wygrać i żyć swoim nudnym życiem musisz najpierw wyjść z sali „Plastyka” ale przed tym czeka Cię przecięcie odpowiedniego kabla. Są 3 kable. Przetnij nie podstawowy kolor.';
	document.getElementById('level_image').src = 'img/art.jpg';

	console.log("Level3()"); 
    
    scissors.style.display = "inline-block";
    
    scissors.onclick = function(){
        scissors.style.display = "none";
        hasScissors = true;
    }

	var opt1 = document.getElementById('option1');
		opt1.innerHTML = 'Czerwony';
		opt1.onclick = function(){
            alert('tik tak tik tak tik tak');
			}

	var opt2 = document.getElementById('option2');
		opt2.style.display = 'inline-block';
		opt2.innerHTML = 'Niebieski';
		opt2.onclick = function(){
            alert('tik tak tik tak tik tak');
			}     
        
	var opt3 = document.getElementById('option3');
        opt3.innerHTML = 'Czarny';
        opt3.onclick = function(){      
            if(hasScissors){
                Level4();
            }
            else {
                alert('Gdzie masz nożyczki?');
            }
        }
            
    var opt4 = document.getElementById('option4');
        opt4.style.display = "none";
}

function Level4() {
	document.getElementById('level_title').innerHTML = 'HA HA HA myślałeś ze puszcze Cię tak łatwo stad ? Jeszcze nie skończyłem się z Toba bawić. Moja mama która już nie żyje zawsze mi mówiła abym spędzał więcej czasu z przyjaciółmi wiec teraz to robię. PATRZ NA MNIE MAMO! JA SIĘ BAWIE !';
	document.getElementById('level_image').src = 'img/hal.jpg';

	console.log("Level4()");

	var opt1 = document.getElementById('option1');
		opt1.innerHTML = 'Pieprz sie!';
		opt1.onclick = function(){
			Level5();
		}

	var opt2 = document.getElementById('option2');
		opt2.innerHTML = 'Jestes jakis psychicznie chory!';
		opt2.onclick = function(){ 
			Level5();
		}

	var opt3 = document.getElementById('option3');
		opt3.style.display = "inline-block"; 
		opt3.innerHTML = 'Dajesz nie boje sie twoich gierek!'
		opt3.onclick = function(){
            Level5();
		}
}

function Level5() {
	document.getElementById('level_title').innerHTML = 'Tak ? Proszę bardzo, następne pytanie: W którym roku rozpoczęła się 1 wojna światowa?';
	document.getElementById('level_image').src = 'img/zaalA.jpg';

	console.log("Level5()");

	var opt1 = document.getElementById('option1'); 
		opt1.innerHTML = '1915';
		opt1.onclick = function(){
			hasWo1 = true; 
			if(hasWo1){
				gameOverB();
			}
		}

	var opt2 = document.getElementById('option2'); 
		opt2.innerHTML = '1914';
		opt2.style.display = "inline-block";
		opt2.onclick = function(){
			Level6();
		}

	var opt3 = document.getElementById('option3');
		opt3.innerHTML = '1918';
        opt3.onclick = function(){
            hasWo1 = true; 
			if(hasWo1){
				gameOverB();
			}
        }
}

function gameOverB(){
    document.getElementById('level_title').innerHTML = 'Widzę ze znowu obijasz się. Tak bardzo mi się podoba zabawa z Toba ze aż dam Ci szanse aby się poprawić. Uwaga ! W którym roku zakończyła się 1 wojna światowa?';
    document.getElementById('level_image').src = 'img/zaalB.jpg';

	var opt1 = document.getElementById('option1');
		opt1.innerHTML = '1918';
		opt1.onclick = function(){
			Level6();
		}

	var opt2 = document.getElementById('option2');
		opt2.innerHTML = '1914';
        opt2.onclick = function(){
            gameOverC();
        }

	var opt3 = document.getElementById('option3');
		opt3.innerHTML = '1916';
        opt3.onclick = function(){
            gameOverC();
        }
}

function gameOverC() {
	document.getElementById('level_title').innerHTML = 'Ale jesteś nudny ! Nie udało Ci się poprawnie odpowiedzieć na moje łatwe pytania ale w prezencie bo jestem taki miły dziś dostaniesz jeszcze jedno pytanie: Endorfiny to hormony, które wywołują uczucie:';
	document.getElementById('level_image').src = 'img/labo.jpg';
    
    microscope.style.display = "inline-block";
    
    microscope.onclick = function(){
        microscope.style.display = "none";
        hasMicroscope = true;
    }
	var opt1 = document.getElementById('option1');
		opt1.innerHTML = 'Strachu';
		opt1.onclick = function(){
            Level1();
		}
        
	var opt2 = document.getElementById('option2');
		opt2.innerHTML = 'Smutku';
        opt2.onclick = function(){
            Level1();
        }

	var opt3 = document.getElementById('option3');
		opt3.innerHTML = 'Zlosci';
        opt3.onclick = function(){
            Level1();
        }
        
    var opt4 = document.getElementById('option4');
        opt4.style.display = "inline-block";
        opt4.innerHTML = 'Szczęścia';
        opt4.onclick = function(){
            if(hasMicroscope){
                Level6();
            }
            else {
                alert('A może najpierw jakieś badania?');
            }
		}
}

function Level6() {
	document.getElementById('level_title').innerHTML = 'Jak tam ? Podoba Ci się jeszcze ? No dobra nie będę Cię męczył moimi zabawami. O to ostatnie pytanie z „Fizyka”!: Równanie E=mc^2 pochodzi z teorii względności Einsteina. Co oznacza w nim c?';
	document.getElementById('level_image').src = 'img/fizyka.jpg';
    
	console.log("Level6()");

	var opt1 = document.getElementById('option1');
		opt1.innerHTML = 'Częstotliwość fali';
		opt1.onclick = function(){
            endA();
		}

	var opt2 = document.getElementById('option2');
		opt2.innerHTML = 'Prędkość światła w próżni';
		opt2.onclick = function(){
            Physics = true;
			Level7();
		}
        
    var opt3 = document.getElementById('option3');
        opt3.innerHTML = 'Przyspieszenie poruszającego się obiektu';
        opt3.onclick = function(){
            endA();
        }
        
    var opt4 = document.getElementById('option4');
        opt4.style.display = "inline-block";
        opt4.innerHTML = 'Prędkość poruszającego się obiektu';
        opt4.onclick = function(){
            endA();
        }
}

function endA(){
    document.getElementById('level_title').innerHTML = 'Dzięki ze miałeś czas aby ze mną się pobawić. Może na koniec jeszcze jedno pytanie ? Nie no żartuje. Baw się dobrze w swym nudnym życiu. A ja idę szukać nowej zabawki';
    document.getElementById('level_image').src = 'img/game.jpg';

	var opt1 = document.getElementById('option1');
		opt1.innerHTML = 'Graj jednak na nowo';
		opt1.onclick = function(){
			Level1();
		}

	var opt2 = document.getElementById('option2');
		opt2.style.display = "none";
    
    var opt3 = document.getElementById('option3');
        opt3.style.display = "none";
    
    var opt4 = document.getElementById('option4');
        opt4.style.display = "none";
}

function Level7() {
	document.getElementById('level_title').innerHTML = 'Gratulacje, jesteś jeszcze bardziej nudnym człowiekiem niż myślałem. Odpowiedziałeś na wszystkie moje pytania wiec z tej okazji dam Ci pytanie ostateczne! Pamiętaj nie zgadniesz a zostaniesz ze mną tutaj *śmiech*. Oto one: Ośmiornica ma osiem…. ?';
	document.getElementById('level_image').src = 'img/osmiornica.jpg';

	console.log("Level7()");

	var opt1 = document.getElementById('option1');
		opt1.innerHTML = 'Nóg';
		opt1.onclick = function(){
			alert('Poważnie ? Wiesz ze ośmiornica ma macki…')
		}

	var opt2 = document.getElementById('option2');
		opt2.style.display = "inline-block";
        opt2.innerHTML = 'Rąk';
        opt2.onclick = function(){
            alert('Poważnie ? Wiesz ze ośmiornica ma macki…')
        }
        
    var opt3 = document.getElementById('option3');
        opt3.style.display = "none";
    
    var opt4 = document.getElementById('option4');
        opt4.style.display = "none";    
}

