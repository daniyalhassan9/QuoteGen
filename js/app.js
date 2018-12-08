let quotes = ["Life is about making an impact, not making an income. --Kevin Kruse",

    "Whatever the mind of man can conceive and believe, it can achieve. –Napoleon Hill",
    
    
    "Strive not to be a success, but rather to be of value. –Albert Einstein",
    
    "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.  –Robert Frost",
    
    "I attribute my success to this: I never gave or took any excuse. –Florence Nightingale"
    
    ]

// Generate number 0 to 4
let randNum = Math.floor(Math.random() * 5);

document.querySelector("button").addEventListener("click", myFunction);

function myFunction() {
    document.querySelector("p").innerHTML = quotes[randNum];
   
}