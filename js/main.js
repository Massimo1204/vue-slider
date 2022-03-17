

const app = new Vue({
    el : '#app',
    data : {
        counter : 0,
        images : [
            {
                url : 'https://getwallpapers.com/wallpaper/full/4/4/b/1178094-gorgerous-sweden-desktop-wallpaper-1920x1200-windows-10.jpg',
                title : 'Lake',
                description : "Tanti sassi, dell'acqua, un paio di case ed un cielo, rosa",
            },
            {
                url : 'https://getwallpapers.com/wallpaper/full/b/4/6/300928.jpg',
                title : 'Waterfall',
                description : "Molto verde e idrogeno e ossigeno soggetti impotenti alla gravità",
            },
            {
                url : 'https://www.bwallpaperhd.com/wp-content/uploads/2019/06/ManitobaSky.jpg',
                title : 'Thunder',
                description : "Può essere giorno e notte nello stesso momento? Sì, se c'è un fulmine di mezzo",
            },
            {
                url : 'https://getwallpapers.com/wallpaper/full/9/b/a/410201.jpg',
                title : 'Big Rock',
                description : "Voglio essere vostro schiavo e volare tra spazi stellati in catene",
            }, 
            {
                url : 'https://www.bwallpaperhd.com/wp-content/uploads/2019/07/SecondBeach.jpg',
                title : 'Wilson',
                description : "Bob, Wilson e un legno grosso su sassini piccini",
            }
        ],
    },
    
    methods : {
            swipePrevious (){
                if(this.counter>0 && this.counter<this.images.length){
                    this.counter--;
                }else if(this.counter <= 0){
                    this.counter = this.images.length-1;
                }
            },

            swipeNext(){
                if(this.counter>=0 && this.counter<this.images.length-1){
                    this.counter++;
                }else if(this.counter >= this.images.length-1){
                    this.counter = 0;
                }
            }
    }
})