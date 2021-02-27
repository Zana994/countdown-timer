
var front_cards = document.getElementsByClassName("front");
var cards = document.getElementsByClassName("card");
var bottom_cards = document.getElementsByClassName("card-bottom");


var r = document.querySelector(':root');
var rs = getComputedStyle(r);

var start_countdown = setInterval(flippingCards, 1.2*1000);
function stop_countdown() {
    clearInterval(start_countdown);
}

function set_initial_value(r) {
    r.style.setProperty('--content-front-days', "'09'");
    r.style.setProperty('--content-front-days-num', 9);
    r.style.setProperty('--content-back-days', "'08'");
    r.style.setProperty('--content-back-days-num', 8);

    r.style.setProperty('--content-front-hours', "'00'");
    r.style.setProperty('--content-front-hours-num', 0);
    r.style.setProperty('--content-back-hours', "'23'");
    r.style.setProperty('--content-back-hours-num', 23);

    r.style.setProperty('--content-front-minutes', "'56'");
    r.style.setProperty('--content-front-minutes-num', 56);
    r.style.setProperty('--content-back-minutes', "'55'");
    r.style.setProperty('--content-back-minutes-num', 55);

    r.style.setProperty('--content-front-seconds', "'42'");
    r.style.setProperty('--content-front-seconds-num', 42);
    r.style.setProperty('--content-back-seconds', "'41'");
    r.style.setProperty('--content-back-seconds-num', 41);
}

function startCounting() {
    for(var i=0; i<cards.length; i++)
    cards[i].classList.add("flip");

    front_cards[3].classList.add("flip-s");
    bottom_cards[3].classList.add("flip-s");

    front_cards[0].classList.add("flip-d");
    bottom_cards[0].classList.add("flip-d");

    front_cards[1].classList.add("flip-h");
    bottom_cards[1].classList.add("flip-h");

    front_cards[2].classList.add("flip-m");
    bottom_cards[2].classList.add("flip-m");
}

function flippingCards() {
    var b = rs.getPropertyValue('--content-back-seconds-num');
    var m = rs.getPropertyValue('--content-back-minutes-num');
    var h = rs.getPropertyValue('--content-back-hours-num');
    var d = rs.getPropertyValue('--content-back-days-num');
    if(parseInt(m) == 0 && parseInt(h) == 0 && parseInt(d) == 0 && parseInt(b) == 1) { 
        stop_countdown(); }
    flip_seconds(r);

    front_cards[3].classList.remove("flip-s");
    bottom_cards[3].classList.remove("flip-s");
    cards[3].classList.remove("flip");
    void cards[3].offsetWidth;
    void front_cards[3].offsetWidth;
    void bottom_cards[3].offsetWidth;
    
    cards[3].classList.add("flip");
    front_cards[3].classList.add("flip-s");
    bottom_cards[3].classList.add("flip-s");    
}

function flip_seconds(r) {
    var s = rs.getPropertyValue('--content-front-seconds-num');
    var b = rs.getPropertyValue('--content-back-seconds-num');
    var m = rs.getPropertyValue('--content-back-minutes-num');
    var h = rs.getPropertyValue('--content-back-hours-num');
    var d = rs.getPropertyValue('--content-back-days-num');
  
    if(parseInt(b) == 0 && (parseInt(m) != 0 || parseInt(h) != 0 || parseInt(d) != 0)){
        var front = b;
        var back = 59;
        flip_minutes();
    } else if(parseInt(s) < parseInt(b)){
        var back = parseInt(b - 1);
        var front = parseInt(b);
    } 
    else {
        var back = parseInt(s - 2);
        var front = parseInt(s - 1);
    }
   
    if(back < 10) { 
    r.style.setProperty('--content-back-seconds', "'0" + (back) + "'"); 
    }
    if(front < 10) { 
    r.style.setProperty('--content-front-seconds', "'0"+ (front) + "'");
    }
    if(back >= 10) { 
        r.style.setProperty('--content-back-seconds', "'" + (back) + "'");
    }
    if(front >= 10) { 
    r.style.setProperty('--content-front-seconds', "'"+ (front) + "'");
    }
    r.style.setProperty('--content-back-seconds-num', back);
    r.style.setProperty('--content-front-seconds-num', front);
}

function flip_minutes() {
    var s = rs.getPropertyValue('--content-front-minutes-num');
    var b = rs.getPropertyValue('--content-back-minutes-num');
    var h = rs.getPropertyValue('--content-back-hours-num');
    if(parseInt(b) == 0 && parseInt(h) != 0){
        var back = 59;
        var front = b;
        flip_hours();
    }  else if(parseInt(s) < parseInt(b)){
        var back = parseInt(b - 1);
        var front = parseInt(b);
    } 
    else {
        var back = parseInt(s - 2);
        var front = parseInt(s - 1);
    }
        
    if(back < 10) { 
    r.style.setProperty('--content-back-minutes', "'0" + (back) + "'"); 
    }
    if(front < 10) { 
    r.style.setProperty('--content-front-minutes', "'0"+ (front) + "'");
    }
    if(back >= 10) { 
        r.style.setProperty('--content-back-minutes', "'" + (back) + "'");
    }
    if(front >= 10) { 
    r.style.setProperty('--content-front-minutes', "'"+ (front) + "'");
    }
    r.style.setProperty('--content-back-minutes-num', back);
    r.style.setProperty('--content-front-minutes-num', front);
    
    cards[2].classList.remove("flip");
    front_cards[2].classList.remove("flip-m");
    bottom_cards[2].classList.remove("flip-m");
    void cards[2].offsetWidth;
    void front_cards[2].offsetWidth;
    void bottom_cards[2].offsetWidth;
    cards[2].classList.add("flip");
    front_cards[2].classList.add("flip-m");
    bottom_cards[2].classList.add("flip-m");
}

function flip_hours() {
    var s = rs.getPropertyValue('--content-front-hours-num');
    var b = rs.getPropertyValue('--content-back-hours-num');
    var d = rs.getPropertyValue('--content-back-days-num');
    if(parseInt(b) == 0 && parseInt(d) != 0){
        var back = 23;
        var front = b;
        flip_days();
    }  else if(parseInt(s) < parseInt(b)){
        var back = parseInt(b - 1);
        var front = parseInt(b);
    } 
    else {
        var back = parseInt(s - 2);
        var front = parseInt(s - 1);
    }
        
    if(back < 10) { 
    r.style.setProperty('--content-back-hours', "'0" + (back) + "'"); 
    }
    if(front < 10) { 
    r.style.setProperty('--content-front-hours', "'0"+ (front) + "'");
    }
    if(back >= 10) { 
        r.style.setProperty('--content-back-hours', "'" + (back) + "'");
    }
    if(front >= 10) { 
    r.style.setProperty('--content-front-hours', "'"+ (front) + "'");
    }
    r.style.setProperty('--content-back-hours-num', back);
    r.style.setProperty('--content-front-hours-num', front);
    
    cards[1].classList.remove("flip");
    front_cards[1].classList.remove("flip-h");
    bottom_cards[1].classList.remove("flip-h");
    void cards[1].offsetWidth;
    void front_cards[1].offsetWidth;
    void bottom_cards[1].offsetWidth;
    cards[1].classList.add("flip");
    front_cards[1].classList.add("flip-h");
    bottom_cards[1].classList.add("flip-h");
}

function flip_days() {
    var s = rs.getPropertyValue('--content-front-days-num');
    var b = rs.getPropertyValue('--content-back-days-num');
    var back = parseInt(s - 2);
    var front = parseInt(s - 1);
      
    if(back < 10) { 
    r.style.setProperty('--content-back-days', "'0" + (back) + "'"); 
    }
    if(front < 10) { 
    r.style.setProperty('--content-front-days', "'0"+ (front) + "'");
    }
    if(back >= 10) { 
        r.style.setProperty('--content-back-days', "'" + (back) + "'");
    }
    if(front >= 10) { 
    r.style.setProperty('--content-front-days', "'"+ (front) + "'");
    }
    r.style.setProperty('--content-back-days-num', back);
    r.style.setProperty('--content-front-days-num', front);
    
    cards[0].classList.remove("flip");
    front_cards[0].classList.remove("flip-d");
    bottom_cards[0].classList.remove("flip-d");
    void cards[0].offsetWidth;
    void front_cards[0].offsetWidth;
    void bottom_cards[0].offsetWidth;
    cards[0].classList.add("flip");
    front_cards[0].classList.add("flip-d");
    bottom_cards[0].classList.add("flip-d");
}

set_initial_value(r);
startCounting();








